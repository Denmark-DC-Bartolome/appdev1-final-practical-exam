import styles from './SignUp.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

export default function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-labelledby="signup-title">
        <h1 className={styles.title} id="signup-title">
          Get Started Now
        </h1>
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
