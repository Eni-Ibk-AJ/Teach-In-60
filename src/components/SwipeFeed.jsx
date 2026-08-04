import { useRef, useState, useEffect, useCallback } from 'react';
import LessonCard from './LessonCard';
import styles from './SwipeFeed.module.css';

export default function SwipeFeed({ lessons, onFinishLesson }) {
  const feedRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const feed = feedRef.current;
    if (!feed || !lessons.length) return;
    const clamped = Math.max(0, Math.min(index, lessons.length - 1));
    const slide = feed.children[clamped];
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
    setActiveIndex(clamped);
  }, [lessons.length]);

  // Track scroll position to update active index
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;

    const handleScroll = () => {
      const slides = Array.from(feed.children);
      const feedRect = feed.getBoundingClientRect();
      const center = feedRect.left + feedRect.width / 2;

      let closest = 0;
      let minDist = Infinity;
      slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const dist = Math.abs(center - slideCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    feed.addEventListener('scroll', handleScroll, { passive: true });
    return () => feed.removeEventListener('scroll', handleScroll);
  }, [lessons]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, scrollToIndex]);

  // Mouse wheel horizontal scroll on desktop
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        if (e.deltaY > 0) scrollToIndex(activeIndex + 1);
        else scrollToIndex(activeIndex - 1);
      }
    };

    feed.addEventListener('wheel', handleWheel, { passive: false });
    return () => feed.removeEventListener('wheel', handleWheel);
  }, [activeIndex, scrollToIndex]);

  if (!lessons.length) {
    return <div className={styles.empty}>No lessons match your filter.</div>;
  }

  return (
    <>
      <p className={styles.counter} aria-live="polite">
        Lesson {activeIndex + 1} of {lessons.length}
      </p>
      <div
        className={styles.feed}
        ref={feedRef}
        role="region"
        aria-label="Lesson feed"
        tabIndex={0}
      >
        {lessons.map((lesson, i) => (
          <div key={lesson.id} className={styles.slide}>
            <LessonCard
              lesson={lesson}
              isActive={i === activeIndex}
              onFinish={onFinishLesson}
            />
          </div>
        ))}
      </div>
    </>
  );
}
