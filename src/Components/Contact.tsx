import { contactLinks } from '../Data/Constants'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Contact Me</h2>

      <div className={styles.links}>
        {contactLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <img
              src={link.icon}
              alt={link.label}
              className={styles.icon}
            />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
