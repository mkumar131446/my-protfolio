import { experience } from '../Data/Constants'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.grid}>
        {experience.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.head}>
              <img src={item.logo} alt={item.company} className={styles.logo} />
              <h3 className={styles.company}>{item.company}</h3>
            </div>
            <p className={styles.meta}>{item.role} · {item.duration}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
