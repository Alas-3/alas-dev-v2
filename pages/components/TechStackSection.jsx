import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaGit, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFramer, SiTypescript, SiFirebase, SiSupabase, SiAppwrite, SiVercel, SiAuth0 } from 'react-icons/si';

export default function TechStackSection() {
  const techStack = [
    { name: 'React', icon: FaReact },
    { name: 'JavaScript', icon: FaJs },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Git', icon: FaGit },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Appwrite', icon: SiAppwrite },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Auth0', icon: SiAuth0 },
  ];

  // Ensure the tech stack is not empty
  const displayTechStack = techStack.length > 0 ? techStack : [{ name: 'Loading...', icon: FaReact }];

  return (
    <motion.section
      id="skills"
      className="py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Tech Stack & Tools</h2>
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
    <div className="overflow-hidden col-span-2 md:col-span-3 lg:col-span-4">
      <div className="flex">
        <motion.div
          className="flex space-x-16"
          initial={{ x: 0 }} // Start from the left side
          animate={{
            x: isInView ? ['0%', '-50%'] : '0%', // Animate to the left
          }}
          transition={{
            duration: 20, // Adjust duration for smoother scrolling
            ease: 'linear',
            repeat: Infinity, // Repeat infinitely
          }}
        >
          {/* Render the tech stack icons, duplicating the array for seamless scrolling */}
          {[...techStack, ...techStack].map((tech, index) => {
            const Icon = tech.icon; // Assign the icon to a variable for rendering

            return (
              <div key={index} className="flex flex-col items-center">
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
