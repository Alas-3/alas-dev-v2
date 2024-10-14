import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Get In Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 bg-gray-800 bg-opacity-50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-gray-800 bg-opacity-50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-3 py-2 bg-gray-800 bg-opacity-50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}
