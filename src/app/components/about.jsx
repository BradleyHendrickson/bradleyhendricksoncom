import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const contacts = [
    {
        href: "mailto:bradley.hendrickson6@gmail.com",
        icon: faEnvelope,
        label: "Email",
        text: "bradley.hendrickson6@gmail.com",
    },
    {
        href: "https://github.com/BradleyHendrickson",
        icon: faGithub,
        label: "GitHub",
        text: "BradleyHendrickson",
    },
    {
        href: "https://www.linkedin.com/in/b-hendrickson/",
        icon: faLinkedin,
        label: "LinkedIn",
        text: "b-hendrickson",
    },
]

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-16">
                {/* About Section */}
                <div className="md:col-span-7 mb-12 md:mb-0">
                    <h1 className="text-3xl font-extrabold mb-4 tracking-tight">
                        About Me
                    </h1>
                    <p className="text-base text-gray-700 mt-6 mb-1 font-semibold tracking-wide">
                        Full-Stack Developer
                    </p>
                    <p className="text-base text-gray-700 mb-6 font-semibold tracking-wide">
                        BSc. Computer Science, Washington State University
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed font-light tracking-wide">
                        I'm a developer who turns complex business problems into intuitive software solutions. I focus on integrating systems,
                        automating workflows, and creating user-centric software. My work bridges construction, finance,
                        and operations using modern tools to deliver effective solutions.
                    </p>
                </div>

                {/* Contact + Skills Section */}
                <div className="md:col-span-5 space-y-10">
                    <div>
                        <h2 className="text-xl font-bold mb-1 tracking-tight inline-block pb-1">
                            Contact
                        </h2>
                        <div className="flex flex-col gap-3 mt-3">
                            {contacts.map(({ href, icon, label, text }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-blue-500 hover:text-blue-900 hover:underline underline-offset-4 decoration-2 font-medium transition-colors"
                                    aria-label={label}
                                >
                                    <FontAwesomeIcon icon={icon} className="text-lg" />
                                    <span className="text-base font-medium tracking-wide">{text}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-1 tracking-tight inline-block pb-1">
                            Skills
                        </h2>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {[
                                "JavaScript", "TypeScript",
                                "React", "Next.js", "Node.js",
                                "RESTful APIs", "GraphQL",
                                "Git", "GitHub", "Agile",
                                "SQL Server", "PostgreSQL",
                                "C# / .NET", "Supabase"
                            ].map(skill => (
                                <span
                                    key={skill}
                                    className="inline-block bg-orange-100 border border-black rounded-sm text-black text-xs px-3 py-1 font-semibold tracking-wider"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
