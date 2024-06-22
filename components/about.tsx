"use client";

import { motion, AnimatePresence } from "framer-motion";
import Bio from "./bio";

export default function About() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Bio />
      </motion.div>
    </AnimatePresence>
  );
}
