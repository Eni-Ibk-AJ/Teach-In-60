import { Link, useNavigate } from 'react-router-dom';
import { AppNavbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { useBookmarkContext } from '../context/BookmarkContext';
import { useTheme } from '../context/ThemeContext';
import styles from './Profile.module.css';

const ACHIEVEMENTS = [
  { id: 'first', icon: '🎯', name: 'First Lesson', desc: 'Complete your first lesson', check: (s) => s.completed >= 1 },
  { id: 'five', icon: '🔥', name: 'On a Roll', desc: 'Complete 5 lessons', check: (s) => s.completed >= 5 },
  { id: 'streak3', icon: '⚡', name: '3-Day Streak', desc: 'Learn 3 days in a row', check: (s) => s.streak >= 3 },
  { id: 'bookmark', icon: '🔖', name: 'Collector', desc: 'Save 3 bookmarks', check: (s) => s.bookmarks >= 3 },
];

export default function Profile() {
  const { user, logout, isAuthenticated } = useAuth();
  const { completed, streak } = useProgress();
  const { bookmarks } = useBookmarkContext();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const stats = {
    completed: completed.length,
    bookmarks: bookmarks.length,
    streak: streak.count,
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`${styles.page} animate-page-enter`}>
      <AppNavbar />

      <main className={styles.main}>
        <header className={styles.profileHeader}>
          <div>
            <h1 className={styles.name}>{user?.name || 'Guest Learner'}</h1>
            <p className={styles.email}>{user?.email || 'Not signed in'}</p>
            {!isAuthenticated && (
              <span className={styles.guestBadge}>
                <Link to="/login">Log in</Link> to sync your progress
              </span>
            )}
          </div>
        </header>

        <div className={styles.stats}>
          <div className={styles.stat} style={{ animationDelay: '0.1s' }}>
            <div className={styles.statValue}>{stats.completed}</div>
            <div className={styles.statLabel}>Lessons Completed</div>
          </div>
          <div className={styles.stat} style={{ animationDelay: '0.2s' }}>
            <div className={styles.statValue}>{stats.bookmarks}</div>
            <div className={styles.statLabel}>Bookmarks</div>
          </div>
          <div className={styles.stat} style={{ animationDelay: '0.3s' }}>
            <div className={styles.statValue}>{stats.streak}🔥</div>
            <div className={styles.statLabel}>Day Streak</div>
          </div>
        </div>

        <section className={styles.section} aria-labelledby="achievements-title">
          <h2 id="achievements-title" className={styles.sectionTitle}>Achievements</h2>
          <div className={styles.achievements}>
            {ACHIEVEMENTS.map((a) => {
              const unlocked = a.check(stats);
              return (
                <div
                  key={a.id}
                  className={`${styles.achievement} ${unlocked ? styles.unlocked : styles.locked}`}
                >
                  <span className={styles.achievementIcon}>{a.icon}</span>
                  <div>
                    <div className={styles.achievementName}>{a.name}</div>
                    <div className={styles.achievementDesc}>{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="settings-title">
          <h2 id="settings-title" className={styles.sectionTitle}>Settings</h2>
          <div className={styles.settings}>
            <div className={styles.settingRow}>
              <span className={styles.settingLabel}>Theme</span>
              <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
              <ThemeToggle />
            </div>
          </div>
        </section>

        {isAuthenticated ? (
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <div className={styles.loginPrompt}>
            <p>
              <Link to="/signup">Create an account</Link> to save your progress across devices.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
