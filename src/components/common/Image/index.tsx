import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import Image from 'next/image';
import StyledImage from '@/components/common/Image/style';

interface IAppImage {
  src: string;
  alt?: string;
  objectFit?: 'contain' | 'cover';
  className?: string;
}

const AppImage = forwardRef(
  ({ src, alt, objectFit, className }: IAppImage, ref) => {
    const imgRef: React.RefObject<HTMLDivElement> = useRef(null);

    useImperativeHandle(ref, () => imgRef.current, []);

    return (
      <StyledImage>
        <div className={`image-cont ${className}`} ref={imgRef}>
          <Image
            fill
            src={src}
            alt={alt || 'image'}
            className={`image ${objectFit}`}
            sizes="100%"
          />
        </div>
      </StyledImage>
    );
  },
);

AppImage.displayName = 'AppImage';

export default AppImage;
