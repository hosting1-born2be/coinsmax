'use client';

export const CsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <g clipPath="url(#clip0)">
      <mask
        id="mask"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path
          d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask)">
        <rect x="0" y="0" width="18" height="9" fill="#FFFFFF" />
        <rect x="0" y="9" width="18" height="9" fill="#D80027" />
        <polygon points="0,0 9,9 0,18" fill="#11457E" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
