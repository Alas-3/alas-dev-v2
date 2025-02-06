import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "Syrincal Trading, OPC",
    position: "Software Engineer",
    period: "Nov 2024 - Present",
    location: "Meycauayan City, Bulacan, PH",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1rR8i3q9fB_rQPc08LC8C0emi85r_ohFkQ&s",
    description:
      "Developing B2B e-commerce platform and inventory management system",
    current: true,
    skills: ["React", "Next.js", "Node.js", "Supabase", "Tailwind CSS"],
    website: "https://example.com",
  },
  {
    company: "D.R.A Jewelry",
    position: "Web Developer",
    period: "Sep 2024 - Dec 2024",
    location: "Meycauayan City, Bulacan, PH",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlxGEa_lx4b8-5QFW2a8vwTxXwLFkCjN2xQ&s",
    description: "Led the development of business website",
    current: false,
    skills: ["React", "Tailwind CSS"],
    website: "https://dra-jewelry.vercel.app/",
  },
  {
    company: "WeWhiten",
    position: "Social Media Marketer",
    period: "Jun 2023 - Jun 2024",
    location: "Salt Lake City, UT, USA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BHhskCCwnOZI_ZfbX6suvMUonVnUKwSm2w&s",
    description: "Managed social media campaigns and content strategy",
    current: false,
    skills: ["Social Media", "Content Strategy", "Analytics"],
    website: "https://wewhiten.com/",
  },
];

const SkillBadge = ({ skill }) => (
  <motion.span
    className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-400/10 to-blue-500/10 text-white/80 border border-green-400/20"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    transition={{ duration: 0.2 }}
  >
    {skill}
  </motion.span>
);

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const gradientHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#9e0032] to-[#4579c0] bg-clip-text text-transparent">
              Work Experience
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A timeline of my professional journey and the companies I've had
              the pleasure to work with
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800" />
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-500"
              style={{ height: gradientHeight }}
            />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative flex flex-col md:flex-row items-start gap-8"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-20">
                    <motion.div
                      className="relative w-12 h-12 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Gradient border using pseudo-element */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                      <div className="absolute inset-[2px] rounded-full bg-black" />
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ml-20 md:ml-0 p-4 sm:p-6 md:p-8 rounded-xl border bg-black/40 backdrop-blur-sm ${
                      index % 2 === 0
                        ? "md:mr-[calc(50%+2rem)]"
                        : "md:ml-[calc(50%+2rem)]"
                    }`}
                    style={{
                      borderImage: "linear-gradient(45deg, #68D391, #4299E1) 1",
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                            >
                              <Building2 className="w-4 h-4" />
                              <span className="text-xs md:text-lg">
                                {exp.company}
                              </span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-semibold self-start rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-300">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                        {exp.skills.map((skill) => (
                          <SkillBadge key={skill} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
