'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import styles from './AdvancedImage.module.scss';

export const AdvancedImage = ({
  alt,
  src,
  height,
  width,
  className,
  ...props
}: ImageProps): React.JSX.Element => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={() => setImageLoading(false)}
      className={`${className} ${styles[imageLoading ? 'blur' : 'remove-blur']}`}
      {...props}
    />
  );
};
