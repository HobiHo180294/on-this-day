import { Children } from '@/shared/types/globals';
import { ImageProps } from 'next/image';

export interface ModalProps extends Children {
  icon: {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
  };
  isOpen: boolean;
  onClose?: VoidFunction;
}
