import { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useLocalStorage(STORAGE_KEYS.COMPLETED, []);
  const [likes, setLikes] = useLocalStorage(STORAGE_KEYS.LIKES, []);
  const [streak, setStreak] = useLocalStorage(STORAGE_KEYS.STREAK, {
    count: 0,
    lastDate: null,
  });

  const updateStreak = useCallback(() => {
    const today = new Date().toDateString();
    setStreak((prev) => {
      if (prev.lastDate === today) return prev;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const isConsecutive = prev.lastDate === yesterday.toDateString();
      return {
        count: isConsecutive ? prev.count + 1 : 1,
        lastDate: today,
      };
    });
  }, [setStreak]);

  const markCompleted = useCallback(
    (id) => {
      setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));
      updateStreak();
    },
    [setCompleted, updateStreak]
  );

  const toggleLike = useCallback(
    (id) => {
      setLikes((prev) =>
        prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
      );
    },
    [setLikes]
  );

  const isLiked = useCallback((id) => likes.includes(id), [likes]);
  const isCompleted = useCallback((id) => completed.includes(id), [completed]);

  return (
    <ProgressContext.Provider
      value={{
        completed,
        likes,
        streak,
        markCompleted,
        toggleLike,
        isLiked,
        isCompleted,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
