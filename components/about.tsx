"use client";

import { motion, AnimatePresence } from "framer-motion";
import Bio from "./bio";
import TechStack from "./tech-stack";

export default function About() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl mb-6 text-center font-semibold text-[#5651e5]">
          About Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Bio />
          <TechStack />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
