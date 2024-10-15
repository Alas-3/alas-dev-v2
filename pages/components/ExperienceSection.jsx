import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "D.R.A Jewelery",
      position: "Web Developer",
      period: "Sep 2024 - Present",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlxGEa_lx4b8-5QFW2a8vwTxXwLFkCjN2xQ&s", // Add logo or icon path here
    },
    {
      company: "WeWhiten",
      position: "Social Media Marketer",
      period: "Jun 2023 - Jun 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BHhskCCwnOZI_ZfbX6suvMUonVnUKwSm2w&s", // Add logo or icon path here
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Work Experience
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
            />{" "}
            {/* Rounded Logo */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {exp.position}
              </h3>
              <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
              <p className="text-sm text-gray-400">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
