"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaTwitch, FaLinkedin } from "react-icons/fa";

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
          className="text-center text-muted-foreground text-sm sm:text-md lg:text-xl"
        >
          I am dedicated to learning emerging technologies and developing
          solutions that address practical issues in the real world.
        </motion.p>
        <motion.div className="w-full flex items-center justify-center py-4 gap-8">
          <motion.div
            variants={{ hidden: { opacity: 0, y: -100 }, visible }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link
              href="https://www.linkedin.com/in/jack-michell/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg p-6 cursor-pointer">
                <FaLinkedin size={20} />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: -100 }, visible }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link
              href="https://twitch.tv/Jack2xDev"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg p-6 cursor-pointer">
                <FaTwitch size={20} />
              </div>
            </Link>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: -100 }, visible }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link
              href="https://github.com/jrmichell"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg p-6 cursor-pointer">
                <FaGithub size={20} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.article>
    </AnimatePresence>
  );
}
