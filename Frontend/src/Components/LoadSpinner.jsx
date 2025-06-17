import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-custom-5">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;