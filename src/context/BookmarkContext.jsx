import { createContext, useContext } from 'react';
import useBookmarks from '../hooks/useBookmarks';

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const bookmarkState = useBookmarks();
  return (
    <BookmarkContext.Provider value={bookmarkState}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarkContext() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error('useBookmarkContext must be used within BookmarkProvider');
  return ctx;
}
