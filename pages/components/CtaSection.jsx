"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Tell me about your next project
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <motion.a
            href="mailto:alas.dev@outlook.com"
            className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium text-white transition-all"
            style={{
              background: "linear-gradient(to right, #68D391, #4299E1)",
            }}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>

          <motion.a
            href="https://wa.me/your_number" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-black/50 px-5 py-3 text-base font-medium text-white transition-all hover:bg-black/70"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
