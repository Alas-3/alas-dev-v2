import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiSupabase, SiAppwrite } from 'react-icons/si';

const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#F2F3F4' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Appwrite', icon: SiAppwrite, color: '#F02E65' },
];

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1 and its features.',
    favicon: '/favicon1.ico',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
    livePreview: 'https://project1.com',
    githubRepo: 'https://github.com/yourusername/project1',
    bgColor: 'from-purple-400 to-indigo-400',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2 and its features.',
    favicon: '/favicon2.ico',
    techStack: ['React', 'Firebase', 'Node.js'],
    livePreview: 'https://project2.com',
    githubRepo: 'https://github.com/yourusername/project2',
    bgColor: 'from-blue-400 to-teal-400',
  },
  // Add more projects as needed
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="projects-container mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 id="projects-title1" className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Things I've made trying to put my dent in the universe.
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I've worked on a diverse range of projects over the years, and I'm proud of the strides I've made in my development journey. My primary tech stack revolves around React, Next.js, and Tailwind CSS, which I utilize to develop intuitive and responsive front-end web apps. On the backend, I leverage BaaS platforms like Firebase, Supabase, and Appwrite to create seamless full-stack web applications that scale effectively. Many of these projects are open-source and available for others to explore. If you're interested in any of the projects I've worked on, please feel free to check them out and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
          </p>
        </motion.div>

        <motion.section
          className="mb-24"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Tech Stack</h2>
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
                <tech.icon className="text-6xl mb-3" style={{ color: tech.color }} />
                <span className="text-sm font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`p-6 bg-gradient-to-br ${project.bgColor}`}>
                  <div className="flex items-center mb-4">
                    <img src={project.favicon} alt={`${project.title} favicon`} className="w-10 h-10 mr-3 rounded-full bg-white p-1" />
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-100 mb-4">{project.description}</p>
                  <div className="flex mb-4">
                    {project.techStack.map((tech) => {
                      const TechIcon = techStack.find(t => t.name === tech)?.icon;
                      return TechIcon ? (
                        <TechIcon key={tech} className="text-2xl mr-2 text-white" />
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
  );
}