import { experience } from '../Data/Constants'

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Experience</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {experience.map((item, i) => (
          <div key={i} className="bg-stone-50 shadow-md hover:shadow-xl p-6 rounded-lg text-left transition duration-300 ease-in-out border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <img src={item.logo} alt={item.company} className="w-8 h-8 rounded-full object-cover border border-gray-300" />
              <h3 className="text-xl font-semibold text-blue-700">{item.company}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">{item.role} · {item.duration}</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              {item.bullets.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience