
import React from 'react';
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";
import AppDownloadButton from "@/components/AppDownloadButton";
import TumaRideLogo from "@/components/TumaRideLogo";
import { Download, UserPlus, Truck } from "lucide-react";
import BenefitsSection from './BenefitsSection';

const DesktopNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:flex items-center justify-between px-6 py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-2">
        <img
          src="logo1.jpg"
          alt="TumaRide Logo"
          className="h-8 w-auto"
        />
      </div>
      
      <div className="flex items-center space-x-8">
        <button
          onClick={() => scrollToSection('how-it-works')}
          className="text-gray-700 hover:text-green-600 font-medium transition-colors"
        >
          How It Works
        </button>
        {/* <button
          onClick={() => scrollToSection('BenefitsSection')}
          className="text-gray-700 hover:text-green-600 font-medium transition-colors"
        >
          Benefits
        </button>
        <button
          onClick={() => scrollToSection('marketplace')}
          className="text-gray-700 hover:text-green-600 font-medium transition-colors"
        >
          Marketplace
        </button> */}
        <button
          onClick={() => scrollToSection('register')}
          className="text-gray-700 hover:text-green-600 font-medium transition-colors"
        >
          Register
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <WaitlistForm>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            <UserPlus className="w-4 h-4 mr-2" />
            Join Waitlist
          </Button>
        </WaitlistForm>
        
        <AppDownloadButton className="bg-tumaride-gradient text-white hover:bg-tumaride-gradient-dark">
          <Download className="w-4 h-4 mr-2" />
          Download App
        </AppDownloadButton>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
