import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
];

export default function About() {
return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8 mb-8 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4 tracking-tight">About Me</h2>
                <p className="text-lg text-gray-700 mb-2 font-medium">Full-Stack Developer</p>
                <p className="text-lg text-gray-700 mb-8 font-medium">BSc. Computer Science, Washington State University</p>
            </div>
            <div className="md:col-span-4">
                <h2 className="text-2xl font-semibold mb-4 tracking-tight">Contact</h2>
                <div className="flex flex-col gap-2">
                    {contacts.map(({ href, icon, label, text }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800 transition-colors font-medium"
                            aria-label={label}
                        >
                            <FontAwesomeIcon icon={icon} className="text-lg" />
                            <span className="text-base">{text}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        {/* Skills Section */}
        <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight">Skills</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
                <li>JavaScript, TypeScript</li>
                <li>React, Next.js, Node.js</li>
                <li>RESTful APIs, GraphQL</li>
                <li>Git, GitHub, Agile Methodologies</li>
                <li>Microsoft SQL Server, PostgreSQL</li>
                <li>C# / .NET</li>
            </ul>
        </div>
        {/* Professional Experience Section */}
        <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight">Professional Experience</h2>

            <p className="text-xl font-extrabold text-gray-800 mb-2">
                Solutions Architect at{" "}
                <a href="https://silvertreksystems.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Silvertrek Systems
                </a>
                <span className="text-sm text-gray-500 block font-normal">May 2019 – Present · Battle Ground, WA</span>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
                <li>
                    Developed and maintained software solutions for the construction industry, focusing on web applications, data integration, and process automation.
                </li>

                <li>
                    <strong>Kartaya Maintain</strong> — SaaS platform for equipment maintenance
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Lead developer for the platform, deployed at 9+ construction companies.</li>
                        <li>Oversaw feature development, sprint planning, and workflow enhancements for mechanics.</li>
                        <li>Integrated with Viewpoint Vista accounting software using a custom GraphQL API to synchronize equipment costs, payroll, and work order data.</li>
                        <li>Managed CI/CD pipelines with GitLab across test, staging, and production environments.</li>
                    </ul>
                </li>

                <li>
                    <strong>Kartaya Automate</strong> — integration platform utilizing Node-RED and Kartaya GraphQL Endpoint
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Designed and implemented automation workflows with Node-RED and custom nodes.</li>
                        <li>Integrated with third-party platforms such as Ramp (virtual credit cards), Assignar (ERP), and Pipedrive (CRM).</li>
                    </ul>
                </li>

                <li>
                    <strong>Viewpoint Vista Customizations</strong>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Created and maintained advanced customizations for Viewpoint Vista using T-SQL and direct database integrations.</li>
                        <li>Optimized accounting workflows and ensured reliable data synchronization between systems.</li>
                    </ul>
                </li>
            </ul>

            <p className="text-xl font-extrabold text-gray-800 mb-2">
                Capstone Project - HP Inc.
                <span className="text-sm text-gray-500 block font-normal">2019 – 2020 · Vancouver, WA</span>
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-8 space-y-2">
                <li>Developed a 3mf file validator web service with a Go backend and Angular.js frontend, hosted on AWS.</li>
                <li>Led backend development, including designing data structures for 3D model validation.</li>
            </ul>
        </div>
    </div>
);
}
