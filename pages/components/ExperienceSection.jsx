import { motion } from 'framer-motion'

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Company A',
      position: 'Senior Front-End Developer',
      period: 'Jan 2020 - Present',
      description: 'Led the development of multiple React-based web applications, improving performance and user experience.',
    },
    {
      company: 'Company B',
      position: 'Front-End Developer',
      period: 'Jun 2018 - Dec 2019',
      description: 'Developed and maintained responsive websites using modern JavaScript frameworks and CSS preprocessors.',
    },
  ]

  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{exp.position}</h3>
            <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
            <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
