import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isClicking, setIsClicking] = useState(false);
  const navRef = useRef(null);

  const handleScroll = () => {
    if (isClicking) return;
    const sections = ['home', 'projects', 'experience'];
    let currentSection = activeSection;

    const viewportHeight = window.innerHeight;
    let maxVisiblePercentage = 0;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visiblePercentage = (visibleHeight / element.offsetHeight) * 100;

        if (visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage;
          currentSection = section;
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClicking, activeSection]);

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`a[href="#${activeSection}"]`);
      if (activeElement) {
        const navRect = navRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();
        const scrollLeft = activeRect.left - navRect.left - (navRect.width / 2) + (activeRect.width / 2);
        navRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

  return (
    <div className={`${inter.className} min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100 overflow-x-hidden`}>
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <nav ref={navRef} className="container mx-auto px-6 py-4 overflow-x-auto scrollbar-hide">
          <ul className="flex justify-around space-x-4 min-w-max">
            {['Home', 'Projects', 'Experience'].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <li key={item} className="relative flex items-center">
                  <Link 
                    href={`#${sectionId}`} 
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsClicking(true);
                      setActiveSection(sectionId);
                      const targetElement = document.getElementById(sectionId);
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                      }
                      setTimeout(() => setIsClicking(false), 1000);
                    }}
                  >
                    {item}
                  </Link>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.header>
      <main className="relative z-10 pt-20">{children}</main>
      <motion.footer
        className="relative z-10 bg-black bg-opacity-50 py-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}