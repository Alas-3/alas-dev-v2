"use client"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Building2, MapPin, Calendar, ExternalLink } from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    company: "Bone Fix Metal Craft",
    position: "Full Stack Developer",
    period: "Jan 2025 - Present",
    location: "Metro Manila, PH",
    logo: "/images/bfmcLogo.jpeg", // Updated logo path
    description: "Led the development and maintenance of company's website",
    current: true,
    skills: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "SEO", "Wordpress"],
    website: "https://example.com",
  },
  {
    company: "Syrincal Trading, OPC",
    position: "Software Engineer",
    period: "Nov 2024 - Present",
    location: "Bulacan, PH",
    logo: "/images/syrincalvector.svg", // Updated logo path
    description: "Led the development of the B2B e-commerce platform and inventory management system",
    current: true,
    skills: ["React", "Next.js", "Node.js", "Supabase", "Tailwind CSS"],
    website: "https://example.com",
  },
  {
    company: "D.R.A Jewelry",
    position: "Web Developer",
    period: "Sep 2024 - Dec 2024",
    location: "Bulacan, PH",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlxGEa_lx4b8-5QFW2a8vwTxXwLFkCjN2xQ&s",
    description: "Led the development of business website",
    current: false,
    skills: ["React", "SEO", "Tailwind CSS", "Web3Forms"],
    website: "https://dra-jewelry.vercel.app/",
  },
  {
    company: "WeWhiten",
    position: "Social Media Marketer",
    period: "Jun 2023 - Jun 2024",
    location: "Salt Lake City, UT, USA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BHhskCCwnOZI_ZfbX6suvMUonVnUKwSm2w&s",
    description: "Managed social media campaigns, content strategy & client aquisition",
    current: false,
    skills: ["Social Media", "Content Strategy", "Client Aquisition & Outreach", "Analytics"],
    website: "https://wewhiten.com/",
  },
]

const SkillBadge = ({ skill }) => (
  <motion.span
    className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-400/10 to-blue-500/10 text-white/80 border border-green-400/20"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    {skill}
  </motion.span>
)

const ExperienceCard = ({ exp, index, inView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
        delay: index * 0.15,
      },
    },
  }

  return (
    <motion.div
      className="relative flex w-full"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Timeline Node - Visible on desktop only */}
      <div className="hidden md:flex absolute left-1/2 top-0 h-full w-14 -translate-x-1/2 z-20 justify-center">
        <motion.div
          className="relative w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
            delay: index * 0.15,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse" />
          <div className="absolute inset-[2px] rounded-full bg-black" />
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <img
              src={exp.logo || "/placeholder.svg"}
              alt={`${exp.company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        className={`w-full ml-12 md:ml-0 p-6 rounded-xl border bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm relative
          ${index % 2 === 0 ? "md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"}`}
        style={{
          borderImage: "linear-gradient(45deg, #68D391, #4299E1) 1",
        }}
        whileHover={{
          scale: 1.02,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.1,
        }}
      >
        {/* Company Logo - Sticker style for mobile */}
        <motion.div
          className="md:hidden absolute -top-5 -left-5 w-16 h-16 rounded-full overflow-hidden border-4 border-black bg-black"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
            delay: index * 0.15,
          }}
        >
          <img
            src={exp.logo || "/placeholder.svg"}
            alt={`${exp.company} logo`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-3 mt-6 md:mt-0">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {exp.position}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Building2 className="w-4 h-4 mr-1" />
                  <span className="text-sm md:text-base">{exp.company}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            {exp.current && (
              <>
                {/* Desktop Active Indicator - Pulsing Green Dot */}
                <div className="hidden md:flex items-center gap-1.5 self-start pt-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-green-400">Active</span>
                </div>

                {/* Mobile Active Indicator - Pulsing Green Dot positioned at top right */}
                <div className="md:hidden absolute top-3 right-3 flex items-center gap-1.5 z-10 pt-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </>
            )}
          </div>

          {/* Meta Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{exp.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 text-left leading-relaxed mt-2">{exp.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
            {exp.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <SkillBadge skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const gradientHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-10 md:py-24 relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#9e0032] to-[#4579c0] bg-clip-text text-transparent">
              Work Experience
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A timeline of my professional journey and the companies I've had the pleasure to work with
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Adjust for both mobile and desktop */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800/50" />
            <motion.div
              className="absolute left-3 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-500"
              style={{
                height: gradientHeight,
                originY: 0,
              }}
            />

            {/* Mobile view circles at both ends of the timeline */}
            <div className="md:hidden">
              <div className="absolute left-3 top-0 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
              <div className="absolute left-3 bottom-0 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
            </div>

            <div className="space-y-16 md:space-y-32 pt-6 md:pt-0">
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.company} exp={exp} index={index} inView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

