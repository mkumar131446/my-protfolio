import { motion } from 'framer-motion'
import styles from './WelcomePage.module.css'

const WelcomePage = () => {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.card}
      >
        <p className={styles.eyebrow}>Open to new opportunities</p>
        <h1 className={styles.heading}>
          Hi, I'm Manish <span className={styles.wave}>👋</span>
        </h1>
        <p className={styles.tagline}>
          Senior UI Developer building scalable, accessible web applications with
          React, TypeScript, and modern full-stack tooling.
        </p>
        <div className={styles.tags}>
          {['React', 'TypeScript', 'System Architecture', 'AI-Powered SaaS'].map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <a href="#projects" className={styles.cta}>
          View My Work
        </a>
      </motion.div>
    </section>
  )
}

export default WelcomePage
