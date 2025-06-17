
import React from 'react';

interface TumaRideLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const TumaRideLogo = ({ className = '', size = 'md' }: TumaRideLogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 200 60" 
        className={`${sizeClasses[size]} w-auto`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="30" cy="30" r="25" fill="#22c55e" className="drop-shadow-md"/>
        
        {/* Car icon */}
        <g transform="translate(18, 20)">
          <path 
            d="M2 12h2l1-4h6l1 4h2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-1v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2H7v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2H2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2z" 
            fill="white"
          />
          <circle cx="5" cy="18" r="1.5" fill="white"/>
          <circle cx="11" cy="18" r="1.5" fill="white"/>
        </g>
        
        {/* TumaRide Text */}
        <text 
          x="65" 
          y="25" 
          fontSize="16" 
          fontWeight="bold" 
          fill="#1f2937"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Tuma
        </text>
        <text 
          x="65" 
          y="42" 
          fontSize="16" 
          fontWeight="bold" 
          fill="#22c55e"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Ride
        </text>
        
        {/* Tagline */}
        <text 
          x="130" 
          y="32" 
          fontSize="8" 
          fill="#6b7280"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Smart Delivery
        </text>
      </svg>
    </div>
  );
};

export default TumaRideLogo;
