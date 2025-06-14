import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
	{
		title: "Moonstone",
		description: "lightweight time tracking app",
		link: "https://moonstone-tracker.com",
		image: "/moonstone.jpg",
		tags: ["React", "Node.js", "Supabase", "Vercel", "Bootstrap"]
	},
	{
		title: "WA Fish Stock Notifier",
		description: "subscribe to lake fish stocking updates",
		link: "https://wa-fish-stock-notifier.com",
		image: "/wa-fish-stock-notifier.jpg",
		tags: ["React", "Next.js", "Supabase", "Vercel", "Tailwind CSS"]
	}
];

export default function About() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 bg-white">
			<h1 className="text-3xl font-extrabold mb-8 tracking-tight">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<a
						key={index}
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="group bg-gray-100 hover:bg-gray-200 p-6 relative flex flex-col h-full transition-colors duration-200 rounded"
						aria-label={`View ${project.title} project`}
					>
						<div className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
							<FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
						</div>
						<div className="flex items-start h-32 mb-4">
							<img
								src={project.image}
								alt={project.title}
								className="object-cover object-left h-full w-32 rounded shadow"
							/>
						</div>
						<h2 className="text-xl font-bold mb-2">{project.title}</h2>
						<p className="text-gray-600 mb-4">{project.description}</p>
						<div className="mt-auto">
							{project.tags.map((tag, tagIndex) => (
								<span
									key={tagIndex}
									className="inline-block bg-orange-100 border border-black rounded-sm text-black text-xs px-3 py-1 font-semibold tracking-wider mr-2 mb-2"
								>
									{tag}
								</span>
							))}
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
