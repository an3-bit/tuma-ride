import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Smartphone, CreditCard, Users, Star, Clock, Shield, Zap, Download, Play, Send, Menu, X } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import AppDownloadButton from "@/components/AppDownloadButton";
import SenderRegistrationForm from "@/components/SenderRegistrationForm";
import MoverRegistrationForm from "@/components/MoverRegistrationForm";
import HeroSection from "@/components/HeroSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import BenefitsSection from "@/components/BenefitsSection";
import TumaRideLogo from "@/components/TumaRideLogo";
import { useState } from "react";

const Index = () => {
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("now");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="logo1.jpg" alt="TumaRide Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <WaitlistForm destination={destination} selectedDate={selectedDate} selectedTime={selectedTime}>
              <Button className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                Join our waitlist
              </Button>
            </WaitlistForm>
            <SenderRegistrationForm>
              <Button className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                <Smartphone className="w-5 h-5 mr-2" />
                Download Sender App
              </Button>
            </SenderRegistrationForm>
            <MoverRegistrationForm>
              <Button className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                <Smartphone className="w-5 h-5 mr-2" />
                Download Mover App
              </Button>
            </MoverRegistrationForm>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 animate-slide-in-right" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                <WaitlistForm destination={destination} selectedDate={selectedDate} selectedTime={selectedTime}>
                  <Button className="w-full bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                    Join our waitlist
                  </Button>
                </WaitlistForm>
                <SenderRegistrationForm>
                  <Button className="w-full bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download Sender App
                  </Button>
                </SenderRegistrationForm>
                <MoverRegistrationForm>
                  <Button className="w-full bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download Mover App
                  </Button>
                </MoverRegistrationForm>
                {/* Add any other relevant navigation links here */}
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">How It Works</a>
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">Safety</a>
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">Pricing</a>
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">Support</a>
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">About Us</a>
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">Careers</a>
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">Blog</a>
                <a href="#" className="text-gray-700 hover:text-tumaride-600 py-2">Contact</a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Marketplace Section */}
      <MarketplaceSection />

      {/* Key Benefits Section */}
      <BenefitsSection />

      {/* Get Paid to Move Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="tumaride4.jpeg"
                alt="Public transport in Kenya"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get Paid to Move. No Extra Effort Needed.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Already going somewhere? Get matched with small delivery requests along your route and earn
              </p>
              <AppDownloadButton size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                Download TumaRide App
              </AppDownloadButton>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">How it works</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-tumaride-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sign up & Verify</h3>
                <p className="text-gray-600">Join our community with quick KYC verification.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-tumaride-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get Matched</h3>
                <p className="text-gray-600">Receive package requests that align with your daily route.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-tumaride-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pick Up & Drop Off</h3>
                <p className="text-gray-600">Earn money just by moving naturally.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-tumaride-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Payouts</h3>
                <p className="text-gray-600">Withdraw earnings easily after each successful trip.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <AppDownloadButton size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Download className="w-5 h-5 mr-2" />
              Download TumaRide App
            </AppDownloadButton>
          </div>
        </div>
      </section>

      {/* Real-Life Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              See how TumaRide is transforming lives across Kenya
            </p>
            <AppDownloadButton size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Smartphone className="w-5 h-5 mr-2" />
              Join Them Today
            </AppDownloadButton>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                <img
                  src="university_student.jpg"
                  alt="University student"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-tumaride-600">
                  KES 500
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Student Journey</h3>
                <p className="text-gray-600 mb-4">
                  A university student heading home from Nairobi to Eldoret carries a parcel and earns KES 500.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Nairobi → Eldoret
                </div>
                <AppDownloadButton className="w-full bg-tumaride-gradient text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Start Earning
                </AppDownloadButton>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-tumaride-500 to-tumaride-600 relative">
                <img
                  src="boda.jpg"
                  alt="Boda rider"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-tumaride-600">
                  Daily Income
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Boda Rider</h3>
                <p className="text-gray-600 mb-4">
                  A boda rider in Kisumu delivers groceries within town and earns more daily.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Within Kisumu
                </div>
                <AppDownloadButton className="w-full bg-tumaride-gradient text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </AppDownloadButton>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">


              <CardContent className="p-6">

                <img
                  src="tumaride5.jpeg"
                  alt="Business documents"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Documents</h3>
                <p className="text-gray-600 mb-4">
                  A businessperson sends urgent documents via a verified matatu to Nairobi.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Mombasa → Nairobi
                </div>
                <AppDownloadButton className="w-full bg-tumaride-gradient text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Get Started
                </AppDownloadButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why use TumaRide?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Built for the African context with features that matter
            </p>
            <AppDownloadButton size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Play className="w-5 h-5 mr-2" />
              Experience TumaRide
            </AppDownloadButton>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-tumaride-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-tumaride-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Verified Users</h3>
              <p className="text-gray-600 mb-6">All movers are verified for your safety and peace of mind</p>
              <AppDownloadButton variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </AppDownloadButton>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">M-Pesa Integration</h3>
              <p className="text-gray-600 mb-6">Seamless payments through M-Pesa and other local options</p>
              <AppDownloadButton variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Get Started
              </AppDownloadButton>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Real-Time Tracking</h3>
              <p className="text-gray-600 mb-6">Track your delivery in real-time from pickup to drop-off</p>
              <AppDownloadButton variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Try Now
              </AppDownloadButton>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-tumaride-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of Kenyans already earning with TumaRide. Download the app today and start your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <AppDownloadButton size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                Download on App Store
              </AppDownloadButton>
              <AppDownloadButton size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Get it on Google Play
              </AppDownloadButton>
            </div>
            <p className="text-green-200">Available for iOS and Android devices</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="logo1.jpg" alt="TumaRide Logo" className="h-10 w-auto" />

              </div>
              <p className="text-gray-400 mb-6">
                Connecting travelers and transforming journeys into income opportunities across Kenya.
              </p>
              <AppDownloadButton className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </AppDownloadButton>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">App</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Download TumaRide</h4>
              <div className="space-y-3">
                <AppDownloadButton variant="outline" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App Store
                </AppDownloadButton>
                <AppDownloadButton variant="outline" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Google Play Store
                </AppDownloadButton>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TumaRide. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;