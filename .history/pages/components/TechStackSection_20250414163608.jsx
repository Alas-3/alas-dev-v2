import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaGit, FaGithub, FaSwift, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFramer, SiTypescript, SiFirebase, SiSupabase, SiAppwrite, SiVercel, SiAuth0, SiAxios, SiElectron, SiVite, SiNpm, SiLighthouse, SiExpress, SiCheerio, SiPhp } from 'react-icons/si';

export default function TechStackSection() {
  const techStack = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3 },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Vite', icon: SiVite },
    { name: 'Electron', icon: SiElectron },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: FaNodeJs }, // Using FaJs as a placeholder for Node.js
    { name: 'PHP', icon: SiPhp },
    { name: 'WordPress', icon: FaWordpress },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Swift', icon: FaSwift }, // Added Swift
    { name: 'Axios', icon: SiAxios },
    { name: 'Express', icon: SiExpress }, // Added Express
    { name: 'Cheerio', icon: SiCheerio }, // Added Cheerio
    { name: 'Auth0', icon: SiAuth0 },
    { name: 'Git', icon: FaGit },
    { name: 'GitHub', icon: FaGithub },
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
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Tech Stack & Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
        <ScrollingRow techStack={displayTechStack} />
      </div>
    </motion.section>
  );
}

function ScrollingRow({ techStack }) {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <div className="col-span-2 md:col-span-3 lg:col-span-4">
      <div className="flex ">
        <motion.div
          className="flex space-x-16"
          initial={{ x: 0 }}
          animate={{
            x: isInView ? ['0%', '-100%'] : '0%', // Changed from -50% to -100%
          }}
          transition={{
            duration: 60,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div key={index} className="flex flex-col items-center min-w-max">
                <Icon className="text-5xl mb-2 text-gray-400" />
                <span className="text-gray-400 whitespace-nowrap text-sm">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
