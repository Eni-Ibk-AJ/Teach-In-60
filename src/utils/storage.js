const STORAGE_KEYS = {
  THEME: 'tm60_theme',
  BOOKMARKS: 'tm60_bookmarks',
  LIKES: 'tm60_likes',
  COMPLETED: 'tm60_completed',
  USER: 'tm60_user',
  STREAK: 'tm60_streak',
};

export function getItem(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or unavailable */
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

export { STORAGE_KEYS };
