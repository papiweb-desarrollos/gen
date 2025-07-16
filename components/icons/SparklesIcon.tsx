import React from 'react';

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.94 18.06 12 21l2.06-2.94" />
    <path d="M18.06 14.06 21 12l-2.94-2.06" />
    <path d="m3 12 2.94 2.06L3 16.12V7.88L5.94 9.94 3 12Z" />
    <path d="M14.06 5.94 12 3 9.94 5.94" />
    <path d="M12 12v0" />
  </svg>
);
