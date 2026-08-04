import { useState, useCallback } from 'react';
import { getItem, setItem } from '../utils/storage';

export default function useLocalStorage(key, initialValue) {
  const [stored, setStored] = useState(() => getItem(key, initialValue));

  const setValue = useCallback(
    (value) => {
      setStored((prev) => {
        const next = typeof value === 'function' ? value(prev) : value;
        setItem(key, next);
        return next;
      });
    },
    [key]
  );

  return [stored, setValue];
}
