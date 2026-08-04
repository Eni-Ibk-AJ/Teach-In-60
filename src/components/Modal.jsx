import { FiX } from 'react-icons/fi';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, children, ariaLabel }) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
}
