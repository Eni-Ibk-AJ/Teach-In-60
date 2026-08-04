import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css';

export default function SearchBar({ value, onChange, placeholder = 'Search...', ariaLabel }) {
  return (
    <div className={styles.wrapper}>
      <FiSearch className={styles.icon} aria-hidden="true" />
      <input
        type="search"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel || placeholder}
      />
    </div>
  );
}
