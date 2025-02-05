"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    id: 1,
    title: "US-ASEAN STIC IPC",
    issuer: "ASU & U.S. State Department",
    date: "2024",
    image:
      "/images/STIC_logo.jpg",
    verificationLink:
      "images/US-ASEAN_STIC_Cert.pdf",
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2024",
    image:
      "https://images.credly.com/size/600x680/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png",
    verificationLink:
      "https://coursera.org/share/dfd7fc30f72444b5795e968b6de56810",
  },
  {
    id: 3,
    title: "IBM Front-End Developer",
    issuer: "IBM",
    date: "2024",
    image:
      "https://images.credly.com/size/680x680/images/e646f624-ca3d-4917-9e90-16a051497bdb/image.png",
    verificationLink:
      "https://coursera.org/share/7a5e5733ca88bd52efc7d81f52dece53",
  },
  {
    id: 4,
    title: "Google IT Support",
    issuer: "Google",
    date: "2024",
    image:
      "https://images.credly.com/size/680x680/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png",
    verificationLink:
      "https://coursera.org/share/a6291acbd12cc6599b3f3e6bf43d28f4",
  },
  {
    id: 5,
    title: "Google Project Management",
    issuer: "Google",
    date: "2024",
    image:
      "https://images.credly.com/size/680x680/images/51dff787-71ae-4d9d-9ca7-ef9342914d75/GCC_badge_PGM_1000x1000.png",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/specialization/EZ8JDDLZNOZT",
  },
  {
    id: 6,
    title: "Github Foundations",
    issuer: "Github",
    date: "2025",
    image:
      "https://images.credly.com/size/680x680/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
    verificationLink:
      "https://www.credly.com/badges/fde0d473-a43b-48f2-983f-ee4edf516740/public_url",
  },
  // Add more certificates as needed
];

export default function CertificateShowcase() {
  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
          My Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.slice(0, 6).map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              <div className="relative h-48 bg-white">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2 text-white line-clamp-2 flex-grow">
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-gray-400">{cert.date}</span>
                </div>
                <div className="flex gap-3">
                  
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-md hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-xs"
                  >
                    Verify
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
        <Link
          href="/about#certificates"
          className="inline-block px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-300 opacity-70 hover:opacity-100"
        >
          Show All Certificates
        </Link>
        </div>
      </div>
    </motion.section>
  );
}