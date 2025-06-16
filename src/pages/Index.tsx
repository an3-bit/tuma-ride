
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Smartphone, CreditCard, Users, Star, Clock, Shield, Zap, Download, Play, Send } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import LocationInput from "@/components/LocationInput";
import DateTimeSelector from "@/components/DateTimeSelector";
import AppDownloadButton from "@/components/AppDownloadButton";
import { useState } from "react";

const Index = () => {
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("now");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-tumaride-gradient rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TumaRide</h1>
              <p className="text-xs text-tumaride-600">Value in every stop</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <WaitlistForm destination={destination} selectedDate={selectedDate} selectedTime={selectedTime}>
              <Button className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                Join our waitlist
              </Button>
            </WaitlistForm>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
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

      {/* Marketplace Section */}
      <section className="py-20 bg-tumaride-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm mb-6">
                FOR MOVERS: TURN YOUR TRIPS INTO INCOME
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                A Marketplace Where Every Journey Earns
              </h2>
              <p className="text-xl text-green-100 mb-8">
                We connect people who are already moving with those that need things to move
              </p>
              <AppDownloadButton size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100">
                Download TumaRide App
              </AppDownloadButton>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&q=80" 
                alt="Kenya transport hub"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16">Key benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Earn</h3>
                <p className="text-gray-600 mb-6">
                  Earn extra money as you move—no bike or car required
                </p>
                <AppDownloadButton className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                  Get App
                </AppDownloadButton>
              </div>
              <div className="flex justify-end">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast</h3>
                <p className="text-gray-600 mb-6">
                  Receive instant payouts after successful trips.
                </p>
                <AppDownloadButton className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                  Get App
                </AppDownloadButton>
              </div>
              <div className="flex justify-end">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible</h3>
                <p className="text-gray-600 mb-6">
                  No fixed schedule—pick up orders whenever you need to move
                </p>
                <AppDownloadButton className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                  Get App
                </AppDownloadButton>
              </div>
              <div className="flex justify-end">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Paid to Move Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=600&q=80" 
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
            <Button size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Download className="w-5 h-5 mr-2" />
              Download TumaRide App
            </Button>
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
            <Button size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Smartphone className="w-5 h-5 mr-2" />
              Join Them Today
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=400&q=80" 
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
                <Button className="w-full bg-tumaride-gradient text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Start Earning
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-tumaride-500 to-tumaride-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=400&q=80" 
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
                <Button className="w-full bg-tumaride-gradient text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-tumaride-600">
                  Express
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Documents</h3>
                <p className="text-gray-600 mb-4">
                  A businessperson sends urgent documents via a verified matatu to Nairobi.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Mombasa → Nairobi
                </div>
                <Button className="w-full bg-tumaride-gradient text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
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
            <Button size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Play className="w-5 h-5 mr-2" />
              Experience TumaRide
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-tumaride-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-tumaride-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Verified Users</h3>
              <p className="text-gray-600 mb-6">All movers are verified for your safety and peace of mind</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">M-Pesa Integration</h3>
              <p className="text-gray-600 mb-6">Seamless payments through M-Pesa and other local options</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Real-Time Tracking</h3>
              <p className="text-gray-600 mb-6">Track your delivery in real-time from pickup to drop-off</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Try Now
              </Button>
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-tumaride-gradient rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">TumaRide</h3>
                  <p className="text-sm text-gray-400">Value in every stop</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting travelers and transforming journeys into income opportunities across Kenya.
              </p>
              <Button className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>

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
                <Button variant="outline" className="w-full justify-start border-gray-600 text-white hover:bg-gray-800">
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App Store
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-white hover:bg-gray-800">
                  <Play className="w-4 h-4 mr-2" />
                  Google Play Store
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TumaRide. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
