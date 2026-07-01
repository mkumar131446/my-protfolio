import { projects } from '../Data/Constants'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            {project.image && (
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>
            )}
            <div className={styles.body}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Visit →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
