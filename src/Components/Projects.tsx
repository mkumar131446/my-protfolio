import { projects } from '../Data/Constants'

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Projects</h2>
      <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-stone-50 shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300 ease-in-out border border-gray-200">
            {project.image && (
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
