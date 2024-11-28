"use client";

import React, { useState }  from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import Link from "next/link";
import olfuLogo from "../public/images/olfulogo.jpg";
import { FaBriefcase, FaCertificate, FaGraduationCap } from "react-icons/fa";
import CertificateModal from './components/CertificateModal';

const certificates = [
  {
    title: "US-ASEAN STIC Industry Professional Credentials Track Certificate",
    issuer: "Arizona State University & U.S. Department of State",
    date: "2024",
    verificationLink:
      "images/US-ASEAN_STIC_Cert.pdf",
    description:
      "Awarded for completing the US-ASEAN Science, Tecnology, and Innovation Cooperation Program (STIC) Industry Professional Credentials Track",
    image: "/images/STIC_logo.jpg", // Add the logo URL here
  },
  {
    title: "IBM Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/specialization/4SK3A56V1L08",
    description:
      "Awarded for completing all 11 courses of the IBM Front-End Developer Specialization",
    image:
      "https://images.credly.com/size/680x680/images/e646f624-ca3d-4917-9e90-16a051497bdb/image.png", // Add the logo URL here
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/specialization/0ME3YQZD92SX",
    description:
      "Awarded for completing all 9 courses of the Meta Front-End Developer Specialization",
    image:
      "https://images.credly.com/size/680x680/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png", // Add the logo URL here
  },
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/specialization/6MJ169KOYN74",
    description:
      "Awarded for completing all 5 courses of the Google IT Support Specialization",
    image:
      "https://images.credly.com/size/680x680/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png", // Add the logo URL here
  },
  {
    title: "Google Project Management Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/specialization/EZ8JDDLZNOZT",
    description:
      "Awarded for completing all 6 courses of the Google Project Management Specialization",
    image:
      "https://images.credly.com/size/680x680/images/51dff787-71ae-4d9d-9ca7-ef9342914d75/GCC_badge_PGM_1000x1000.png", // Add the logo URL here
  },
  {
    title: "Front-End Development with React V2",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.credly.com/badges/b283dfb4-2290-41f3-b6e2-4ef81653edda/linked_in_profile",
    description:
      "Awarded for completing the IBM Front-End Development with React V2 Course",
    image:
      "https://images.credly.com/size/680x680/images/e747147a-9300-4795-8b38-704a133bed88/Coursera_20Front_20end_20Development_20with_20React_20V2.png", // Add the logo URL here
  },
  {
    title: "Intermediate Front-End Web Development",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.credly.com/badges/c9c4d562-c68c-4338-b4a7-48de480a551e/linked_in_profile",
    description:
      "Awarded for completing the IBM Intermediate Front-End Web Development Course",
    image:
      "https://images.credly.com/size/680x680/images/1c2ba273-f276-42cb-bd5c-f90fa6e59357/image.png", // Add the logo URL here
  },
  {
    title: "Advanced React",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/47DCLWIGCDLC?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    description: "Awarded for completing the Meta Advanced React Course",
    image:
      "https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png", // Add the logo URL here
  },
  {
    title: "Git and Github Essentials",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.credly.com/badges/0dd414dc-780c-456d-8cff-0034c379fbf7/linked_in_profile",
    description:
      "Awarded for completing the IBM Git and Github Essentials Course",
    image:
      "https://images.credly.com/size/680x680/images/9a0255eb-a47d-4f3a-9611-243bfe3eb9e4/image.png", // Add the logo URL here
  },
  {
    title: "Cloud Native, DevOps, Agile, and NoSQL Essentials",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.credly.com/badges/f84c989f-c90a-4e99-9b40-524db4291969/linked_in_profile",
    description:
      "Awarded for completing the IBM Get Started with Cloud Native, DevOps, Agile, and NoSQL Course",
    image:
      "https://images.credly.com/size/680x680/images/0180c9c4-1723-4e5d-b38e-c439cd445130/image.png", // Add the logo URL here
  },
  {
    title: "Software Engineering Essentials",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.credly.com/badges/fb141250-8fff-444e-90aa-82771c8ff56b/public_url",
    description:
      "Awarded for completing the IBM Introduction to Software Engineering",
    image:
      "https://images.credly.com/size/680x680/images/1b67aaf9-670d-4c92-8d51-7ac1190f0a42/image.png", // Add the logo URL here
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/ZIUCQ0VQQESM?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    description:
      "Awarded for completing the Meta Introduction to Front-End Development Course",
    image:
      "https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png", // Add the logo URL here
  },
  {
    title: "HTML and CSS in depth",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/ZGCGDS3X5RAJ?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    description: "Awarded for completing the Meta HTML and CSS in depth Course",
    image:
      "https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png", // Add the logo URL here
  },
  {
    title: "Programming with JavaScript",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/4RF12GZRCHKF?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    description:
      "Awarded for completing the Meta Programming with JavaScript Course",
    image:
      "https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png", // Add the logo URL here
  },
  {
    title: "Version Control",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/HJB0P6MHF2J6",
    description: "Awarded for completing the Meta Version Control Course",
    image:
      "https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png", // Add the logo URL here
  },
  {
    title: "Principles of UX/UI Design",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/QU0UX9Z0RPYF?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    description:
      "Awarded for completing the Meta Principles of UX/UI Design Course",
    image:
      "https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png", // Add the logo URL here
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/CLIG7X137GZM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    description:
      "Awarded for completing the Google Foundations of User Experience (UX) Design Course",
    image:
      "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png", // Add the logo URL here
  },
  {
    title: "Foundations of Project Management",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://coursera.org/share/d11458a1b0c2afcd499dcb08810308e0",
    description:
      "Awarded for completing the Google Foundations of Foundations of Project Management Course",
    image:
      "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png", // Add the logo URL here
  },
  {
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    issuer: "Coursera",
    date: "2024",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/verify/Z1QQDFX25DSB",
    description:
      "Awarded for completing the Google Start the UX Design Process: Empathize, Define, and Ideate Course",
    image:
      "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png", // Add the logo URL here
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    verificationLink:
      "https://www.freecodecamp.org/certification/alasss/responsive-web-design",
    description:
      "Awarded for completing the Responsive Web Design Developer Certification.",
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/freecodecamp-1024.png", // Add the logo URL here
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2024",
    verificationLink:
      "https://www.freecodecamp.org/certification/alasss/front-end-development-libraries",
    description:
      "Awarded for completing the Front End Development Libraries Developer Certification.",
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/freecodecamp-1024.png", // Add the logo URL here
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "OpenEDG",
    date: "2023",
    verificationLink: "/images/pythoncert.pdf",
    description:
      "Awarded for completing the PCAP: Programming Essentials in Python Course, provided by Cisco Networking Academy in collaboration with OpenEDG Python Institute.",
    image:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/149sgmk8pe5742vn5kmf6k86cg._SY450_CR0%2C0%2C450%2C450_.jpg", // Add the logo URL here
  },
];

