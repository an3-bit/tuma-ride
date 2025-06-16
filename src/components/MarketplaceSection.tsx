
import React from 'react';
import AppDownloadButton from "@/components/AppDownloadButton";

const MarketplaceSection = () => {
  return (
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
  );
};

export default MarketplaceSection;
