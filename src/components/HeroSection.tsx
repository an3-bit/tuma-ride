import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Download } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import LocationInput from "@/components/LocationInput";
import DateTimeSelector from "@/components/DateTimeSelector";
import AppDownloadButton from "@/components/AppDownloadButton";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("now");

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url("tumaride1.jpg")' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center animate-slide-in-left">
          
          {/* TumaRide Icon and Tagline */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-tumaride-gradient rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            
            <div className="text-left">
              <h1 className="text-xl font-bold text-green-700">TumaRide</h1>
              <p className="text-xs text-tumaride-600">Kila Safari Ina Thamani</p>
            </div>
           
              
          </div>
              {/* <img src="logo.jpg" alt="TumaRide Icon" className="w-14 h-14" />
              <svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg"> */}
  {/* <!-- Map Pin Icon with R -->
  <g transform="translate(8, 8)">
    <!-- Map pin shape -->
    <path d="M32 8 C42 8 50 16 50 26 C50 36 32 56 32 56 S14 36 14 26 C14 16 22 8 32 8 Z" 
          fill="#1E7E34"/>
    
    <!-- Inner white circle for R -->
    <circle cx="32" cy="26" r="12" fill="white"/>
    
    <!-- Letter R -->
    <g transform="translate(26, 20)">
      <path d="M2 2 L2 14 M2 2 L8 2 C10 2 10 4 10 5 C10 6 10 8 8 8 L2 8 M8 8 L10 14" 
            stroke="#1E7E34" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
  
  <!-- TumaRide Text -->
  <text x="80" y="35" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#1E7E34">
    TumaRide
  </text>
  
  <!-- Value in every stop text -->
  <text x="80" y="55" font-family="Arial, sans-serif" font-size="14" font-weight="normal" fill="#1E7E34">
    Value in every stop
  </text>
</svg> */}
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Monetize your Movement with TumaRide
          </h1>

          {/* Subheading */}
          <p className="text-lg mb-8 text-gray-600 max-w-xl">
            Whenever you're heading somewhere on public transport, earn money by helping others move things effortlessly.
          </p>

          {/* Waitlist Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 max-w-md w-full shadow-lg">
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
          <div className="max-w-md w-full mb-6">
            <AppDownloadButton className="w-full bg-tumaride-gradient text-white">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </AppDownloadButton>
          </div>

          {/* Footer Quote */}
          <p className="text-sm text-gray-500">
            Kila Safari Ina Thamani - Value in every stop
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
