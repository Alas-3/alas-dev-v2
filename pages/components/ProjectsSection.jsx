'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaJs, FaGithub, FaExternalLinkAlt, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFramer, SiVite, SiVercel, SiFirebase } from 'react-icons/si'; // Import SiFirebase
import { SiElectron } from 'react-icons/si'; // Import Electron icon
import Link from 'next/link';

const techStack = {
  React: FaReact,
  JavaScript: FaJs,
  CSS: FaCss3,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  Framer: SiFramer,
  Vite: SiVite,
  Vercel: SiVercel,
  'Node.js': FaNodeJs,
  Electron: SiElectron, // Add Electron here
  Firebase: SiFirebase,  // Add Firebase here
};

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Registrar',
      description: 'A Full Stack Queue Management Kiosk System for School Registrars built using ReactJS, ElectronJS and Firebase',
      techStack: ['React', 'Electron', 'Firebase'],
      liveUrl: 'https://project1.com',
      repoUrl: 'https://github.com/yourusername/project1',
      bgColor: 'gray-800',
    },
    {
      title: 'D.R.A Jewelry',
      description: 'A Website built for an established Jewelry Business that allows clients to request personalized consulations with the owner',
      techStack: ['Next.js', 'Tailwind CSS',],
      liveUrl: 'https://project2.com',
      repoUrl: 'https://github.com/yourusername/project2',
      bgColor: 'gray-800',
    },
  ]

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`p-6 bg-gradient-to-br ${project.bgColor} h-[300px] flex flex-col`}>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-100 mb-4 flex-grow overflow-hidden">{project.description}</p>
              <div className="flex mb-4">
                {project.techStack.map((tech) => {
                  const TechIcon = techStack[tech];
                  return TechIcon ? (
                    <TechIcon key={tech} className="text-2xl mr-2 text-white" />
                  ) : null;
                })}
              </div>
              <div className="flex justify-between">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Preview
                </motion.a>
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-1" /> View Repo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
      <Link
              href="/projects#projectsection"
              className="inline-block px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-300 opacity-70 hover:opacity-100"
            >
              Show All Projects
            </Link>
      </div>
    </motion.section>
  )
}