"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute" />
      <div className="absolute" />
      <div
        className="absolute inset-y-0 right-0 w-1/2 "
        style={{
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:order-last"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/logo.png"  // Update to your image path
              alt="Ace Labador"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full max-w-3xl lg:w-1/2 lg:pr-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-center lg:text-left sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">Ace Labador</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Web Developer
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground text-center lg:text-left sm:text-2xl lg:text-3xl">
            Crafting elegant, responsive, and user-centric web experiences. Specialized in React, Next.js, and cutting-edge front-end technologies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="mailto:alas.dev@outlook.com"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition hover:bg-primary/90 sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            <motion.a
              href="/ResumeV2.pdf" // Link to the resume in the public folder
              target="_blank" // Opens the PDF in a new tab
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-transparent bg-black px-5 py-3 text-base font-medium text-white transition hover:bg-gray-800 sm:text-lg"
              style={{
                borderImage: 'linear-gradient(to right, #68D391, #4299E1) 1',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
