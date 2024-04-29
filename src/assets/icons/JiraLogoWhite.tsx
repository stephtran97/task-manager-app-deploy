import React from 'react';

const JiraLogoWhite = () => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6105 28C17.931 25.6795 17.931 21.9005 15.6105 19.5469L7.82045 11.79L4.27348 15.337C3.90884 15.7016 3.90884 16.2983 4.27348 16.6961L15.6105 28Z"
        fill="white"
      />
      <path
        d="M26.9473 15.337L15.6105 4L15.5773 4.03315C13.2569 6.35359 13.2901 10.1326 15.6105 12.453L23.4004 20.2099L26.9473 16.663C27.312 16.2983 27.312 15.7016 26.9473 15.337Z"
        fill="white"
      />
      <path
        d="M15.6105 12.4531C13.2901 10.1326 13.2901 6.35364 15.5774 4.0332L7.48901 12.1216L11.699 16.3315L15.6105 12.4531Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M19.4888 15.6685L15.6104 19.5469C17.9308 21.8673 17.9308 25.6463 15.6104 27.9999L23.6988 19.9115L19.4888 15.6685Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="15.4374"
          y1="8.41486"
          x2="10.5381"
          y2="13.3141"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0680226" stopColor="white" stopOpacity="0.4" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="15.9346"
          y1="23.4582"
          x2="21.2996"
          y2="18.0931"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0680226" stopColor="white" stopOpacity="0.4" />
          <stop offset="0.9077" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default JiraLogoWhite;
