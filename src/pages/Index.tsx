
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Smartphone, CreditCard, Users, Star, Clock, Shield, Zap } from "lucide-react";

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
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-tumaride-600 transition-colors">How It Works</a>
            <a href="#examples" className="text-gray-600 hover:text-tumaride-600 transition-colors">Examples</a>
            <a href="#about" className="text-gray-600 hover:text-tumaride-600 transition-colors">About</a>
            <Button className="bg-tumaride-gradient hover:bg-tumaride-gradient-dark text-white">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-tumaride-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-in-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforming movement into an income opportunity
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-green-100">
                Kila Safari Ina Thamani
              </p>
              <p className="text-lg mb-8 text-green-100 max-w-lg">
                Connect with travelers already on your route. Turn every journey into an earning opportunity across Kenya and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download App
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tumaride-600 text-lg px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80" 
                alt="African transportation"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-tumaride-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Movers</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-tumaride-600 mb-2">5000+</div>
              <div className="text-gray-600">Deliveries Made</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-tumaride-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-tumaride-600 mb-2">4.8★</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start earning or getting your items delivered
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Senders */}
            <div className="animate-slide-in-left">
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">For Senders</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Open the app or web platform</h4>
                      <p className="text-gray-600">Quick and easy access from any device</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Post delivery request</h4>
                      <p className="text-gray-600">Item details, pickup, drop-off, and deadline</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Choose your mover</h4>
                      <p className="text-gray-600">Based on price, route, and rating</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pay securely</h4>
                      <p className="text-gray-600">Via M-Pesa or card payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* For Movers */}
            <div className="animate-slide-in-right">
              <div className="bg-tumaride-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-tumaride-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">For Movers</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-tumaride-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Set your route</h4>
                      <p className="text-gray-600">e.g., Nairobi → Kisumu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-tumaride-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Get matched</h4>
                      <p className="text-gray-600">With items needing delivery along your path</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-tumaride-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Accept and deliver</h4>
                      <p className="text-gray-600">Complete the delivery safely</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-tumaride-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Get paid instantly</h4>
                      <p className="text-gray-600">Via M-Pesa upon delivery confirmation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Life Examples Section */}
      <section id="examples" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Real-Life Examples</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how TumaRide is transforming lives across Kenya
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
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
                  A university student heading home from Nairobi to Eldoret carries a parcel for someone and earns KES 500.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  Nairobi → Eldoret
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
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
                  A boda rider in Kisumu delivers groceries within town and earns more daily through multiple deliveries.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  Within Kisumu
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-tumaride-600">
                  Express
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Documents</h3>
                <p className="text-gray-600 mb-4">
                  A businessperson in Mombasa sends urgent documents to a client via a verified matatu headed to Nairobi.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  Mombasa → Nairobi
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose TumaRide?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for the African context with features that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-tumaride-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-tumaride-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Users</h3>
              <p className="text-gray-600">All movers are verified for your safety and peace of mind</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">M-Pesa Integration</h3>
              <p className="text-gray-600">Seamless payments through M-Pesa and other local options</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Track your delivery in real-time from pickup to drop-off</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rating System</h3>
              <p className="text-gray-600">Rate and review to build trust in our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                Download on App Store
              </Button>
              <Button size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                Get it on Google Play
              </Button>
            </div>
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
              <p className="text-gray-400">
                Connecting travelers and transforming journeys into income opportunities across Kenya.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
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
              <h4 className="text-lg font-bold mb-4">Download</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-600 text-white hover:bg-gray-800">
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App Store
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-white hover:bg-gray-800">
                  <Smartphone className="w-4 h-4 mr-2" />
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
