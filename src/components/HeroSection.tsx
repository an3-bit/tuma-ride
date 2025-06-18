
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import LocationInput from "@/components/LocationInput";
import DateTimeSelector from "@/components/DateTimeSelector";
import AppDownloadButton from "@/components/AppDownloadButton";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("now");

  return (
    <section className="py-12 lg:py-20 xl:py-32 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url("tumaride1.jpg")' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center animate-slide-in-left">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-green-700">
            Monetize your Movement with TumaRide
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-green-700 max-w-xl px-4">
            Whenever you're heading somewhere on public transport, earn money by helping others move things effortlessly.
          </p>

          {/* Waitlist Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-6 max-w-md w-full mx-4 shadow-lg">
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

            <WaitlistForm
              destination={destination}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            >
              <Button className="w-full mt-4 bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                Join our waitlist
              </Button>
            </WaitlistForm>
          </div>

          {/* Download App Button */}
          <div className="max-w-md w-full mb-6 px-4">
            <AppDownloadButton className="w-full bg-tumaride-gradient text-white">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </AppDownloadButton>
          </div>

          {/* Footer Quote */}
          <p className="text-sm sm:text-base text-green-700 mt-6 px-4">
            Kila Safari Ina Thamani - Value in every stop
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
