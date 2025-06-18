
import React from 'react';
import { MapPin, Clock } from "lucide-react";

interface PreferencesDisplayProps {
  destination?: string;
  selectedDate?: string;
  selectedTime?: string;
}

const PreferencesDisplay = ({ destination, selectedDate, selectedTime }: PreferencesDisplayProps) => {
  if (!destination && !selectedDate && !selectedTime) {
    return null;
  }

  return (
    <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-sm">
      <p className="font-medium text-gray-700">Your preferences:</p>
      {destination && (
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>{destination}</span>
        </div>
      )}
      {(selectedDate || selectedTime) && (
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span>{selectedDate} {selectedTime}</span>
        </div>
      )}
    </div>
  );
};

export default PreferencesDisplay;
