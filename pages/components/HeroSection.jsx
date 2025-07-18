"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const [deviceType, setDeviceType] = useState("unknown");

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setDeviceType("ios");
      }
      // Android detection
      else if (/android/i.test(userAgent)) {
        setDeviceType("android");
      }
      // Other devices
      else {
        setDeviceType("other");
      }
    }
  }, []);
  return (
    <section
      className={`relative min-h-screen-dynamic overflow-hidden bg-background mt-12 md:mt-0  ${
        deviceType === "android" ? "pt-6" : deviceType === "ios" ? "-mt-3" : ""
      }`}
    >
      <div className="absolute" />
      <div className="absolute" />
      <div
        className="absolute inset-y-0 right-0 w-1/2 "
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen-dynamic px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:order-last"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/herologo.png"
              alt="Ace Labador"
              fill
              priority // Add this
              quality={80} // Optimize quality
              className="rounded-full object-cover shadow-2xl"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
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
            <span className="block text-white text-4xl md:text-6xl 1024:text-4xl 1440:text-6xl 2560:text-7xl lg:text-6xl">
              Ace Labador{" "}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 pb-2 text-3xl md:text-6xl 1024:text-4xl 1440:text-6xl 2560:text-7xl lg:text-4xl">
            &lt;Software Engineer /&gt;
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground text-pretty text-justify lg:text-left sm:text-2xl lg:text-3xl">
            Crafting elegant, responsive, and user-centric web applications.
            Specialized in React, Next.js, and modern web technologies.
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
              href="/Work Resume-Labador, Christopher Ace.pdf" // Link to the resume in the public folder
              target="_blank" // Opens the PDF in a new tab
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-transparent bg-black px-5 py-3 text-base font-medium text-white transition hover:bg-gray-800 sm:text-lg"
              style={{
                borderImage: "linear-gradient(to right, #68D391, #4299E1) 1",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </div>

          {/* Social Icons Section */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/alasdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 opacity-50 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={36} />
            </motion.a>
            <motion.a
              href="https://github.com/Alas-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 opacity-50 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={36} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
