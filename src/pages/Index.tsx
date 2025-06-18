import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import MoverRegistrationForm from "@/components/MoverRegistrationForm";
import SenderRegistrationForm from "@/components/SenderRegistrationForm";
import DesktopNavigation from "@/components/DesktopNavigation";
import MobileNavigation from "@/components/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <DesktopNavigation />
      <MobileNavigation />
      
      {/* Add top padding to account for fixed navigation */}
      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How TumaRide Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple steps to start earning or sending with TumaRide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">Register as a sender or mover</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <p className="text-gray-600">Match with people on your route</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn & Send</h3>
                <p className="text-gray-600">Complete deliveries safely</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <BenefitsSection />

        {/* Marketplace */}
        <MarketplaceSection />

        {/* Registration Section */}
        <section id="register" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Join TumaRide Today
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your role and start your journey with TumaRide
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div>
                <SenderRegistrationForm />
              </div>
              <div>
                <MoverRegistrationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">TumaRide</h3>
                <p className="text-gray-400 mb-4">
                  Monetize your movement. Connect people who need to send things with those who are already traveling.
                </p>
                <p className="text-sm text-gray-500">
                  Kila Safari Ina Thamani - Value in every stop
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                  <li><a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a></li>
                  <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 TumaRide. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
