import { useState, useEffect, useRef } from 'react';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { useProgress } from '../context/ProgressContext';
import BookmarkButton from './BookmarkButton';
import ProgressBar from './ProgressBar';
import styles from './LessonCard.module.css';

export default function LessonCard({ lesson, onFinish, isActive }) {
  const { isLiked, toggleLike, isCompleted } = useProgress();
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const timerRef = useRef(null);
  const liked = isLiked(lesson.id);
  const completed = isCompleted(lesson.id);

  useEffect(() => {
    if (!isActive) {
      clearInterval(timerRef.current);
      return;
    }

    setStarted(true);
    setProgress(0);

    const interval = 100;
    const total = lesson.durationSec * 1000;
    let elapsed = 0;

    timerRef.current = setInterval(() => {
      elapsed += interval;
      const pct = Math.min(100, (elapsed / total) * 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(timerRef.current);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [isActive, lesson.id, lesson.durationSec]);

  const handleShare = async () => {
    const text = `Check out "${lesson.title}" on Teach Me in 60 Seconds!`;
    if (navigator.share) {
      await navigator.share({ title: lesson.title, text });
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  return (
    <article className={styles.card} aria-label={lesson.title}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.topic}>{lesson.topic}</span>
          <span className={styles.duration}>⏱ {lesson.durationSec}s</span>
        </div>
        <BookmarkButton lessonId={lesson.id} />
      </header>

      <div className={styles.body}>
        <h2 className={styles.title}>{lesson.title}</h2>
        {lesson.description && (
          <p className={styles.description}>{lesson.description}</p>
        )}

        <div className={styles.media}>
          {lesson.mediaType === 'video' ? (
            <iframe
              src={lesson.videoUrl}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className={styles.textContent}>
              <p>{lesson.text}</p>
            </div>
          )}
        </div>
      </div>

      <footer className={styles.footer}>
        <ProgressBar value={started ? progress : 0} label={`${lesson.title} progress`} />

        <div className={styles.actions}>
          <div className={styles.actionGroup}>
            <button
              className={`${styles.actionBtn} ${liked ? styles.liked : ''}`}
              onClick={() => toggleLike(lesson.id)}
              aria-label={liked ? 'Unlike lesson' : 'Like lesson'}
              aria-pressed={liked}
            >
              {liked ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button
              className={styles.actionBtn}
              onClick={handleShare}
              aria-label="Share lesson"
            >
              <FaShareAlt />
            </button>
          </div>

          <button
            className={`${styles.finishBtn} ${completed ? styles.completed : ''}`}
            onClick={() => onFinish(lesson)}
            disabled={progress < 80 && !completed}
          >
            {completed ? 'Completed ✓' : 'Finish Lesson'}
          </button>
        </div>

        <p className={styles.nextHint}>Swipe or use arrow keys for next lesson →</p>
      </footer>
    </article>
  );
}
