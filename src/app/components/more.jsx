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
                    <li key={idx} className="relative bg-gray-100 p-6">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={link.icon} size="3x" className="text-black mr-4" />
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{link.title}</h2>
                                    <p className="text-gray-700">
                                        {link.description}{" "}
                                    </p>
                                </div>
                            </div>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 text-gray-400 hover:text-blue-600"
                                aria-label={`Visit ${link.label}`}
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}