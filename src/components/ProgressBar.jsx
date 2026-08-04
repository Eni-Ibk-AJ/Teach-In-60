import styles from './ProgressBar.module.css';

export default function ProgressBar({ value = 0, label }) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={styles.progress}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label || 'Progress'}
    >
      <div className={styles.bar} style={{ width: `${clamped}%` }} />
    </div>
  );
}
