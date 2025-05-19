const techCategories = {
  Languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  Frameworks: ['React', 'Angular', 'Vite'],
  Styling: ['SCSS', 'Tailwind CSS', 'UiLine (style system)'],
  Tools: ['Storybook', 'Git', 'VS Code', 'Figma', 'BrowserStack'],
  Testing: ['Jest', 'React Testing Library'],
}

const TechStack = () => {
  return (
    <section id="tech" className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Tech Stack</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {Object.entries(techCategories).map(([category, techs]) => (
          <div key={category} className="bg-gray-50 shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">{category}</h3>
            <ul className="flex flex-wrap gap-3 justify-center text-gray-700 text-sm">
              {techs.map((tech, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
