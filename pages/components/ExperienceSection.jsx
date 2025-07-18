"use client"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Building2, MapPin, Calendar, ExternalLink, FileText, ExternalLinkIcon } from "lucide-react"
import { useRef, useState } from "react"

const experiences = [
  {
    company: "Bone Fix Metal Craft",
    position: "Full-Stack Developer Intern",
    period: "Jan 2025 - Apr 2025",
    location: "Metro Manila, PH",
    logo: "/images/bfmcLogo.jpeg",
    description:
      "Engineered and maintained a secure PHP-based web application module in collaboration with cross-functional teams and the project manager, delivering a web portal for doctors to access surgical metal product specifications and clinical application data.",
    current: false,
    skills: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "SEO", "WordPress"],
    website: "",
    coe: "/coe/COC-Bonefix.pdf", // Certificate of Completion
    certificateType: "completion", // Add this field
  },
  {
    company: "D.R.A Jewelry",
    position: "Freelance Web Developer",
    period: "Sep 2024 - Dec 2024",
    location: "Bulacan, PH",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlxGEa_lx4b8-5QFW2a8vwTxXwLFkCjN2xQ&s",
    description:
      "Designed and developed a mobile-first, fully responsive website using Next.js and Tailwind CSS, implemented SEO optimization best practices to improve organic search visibility, and integrated a private consultation scheduler—doubling online bookings.",
    current: false,
    skills: ["React", "Next.js", "Node.js", "SEO", "Tailwind CSS", "Web3Forms"],
    website: "https://dra-jewelry.vercel.app/",
    coe: "", // No certificate
    certificateType: "", // No type
  },
  {
    company: "Syrincal Trading, OPC",
    position: "Software Engineer",
    period: "Nov 2023 - Jun 2025",
    location: "Bulacan, PH",
    logo: "/images/syrincalLogo.jpg",
    description:
      "Architected and led the development of a Next.js-based B2B ordering platform that unified supply chain, inventory management, and delivery tracking, doubling operational efficiency, reducing order processing time, and support 500+ daily operations —while conducting unit testing to ensure system reliability.",
    current: false,
    skills: ["React", "Next.js", "Redux", "Node.js", "Supabase", "OAuth", "Tailwind CSS"],
    website: "",
    coe: "/coe/COE_Syrincal Trading.pdf", // Certificate of Employment
    certificateType: "employment", // Add this field
  },
  {
    company: "WeWhiten",
    position: "Social Media Manager",
    period: "Jun 2023 - Jun 2024",
    location: "Salt Lake City, UT, USA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BHhskCCwnOZI_ZfbX6suvMUonVnUKwSm2w&s",
    description:
      "Implemented focused outreach, campaigns and content strategies across social media platforms, increasing customer attraction by 30%, customer retention by 15% and doubling customer acquisition.",
    current: false,
    skills: ["Social Media", "Content Strategy", "Client Aquisition & Outreach", "Collaborations", "Campaigns", "Management", "Analytics"],
    website: "https://wewhiten.com/",
    coe: "/coe/WeWhiten-Certificate of Employment-Christopher Ace Labador.pdf", // Certificate of Employment
    certificateType: "employment", // Add this field
  },
]

// Updated COE Button Component
const COEButton = ({ coeUrl, certificateType, company }) => {
  const handleCOEClick = () => {
    if (coeUrl) {
      window.open(coeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (!coeUrl) return null;

  // Determine button text based on certificate type
  const getButtonText = () => {
    switch (certificateType) {
      case "completion":
        return "COC"; // Certificate of Completion
      case "employment":
        return "COE"; // Certificate of Employment
      default:
        return "CERT"; // Generic certificate
    }
  };

  return (
    <motion.button
      onClick={handleCOEClick}
      className="inline-flex items-center gap-1 text-sm md:text-base font-medium text-gray-400 hover:text-green-400 transition-all duration-200"
      whileHover={{ 
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <FileText className="w-4 h-4" />
      <span>{getButtonText()}</span>
      <ExternalLinkIcon className="w-3 h-3" />
    </motion.button>
  );
};

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
  const [isExpanded, setIsExpanded] = useState(false)

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

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  }

  const truncatedDescription =
    exp.description.length > 120 ? exp.description.substring(0, 120) + "..." : exp.description

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
        className={`w-full ml-12 md:ml-0 p-6 rounded-2xl border-2 border-transparent bg-gray-900/80 backdrop-blur-sm relative
    ${index % 2 === 0 ? "md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"}`}
        style={{
          background: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), linear-gradient(45deg, #68D391, #4299E1)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        whileHover={{
          scale: 1.02,
          backgroundColor: "rgba(17, 24, 39, 0.9)",
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
          {/* Header Section - Updated with inline COE button */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {exp.position}
              </h3>
              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Building2 className="w-4 h-4 mr-1" />
                  <span className="text-sm md:text-base">{exp.company}</span>
                  {exp.website && <ExternalLink className="w-3 h-3" />}
                </a>
                {/* COE Button - Now inline with company name */}
                <COEButton 
                  coeUrl={exp.coe} 
                  certificateType={exp.certificateType}
                  company={exp.company} 
                />
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

          {/* Meta Information - Remove the old COE button section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{exp.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Description - Remove the old COE button section that was here */}
          <div className="text-sm text-balance text-gray-100 text-left leading-relaxed mt-2">
            {/* Mobile: Collapsible description */}
            <div className="md:hidden">
              <p>{isExpanded ? exp.description : truncatedDescription}</p>
              {exp.description.length > 120 && (
                <button
                  onClick={toggleDescription}
                  className="text-blue-300 hover:text-blue-200 text-xs mt-1 transition-colors"
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}
            </div>

            {/* Desktop: Full description */}
            <p className="hidden md:block">{exp.description}</p>
          </div>

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </h2>

            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              A timeline of how I started my professional journey and the companies I've had the pleasure to work with
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
