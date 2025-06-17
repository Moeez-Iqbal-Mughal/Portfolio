import React from 'react';

const LottiePlayer = ({ src, width, height }) => {
  return (
    <dotlottie-player 
      src={src} 
      background="transparent" 
      speed="1" 
      style={{ width: width, height: height }} 
      loop 
      autoplay
    >
    </dotlottie-player>
  );
};

export default LottiePlayer;
