import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={`${styles.page} animate-page-enter`}>
      <div className={styles.illustration} aria-hidden="true">🔍</div>
      <p className={styles.code} aria-hidden="true">404</p>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.desc}>
        Looks like this lesson doesn&apos;t exist. The page may have moved or the URL might be incorrect.
      </p>
      <Link to="/" className={styles.btn}>Back to Home</Link>
    </main>
  );
}
