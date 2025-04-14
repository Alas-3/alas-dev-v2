"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaGithub,
  FaExternalLinkAlt,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSupabase,
  SiAxios,
  SiNextdotjs,
  SiFramer,
  SiVite,
  SiVercel,
  SiFirebase,
} from "react-icons/si";
import { SiElectron } from "react-icons/si";
import Link from "next/link";

const techStack = {
  React: FaReact,
  JavaScript: FaJs,
  CSS: FaCss3,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  Framer: SiFramer,
  Vite: SiVite,
  Vercel: SiVercel,
  "Node.js": FaNodeJs,
  Electron: SiElectron,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Axios: SiAxios,
};

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Registrar",
      description:
        "A Full Stack Queue Management Kiosk System for School Registrars built using ReactJS, ElectronJS and Firebase",
      techStack: ["React", "Electron", "Firebase"],
      liveUrl: "",
      repoUrl: "",
      bgColor: "bg-gradient-to-br from-white/5 to-transparent",
    },
    {
      title: "Kakureta",
      description:
        "A Full Stack Private Anime Streaming Web App built using NextJS, Supabase, Axios & deployed using Vercel",
      techStack: ["Next.js", "Tailwind CSS", "Supabase", "Axios"],
      liveUrl: "https://kakureta.vercel.app/",
      repoUrl: "https://github.com/Alas-3/kakureta",
      bgColor: "bg-gradient-to-br from-white/5 to-transparent",
    },
    {
      title: "Syrincal System",
      description:
        "A Full-Stack Inventory System & Delivery Tracker for a trading company built using NextJS & Supabase",
      techStack: ["Next.js", "Tailwind CSS", "Supabase"],
      liveUrl: "",
      repoUrl: "https://github.com/Alas-3/syrincal-system",
      bgColor: "bg-gradient-to-br from-white/5 to-transparent",
    },
    {
      title: "DRA Jewelry",
      description:
        "A Website built for an established Jewelry Business that allows clients to request personalized consultations with the owner",
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "",
      repoUrl: "https://github.com/Alas-3/syrincal-system",
      bgColor: "bg-gradient-to-br from-white/5 to-transparent",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-10 md:py-24  px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`p-8 ${project.bgColor} h-full flex flex-col`}>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-100 mb-6 flex-grow text-sm md:text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex mb-6 space-x-3">
                  {project.techStack.map((tech) => {
                    const TechIcon = techStack[tech];
                    return TechIcon ? (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.2 }}
                        className="bg-white bg-opacity-20 rounded-full p-2"
                      >
                        <TechIcon className="text-2xl text-white" />
                      </motion.div>
                    ) : null;
                  })}
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                  <motion.a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white transition-colors duration-300 flex items-center justify-center bg-white bg-opacity-20 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base w-full sm:w-auto ${
                      !project.liveUrl && "opacity-50 cursor-not-allowed"
                    }`}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!project.liveUrl}
                  >
                    <FaExternalLinkAlt className="mr-2 text-xs sm:text-sm" />
                    <span>Live Preview</span>
                  </motion.a>
                  <motion.a
                    href={project.repoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white transition-colors duration-300 flex items-center justify-center bg-white bg-opacity-20 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base w-full sm:w-auto ${
                      !project.repoUrl && "opacity-50 cursor-not-allowed"
                    }`}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!project.repoUrl}
                  >
                    <FaGithub className="mr-2 text-xs sm:text-sm" />
                    <span>View Repo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects#projectsection"
            className="inline-block px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-300 opacity-70 hover:opacity-100"
          >
            Show All Projects
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
