import Header from './Components/Header'
import WelcomePage from './Components/WelcomePage'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Research from './Components/Research'
import TechStack from './Components/TechStack'
import Experience from './Components/Experience'
import Certifications from './Components/Certifications'
import BackgroundLayer from './Components/BackgroundLayer'
import styles from './App.module.css'

function App() {
  return (
    <>
      <BackgroundLayer />
      <Header />
      <main className={styles.main}>
        <section id="welcome"><WelcomePage /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="research"><Research /></section>
        <section id="techStack"><TechStack /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  )
}
export default App
