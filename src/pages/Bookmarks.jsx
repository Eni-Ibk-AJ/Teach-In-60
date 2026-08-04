import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import lessonsData from '../data/lessons.json';
import { AppNavbar } from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { useBookmarkContext } from '../context/BookmarkContext';
import styles from './Bookmarks.module.css';

export default function Bookmarks() {
  const { bookmarks, removeBookmark } = useBookmarkContext();
  const [search, setSearch] = useState('');

  const savedLessons = useMemo(() => {
    const saved = lessonsData.filter((l) => bookmarks.includes(l.id));
    if (!search) return saved;
    const q = search.toLowerCase();
    return saved.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.topic.toLowerCase().includes(q)
    );
  }, [bookmarks, search]);

  return (
    <div className={`${styles.page} animate-page-enter`}>
      <AppNavbar />

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Bookmarks</h1>
          <p className={styles.subtitle}>
            {bookmarks.length} saved lesson{bookmarks.length !== 1 ? 's' : ''}
          </p>
          {bookmarks.length > 0 && (
            <div className={styles.searchRow}>
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search bookmarks..."
                ariaLabel="Search bookmarks"
              />
            </div>
          )}
        </header>

        {bookmarks.length === 0 ? (
          <EmptyState
            title="No bookmarks yet"
            description="Save lessons while swiping to build your personal library. Tap the bookmark icon on any lesson card."
            actionLabel="Explore Lessons"
            onAction={() => window.location.href = '/dashboard'}
          />
        ) : savedLessons.length === 0 ? (
          <EmptyState
            title="No results found"
            description="Try a different search term."
          />
        ) : (
          <div className={styles.grid}>
            {savedLessons.map((lesson, i) => (
              <article
                key={lesson.id}
                className={styles.card}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={styles.cardHeader}>
                  <div>
                    <span className={styles.cardTopic}>{lesson.topic}</span>
                    <h2 className={styles.cardTitle}>{lesson.title}</h2>
                    <p className={styles.cardDesc}>{lesson.description}</p>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeBookmark(lesson.id)}
                    aria-label={`Remove ${lesson.title} from bookmarks`}
                  >
                    <FiTrash2 />
                  </button>
                </div>
                <footer className={styles.cardFooter}>
                  <span className={styles.duration}>⏱ {lesson.durationSec}s</span>
                  <Link to="/dashboard" className={styles.viewBtn}>View</Link>
                </footer>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
