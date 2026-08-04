import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  FlaskConical,
  Flame,
  Globe2,
  GraduationCap,
  History,
  Languages,
  Moon,
  Play,
  Quote,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';

import { LandingNavbar } from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Home.module.css';

const FEATURES = [
  {
    icon: Zap,
    title: '60-Second Lessons',
    desc: 'Learn useful concepts in short, focused lessons designed to fit into even your busiest day.',
    color: 'purple',
  },
  {
    icon: Target,
    title: 'Mini Quizzes',
    desc: 'Reinforce every lesson with quick questions that help turn new information into lasting knowledge.',
    color: 'orange',
  },
  {
    icon: Smartphone,
    title: 'Swipe to Learn',
    desc: 'Move through an engaging lesson feed that feels familiar, effortless, and enjoyable.',
    color: 'blue',
  },
  {
    icon: Bookmark,
    title: 'Save for Later',
    desc: 'Build your personal knowledge library by bookmarking lessons you want to revisit.',
    color: 'green',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    desc: 'Learn comfortably at any time with a polished interface designed for both light and dark themes.',
    color: 'indigo',
  },
  {
    icon: Trophy,
    title: 'Track Your Growth',
    desc: 'Build learning streaks, unlock achievements, and see your knowledge grow over time.',
    color: 'yellow',
  },
];

const TOPICS = [
  {
    icon: FlaskConical,
    name: 'Science',
    description: 'Explore the world around you',
  },
  {
    icon: Code2,
    name: 'Programming',
    description: 'Understand modern technology',
  },
  {
    icon: History,
    name: 'History',
    description: 'Discover stories from the past',
  },
  {
    icon: BriefcaseBusiness,
    name: 'Business',
    description: 'Build practical career knowledge',
  },
  {
    icon: BrainCircuit,
    name: 'Artificial Intelligence',
    description: 'Learn how intelligent systems work',
  },
  {
    icon: GraduationCap,
    name: 'Mathematics',
    description: 'Master concepts step by step',
  },
  {
    icon: Languages,
    name: 'Languages',
    description: 'Learn words and phrases daily',
  },
  {
    icon: Globe2,
    name: 'General Knowledge',
    description: 'Discover something new every day',
  },
];

const STEPS = [
  {
    icon: Sparkles,
    number: '01',
    title: 'Choose what interests you',
    desc: 'Select topics you care about and receive a lesson feed tailored to your curiosity.',
  },
  {
    icon: Play,
    number: '02',
    title: 'Learn in under a minute',
    desc: 'Watch or read a focused lesson without long explanations or unnecessary distractions.',
  },
  {
    icon: BadgeCheck,
    number: '03',
    title: 'Quiz, remember, and grow',
    desc: 'Answer a quick question, maintain your streak, and continue building useful knowledge.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'I learned more in ten focused minutes than I usually do after an hour of jumping between random videos.',
    name: 'Sarah K.',
    role: 'Product Designer',
    initials: 'SK',
  },
  {
    quote:
      'It is perfect for my commute. I can complete a few lessons and still feel like I used my time meaningfully.',
    name: 'Marcus T.',
    role: 'Software Engineer',
    initials: 'MT',
  },
  {
    quote:
      'The lessons are short enough to keep you interested, but still structured enough to teach you something valuable.',
    name: 'Elena R.',
    role: 'Teacher',
    initials: 'ER',
  },
];

const LEARNING_POINTS = [
  'Short lessons without unnecessary filler',
  'Knowledge checks after every topic',
  'Personalized progress and streak tracking',
];

