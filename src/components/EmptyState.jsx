import styles from './EmptyState.module.css';

export default function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className={styles.empty}>
      <div className={styles.illustration} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {actionLabel && onAction && (
        <button className={styles.action} onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
