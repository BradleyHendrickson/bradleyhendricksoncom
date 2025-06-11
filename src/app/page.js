"use client";
import { useState } from "react";
import Image from "next/image";
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  const [section, setSection] = useState("about");

  return (
    <main className="">
      {/* Navbar */}
      <nav className="w-full bg-white shadow mb-8">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-3xl font-extrabold mb-2">brad hendrickson</span>
          <div className="space-x-6">
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
          </div>
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
      </div>  
    </main>
  );
}
