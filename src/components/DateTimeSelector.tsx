
import React from 'react';
import { Clock } from 'lucide-react';

interface DateTimeSelectorProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

const DateTimeSelector = ({ selectedDate, selectedTime, onDateChange, onTimeChange }: DateTimeSelectorProps) => {
  const today = new Date().toISOString().split('T')[0];
  const now = new Date().toTimeString().slice(0, 5);

  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'custom', label: 'Pick Date' },
  ];

  const timeOptions = [
    { value: 'now', label: 'Now' },
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
    { value: 'custom', label: 'Pick Time' },
  ];

  const handleDateSelect = (option: string) => {
    if (option === 'today') {
      onDateChange('Today');
    } else if (option === 'tomorrow') {
      onDateChange('Tomorrow');
    } else {
      onDateChange('Pick Date');
    }
  };

  const handleTimeSelect = (option: string) => {
    if (option === 'now') {
      onTimeChange('Now');
    } else if (option === 'morning') {
      onTimeChange('Morning (6-12 AM)');
    } else if (option === 'afternoon') {
      onTimeChange('Afternoon (12-6 PM)');
    } else if (option === 'evening') {
      onTimeChange('Evening (6-12 PM)');
    } else {
      onTimeChange('Pick Time');
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Date Selector */}
      <div className="relative">
        <select
          value={selectedDate}
          onChange={(e) => handleDateSelect(e.target.value)}
          className="w-full flex items-center space-x-2 bg-gray-50 p-3 rounded appearance-none cursor-pointer border-none outline-none"
        >
          {dateOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Clock className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Time Selector */}
      <div className="relative">
        <select
          value={selectedTime}
          onChange={(e) => handleTimeSelect(e.target.value)}
          className="w-full flex items-center space-x-2 bg-gray-50 p-3 rounded appearance-none cursor-pointer border-none outline-none"
        >
          {timeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Clock className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelector;
