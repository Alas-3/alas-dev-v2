import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiSupabase, SiAppwrite, SiVite, SiHtml5, SiCss3, SiJavascript, SiExpress, SiAxios, SiGithub, SiNpm, SiVercel, SiGit, SiLighthouse, SiElectron} from 'react-icons/si';

const techStack = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' }, // HTML5 color
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },  // CSS3 color
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }, // JavaScript color
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#F2F3F4' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Electron', icon: SiElectron, color: '#F2F3F4' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Axios', icon: SiAxios, color: '#5A29E3' }, // Axios color
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Appwrite', icon: SiAppwrite, color: '#F02E65' },
    { name: 'GitHub', icon: SiGithub, color: '#F2F3F4' }, // GitHub color
    { name: 'npm', icon: SiNpm, color: '#CB3837' }, // npm color
    { name: 'Vercel', icon: SiVercel, color: '#F2F3F4' }, // Vercel color
    { name: 'Git', icon: SiGit, color: '#F05032' }, // Git color
    { name: 'Lighthouse', icon: SiLighthouse, color: '#F9BC24' }, // Lighthouse color

  ];


  const projects = [
    {
      title: 'E-Registrar',
      description: 'A Full Stack Queue Management Kiosk System for School Registrars built using ReactJS, ElectronJS and Firebase',
      favicon: '/registrarlogo.png',
      techStack: ['React', 'Electron', 'Firebase'],
      livePreview: 'https://project1.com',
      githubRepo: 'https://github.com/yourusername/project1',
      bgColor: 'from-blue-600 to-indigo-600', // School colors
    },
    {
      title: 'alasportfolio',
      description: 'Version 1 of my Personal Portfolio built using React, Vite & deployed using Vercel',
      favicon: '/logo.png',
      techStack: ['React', 'Vite', 'Vercel'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-purple-500 to-pink-500', // Creative and personal
    },
    {
      title: 'Himitsu',
      description: 'A Full Stack Private Anime Streaming Web App built using NextJS, Supabase, Axios & deployed using Vercel',
      favicon: '/personal_logo.png',
      techStack: ['Next.js', 'Supabase', 'Axios', 'Tailwind CSS', 'Vercel'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-red-500 to-yellow-500', // Anime-inspired colors
    },
    {
      title: 'StormSignal',
      description: 'A Location-based Weather Web App with real-time typhoon alerts and warnings from PAGASA',
      favicon: '/stormlogo.png',
      techStack: ['Next.js', 'Axios', 'Tailwind CSS', 'Vercel'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-blue-400 to-gray-500', // Storm clouds
    },
    {
      title: 'QuiRky',
      description: 'A QR Code Generator Web App built using NextJS & Tailwind CSS',
      favicon: '/qrlogo.png',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-green-400 to-blue-500', // QR code colors
    },
    {
      title: 'D.R.A Jewelry',
      description: 'A Website built for an established Jewelry Business that allows clients to request personalized consulations with the owner',
      favicon: '/dralogo.png',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-yellow-300 to-blue-400', // Sun and sky
    },
    {
      title: 'AniGuess',
      description: 'A Web App for an Anime-related Guessing Game utilizing Open Trivia API',
      favicon: '/guesslogo.png',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-pink-400 to-purple-600', // Anime-inspired colors
    },
    {
      title: 'UniFind',
      description: 'A University Finder Web App for select countries utilizing HipoLabs API for data and rankings',
      favicon: '/unilogo.png',
      techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-green-600 to-blue-600', // Academic colors
    },
    {
      title: 'BAHA',
      description: 'A Full Stack Flood Awarenees Website built using HTML, CSS, JavaScript and PHP',
      favicon: '/bahalogo.png',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      livePreview: 'https://project2.com',
      githubRepo: 'https://github.com/yourusername/project2',
      bgColor: 'from-blue-700 to-teal-500', // Water-inspired colors
    },
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
          <h1 id="projects-title1" className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pt-20">
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
          id="projectsection"
          className='pt-10'
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500 pt-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`p-6 bg-gradient-to-br ${project.bgColor} h-[300px] flex flex-col`}>
                  <div className="flex items-center mb-4">
                    <img src={project.favicon} alt={`${project.title} favicon`} className="w-10 h-10 mr-3 rounded-full bg-white p-1" />
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-100 mb-4 flex-grow overflow-hidden">{project.description}</p>
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