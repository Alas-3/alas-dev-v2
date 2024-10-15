// components/RootLayout.js

import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import NavBar from './components/Navbar'; // Ensure this import path is correct

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const router = useRouter(); // Get the router instance
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set the active section based on the current pathname
    const path = router.pathname; // Get the current pathname
    if (path === '/') {
      setActiveSection('home');
    } else if (path === '/about') {
      setActiveSection('about');
    } else if (path === '/projects') {
      setActiveSection('projects');
    } else {
      setActiveSection(''); // Reset if the page does not match any known section
    }
  }, [router.pathname]); // Run this effect when the pathname changes

  return (
    <div className={`${inter.className} min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100 overflow-x-hidden`}>
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <NavBar active={activeSection} /> {/* Use the NavBar here */}
      </motion.header>

      <main className="relative z-10">{children}</main>
      
      <motion.footer
        className="relative z-10 bg-black bg-opacity-50 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ace Labador. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
