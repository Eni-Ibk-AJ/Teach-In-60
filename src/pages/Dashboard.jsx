import { useState, useMemo, useCallback } from 'react';
import lessonsData from '../data/lessons.json';
import { DashboardNavbar } from '../components/Navbar';
import TopicChips from '../components/TopicChips';
import SwipeFeed from '../components/SwipeFeed';
import QuizOverlay from '../components/QuizOverlay';
import styles from './Dashboard.module.css';

const TOPICS = ['Science', 'Programming', 'History', 'Business', 'AI', 'Mathematics', 'Languages'];

export default function Dashboard() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [search, setSearch] = useState('');
  const [quizLesson, setQuizLesson] = useState(null);
  const [feedKey, setFeedKey] = useState(0);

  const filteredLessons = useMemo(() => {
    return lessonsData.filter((lesson) => {
      const matchesTopic = selectedTopic === 'All' || lesson.topic === selectedTopic;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        lesson.title.toLowerCase().includes(q) ||
        lesson.topic.toLowerCase().includes(q) ||
        lesson.description?.toLowerCase().includes(q);
      return matchesTopic && matchesSearch;
    });
  }, [selectedTopic, search]);

  const handleFinishLesson = useCallback((lesson) => {
    setQuizLesson(lesson);
  }, []);

  const handleNextLesson = useCallback(() => {
    setFeedKey((k) => k + 1);
  }, []);

  return (
    <div className={`${styles.page} animate-page-enter`}>
      <DashboardNavbar search={search} onSearchChange={setSearch} />

      <main className={styles.content}>
        <div className={styles.chipsRow}>
          <TopicChips
            topics={TOPICS}
            selected={selectedTopic}
            onSelect={setSelectedTopic}
          />
        </div>

        <SwipeFeed
          key={`${selectedTopic}-${search}-${feedKey}`}
          lessons={filteredLessons}
          onFinishLesson={handleFinishLesson}
        />
      </main>

      <QuizOverlay
        lesson={quizLesson}
        isOpen={!!quizLesson}
        onClose={() => setQuizLesson(null)}
        onNextLesson={handleNextLesson}
      />
    </div>
  );
}
