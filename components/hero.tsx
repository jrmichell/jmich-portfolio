"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };

  return (
    <AnimatePresence>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: -100 }, visible }}
          className="text-center text-6xl sm:text-8xl lg:text-9xl font-bold text-[#5651e5]"
        >
          Jack Michell
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: -100 }, visible }}
          className="text-center text-3xl sm:text-5xl lg:text-7xl"
        >
          Software Engineer
        </motion.p>
        <motion.p
          variants={{ hidden: { opacity: 0, y: -100 }, visible }}
          className="text-center text-sm sm:text-md lg:text-xl"
        >
          I am dedicated to learning emerging technologies and developing
          solutions that address practical issues in the real world.
        </motion.p>
      </motion.article>
    </AnimatePresence>
  );
}
