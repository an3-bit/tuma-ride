
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Truck } from "lucide-react";

interface MoverRegistrationData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  idNumber?: string;
  transportType: string;
  vehicleDetails?: string;
  licenseNumber?: string;
  preferredRoutes?: string;
  carryingCapacity?: string;
  experienceLevel: string;
  additionalInfo?: string;
}

interface MoverRegistrationFormProps {
  children: React.ReactNode;
}

const MoverRegistrationForm = ({ children }: MoverRegistrationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MoverRegistrationData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      idNumber: '',
      transportType: '',
      vehicleDetails: '',
      licenseNumber: '',
      preferredRoutes: '',
      carryingCapacity: '',
      experienceLevel: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: MoverRegistrationData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('movers')
        .insert([
          {
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            location: data.location,
            id_number: data.idNumber,
            transport_type: data.transportType,
            vehicle_details: data.vehicleDetails,
            license_number: data.licenseNumber,
            preferred_routes: data.preferredRoutes,
            carrying_capacity: data.carryingCapacity,
            experience_level: data.experienceLevel,
            additional_info: data.additionalInfo,
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you for your interest in TumaRide!",
        description: "We will notify you soon once the Mover app is live. Get ready to earn while you move!",
      });

      form.reset();
      setIsOpen(false);
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message || "Please try again later.",
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
            Join as Mover
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
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your ID number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transportType"
              rules={{ required: "Transport type is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transport Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your transport type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="matatu">Matatu</SelectItem>
                      <SelectItem value="bus">Bus</SelectItem>
                      <SelectItem value="boda_boda">Boda Boda</SelectItem>
                      <SelectItem value="taxi">Taxi</SelectItem>
                      <SelectItem value="private_car">Private Car</SelectItem>
                      <SelectItem value="tuk_tuk">Tuk Tuk</SelectItem>
                      <SelectItem value="walking">Walking</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vehicleDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Details (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Toyota Hiace, Blue color, Plate: KCA 123A" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="licenseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Driving License Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your driving license number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredRoutes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Routes (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Nairobi to Mombasa, Kisumu to Nakuru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="carryingCapacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Carrying Capacity (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Small packages only, Up to 10kg, Large items" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experienceLevel"
              rules={{ required: "Experience level is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience with Transport/Delivery</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="experienced">Experienced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us more about your transport experience..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register as Mover"}
              <Truck className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default MoverRegistrationForm;
