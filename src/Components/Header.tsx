import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)
  const handleClose = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-xl font-bold text-blue-700">
          <img
            src="/IMG_4655.jpeg"
            alt="Manish Kumar"
            className="w-8 h-8 rounded-full object-cover border border-blue-300"
          />
          Manish Kumar
        </h1>
        {/* Hamburger Icon (visible on small screens) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-blue-700"
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
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium text-sm md:text-base">
          <li><a href="#hero" className="hover:text-blue-600">Welcome</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#research" className="hover:text-blue-600">Research & Articles</a></li>
          <li><a href="#techStack" className="hover:text-blue-600">TechStack</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 bg-white shadow-lg text-gray-700 font-medium space-y-2">
          <li><a href="#hero" onClick={handleClose} className="block py-2 hover:text-blue-600">Welcome</a></li>
          <li><a href="#about" onClick={handleClose} className="block py-2 hover:text-blue-600">About</a></li>
          <li><a href="#experience" onClick={handleClose} className="block py-2 hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" onClick={handleClose} className="block py-2 hover:text-blue-600">Projects</a></li>
          <li><a href="#research" onClick={handleClose} className="block py-2 hover:text-blue-600">Research & Articles</a></li>
          <li><a href="#techStack" onClick={handleClose} className="block py-2 hover:text-blue-600">TechStack</a></li>
          <li><a href="#contact" onClick={handleClose} className="block py-2 hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </header>
  )
}

export default Header
