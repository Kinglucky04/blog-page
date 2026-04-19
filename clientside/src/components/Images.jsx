import React from 'react'
import { Image } from '@imagekit/react';


function Images({ src, className, alt, w, h }) {
  return (
    <Image 
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URLENDPOINT} 
      src={src} 
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true , quality: 20}}
      width={w}
      height={h}
      transformation={[{
        width: w,
        height: h,
      },
    ]}
    />
  )
}

export default Images
