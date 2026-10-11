import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()

  const handleEnterProfile = () => {
    navigate('/profile')
  }

  const images = [
    '/landing/landing-2.jpeg',
    '/landing/landing-3.avif',
    '/landing/landing-4.avif',
    '/landing/landing-5.avif',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Open to new opportunities</p>
        <h1 className={styles.name}>Manish Kumar</h1>
        <h2 className={styles.subtitle}>
          Frontend Platform Architect · Full Stack Developer
        </h2>

        <div className={styles.actions}>
          <button onClick={handleEnterProfile} className={styles.primaryBtn}>
            Welcome To My Profile
          </button>
          <a
            href="/resume/Manish_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
