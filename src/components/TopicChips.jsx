import styles from './TopicChips.module.css';

export default function TopicChips({ topics, selected, onSelect }) {
  return (
    <div className={styles.chips} role="tablist" aria-label="Filter by topic">
      <button
        role="tab"
        aria-selected={selected === 'All'}
        onClick={() => onSelect('All')}
        className={`${styles.chip} ${selected === 'All' ? styles.active : ''}`}
      >
        All
      </button>
      {topics.map((topic) => (
        <button
          key={topic}
          role="tab"
          aria-selected={selected === topic}
          onClick={() => onSelect(topic)}
          className={`${styles.chip} ${selected === topic ? styles.active : ''}`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
