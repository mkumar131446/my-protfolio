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
        <p className={styles.eyebrow}>Founder & CTO @ CenVexa</p>
        <h1 className={styles.heading}>
          Hi, I'm Manish <span className={styles.wave}>👋</span>
        </h1>
        <p className={styles.tagline}>
          Frontend Platform Architect building scalable, accessible frontend systems
          and AI-powered SaaS products.
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
