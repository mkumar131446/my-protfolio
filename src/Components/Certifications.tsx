import { certifications } from '../Data/Constants'
import styles from './Certifications.module.css'

const Certifications = () => (
  <section id="certifications" className={styles.section}>
    <h2 className={styles.heading}>Licenses & Certifications</h2>
    <div className={styles.grid}>
      {certifications.map((cert, i) => (
        <div key={i} className={styles.card}>
          <img src={cert.image} alt={cert.title} className={styles.image} />
          <div>
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            {cert.issued && <p className={styles.issued}>Issued {cert.issued}</p>}
            {cert.credentialId && <p className={styles.credential}>Credential ID: {cert.credentialId}</p>}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Show credential
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Certifications
