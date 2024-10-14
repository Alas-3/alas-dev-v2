"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    image: "/placeholder.svg?height=400&width=600",
    verificationLink: "https://www.example.com/verify/react-cert",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    issuer: "Udacity",
    date: "2022",
    image: "/placeholder.svg?height=400&width=600",
    verificationLink: "https://www.example.com/verify/js-cert",
  },
  {
    id: 3,
    title: "UI/UX Design Specialization",
    issuer: "Google",
    date: "2023",
    image: "/placeholder.svg?height=400&width=600",
    verificationLink: "https://www.example.com/verify/uiux-cert",
  },
  // Add more certificates as needed
]

export default function CertificateShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{cert.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">{cert.issuer}</span>
                  <span className="text-sm text-gray-600">{cert.date}</span>
                </div>
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Verify Certificate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}