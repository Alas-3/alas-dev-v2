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
    date: "2023",
    image:
      "https://images.credly.com/size/680x680/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png",
    verificationLink:
      "https://coursera.org/share/a6291acbd12cc6599b3f3e6bf43d28f4",
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
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
            My Certificates
          </h2>

          {/* Grid to display certificates, adjusting for mobile and desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.slice(0, 4).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 bg-opacity-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain bg-anti-flash-white"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                      {cert.issuer}
                    </span>
                    <span className="text-sm text-gray-600">{cert.date}</span>
                  </div>
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors duration-300"
                  >
                    Verify Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          {/* "Show All Certificates" button */}
          <div className="mt-8 text-center">
            <Link
              href="/about#certificates"
              className="inline-block px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-300 opacity-70 hover:opacity-100"
            >
              Show All Certificates
            </Link>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
