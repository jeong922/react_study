import React from 'react';

export default function Loading({ width, height }) {
  return (
    <div className='flex items-center justify-center'>
      <div
        className={`w-${width} h-${height} border-4 border-solid rounded-full border-rose-200`}
      ></div>
      <div
        className={`w-${width} h-${height} absolute border-t-4 border-b-4 border-l-4 border-r-4 border-white border-solid rounded-full border-l-transparent border-r-transparent border-t-white animate-spin`}
      ></div>
    </div>
  );
}
