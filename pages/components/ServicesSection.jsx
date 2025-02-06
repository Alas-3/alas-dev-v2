import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, Code } from "lucide-react";

const services = [
  {
    icon: <Monitor />,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: <Smartphone />,
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
  },
  {
    icon: <Palette />,
    title: "Design & Creative",
    description:
      "Crafting visually stunning designs that connect with your audience.",
  },
  {
    icon: <Code />,
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle gradient background */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3a0035] to-[#ff1744] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Collaborate with brands and agencies to create impactful results
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
                {/* Card Background with subtle gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-black/80 rounded-2xl" />

                {/* Card Content */}
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      {/* Icon container with gradient background */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400/10 to-blue-500/10 flex items-center justify-center">
                        <div className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-green-400/20 to-transparent transform translate-x-8" />
                    <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-r from-transparent to-blue-500/20 transform translate-y-8" />
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
