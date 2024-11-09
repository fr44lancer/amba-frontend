import React from 'react';
import Image, { ImageProps } from 'next/image';

const MainImage: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      className={`relative block ${className ?? ''}`}
      quality={100}
      sizes="100%"
      {...props}
    />
  );
};

export default MainImage;
