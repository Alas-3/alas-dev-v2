'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaApple, FaAmazon, FaFacebook, FaMicrosoft, FaGoogle, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiNextdotjs, SiVercel, SiMongodb, SiPostgresql, SiTailwindcss, SiFirebase, SiSupabase, SiAppwrite, SiVite, SiHtml5, SiCss3, SiExpress, SiAxios, SiNpm, SiGit, SiLighthouse, SiElectron } from 'react-icons/si'

const allIcons = [
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaApple, FaAmazon, FaFacebook, FaMicrosoft, FaGoogle, FaGithub, FaExternalLinkAlt,
  SiJavascript, SiTypescript, SiNextdotjs, SiVercel, SiMongodb, SiPostgresql, SiTailwindcss, SiFirebase, SiSupabase, SiAppwrite, 
  SiVite, SiHtml5, SiCss3, SiExpress, SiAxios, SiNpm, SiGit, SiLighthouse, SiElectron
]

function StaticElement({ Icon, position }) {
  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${position.rotate}deg)`
      }}
    >
      <Icon className="text-gray-600 opacity-20" size={30 + Math.random() * 20} />
    </div>
  )
}

export default function Custom404() {
  const [isClient, setIsClient] = useState(false)
  const [iconPositions, setIconPositions] = useState([])

  useEffect(() => {
    setIsClient(true)
    document.body.style.overflow = 'hidden'

    const generatePositions = () => {
      const positions = []
      const numIcons = allIcons.length
      const gridSize = Math.ceil(Math.sqrt(numIcons))

      for (let i = 0; i < numIcons; i++) {
        const row = Math.floor(i / gridSize)
        const col = i % gridSize
        positions.push({
          x: (col / (gridSize - 1)) * 100,
          y: (row / (gridSize - 1)) * 100,
          rotate: Math.random() * 360
        })
      }

      return positions.map(pos => ({
        x: pos.x + (Math.random() - 0.5) * 10, // Add some randomness
        y: pos.y + (Math.random() - 0.5) * 10,
        rotate: pos.rotate
      }))
    }

    setIconPositions(generatePositions())

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {isClient && (
        <div className="absolute inset-0">
          {allIcons.map((Icon, index) => (
            <StaticElement 
              key={`icon-${index}`} 
              Icon={Icon}
              position={iconPositions[index] || { x: 0, y: 0, rotate: 0 }}
            />
          ))}
        </div>
      )}
      <div className="text-center z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
            404
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}