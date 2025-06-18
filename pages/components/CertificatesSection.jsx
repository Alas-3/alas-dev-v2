"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    id: 1,
    title: "Industry Professional Credentials Track",
    issuer: "US-ASEAN",
    date: "2024",
    image: "/images/STIC_logo.jpg",
    verificationLink: "images/US-ASEAN_STIC_Cert.pdf",
  },
  {
    id: 2,
    title: "IBM Full-Stack JavaScript Developer",
    issuer: "IBM",
    date: "2025",
    image:
      "https://images.credly.com/size/680x680/images/ff8f2956-43b1-47d1-abba-1db32724b24b/image.png",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/specialization/9MX50VHJBGHZ",
  },
  {
    id: 3,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2024",
    image:
      "https://images.credly.com/size/600x680/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png",
    verificationLink:
      "https://coursera.org/share/dfd7fc30f72444b5795e968b6de56810",
  },
  {
    id: 4,
    title: "IBM Front-End Developer",
    issuer: "IBM",
    date: "2024",
    image:
      "https://images.credly.com/size/680x680/images/e646f624-ca3d-4917-9e90-16a051497bdb/image.png",
    verificationLink:
      "https://coursera.org/share/7a5e5733ca88bd52efc7d81f52dece53",
  },
  {
    id: 5,
    title: "Google IT Support",
    issuer: "Google",
    date: "2024",
    image:
      "https://images.credly.com/size/680x680/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png",
    verificationLink:
      "https://coursera.org/share/a6291acbd12cc6599b3f3e6bf43d28f4",
  },
  {
    id: 6,
    title: "Google Project Management",
    issuer: "Google",
    date: "2024",
    image:
      "https://images.credly.com/size/680x680/images/51dff787-71ae-4d9d-9ca7-ef9342914d75/GCC_badge_PGM_1000x1000.png",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/specialization/EZ8JDDLZNOZT",
  },
  // Add more certificates as needed
];

export default function CertificateShowcase() {
  return (
    <section className="py-10 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Certificates
            </motion.h2>
            <motion.p
              className="text-gray-200 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Professional Certifications and Achievements
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {certificates.slice(0, 6).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-gray-900/90 rounded-2xl" />

                {/* Card Content */}
                <div className="relative p-6 flex flex-col h-full">
                  {/* Certificate Badge */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-[20%] blur-md group-hover:blur-lg transition-all duration-300" />
                    <div className="absolute inset-1 bg-gray-900/90 rounded-[20%]" />
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 rounded-[20%] transition-transform duration-300 group-hover:scale-105 relative z-10"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-colors duration-300 text-center mb-4">
                    {cert.title}
                  </h3>

                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-gray-800/80 text-gray-200 rounded-full text-xs leading-none">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-300 leading-none">
                        {cert.date}
                      </span>
                    </div>

                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-800/80 text-white rounded-md hover:bg-gray-700/80 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 text-sm"
                    >
                      Verify
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/about#certificates"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-500/10 text-white rounded-xl hover:from-green-400/20 hover:to-blue-500/20 transition-all duration-300 group border border-green-400/20"
            >
              <Award className="w-5 h-5 mr-2 opacity-70 group-hover:opacity-100" />
              <span className="text-gray-200 group-hover:text-white">
                View All Certificates
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
