import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCube } from "@fortawesome/free-solid-svg-icons";
import { faItchIo } from "@fortawesome/free-brands-svg-icons";

export default function More() {
	const links = [
		{
			title: "Design for 3D Printing",
			description: "Check out my 3D printable designs on Printables.com",
			url: "https://www.printables.com/@BradH97_1804143",
			label: "Printables.com",
			icon: faCube
		},
		{
			title: "Game Development",
			description: "Game Jam projects can be found on my itch.io page",
			url: "https://breadclip.itch.io/",
			label: "breadclip.itch.io",
			icon: faItchIo
		}
	];

	return (
		<div className="max-w-4xl mx-auto px-4 py-12 bg-white">
			<h1 className="text-3xl font-extrabold mb-8 tracking-tight">More Fun Stuff</h1>
			<ul className="space-y-8">
				{links.map((link, idx) => (
					<li key={idx}>
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group block bg-gray-100 hover:bg-gray-200 p-6 rounded transition-colors duration-200"
							aria-label={`Visit ${link.label}`}
						>
							<div className="flex items-start justify-between">
								<div className="flex items-center">
									<FontAwesomeIcon icon={link.icon} size="3x" className="text-black mr-4" />
									<div>
										<h2 className="text-2xl font-bold mb-2">{link.title}</h2>
										<p className="text-gray-700">{link.description}</p>
									</div>
								</div>
								<div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200 ml-4">
									<FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
								</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
