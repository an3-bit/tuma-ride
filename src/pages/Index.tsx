
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Smartphone, CreditCard, Users, Star, Clock, Shield, Zap, Download, Play } from "lucide-react";

const Index = () => {
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
            <Button className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-tumaride-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Monetize your Movement with TumaRide
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-green-100">
                Kila Safari Ina Thamani
              </p>
              <p className="text-lg mb-8 text-green-100 max-w-lg">
                Transform every journey into an earning opportunity. Connect with travelers and deliver items across Kenya with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Get it on Google Play
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tumaride-600 text-lg px-8 py-3">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download on App Store
                </Button>
              </div>
              <p className="text-sm text-green-200 mt-4">Available on iOS and Android</p>
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

      {/* App Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              A New Perspective on Peer-to-Peer Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Experience seamless delivery connections across Kenya with our mobile app
            </p>
            <Button size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Download className="w-5 h-5 mr-2" />
              Download TumaRide App
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&q=80" 
                alt="Kenya transport hub"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tumaride-600 mb-2">1000+</div>
                  <div className="text-gray-600">Active Movers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tumaride-600 mb-2">5000+</div>
                  <div className="text-gray-600">Deliveries Made</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tumaride-600 mb-2">50+</div>
                  <div className="text-gray-600">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tumaride-600 mb-2">4.8★</div>
                  <div className="text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Simple steps to start earning or getting your items delivered
            </p>
            <Button size="lg" className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              <Play className="w-5 h-5 mr-2" />
              Download & Get Started
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Step Cards */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Download App</h3>
              <p className="text-gray-600 mb-6">Get TumaRide from your app store and create your account</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Get App
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tumaride-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-tumaride-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Set Your Route</h3>
              <p className="text-gray-600 mb-6">Post your delivery request or set your travel route</p>
              <Button variant="outline" className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                Start Journey
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Earn Money</h3>
              <p className="text-gray-600 mb-6">Complete deliveries and get paid instantly via M-Pesa</p>
              <Button variant="outline" className="w-full">
                <CreditCard className="w-4 h-4 mr-2" />
                Get Paid
              </Button>
            </Card>
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
              <Button size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                Download on App Store
              </Button>
              <Button size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Get it on Google Play
              </Button>
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
