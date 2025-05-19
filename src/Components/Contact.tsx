import { contactLinks } from '../Data/Constants'

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>

      <div className="flex flex-wrap justify-center gap-6 text-blue-600 text-lg">
        {contactLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <img
              src={link.icon}
              alt={link.label}
              className="w-6 h-6 rounded-full object-cover border border-blue-300"
            />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
