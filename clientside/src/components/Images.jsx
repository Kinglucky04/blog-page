import React from 'react'
import { Image } from '@imagekit/react';


function Images({ src, className, alt }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
    />
  );
}

export default Images
