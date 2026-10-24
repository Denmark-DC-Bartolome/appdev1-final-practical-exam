import styles from './SignUp.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

export default function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.leftSection} aria-label="Sign up" />
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
