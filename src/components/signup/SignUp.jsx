import { useState } from 'react'
import styles from './SignUp.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

export default function SignUp() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    agreed: false,
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
      <section className={styles.leftSection} aria-labelledby="signup-title">
        <h1 className={styles.title} id="signup-title">
          Get Started Now
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`${styles.field} ${styles.nameField}`}>
            <label htmlFor="signup-name">Name</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              value={formValues.name}
              onChange={updateField}
              required
            />
          </div>
          <div className={`${styles.field} ${styles.emailField}`}>
            <label htmlFor="signup-email">Email address</label>
            <input
              id="signup-email"
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
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="Name"
              autoComplete="new-password"
              value={formValues.password}
              onChange={updateField}
              required
            />
          </div>
          <label className={styles.terms} htmlFor="signup-terms">
            <input
              id="signup-terms"
              name="agreed"
              type="checkbox"
              checked={formValues.agreed}
              onChange={updateField}
              required
            />
            <span>
              I agree to the <span className={styles.underlined}>terms &amp; policy</span>
            </span>
          </label>
          <button className={styles.submitButton} type="submit">
            Signup
          </button>
        </form>
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
