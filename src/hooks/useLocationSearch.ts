
import { useState, useEffect } from 'react';

interface Location {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
}

export const useLocationSearch = () => {
  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setLocations([]);
      return;
    }

    const searchLocations = async () => {
      setIsLoading(true);
      try {
        // Using Nominatim (OpenStreetMap) API for location search
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ke&limit=5`
        );
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Location search error:', error);
        setLocations([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchLocations, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return {
    query,
    setQuery,
    locations,
    isLoading,
  };
};
