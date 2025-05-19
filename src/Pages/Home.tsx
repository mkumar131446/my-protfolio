import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


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
      className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Manish Kumar</h1>
      <h2 className="text-2xl mt-2 md:text-3xl font-medium drop-shadow">UI/Front-End Web Developer</h2>

      <div className="flex gap-6 mt-8">
        <button
          onClick={handleEnterProfile}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold"
        >
          Welcome To My Profile
        </button>
        <a
          href="/resume/Manish_Rsm.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default Home
