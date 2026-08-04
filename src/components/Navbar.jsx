import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiBell } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import styles from './Navbar.module.css';

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>60</span>
          Teach Me in 60s
        </Link>

        <div className={styles.navLinks}>
          <NavLink to="/" end className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Home
          </NavLink>
          <a href="/#features" className={styles.navLink}>Features</a>
          <a href="/#topics" className={styles.navLink}>Topics</a>
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link to="/login" className={`${styles.authBtn} ${styles.loginBtn}`}>Login</Link>
          <Link to="/signup" className={`${styles.authBtn} ${styles.signupBtn}`}>Sign Up</Link>
          <button
            className={styles.menuBtn}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <Link to="/" className={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
          <a href="/#features" className={styles.mobileLink} onClick={() => setOpen(false)}>Features</a>
          <a href="/#topics" className={styles.mobileLink} onClick={() => setOpen(false)}>Topics</a>
          <Link to="/login" className={styles.mobileLink} onClick={() => setOpen(false)}>Login</Link>
          <Link to="/signup" className={styles.mobileLink} onClick={() => setOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export function DashboardNavbar({ search, onSearchChange }) {
  const { user } = useAuth();

  return (
    <nav className={`${styles.navbar} ${styles.dashboardNav}`} aria-label="Dashboard navigation">
      <div className={`${styles.inner} ${styles.dashboardInner}`}>
        <Link to="/dashboard" className={styles.logo}>
          <span className={styles.logoIcon}>60</span>
          <span className="sr-only">Teach Me in 60s Dashboard</span>
        </Link>

        <div className={styles.searchArea}>
          <SearchBar
            value={search}
            onChange={onSearchChange}
            placeholder="Search lessons..."
            ariaLabel="Search lessons"
          />
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <button className={styles.notifBtn} aria-label="Notifications">
            <FiBell />
            <span className={styles.notifDot} aria-hidden="true" />
          </button>
          <Link to="/profile" aria-label="Profile">
            <img
              src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=guest'}
              alt=""
              className={styles.avatar}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function AppNavbar() {
  const { user } = useAuth();

  return (
    <nav className={styles.navbar} aria-label="App navigation">
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>60</span>
          Teach Me in 60s
        </Link>

        <div className={styles.navLinks}>
          <NavLink to="/dashboard" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Dashboard
          </NavLink>
          <NavLink to="/bookmarks" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Bookmarks
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Profile
          </NavLink>
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link to="/profile" aria-label="Profile">
            <img
              src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=guest'}
              alt=""
              className={styles.avatar}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
