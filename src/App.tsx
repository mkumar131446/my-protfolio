import Header from './Components/Header'
import WelcomePage from './Components/WelcomePage'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Research from './Components/Research'
import TechStack from './Components/TechStack'
import Experience from './Components/Experience'

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="welcome"><WelcomePage /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="research"><Research /></section> 
        <section id="techStack"><TechStack /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  )
}
export default App