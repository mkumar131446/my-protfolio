import { motion } from 'framer-motion'

const WelcomePage = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: 'url(/images/welcome-img.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-sm shadow-lg rounded-xl p-8 max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Hi, I'm Manish <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          A passionate UI Developer building responsive, accessible, and scalable frontends.
        </p>
        <a
          href="#profile"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded-lg transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  )
}

export default WelcomePage
