"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import About from "./components/about";
import Projects from "./components/projects";
import Professional from "./components/professional";
import More from "./components/more";

export default function Home() {
	const [section, setSection] = useState("about");
	const [menuOpen, setMenuOpen] = useState(false);

	const handleNavClick = (sectionName) => {
		if (section !== sectionName) {
			setSection(sectionName);
		}
		setMenuOpen(false);
	};

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const urlSection = params.get("section");
		if (urlSection) {
			setSection(urlSection);
		}
	}, []);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		params.set("section", section);
		const newUrl = `${window.location.pathname}?${params.toString()}`;
		window.history.replaceState(null, "", newUrl);
		window.scrollTo({ top: 0 });
	}, [section]);

	return (
		<main className="">
			{/* Navbar */}
			<nav className="w-full bg-white shadow mb-8 sticky top-0 z-50">
				<div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
					<span className="text-3xl font-extrabold mb-2">brad hendrickson</span>
					<button
						className="md:hidden flex flex-col justify-center items-center w-10 h-10"
						aria-label="Toggle navigation menu"
						onClick={() => setMenuOpen((open) => !open)}
					>
						<span className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
						<span className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
						<span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
					</button>
					<div className="space-x-6 hidden md:flex">
						{["about", "projects", "professional", "more"].map((name) => (
							<button
								key={name}
								onClick={() => setSection(name)}
								className={`text-xl text-gray-700 hover:text-blue-500 font-bold ${section === name ? "underline text-blue-500" : ""}`}
							>
								{name}
							</button>
						))}
					</div>
				</div>
				<div
					className={`
						md:hidden px-4 pb-4 overflow-hidden transition-all duration-300
						${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
					`}
					style={{ transitionProperty: "max-height, opacity" }}
				>
					{["about", "projects", "professional", "more"].map((name) => (
						<button
							key={name}
							onClick={() => handleNavClick(name)}
							className={`block w-full text-left py-2 text-xl text-gray-700 hover:text-blue-500 font-bold ${section === name ? "underline text-blue-500" : ""}`}
						>
							{name}
						</button>
					))}
				</div>
			</nav>

			<div>
				{section === "about" && <section id="about"><About /></section>}
				{section === "projects" && <section id="projects"><Projects /></section>}
				{section === "professional" && <section id="professional"><Professional /></section>}
				{section === "more" && <section id="more"><More /></section>}
			</div>
		</main>
	);
}
