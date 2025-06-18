
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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Clock, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  expectedUse: string;
}

interface WaitlistFormProps {
  children: React.ReactNode;
  destination?: string;
  selectedDate?: string;
  selectedTime?: string;
}

const WaitlistForm = ({
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
            <FormField
              control={form.control}
              name="fullName"
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., +254 700 000 000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              rules={{ required: "Location is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Nairobi, Kenya" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expectedUse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How do you plan to use TumaRide? (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us how you'd like to use TumaRide..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(destination || selectedDate || selectedTime) && (
              <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-sm">
                <p className="font-medium text-gray-700">Your preferences:</p>
                {destination && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{destination}</span>
                  </div>
                )}
                {(selectedDate || selectedTime) && (
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{selectedDate} {selectedTime}</span>
                  </div>
                )}
              </div>
            )}

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

export default WaitlistForm;
