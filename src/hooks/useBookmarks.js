import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage(STORAGE_KEYS.BOOKMARKS, []);

  const isBookmarked = useCallback(
    (id) => bookmarks.includes(id),
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    (id) => {
      setBookmarks((prev) =>
        prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
      );
    },
    [setBookmarks]
  );

  const removeBookmark = useCallback(
    (id) => {
      setBookmarks((prev) => prev.filter((b) => b !== id));
    },
    [setBookmarks]
  );

  return { bookmarks, isBookmarked, toggleBookmark, removeBookmark };
}
