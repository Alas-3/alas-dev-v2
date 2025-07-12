import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaGit, FaGithub, FaSwift, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiRadixui, SiFramer, SiRedux, SiTypescript, SiFirebase, SiSupabase, SiAppwrite, SiVercel, SiAuth0, SiAxios, SiElectron, SiVite, SiNpm, SiLighthouse, SiExpress, SiCheerio, SiPhp, SiGithubcopilot, SiMysql, SiGithubactions } from 'react-icons/si';
import ShadcnIcon from './icons/ShadcnIcon';

export default function TechStackSection() {
  const techStack = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3 },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Redux', icon: SiRedux },
    { name: 'Radix UI', icon: SiRadixui },
    { name: 'shadcn/ui', icon: ShadcnIcon },
    { name: 'Vite', icon: SiVite },
    { name: 'Electron', icon: SiElectron },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: FaNodeJs }, // Using FaJs as a placeholder for Node.js
    { name: 'PHP', icon: SiPhp },
    { name: 'MySQL', icon: SiMysql },
    { name: 'WordPress', icon: FaWordpress },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Swift', icon: FaSwift }, // Added Swift
    { name: 'Axios', icon: SiAxios },
    { name: 'Express', icon: SiExpress }, // Added Express
    { name: 'Cheerio', icon: SiCheerio }, // Added Cheerio
    { name: 'Auth0', icon: SiAuth0 },
    { name: 'Git', icon: FaGit },
    { name: 'GitHub', icon: FaGithub },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Copilot', icon: SiGithubcopilot },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Appwrite', icon: SiAppwrite },
    { name: 'Vercel', icon: SiVercel },
    { name: 'npm', icon: SiNpm },
    { name: 'Lighthouse', icon: SiLighthouse },
  ];

  // Ensure the tech stack is not empty
  const displayTechStack = techStack.length > 0 ? techStack : [{ name: 'Loading...', icon: FaReact }];

  return (
    <motion.section
      id="skills"
      className="py-20 tech-stack-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Tech Stack & Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
        <ScrollingRow techStack={displayTechStack} />
      </div>
    </motion.section>
  );
}

function ScrollingRow({ techStack }) {
  return (
    <div className="col-span-2 md:col-span-3 lg:col-span-4">
      <div className="flex">
        <motion.div
          className="flex space-x-16"
          animate={{
            x: ['0%', '-50%'], // Move halfway through the duplicated array
          }}
          transition={{
            duration: 60, // Animation speed
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {/* Quintuple the array for ultra-smooth infinite scrolling */}
          {[...techStack, ...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div key={`${tech.name}-${index}`} className="flex flex-col items-center min-w-max group">
                <Icon className="text-5xl mb-2 text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
                <span className="text-gray-200 group-hover:text-blue-400 whitespace-nowrap text-sm transition-colors duration-300">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
