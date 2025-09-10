'use client';

export const WarningIcon = ({ size = 21 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 21 20"
    fill="none"
    className="flex-shrink-0"
  >
    <g clipPath="url(#clip0_471_3542)">
      <path
        d="M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.5 7.34784 19.4464 4.8043 17.5711 2.92893C15.6957 1.05357 13.1522 0 10.5 0ZM11.5 16H9.5V14H11.5V16ZM11.5 12H9.5V4H11.5V12Z"
        fill="#FFA500"
      />
    </g>
    <defs>
      <clipPath id="clip0_471_3542">
        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
