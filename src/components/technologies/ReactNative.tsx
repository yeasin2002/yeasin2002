import React from 'react';

export default function ReactNative({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_react_native)">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          stroke="#61DAFB"
          strokeWidth="1"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          stroke="#61DAFB"
          strokeWidth="1"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          stroke="#61DAFB"
          strokeWidth="1"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </g>
      <defs>
        <clipPath id="clip0_react_native">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
