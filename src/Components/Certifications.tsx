import { certifications } from '../Data/Constants'


const Certifications = () => (
<section id="certifications" className="bg-gray-50 py-16 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Licenses & Certifications</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {certifications.map((cert, i) => (
        <div key={i} className="bg-stone-50 shadow-md p-6 rounded-lg text-left flex gap-4 items-center hover:shadow-xl transition duration-300 ease-in-out border border-gray-200">
        <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain" />
        <div>
            <h3 className="font-semibold text-lg text-gray-800">{cert.title}</h3>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500">Issued {cert.issued}</p>
            <p className="text-xs text-gray-400">Credential ID: {cert.credentialId}</p>
            {cert.link && (
            <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium mt-1 inline-block"
            >
                Show credential
            </a>
            )}
        </div>
        </div>
    ))}
    </div>
</section>
)

export default Certifications
