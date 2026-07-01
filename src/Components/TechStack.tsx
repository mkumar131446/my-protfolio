import styles from './TechStack.module.css'

const techCategories = {
  Languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  Frameworks: ['React', 'Angular', 'Vite', 'Node.js', 'Express.js', 'Next.js'],
  Libraries: ['Redux', 'React Router', 'RxJS', 'jQuery', 'Bootstrap', 'Material UI'],
  'State Management': ['Redux', 'RxJS', 'Context API'],
  'Build Tools': ['Webpack', 'Babel', 'Vite', 'npm', 'Yarn'],
  Styling: ['CSS Modules', 'SCSS', 'UiLine (style system)', 'Bootstrap'],
  Tools: ['Storybook', 'Git', 'BitBucket', 'VS Code', 'Figma', 'BrowserStack'],
  Testing: ['Jest', 'React Testing Library'],
}

const TechStack = () => {
  return (
    <section id="tech" className={styles.section}>
      <h2 className={styles.heading}>Tech Stack</h2>
      <div className={styles.grid}>
        {Object.entries(techCategories).map(([category, techs]) => (
          <div key={category} className={styles.card}>
            <h3 className={styles.category}>{category}</h3>
            <ul className={styles.list}>
              {techs.map((tech, index) => (
                <li key={index} className={styles.pill}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
