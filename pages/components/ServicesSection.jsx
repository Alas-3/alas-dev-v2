import { motion } from "framer-motion";
import { Layout, Code, Layers, Server } from "lucide-react";

const services = [
  {
    icon: <Layout />,
    title: "System Architecture & Design",
    description:
      "Crafting robust, scalable, and efficient system architectures tailored to meet business and technical requirements.",
  },
  {
    icon: <Layers />,
    title: "UI/UX Design",
    description:
      "Designing user-centered interfaces and experiences that align with industry standards and enhance usability.",
  },
  {
    icon: <Code />,
    title: "Frontend Development",
    description:
      "Building intuitive, responsive, and visually stunning user interfaces using modern web technologies.",
  },
  {
    icon: <Server />,
    title: "Backend Development",
    description:
      "Designing and implementing scalable server-side systems to ensure seamless functionality and performance.",
  },
];

export default function ServicesSection() {
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
              Services
            </motion.h2>
            <motion.p
              className="text-gray-200 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Collaborated with brands and businesses to create impactful results
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      {/* Icon container with gradient background */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400/70 to-blue-500/70 flex items-center justify-center">
                        <div className="w-6 h-6 text-white/90">{service.icon}</div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-transparent bg-clip-text text-gray-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
