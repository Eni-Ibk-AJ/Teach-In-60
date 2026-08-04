import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/AuthContext';
import { validateEmail, validatePassword } from '../utils/validation';
import styles from './Auth.module.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const e = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    setErrors(e);
    return !Object.values(e).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!validate()) return;
    login(email, password, remember);
    navigate('/dashboard');
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    if (field === 'email') setErrors((e) => ({ ...e, email: validateEmail(email) }));
    if (field === 'password') setErrors((e) => ({ ...e, password: validatePassword(password) }));
  };

  return (
    <div className={`${styles.page} animate-page-enter`}>
      <div className={styles.illustration}>
        <div className={styles.illustrationContent}>
          <div className={styles.illustrationIcon}>🎓</div>
          <h2 className={styles.illustrationTitle}>Welcome Back!</h2>
          <p className={styles.illustrationText}>
            Continue your learning journey. Pick up right where you left off.
          </p>
        </div>
      </div>

      <div className={styles.formSide}>
        <div className={styles.card}>
          <Link to="/" className={styles.backLink}>
            <FiArrowLeft /> Back to Home
          </Link>
          <h1 className={styles.title}>Log In</h1>
          <p className={styles.subtitle}>Enter your credentials to access your account.</p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
                autoComplete="email"
              />
              {touched.email && errors.email && (
                <span className={styles.error} role="alert">{errors.email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                id="password"
                type="password"
                className={`${styles.input} ${touched.password && errors.password ? styles.inputError : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur('password')}
                autoComplete="current-password"
              />
              {touched.password && errors.password && (
                <span className={styles.error} role="alert">{errors.password}</span>
              )}
            </div>

            <div className={styles.row}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#forgot" className={styles.forgot}>Forgot Password?</a>
            </div>

            <button type="submit" className={styles.submitBtn}>Log In</button>

            <div className={styles.divider}>or continue with</div>

            <button type="button" className={styles.googleBtn} aria-label="Log in with Google">
              <FcGoogle size={20} />
              Google
            </button>
          </form>

          <p className={styles.footer}>
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
