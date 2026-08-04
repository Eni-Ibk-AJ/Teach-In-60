import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>Teach Me in 60 Seconds</p>
            <p className={styles.tagline}>
              Bite-sized lessons for the curious mind. Learn anything, one minute at a time.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Product</h4>
            <Link to="/dashboard">Lessons</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <a href="/#features">Features</a>
          </div>

          <div className={styles.column}>
            <h4>Topics</h4>
            <a href="/#topics">Science</a>
            <a href="/#topics">Programming</a>
            <a href="/#topics">Business</a>
          </div>

          <div className={styles.column}>
            <h4>Account</h4>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Teach Me in 60 Seconds. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
