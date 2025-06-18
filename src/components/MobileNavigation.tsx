
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import WaitlistForm from "@/components/WaitlistForm";
import AppDownloadButton from "@/components/AppDownloadButton";
import TumaRideLogo from "@/components/TumaRideLogo";
import { Menu, Download, UserPlus, X } from "lucide-react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="lg:hidden flex items-center justify-between px-4 py-3 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <TumaRideLogo />
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <div className="flex flex-col space-y-6 mt-8">
            <div className="flex items-center justify-between">
             <img
                src="logo1.jpg"
                alt="TumaRide Logo"
                className="h-8 w-auto"
              />
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
              >
                How It Works
              </button>
              {/* <button
                onClick={() => scrollToSection('benefits')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('marketplace')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
              >
                Marketplace
              </button> */}
              <button
                onClick={() => scrollToSection('register')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2 transition-colors"
              >
                Register
              </button>
            </div>

            <div className="flex flex-col space-y-3 pt-4 border-t">
              <WaitlistForm>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Join Waitlist
                </Button>
              </WaitlistForm>
              
              <AppDownloadButton className="w-full bg-tumaride-gradient text-white hover:bg-tumaride-gradient-dark">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </AppDownloadButton>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavigation;