const experiences = [
  {
    company: "Syrincal Trading, OPC",
    position: "Full-Stack Engineer",
    period: "Nov 2024 - Present",
    location: "Meycauayan City, Bulacan, PH", // Add location here
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1rR8i3q9fB_rQPc08LC8C0emi85r_ohFkQ&s",
  },
  {
    company: "D.R.A Jewelry",
    position: "Web Developer",
    period: "Sep 2024 - Present",
    location: "Meycauayan City, Bulacan, PH", // Add location here
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlxGEa_lx4b8-5QFW2a8vwTxXwLFkCjN2xQ&s",
  },
  {
    company: "WeWhiten",
    position: "Social Media Marketer",
    period: "Jun 2023 - Jun 2024",
    location: "Salt Lake City, UT, USA", // Add location here
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BHhskCCwnOZI_ZfbX6suvMUonVnUKwSm2w&s",
  },
];

const educationData = [
  {
    school: "Our Lady of Fatima University",
    degree: "Bachelor of Science in Information Technology",
    year: "2021 - 2025 (Expected)",
    location: "Valenzuela, Philippines",
    affiliations: ["Junior Philippine Computer Society (JPCS)"],
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Christopher Ace Labador</title>
        <meta
          name="description"
          content="Discover Ace Labador's professional journey as a Front-End Engineer with 3+ years of experience in web development, expertise in React and Next.js, and certifications showcasing continuous learning and growth."
        />
        <meta property="og:title" content="Ace Labador | About" />
        <meta
          property="og:description"
          content="Discover full-stack web apps developed by Ace Labador using cutting-edge technologies like React, Next.js, Firebase, and Supabase."
        />
        <meta
          property="og:image"
          content="https://acelabador.vercel.app/logo.png"
        />
        <meta property="og:url" content="https://acelabador.vercel.app/about" />
        <link rel="canonical" href="https://acelabador.vercel.app/about" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 py-20">
        <div className="container mx-auto px-4">
          <AboutMeSection />
          <EducationSection />
          <ExperienceSection />
          <CertificateShowcase />
        </div>
      </div>
    </>
  );
}

