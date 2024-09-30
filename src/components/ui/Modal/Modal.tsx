import closeIcon from '@/public/close-ico.svg';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import React, { useRef } from 'react';
import ReactModal from 'react-modal';
import { AdvancedImage } from '../AdvancedImage/AdvancedImage';
import { ModalProps } from './Modal.interface';
import styles from './Modal.module.scss';

export const Modal = ({
  icon,
  isOpen,
  onClose,
  children,
}: ModalProps): React.JSX.Element => {
  const reactModalRef = useRef<ReactModal>(null);

  return (
    <ReactModal
      className={styles.modal__content}
      overlayClassName={styles.modal__overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      closeTimeoutMS={1000}
      shouldCloseOnOverlayClick
      preventScroll
      onRequestClose={onClose}
      onAfterOpen={() =>
        disableBodyScroll(
          reactModalRef.current?.portal?.overlay as HTMLElement,
          { reserveScrollBarGap: true, allowTouchMove: () => false }
        )
      }
      onAfterClose={() => clearAllBodyScrollLocks()}
      ref={reactModalRef}
      data-testid="modal"
    >
      {onClose && (
        <button type="button" onClick={onClose} className={styles.modal__close}>
          <AdvancedImage src={closeIcon} alt="Close Modal" />
        </button>
      )}
      <div>
        <AdvancedImage src={icon.src} alt={icon.alt} />
      </div>
      {children}
    </ReactModal>
  );
};
