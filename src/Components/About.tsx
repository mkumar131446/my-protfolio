import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.body}>
        I'm Founder & CTO of CenVexa, building an AI-powered supply chain forecasting
        platform from the ground up, and a Frontend Platform Architect with 6+ years
        building enterprise UI systems (Medline, Bank of America, Dun & Bradstreet).
        I'm a published researcher in scalable frontend architectures and component
        reusability, and I'm equally comfortable writing production React/TypeScript
        code, architecting multi-tenant systems, and designing component APIs for
        design systems—with deep expertise in accessibility (WCAG/ARIA) and developer
        productivity.
      </p>
    </section>
  )
}

export default About
