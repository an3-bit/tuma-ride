import React from 'react';
import AppDownloadButton from "@/components/AppDownloadButton";

const MarketplaceSection = () => {
  return (
    <section className="py-20 bg-tumaride-gradient relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <div className="text-white space-y-10">
            
            {/* Movers Section */}
            <div>
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm mb-4">
                FOR MOVERS: TURN YOUR TRIPS INTO INCOME
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                A Marketplace Where Every Journey Earns
              </h2>
              <p className="text-lg text-green-100 mb-4">
                We connect people who are already moving with those that need things to move. Get paid while on your daily commute!
              </p>
            </div>

            {/* Senders Section */}
            <div>
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm mb-4">
                FOR SENDERS: MOVE ITEMS EFFORTLESSLY
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Send Anything, Anytime, Anywhere
              </h2>
              <p className="text-lg text-green-100 mb-4">
                Whether it's a package, documents, or groceries — TumaRide connects you with trusted movers already on the go. Save time and money with reliable local delivery.
              </p>
            </div>

            {/* Download Button */}
            <AppDownloadButton size="lg" className="bg-white text-tumaride-600 hover:bg-gray-100">
              Download TumaRide App
            </AppDownloadButton>
          </div>

          {/* Image Column */}
          <div>
            <img 
              src="tumaride5.jpeg" 
              alt="Kenya transport hub"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
