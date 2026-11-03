import { education } from '../Data/Constants'
import styles from './Education.module.css'

const Education = () => (
  <section id="education" className={styles.section}>
    <h2 className={styles.heading}>Education</h2>
    <ol className={styles.timeline}>
      {education.map((edu, i) => (
        <li key={i} className={styles.item}>
          <span className={`${styles.node} ${i === 0 ? styles.current : ''}`} aria-hidden="true" />
          <div className={styles.entry}>
            <img src={edu.logo} alt={`${edu.institution} logo`} className={styles.logo} />
            <div>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.institution}>
                {edu.institution}
                {edu.location ? `, ${edu.location}` : ''}
              </p>
              <p className={styles.meta}>{edu.duration}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </section>
)

export default Education
