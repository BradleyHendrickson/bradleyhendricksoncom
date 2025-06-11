"use client";
import { useState } from "react";
import Image from "next/image";
import About from "./components/about";
import Projects from "./components/projects";
import Professional from "./components/professional";
import More from "./components/more";

export default function Home() {
  const [section, setSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionName) => {
    setSection(sectionName);
    setMenuOpen(false); // Close menu on mobile after click
  };

  return (
    <main className="">
      {/* Navbar */}
      <nav className="w-full bg-white shadow mb-8">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-3xl font-extrabold mb-2">brad hendrickson</span>
          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
          {/* Desktop nav */}
          <div className="space-x-6 hidden md:flex">
            <button
              onClick={() => setSection("about")}
              className={`text-xl text-gray-700 hover:text-blue-500 font-bold ${
                section === "about" ? "underline text-blue-500" : ""
              }`}
            >
              about
            </button>
            <button
              onClick={() => setSection("projects")}
              className={`text-xl text-gray-700 hover:text-blue-500 font-bold ${
                section === "projects" ? "underline text-blue-500" : ""
              }`}
            >
              projects
            </button>
            <button
              onClick={() => setSection("professional")}
              className={`text-xl text-gray-700 hover:text-blue-500 font-bold ${
                section === "professional" ? "underline text-blue-500" : ""
              }`}
            >
              professional
            </button>
            <button
              onClick={() => setSection("more")}
              className={`text-xl text-gray-700 hover:text-blue-500 font-bold ${
                section === "more" ? "underline text-blue-500" : ""
              }`}
            >
              more
            </button>
          </div>
        </div>
        {/* Mobile nav with animation */}
        <div
          className={`
            md:hidden px-4 pb-4 overflow-hidden transition-all duration-300
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
          `}
          style={{ transitionProperty: "max-height, opacity" }}
        >
          <button
            onClick={() => handleNavClick("about")}
            className={`block w-full text-left py-2 text-xl text-gray-700 hover:text-blue-500 font-bold ${
              section === "about" ? "underline text-blue-500" : ""
            }`}
          >
            about
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className={`block w-full text-left py-2 text-xl text-gray-700 hover:text-blue-500 font-bold ${
              section === "projects" ? "underline text-blue-500" : ""
            }`}
          >
            projects
          </button>
          <button
            onClick={() => handleNavClick("professional")}
            className={`block w-full text-left py-2 text-xl text-gray-700 hover:text-blue-500 font-bold ${
              section === "professional" ? "underline text-blue-500" : ""
            }`}
          >
            professional
          </button>
          <button
            onClick={() => handleNavClick("more")}
            className={`block w-full text-left py-2 text-xl text-gray-700 hover:text-blue-500 font-bold ${
              section === "more" ? "underline text-blue-500" : ""
            }`}
          >
            more
          </button>
        </div>
      </nav>

      <div>
        {section === "about" && (
          <section id="about">
            <About />
          </section>
        )}

        {section === "projects" && (
          <section id="projects">
            <Projects />
          </section>
        )}

        {section === "professional" && (
          <section id="professional">
            <Professional />
          </section>
        )}

        {section === "more" && (
          <section id="more">
            <More />
          </section>
        )}
      </div>
    </main>
  );
}