function AboutMeSection() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center mb-16 mt-15 lg:pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image container for mobile on top */}
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
        <div className="relative rounded-full w-48 h-48 overflow-hidden bg-white">
          <img
            src="/images/personal_logo.png"
            alt="Ace Labador Personal Logo"
            className="absolute top-1/2 left-1/2 w-80 h-80 object-cover transform -translate-x-1/2 -translate-y-1/2" // Image positioning
          />
        </div>
      </div>

      {/* Text section for desktop on left */}
      <div className="md:w-2/3 md:pr-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          About Me
        </h1>
        <p className="text-lg text-gray-300 text-pretty">
          Greetings! I'm Ace Labador, from the ever-sunny or always-raining
          Philippines. Picture a fusion of design savvy and coding wizardry –
          that's me, crafting the digital future one pixel at a time. Ever the
          innovator, I blend creativity and code like a master chef mixes
          ingredients, concocting web experiences that leave users craving more.
          With a design sense sharper than a samurai sword and coding skills
          smoother than jazz on a summer night, I'm here to elevate your digital
          game. Let's join forces and turn your digital dreams into reality.
          After all, why settle for ordinary when you can have extraordinary?
        </p>
      </div>
    </motion.section>
  );
}

function EducationSection() {
  return (
    <motion.section
      id="education"
      className="py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        <span className="bg-blue-500 w-2 h-8 mr-4 "></span>
        <FaGraduationCap className="mr-2" style={{ color: "white" }} />{" "}
        Education
      </h2>
      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.school}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg flex items-start space-x-4"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={olfuLogo} // Using the local image
              alt={`${edu.school} logo`}
              width={64} // Set width of the logo
              height={64} // Set height of the logo
              className="rounded-full bg-white object-contain"
            />
            <div>
              <h3 className="text-base md:text-xl font-semibold mb-2 text-white">
                {edu.degree}
              </h3>
              <h4 className="text-sm md:text-lg text-gray-300">{edu.school}</h4>
              <p className="text-xs md:text-sm text-gray-400 mb-2">
                {edu.location}
              </p>
              <p className="text-xs md:text-sm text-gray-400 mb-2">
                {edu.year}
              </p>
              {edu.affiliations && edu.affiliations.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-300 mt-2">
                    Affiliations:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-400">
                    {edu.affiliations.map((affiliation, index) => (
                      <li key={index}>{affiliation}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        <span className="bg-blue-500 w-2 h-8 mr-4 "></span>
        <FaBriefcase className="mr-2" style={{ color: "white" }} /> Work
        Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg flex items-center space-x-4"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-16 h-16 object-contain rounded-full"
            />
            <div>
              <h3 className="text-md md:text-xl font-semibold mb-2 text-white">
                {exp.position}
              </h3>
              <h4 className="text-sm md:text-lg text-gray-300">{exp.company}</h4>
              <p className="text-xs md:text-sm text-gray-400 mb-2">{exp.location}</p>{" "}
              {/* Location here */}
              <p className="text-xs md:text-sm text-gray-400">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function CertificateShowcase() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="pt-16"
    >
      <h2 className="text-3xl font-bold mb-12 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
        <span className="bg-blue-500 w-2 h-8 mr-4"></span>
        <FaCertificate className="mr-2" style={{ color: "white" }} />{" "}
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain bg-white rounded-lg"
                    sizes="(max-width: 768px) 64px, 96px"
                  />
                </div>
                <h3 className="font-semibold text-md md:text-lg text-white line-clamp-4">
                  {cert.title}
                </h3>
              </div>
              
              <div className="flex-grow"></div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm flex items-center justify-center"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Learn More
                </button>
                <a
                  href={cert.verificationLink || `/images/${cert.image}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-md hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </motion.section>
  );
}
