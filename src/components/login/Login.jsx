import { useState } from 'react'
import styles from './Login.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  function updateField(event) {
    const { name, type, checked, value } = event.target
    setFormValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-labelledby="login-title">
        <h1 className={styles.title} id="login-title">
          Welcome back!
        </h1>
        <p className={styles.subtitle}>
          Enter your Credentials to access your account
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`${styles.field} ${styles.emailField}`}>
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formValues.email}
              onChange={updateField}
              required
            />
          </div>
          <div className={`${styles.field} ${styles.passwordField}`}>
            <div className={styles.passwordLabelRow}>
              <label htmlFor="login-password">Password</label>
              <button className={styles.forgotPassword} type="button">
                forgot password
              </button>
            </div>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="Name"
              autoComplete="new-password"
              value={formValues.password}
              onChange={updateField}
              required
            />
          </div>
          <label className={styles.terms} htmlFor="remember-me">
            <input
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              checked={formValues.rememberMe}
              onChange={updateField}
            />
            <span>Remember for 30 days</span>
          </label>
          <button className={styles.submitButton} type="submit">
            Login
          </button>
        </form>
        <div className={styles.divider} aria-label="Or">
          <span>Or</span>
        </div>
        <div className={styles.socialButtons}>
          <button className={styles.socialButton} type="button">
            <img src={googleLogo} alt="" />
            <span>Sign in with Google</span>
          </button>
          <button className={styles.socialButton} type="button">
            <img src={appleLogo} alt="" />
            <span>Sign in with Apple</span>
          </button>
        </div>
        <p className={styles.accountPrompt}>
          Have an account?{' '}
          <a href="#signin">Sign In</a>
        </p>
      </section>
      <section className={styles.rightSection} aria-label="Blossom image">
        <img
          className={styles.blossom}
          src={blossomFlower}
          alt="Blossom flowers viewed from above"
        />
      </section>
    </main>
  )
}
