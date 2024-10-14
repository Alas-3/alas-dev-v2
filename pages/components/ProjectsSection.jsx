import { motion } from 'framer-motion'
import { FaReact, FaJs, FaGithub, FaExternalLinkAlt, FaCss3 } from 'react-icons/fa'  // Added FaCss3 import
import { SiTailwindcss, SiNextdotjs, SiFramer } from 'react-icons/si'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1 and its features.',
      techStack: [FaReact, SiTailwindcss, SiNextdotjs],
      liveUrl: 'https://project1.com',
      repoUrl: 'https://github.com/yourusername/project1',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2 and its features.',
      techStack: [FaJs, SiFramer, FaCss3],  // FaCss3 used here
      liveUrl: 'https://project2.com',
      repoUrl: 'https://github.com/yourusername/project2',
      image: '/placeholder.svg?height=300&width=400',
    },
  ]

  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)' }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-2 mb-4">
                {project.techStack.map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="text-2xl text-blue-400" />
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Preview
                </motion.a>
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-2" /> Repository
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
