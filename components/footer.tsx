"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaTwitch, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 w-full bg-slate-900 py-2">
      <div className="flex flex-row mx-24 text-xl md:gap-10 gap-6 justify-center">
        <div className="flex items-center justify-center py-2 gap-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
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
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
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
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
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
        </div>
      </div>
    </div>
  );
}
