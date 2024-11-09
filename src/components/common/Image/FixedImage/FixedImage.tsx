import React from 'react';
import Image, { ImageProps } from 'next/image';

const FixedImage: React.FC<ImageProps> = ({ className = '', ...props }) => {
  return <Image className={className} {...props} />;
};

export default FixedImage;