export default function Home() {
  return (
    <div className={`${styles.page} animate-page-enter`}>
      <LandingNavbar />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlowOne} aria-hidden="true" />
          <div className={styles.heroGlowTwo} aria-hidden="true" />

          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowIcon}>
                  <Sparkles size={15} strokeWidth={2.5} />
                </span>
                Microlearning built for everyday life
              </div>

              <h1 className={styles.headline}>
                Learn something useful
                <span className={styles.headlineAccent}> in 60 seconds.</span>
              </h1>

              <p className={styles.subtitle}>
                Turn spare moments into meaningful progress with bite-sized
                lessons, quick quizzes, personalized topics, and an engaging
                swipe-based learning experience.
              </p>

              <div className={styles.ctaGroup}>
                <Link to="/signup" className={styles.primaryBtn}>
                  Start learning free
                  <ArrowRight size={18} />
                </Link>

                <Link to="/dashboard" className={styles.secondaryBtn}>
                  <span className={styles.playIcon}>
                    <Play size={14} fill="currentColor" />
                  </span>
                  Explore lessons
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <div className={styles.avatarStack} aria-hidden="true">
                  <span>SK</span>
                  <span>MT</span>
                  <span>ER</span>
                  <span>+</span>
                </div>

                <div>
                  <div className={styles.rating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <p>Loved by curious learners every day</p>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.floatingBadgeTop}>
                <div className={styles.floatingBadgeIcon}>
                  <Flame size={18} />
                </div>
                <div>
                  <strong>12 day streak</strong>
                  <span>Keep it going!</span>
                </div>
              </div>

              <div className={styles.phoneShell}>
                <div className={styles.phoneTop}>
                  <span className={styles.phoneTime}>9:41</span>
                  <div className={styles.phoneNotch} />
                  <div className={styles.phoneStatus}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles.phoneHeader}>
                  <div>
                    <span>Good morning</span>
                    <strong>Ready to learn?</strong>
                  </div>

                  <div className={styles.phoneAvatar}>J</div>
                </div>

                <div className={styles.lessonMeta}>
                  <span>
                    <BrainCircuit size={14} />
                    Artificial Intelligence
                  </span>
                  <span>45 sec</span>
                </div>

                <div className={styles.lessonCard}>
                  <div className={styles.lessonArtwork}>
                    <div className={styles.artworkCircle}>
                      <BrainCircuit size={56} strokeWidth={1.6} />
                    </div>
                    <span className={styles.artworkDotOne} />
                    <span className={styles.artworkDotTwo} />
                    <span className={styles.artworkDotThree} />
                  </div>

                  <div className={styles.lessonContent}>
                    <div className={styles.lessonCounter}>
                      Lesson 4 of 10
                    </div>
                    <h3>What is machine learning?</h3>
                    <p>
                      Machine learning allows computers to identify patterns
                      and improve through experience.
                    </p>
                  </div>
                </div>

                <div className={styles.progressHeader}>
                  <span>Lesson progress</span>
                  <strong>72%</strong>
                </div>

                <div className={styles.progressTrack}>
                  <div className={styles.progressValue} />
                </div>

                <button type="button" className={styles.phoneButton}>
                  Continue lesson
                  <ChevronRight size={17} />
                </button>

                <div className={styles.phoneNav}>
                  <span className={styles.phoneNavActive}>
                    <BookOpen size={18} />
                    Learn
                  </span>
                  <span>
                    <Bookmark size={18} />
                    Saved
                  </span>
                  <span>
                    <Trophy size={18} />
                    Progress
                  </span>
                </div>
              </div>

              <div className={styles.floatingBadgeBottom}>
                <div className={styles.quizScore}>
                  <Target size={19} />
                </div>
                <div>
                  <strong>Quiz complete</strong>
                  <span>5 out of 5 correct</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <strong>60s</strong>
              <span>Average lesson length</span>
            </div>

            <div className={styles.stat}>
              <strong>8+</strong>
              <span>Learning categories</span>
            </div>

            <div className={styles.stat}>
              <strong>Daily</strong>
              <span>New knowledge to explore</span>
            </div>

            <div className={styles.stat}>
              <strong>100%</strong>
              <span>Learn at your own pace</span>
            </div>
          </div>
        </section>

        <section id="features" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <Zap size={15} />
              Built for modern learners
            </div>

            <h2 className={styles.sectionTitle}>
              Everything you need to make learning a daily habit
            </h2>

            <p className={styles.sectionSubtitle}>
              A focused learning experience that makes gaining knowledge feel
              simple, rewarding, and easy to maintain.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className={styles.featureCard}
                  data-color={feature.color}
                >
                  <div className={styles.featureTop}>
                    <div className={styles.featureIcon}>
                      <Icon size={23} strokeWidth={2} />
                    </div>

                    <span className={styles.featureArrow}>
                      <ArrowRight size={18} />
                    </span>
                  </div>

                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="topics" className={styles.topicsSection}>
          <div className={styles.topicsContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>
                <BookOpen size={15} />
                Learn what interests you
              </div>

              <h2 className={styles.sectionTitle}>
                Explore a growing world of topics
              </h2>

              <p className={styles.sectionSubtitle}>
                Follow your curiosity across technology, science, business,
                history, mathematics, languages, and more.
              </p>
            </div>

            <div className={styles.topicsGrid}>
              {TOPICS.map((topic) => {
                const Icon = topic.icon;

                return (
                  <Link
                    to="/dashboard"
                    key={topic.name}
                    className={styles.topicCard}
                  >
                    <div className={styles.topicIcon}>
                      <Icon size={23} strokeWidth={1.9} />
                    </div>

                    <div className={styles.topicContent}>
                      <h3>{topic.name}</h3>
                      <p>{topic.description}</p>
                    </div>

                    <ChevronRight
                      className={styles.topicArrow}
                      size={19}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.experienceSection}>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceVisual}>
              <div className={styles.experienceCard}>
                <div className={styles.experienceCardHeader}>
                  <div className={styles.experienceIcon}>
                    <Flame size={22} />
                  </div>

                  <div>
                    <span>Weekly activity</span>
                    <strong>Keep your streak alive</strong>
                  </div>
                </div>

                <div className={styles.weekGrid}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                    <div
                      key={`${day}-${index}`}
                      className={styles.weekDay}
                    >
                      <span>{day}</span>
                      <div
                        className={
                          index < 5
                            ? styles.completedDay
                            : index === 5
                              ? styles.currentDay
                              : styles.emptyDay
                        }
                      >
                        {index < 5 && <Check size={15} />}
                        {index === 5 && <Flame size={15} />}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.weekFooter}>
                  <div>
                    <strong>5 lessons</strong>
                    <span>Completed this week</span>
                  </div>

                  <div className={styles.weekScore}>+320 XP</div>
                </div>
              </div>

              <div className={styles.miniAchievement}>
                <div>
                  <Trophy size={22} />
                </div>
                <span>Achievement unlocked</span>
                <strong>Curious Mind</strong>
              </div>
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.sectionEyebrow}>
                <Trophy size={15} />
                Progress that motivates you
              </div>

              <h2>
                Small lessons.
                <span> Visible growth.</span>
              </h2>

              <p>
                Teach Me in 60s helps you turn curiosity into a consistent
                learning habit. Every lesson, quiz, bookmark, and streak
                contributes to your progress.
              </p>

              <div className={styles.learningPoints}>
                {LEARNING_POINTS.map((point) => (
                  <div key={point} className={styles.learningPoint}>
                    <span>
                      <Check size={15} strokeWidth={3} />
                    </span>
                    {point}
                  </div>
                ))}
              </div>

              <Link to="/signup" className={styles.textLink}>
                Create your learning profile
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.howSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <Sparkles size={15} />
              Simple by design
            </div>

            <h2 className={styles.sectionTitle}>
              Start learning in three simple steps
            </h2>

            <p className={styles.sectionSubtitle}>
              No complicated setup, long courses, or rigid schedules. Just
              useful knowledge whenever you have a spare minute.
            </p>
          </div>

          <div className={styles.steps}>
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className={styles.step}>
                  <div className={styles.stepTop}>
                    <div className={styles.stepIcon}>
                      <Icon size={23} />
                    </div>
                    <span className={styles.stepNumber}>{step.number}</span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>

                  {index < STEPS.length - 1 && (
                    <div className={styles.stepConnector} aria-hidden="true">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.testimonialSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>
              <Quote size={15} />
              Learner stories
            </div>

            <h2 className={styles.sectionTitle}>
              Learning that fits into real life
            </h2>

            <p className={styles.sectionSubtitle}>
              Discover why learners enjoy building knowledge one focused
              minute at a time.
            </p>
          </div>

          <div className={styles.testimonials}>
            {TESTIMONIALS.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className={styles.testimonial}
              >
                <Quote className={styles.quoteIcon} size={33} />

                <div
                  className={styles.stars}
                  aria-label="Five star rating"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className={styles.quoteText}>
                  “{testimonial.quote}”
                </p>

                <footer className={styles.author}>
                  <div className={styles.authorAvatar}>
                    {testimonial.initials}
                  </div>

                  <div>
                    <div className={styles.authorName}>
                      {testimonial.name}
                    </div>
                    <div className={styles.authorRole}>
                      {testimonial.role}
                    </div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow} aria-hidden="true" />

          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <BookOpen size={28} />
            </div>

            <h2>Your next lesson only takes a minute.</h2>

            <p>
              Start building knowledge through short lessons designed around
              your interests and your schedule.
            </p>

            <div className={styles.ctaButtons}>
              <Link to="/signup" className={styles.ctaPrimaryBtn}>
                Get started for free
                <ArrowRight size={18} />
              </Link>

              <Link to="/dashboard" className={styles.ctaSecondaryBtn}>
                Browse lessons
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}