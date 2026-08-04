import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/AuthContext';
import {
  validateEmail,
  validatePassword,
  validateName,
  validateConfirmPassword,
} from '../utils/validation';
import styles from './Auth.module.css';

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const validate = () => {
    const e = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      confirm: validateConfirmPassword(form.password, form.confirm),
    };
    setErrors(e);
    return !Object.values(e).some(Boolean);
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const validators = {
      name: () => validateName(form.name),
      email: () => validateEmail(form.email),
      password: () => validatePassword(form.password),
      confirm: () => validateConfirmPassword(form.password, form.confirm),
    };
    setErrors((e) => ({ ...e, [field]: validators[field]() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, confirm: true });
    if (!validate()) return;
    signup(form.name, form.email);
    navigate('/dashboard');
  };

  return (
    <div className={`${styles.page} animate-page-enter`}>
      <div className={styles.illustration}>
        <div className={styles.illustrationContent}>
          <div className={styles.illustrationIcon}>🚀</div>
          <h2 className={styles.illustrationTitle}>Start Learning Today</h2>
          <p className={styles.illustrationText}>
            Join thousands of learners mastering new skills in 60 seconds or less.
          </p>
        </div>
      </div>

      <div className={styles.formSide}>
        <div className={styles.card}>
          <Link to="/" className={styles.backLink}>
            <FiArrowLeft /> Back to Home
          </Link>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Sign up to track progress and save bookmarks.</p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {['name', 'email', 'password', 'confirm'].map((field) => {
              const labels = {
                name: 'Full Name',
                email: 'Email',
                password: 'Password',
                confirm: 'Confirm Password',
              };
              const types = {
                name: 'text',
                email: 'email',
                password: 'password',
                confirm: 'password',
              };
              return (
                <div key={field} className={styles.field}>
                  <label htmlFor={field} className={styles.label}>{labels[field]}</label>
                  <input
                    id={field}
                    type={types[field]}
                    className={`${styles.input} ${touched[field] && errors[field] ? styles.inputError : ''}`}
                    value={form[field]}
                    onChange={(e) => update(field, e.target.value)}
                    onBlur={() => handleBlur(field)}
                    autoComplete={field === 'name' ? 'name' : field}
                  />
                  {touched[field] && errors[field] && (
                    <span className={styles.error} role="alert">{errors[field]}</span>
                  )}
                </div>
              );
            })}

            <button type="submit" className={styles.submitBtn}>Create Account</button>

            <div className={styles.divider}>or continue with</div>

            <button type="button" className={styles.googleBtn} aria-label="Sign up with Google">
              <FcGoogle size={20} />
              Google
            </button>
          </form>

          <p className={styles.footer}>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
