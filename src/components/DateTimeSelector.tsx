
import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface DateTimeSelectorProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

const DateTimeSelector = ({ selectedDate, selectedTime, onDateChange, onTimeChange }: DateTimeSelectorProps) => {
  const [date, setDate] = useState<Date>();
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  const timeOptions = [
    { value: 'now', label: 'Now' },
    { value: '06:00', label: '6:00 AM' },
    { value: '07:00', label: '7:00 AM' },
    { value: '08:00', label: '8:00 AM' },
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '18:00', label: '6:00 PM' },
  ];

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      onDateChange(format(selectedDate, "PPP"));
    }
    setIsDateOpen(false);
  };

  const handleTimeSelect = (time: string, label: string) => {
    onTimeChange(label);
    setIsTimeOpen(false);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Date Selector */}
      <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal bg-gray-50 border-none hover:bg-gray-100",
              !date && "text-muted-foreground"
            )}
          >
            <Calendar className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Today</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
            className="pointer-events-auto"
          />
        </PopoverContent>
      </Popover>

      {/* Time Selector */}
      <Popover open={isTimeOpen} onOpenChange={setIsTimeOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal bg-gray-50 border-none hover:bg-gray-100"
          >
            <Clock className="mr-2 h-4 w-4" />
            {selectedTime || 'Now'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="max-h-60 overflow-y-auto">
            {timeOptions.map((option) => (
              <Button
                key={option.value}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleTimeSelect(option.value, option.label)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateTimeSelector;
