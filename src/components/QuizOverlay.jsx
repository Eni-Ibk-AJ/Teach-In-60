import { useState } from 'react';
import Modal from './Modal';
import { useProgress } from '../context/ProgressContext';
import styles from './QuizOverlay.module.css';

export default function QuizOverlay({ lesson, isOpen, onClose, onNextLesson }) {
  const { markCompleted } = useProgress();
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  if (!lesson) return null;

  const { quiz } = lesson;
  const isCorrect = selected === quiz.correctIndex;

  const handleSelect = (index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === quiz.correctIndex) {
      markCompleted(lesson.id);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setAnswered(false);
    onClose();
    onNextLesson?.();
  };

  const getOptionClass = (index) => {
    if (!answered) return styles.option;
    if (index === quiz.correctIndex) return `${styles.option} ${styles.correct}`;
    if (index === selected) return `${styles.option} ${styles.incorrect}`;
    return styles.option;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Quiz">
      <div className={styles.quiz}>
        <span className={styles.badge}>Quick Quiz</span>
        <h2 className={styles.question}>{quiz.question}</h2>

        <div className={styles.options} role="radiogroup" aria-label={quiz.question}>
          {quiz.options.map((opt, i) => (
            <button
              key={opt}
              className={getOptionClass(i)}
              onClick={() => handleSelect(i)}
              disabled={answered}
              role="radio"
              aria-checked={selected === i}
            >
              {opt}
            </button>
          ))}
        </div>

        {answered && (
          <div
            className={`${styles.feedback} ${
              isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect
            }`}
            role="status"
          >
            {isCorrect
              ? '🎉 Correct! Great job — you nailed it!'
              : `Not quite. The correct answer is "${quiz.options[quiz.correctIndex]}".`}
          </div>
        )}

        {answered && (
          <button className={styles.nextBtn} onClick={handleNext}>
            Next Lesson →
          </button>
        )}
      </div>
    </Modal>
  );
}
