import React from 'react';

export default function DotLoader() {
  return (
    <div className="flex items-center justify-center h-screen text-custom-white">
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-t-transparent align-[-0.125em] text-custom-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect text-white">
          Loading...
        </span>
      </div>
    </div>
  );
}
