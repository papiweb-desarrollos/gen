import React from 'react';

interface CoffeeIconProps {
  className?: string;
}

export const CoffeeIcon: React.FC<CoffeeIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Coffee cup */}
      <path 
        d="M4 19h12c1.1 0 2-.9 2-2V8H4v9c0 1.1.9 2 2 2z" 
        fill="currentColor"
      />
      <path 
        d="M18 8h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Steam */}
      <path 
        d="M7 4c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1 1 .5 1 1z" 
        fill="currentColor"
        opacity="0.7"
      >
        <animate 
          attributeName="opacity" 
          values="0.3;0.7;0.3" 
          dur="2s" 
          repeatCount="indefinite"
        />
      </path>
      <path 
        d="M10 4c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1 1 .5 1 1z" 
        fill="currentColor"
        opacity="0.5"
      >
        <animate 
          attributeName="opacity" 
          values="0.2;0.6;0.2" 
          dur="2.5s" 
          repeatCount="indefinite"
        />
      </path>
      <path 
        d="M13 4c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1 1 .5 1 1z" 
        fill="currentColor"
        opacity="0.6"
      >
        <animate 
          attributeName="opacity" 
          values="0.4;0.8;0.4" 
          dur="1.8s" 
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
