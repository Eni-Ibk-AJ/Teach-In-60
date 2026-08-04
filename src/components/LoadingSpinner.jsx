import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner({ label = 'Loading...' }) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={styles.spinner} aria-hidden="true" />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
