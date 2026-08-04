import { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage(STORAGE_KEYS.USER, null);

  const login = useCallback(
    (email, password, remember) => {
      const name = email.split('@')[0];
      const profile = {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinedAt: new Date().toISOString(),
      };
      setUser(profile);
      if (!remember) {
        /* still persist for demo; remember flag available for UI */
      }
      return profile;
    },
    [setUser]
  );

  const signup = useCallback(
    (fullName, email) => {
      const profile = {
        name: fullName,
        email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinedAt: new Date().toISOString(),
      };
      setUser(profile);
      return profile;
    },
    [setUser]
  );

  const logout = useCallback(() => setUser(null), [setUser]);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
