import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
  SiAppwrite,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiAxios,
  SiGithub,
  SiNpm,
  SiVercel,
  SiGit,
  SiLighthouse,
  SiElectron,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" }, // HTML5 color
  { name: "CSS", icon: SiCss3, color: "#1572B6" }, // CSS3 color
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, // JavaScript color
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Next.js", icon: SiNextdotjs, color: "#F2F3F4" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Electron", icon: SiElectron, color: "#F2F3F4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Axios", icon: SiAxios, color: "#5A29E3" }, // Axios color
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
  { name: "GitHub", icon: SiGithub, color: "#F2F3F4" }, // GitHub color
  { name: "npm", icon: SiNpm, color: "#CB3837" }, // npm color
  { name: "Vercel", icon: SiVercel, color: "#F2F3F4" }, // Vercel color
  { name: "Git", icon: SiGit, color: "#F05032" }, // Git color
  { name: "Lighthouse", icon: SiLighthouse, color: "#F9BC24" }, // Lighthouse color
];

const projects = [
  {
    title: "E-Registrar",
    description:
      "A Full Stack Queue Management Kiosk System for School Registrars built using ReactJS, ElectronJS and Firebase",
    favicon: "/images/registrarlogo.png",
    techStack: ["React", "Electron", "Firebase"],
    livePreview: "",
    githubRepo: "",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "alasportfolio",
    description:
      "Version 1 of my Personal Portfolio built using React, Vite & deployed using Vercel",
    favicon: "/images/logo.png",
    techStack: ["React", "Vite", "Vercel"],
    livePreview: "https://alas-dev.vercel.app",
    githubRepo: "https://github.com/Alas-3/alas.dev",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "Himitsu",
    description:
      "A Full Stack Private Anime Streaming Web App built using NextJS, Supabase, Axios & deployed using Vercel",
    favicon: "/images/personal_logo.png",
    techStack: ["Next.js", "Supabase", "Axios", "Tailwind", "Vercel"],
    livePreview: "https://projecthimitsu.vercel.app",
    githubRepo: "https://github.com/Alas-3/asdfghjkl",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "StormSignal",
    description:
      "A Location-based Weather Web App with real-time typhoon alerts and warnings from PAGASA",
    favicon: "/images/stormlogo.png",
    techStack: ["Next.js", "Axios", "Tailwind", "Vercel"],
    livePreview: "https://typhoon-tracker-ph.vercel.app",
    githubRepo: "https://github.com/Alas-3/typhoon-tracker-ph",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "D.R.A Jewelry",
    description:
      "A Website built for an established Jewelry Business that allows clients to request personalized consulations with the owner",
    favicon: "/images/dralogo.png",
    techStack: ["Next.js", "Tailwind", "Vercel"],
    livePreview: "https://dra-jewelry.vercel.app",
    githubRepo: "https://github.com/Alas-3/dra-jewelry",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "QuiRky",
    description:
      "A QR Code Generator Web App built using NextJS & Tailwind CSS",
    favicon: "/images/qrlogo.png",
    techStack: ["Next.js", "Tailwind", "Vercel"],
    livePreview: "https://qr-generator-app-umber.vercel.app/",
    githubRepo: "https://github.com/Alas-3/qr-generator-app",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "AniGuess",
    description:
      "A Web App for an Anime-related Guessing Game utilizing Open Trivia API",
    favicon: "/images/guesslogo.png",
    techStack: ["Next.js", "Tailwind", "Vercel"],
    livePreview: "https://anime-guess-9k9b-sepia.vercel.app/",
    githubRepo: "https://github.com/Alas-3/anime-guess",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "UniFind",
    description:
      "A University Finder Web App for select countries utilizing HipoLabs API for data and rankings",
    favicon: "/images/unilogo.png",
    techStack: ["Next.js", "Tailwind", "Vercel"],
    livePreview: "https://uni-finder-beige.vercel.app/",
    githubRepo: "https://github.com/Alas-3/uni-finder",
    bgColor: "from-gray-800 to-gray-900",
  },
  {
    title: "BAHA",
    description:
      "A Full Stack Flood Awarenees Website built using HTML, CSS, JavaScript and PHP",
    favicon: "/images/bahalogo.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    livePreview: "https://baha-finals.vercel.app/",
    githubRepo: "https://github.com/Alas-3/BAHA-FINALS",
    bgColor: "from-gray-800 to-gray-900",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Christopher Ace Labador | Projects</title>
        <meta
          name="description"
          content="Explore the portfolio projects of Ace Labador, including full-stack web apps built with React, Next.js, Firebase, and Supabase."
        />
        <meta property="og:title" content="Ace Labador | Projects" />
        <meta
          property="og:description"
          content="Discover full-stack web apps developed by Ace Labador using cutting-edge technologies like React, Next.js, Firebase, and Supabase."
        />
        <meta
          property="og:image"
          content="https://acelabador.vercel.app/logo.png"
        />
        <meta
          property="og:url"
          content="https://acelabador.vercel.app/projects"
        />
        <link rel="canonical" href="https://acelabador.vercel.app/projects" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="projects-container mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1
              id="projects-title1"
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pt-15"
            >
              Things I've made trying to put my dent in the universe.
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I've developed a range of projects over the years, focusing on
              front-end web apps with React, Next.js, and Tailwind CSS. For the
              backend, I use BaaS platforms like Firebase, Supabase, and
              Appwrite to build scalable full-stack applications. Many of these
              projects are open-source, and I'm always open to feedback or
              collaboration. Feel free to check them out and share any
              suggestions you have!
            </p>
          </motion.div>

          <motion.section
            className="mb-24"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <tech.icon
                    className="text-6xl mb-3"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            id="projectsection"
            className="pt-10"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500 pt-10">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`p-6 bg-gradient-to-br ${project.bgColor} h-[300px] flex flex-col`}
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={project.favicon}
                        alt={`${project.title} favicon`}
                        className="w-10 h-10 mr-3 rounded-full bg-white p-1"
                      />
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-100 mb-4 flex-grow overflow-hidden">
                      {project.description}
                    </p>
                    <div className="flex mb-4">
                      {project.techStack.map((tech) => {
                        const TechIcon = techStack.find(
                          (t) => t.name === tech
                        )?.icon;
                        return TechIcon ? (
                          <TechIcon
                            key={tech}
                            className="text-2xl mr-2 text-white"
                          />
                        ) : null;
                      })}
                    </div>
                    <div className="flex justify-between">
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Live Preview
                      </a>
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors duration-300 flex items-center"
                      >
                        <FaGithub className="mr-1" /> View Repo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
