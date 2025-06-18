
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import WaitlistFormFields from "./WaitlistFormFields";
import PreferencesDisplay from "./PreferencesDisplay";
import { WaitlistFormData, WaitlistFormProps } from "./types";

const WaitlistFormContainer = ({
  children,
  destination,
  selectedDate,
  selectedTime,
}: WaitlistFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WaitlistFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      expectedUse: '',
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);

    try {
      const waitlistData = {
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        location: data.location,
        expected_use: data.expectedUse || null,
        destination: destination || null,
        preferred_date: selectedDate || null,
        preferred_time: selectedTime || null,
      };

      console.log('Submitting waitlist data:', waitlistData);

      const { error } = await supabase
        .from('waitlist')
        .insert([waitlistData]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast({
        title: "Thank you for your interest!",
        description: "We will notify you once the app is done. Welcome to TumaRide!",
      });

      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-screen overflow-y-auto scrollbar-thin p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900">
            Join TumaRide Waitlist
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <WaitlistFormFields control={form.control} />

            <PreferencesDisplay
              destination={destination}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            />

            <Button
              type="submit"
              className="w-full bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistFormContainer;
