import { Link } from 'react-router-dom';
import { LandingNavbar } from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Home.module.css';

const FEATURES = [
  { icon: '⚡', title: '60-Second Lessons', desc: 'Every lesson is designed to be consumed in under a minute — perfect for busy schedules.' },
  { icon: '🎯', title: 'Mini Quizzes', desc: 'Reinforce what you learn with quick quizzes after each lesson. Retention made easy.' },
  { icon: '📱', title: 'Swipe to Learn', desc: 'TikTok-style feed makes learning addictive. Swipe, watch, quiz, repeat.' },
  { icon: '🔖', title: 'Save Bookmarks', desc: 'Bookmark lessons to revisit later. Your personal library of knowledge.' },
  { icon: '🌙', title: 'Dark Mode', desc: 'Study day or night with a beautiful dark theme that is easy on the eyes.' },
  { icon: '🏆', title: 'Track Progress', desc: 'Build streaks, earn achievements, and watch your knowledge grow over time.' },
];

const TOPICS = [
  { emoji: '🔬', name: 'Science' },
  { emoji: '💻', name: 'Programming' },
  { emoji: '📜', name: 'History' },
  { emoji: '💼', name: 'Business' },
  { emoji: '🤖', name: 'AI' },
  { emoji: '📐', name: 'Mathematics' },
  { emoji: '🌍', name: 'Languages' },
];

const STEPS = [
  { title: 'Pick a Topic', desc: 'Choose from Science, Programming, History, and more. Filter instantly with topic chips.' },
  { title: 'Swipe & Learn', desc: 'Watch quick videos or read bite-sized text lessons. Swipe horizontally to discover more.' },
  { title: 'Quiz & Grow', desc: 'Answer a mini quiz to lock in knowledge. Build streaks and track your progress.' },
];

const TESTIMONIALS = [
  { quote: 'I learned more in 10 minutes than an hour of YouTube rabbit holes. The quiz at the end is genius!', name: 'Sarah K.', role: 'Product Designer' },
  { quote: 'Perfect for my commute. Swipe through lessons on the train and feel smarter by the time I arrive.', name: 'Marcus T.', role: 'Software Engineer' },
  { quote: 'My kids love it too. Short, engaging, and actually educational. Duolingo meets TikTok!', name: 'Elena R.', role: 'Teacher & Mom' },
];

export default function Home() {
  return (
    <div className={`${styles.page} animate-page-enter`}>
      <LandingNavbar />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>Learn Anything in 60 Seconds</h1>
          <p className={styles.subtitle}>
            Swipe through bite-sized lessons, watch quick videos, answer mini quizzes,
            and build knowledge one minute at a time.
          </p>
          <div className={styles.ctaGroup}>
            <Link to="/signup" className={styles.primaryBtn}>Get Started</Link>
            <Link to="/dashboard" className={styles.secondaryBtn}>Explore Lessons</Link>
          </div>
        </div>

        <div className={styles.heroIllustration} aria-hidden="true">
          <div className={styles.phoneMock}>
            <div className={styles.mockBar} />
            <div className={styles.mockBar} style={{ width: '60%' }} />
            <div className={styles.mockCard}>📚</div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Teach Me in 60s?</h2>
        <p className={styles.sectionSubtitle}>
          A premium microlearning experience designed for the modern learner.
        </p>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="topics" className={`${styles.section} ${styles.sectionAlt}`}>
        <h2 className={styles.sectionTitle}>Explore Topics</h2>
        <p className={styles.sectionSubtitle}>
          From AI to ancient history — something new to discover every swipe.
        </p>
        <div className={styles.topicsGrid}>
          {TOPICS.map((t) => (
            <div key={t.name} className={styles.topicCard}>
              <div className={styles.topicEmoji}>{t.emoji}</div>
              <div className={styles.topicName}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <p className={styles.sectionSubtitle}>Three simple steps to smarter you.</p>
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2 className={styles.sectionTitle}>Loved by Learners</h2>
        <p className={styles.sectionSubtitle}>Join thousands building knowledge one minute at a time.</p>
        <div className={styles.testimonials}>
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className={styles.testimonial}>
              <div className={styles.stars} aria-label="5 stars">★★★★★</div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <footer className={styles.author}>
                <div className={styles.authorAvatar} aria-hidden="true" />
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
