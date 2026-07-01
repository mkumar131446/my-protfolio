import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const handleToggle = () => setIsOpen(!isOpen)
  const handleClose = () => setIsOpen(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.brand}>
          <span
            className={styles.brandInner}
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
            role="button"
            tabIndex={0}
          >
            <img
              src="/IMG_4655.jpeg"
              alt="Manish Kumar"
              className={styles.avatar}
            />
            Manish Kumar
          </span>
        </h1>
        {/* Hamburger Icon (visible on small screens) */}
        <button
          className={styles.menuToggle}
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Nav links */}
        <ul className={styles.links}>
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#research">Research & Articles</a></li>
          <li><a href="#techStack">TechStack</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <li><a href="#welcome" onClick={handleClose}>Welcome</a></li>
        <li><a href="#about" onClick={handleClose}>About</a></li>
        <li><a href="#experience" onClick={handleClose}>Experience</a></li>
        <li><a href="#projects" onClick={handleClose}>Projects</a></li>
        <li><a href="#research" onClick={handleClose}>Research & Articles</a></li>
        <li><a href="#techStack" onClick={handleClose}>TechStack</a></li>
        <li><a href="#certifications" onClick={handleClose}>Certifications</a></li>
        <li><a href="#contact" onClick={handleClose}>Contact</a></li>
      </ul>
    </header>
  )
}

export default Header
