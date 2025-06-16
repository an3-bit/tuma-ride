
import React from 'react';
import { Card } from "@/components/ui/card";
import { CreditCard, Zap, Clock } from "lucide-react";
import AppDownloadButton from "@/components/AppDownloadButton";

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
