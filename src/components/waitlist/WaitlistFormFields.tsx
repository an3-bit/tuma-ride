
import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { WaitlistFormData } from "./types";

interface WaitlistFormFieldsProps {
  control: Control<WaitlistFormData>;
}

const WaitlistFormFields = ({ control }: WaitlistFormFieldsProps) => {
  return (
    <>
      <FormField
        control={control}
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
        control={control}
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
        control={control}
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
        control={control}
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
        control={control}
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
    </>
  );
};

export default WaitlistFormFields;
