"use client";

import { motion, AnimatePresence } from "framer-motion";
import Bio from "./bio";
import Technologies from "./tech-stack";

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
        <div className="flex flex-col justify-center items-center gap-8">
          <Bio />
          <Technologies />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
