
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import LocationInput from "@/components/LocationInput";
import DateTimeSelector from "@/components/DateTimeSelector";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("now");

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1200&q=80")'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Monetize your Movement with TumaRide
            </h1>
            <p className="text-lg mb-8 text-gray-600 max-w-lg">
              Whenever you're heading somewhere on public transport, earn money by helping others move things effortlessly.
            </p>
            
            {/* Enhanced Waitlist Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 max-w-md shadow-lg">
              <div className="space-y-4">
                <LocationInput
                  value={destination}
                  onChange={setDestination}
                  placeholder="Where are you going?"
                />
                <DateTimeSelector
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateChange={setSelectedDate}
                  onTimeChange={setSelectedTime}
                />
              </div>
              <WaitlistForm destination={destination} selectedDate={selectedDate} selectedTime={selectedTime}>
                <Button className="w-full mt-4 bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                  Join our waitlist
                </Button>
              </WaitlistForm>
            </div>
            
            <p className="text-sm text-gray-500">
              Kila Safari Ina Thamani - Value in every stop
            </p>
          </div>
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80" 
                alt="African transportation"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-tumaride-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
