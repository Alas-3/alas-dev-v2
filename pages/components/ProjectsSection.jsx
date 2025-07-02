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
  SiTypescript,
  SiExpress
} from "react-icons/si";
import { SiElectron } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
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
  OAuth: TbBrandOauth,
  Typescript: SiTypescript,
  Express: SiExpress,
};

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Registrar",
      description:
        "A Full Stack Queue Management Kiosk System for School Registrars built using ReactJS, ElectronJS and Firebase",
      techStack: ["React", "Node.js", "Electron", "Firebase"],
      liveUrl: "",
      repoUrl: "",
      gradient: "from-blue-500/20 to-purple-600/20",
    },
    {
      title: "Kakureta",
      description:
        "A Full Stack Private Anime Streaming Web App built using NextJS, Supabase, Axios & Custom API using TypeScript",
      techStack: ["Next.js", "Node.js", "Axios", "Typescript", "Supabase"],
      liveUrl: "https://kakureta.vercel.app/",
      repoUrl: "https://github.com/Alas-3/kakureta",
      gradient: "from-green-500/20 to-blue-600/20",
    },
    {
      title: "Syrincal System",
      description:
        "A Full-Stack B2B Ordering platform with integrated Inventory System & Delivery Tracker for a trading company built using NextJS & Supabase",
      techStack: ["Next.js", "Tailwind CSS", "Node.js", "Supabase", "OAuth"],
      liveUrl: "",
      repoUrl: "",
      gradient: "from-purple-500/20 to-pink-600/20",
    },
    {
      title: "DRA Jewelry",
      description:
        "A Website built for an established Jewelry Business that allows clients to request personalized consultations with the owner",
      techStack: ["Next.js", "Node.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://dra-jewelry.vercel.app/",
      repoUrl: "",
      gradient: "from-orange-500/20 to-red-600/20",
    },
  ];

  return (
    <section className="py-10 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-gray-200 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Showcasing my recent development work and creative solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-gray-900/90 rounded-2xl" />

                {/* Card Content */}
                <div className="relative p-6 md:p-8 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-colors duration-300 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-200 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.techStack.map((tech) => {
                      const TechIcon = techStack[tech];
                      return TechIcon ? (
                        <div
                          key={tech}
                          className="bg-gray-800/80 rounded-lg px-3 py-1.5 flex items-center gap-1.5 border border-gray-700/50"
                        >
                          <TechIcon className="text-gray-300 text-sm" />
                          <span className="text-gray-200 text-xs font-medium">{tech}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-auto md:flex md:justify-between md:w-full">
                    <a
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                        project.liveUrl 
                          ? "bg-gray-800/80 text-white hover:bg-gray-700/80 border border-gray-700/50 hover:border-green-400/50" 
                          : "bg-gray-800/40 text-gray-500 cursor-default pointer-events-none border border-gray-700/30"
                      }`}
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5 mr-2" />
                      Live Preview
                    </a>
                    
                    <a
                      href={project.repoUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                        project.repoUrl
                          ? "bg-gray-800/80 text-white hover:bg-gray-700/80 border border-gray-700/50 hover:border-blue-500/50"
                          : "bg-gray-800/40 text-gray-500 cursor-default pointer-events-none border border-gray-700/30"
                      }`}
                    >
                      <FaGithub className="w-3.5 h-3.5 mr-2" />
                      View Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/projects#projectsection"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-500/10 text-white rounded-xl hover:from-green-400/20 hover:to-blue-500/20 transition-all duration-300 group border border-green-400/20"
            >
              <span className="text-gray-200 group-hover:text-white">
                View All Projects
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}