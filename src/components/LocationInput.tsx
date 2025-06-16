
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { useLocationSearch } from '@/hooks/useLocationSearch';
import { Button } from "@/components/ui/button";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const LocationInput = ({ value, onChange, placeholder = "Where are you going?" }: LocationInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { query, setQuery, locations, isLoading } = useLocationSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value, setQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setQuery(newValue);
    setIsOpen(true);
  };

  const handleLocationSelect = (location: any) => {
    const locationName = location.display_name.split(',')[0];
    onChange(locationName);
    setIsOpen(false);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // For demo purposes, we'll just show coordinates
          onChange(`Current Location (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`);
        },
        (error) => {
          console.error('Error getting location:', error);
          onChange('Unable to get current location');
        }
      );
    } else {
      onChange('Geolocation not supported');
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border-none">
        <Search className="w-5 h-5 text-gray-400 mr-3" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="flex-1 border-none outline-none text-gray-900 placeholder-gray-500 bg-transparent"
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={getCurrentLocation}
          className="text-tumaride-600 hover:text-tumaride-700 p-1"
        >
          <MapPin className="w-4 h-4" />
        </Button>
      </div>

      {isOpen && (query.length >= 3) && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-48 overflow-y-auto"
        >
          {isLoading ? (
            <div className="p-3 text-gray-500 text-sm">Searching...</div>
          ) : locations.length > 0 ? (
            locations.map((location) => (
              <button
                key={location.place_id}
                onClick={() => handleLocationSelect(location)}
                className="w-full text-left p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{location.display_name}</span>
                </div>
              </button>
            ))
          ) : (
            <div className="p-3 text-gray-500 text-sm">No locations found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
