import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useBookmarkContext } from '../context/BookmarkContext';
import styles from './BookmarkButton.module.css';

export default function BookmarkButton({ lessonId, ariaLabel }) {
  const { isBookmarked, toggleBookmark } = useBookmarkContext();
  const active = isBookmarked(lessonId);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    toggleBookmark(lessonId);
  };

  return (
    <button
      className={`${styles.btn} ${active ? styles.active : ''}`}
      onClick={handleClick}
      aria-label={ariaLabel || (active ? 'Remove bookmark' : 'Add bookmark')}
      aria-pressed={active}
    >
      {active ? <FaBookmark /> : <FaRegBookmark />}
      {ripples.map((r) => (
        <span
          key={r.id}
          className={styles.ripple}
          style={{ left: r.x, top: r.y, width: 20, height: 20, marginLeft: -10, marginTop: -10 }}
        />
      ))}
    </button>
  );
}
