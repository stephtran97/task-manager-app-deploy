import React from 'react';

const AddUserIcon = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24">
      <g fill="currentColor" fillRule="evenodd">
        <rect x={18} y={5} width={2} height={6} rx={1} />
        <rect x={16} y={7} width={6} height={2} rx={1} />
        <path d="M5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z" />
        <circle cx={11} cy={7} r={4} />
      </g>
    </svg>
  );
};

export default AddUserIcon;
