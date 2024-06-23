"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaTwitch, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Contact() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl mb-6 text-center font-semibold text-[#5651e5]">
          Contact Me
        </h1>
        <Card>
          <CardHeader>
            <CardDescription className="text-muted-foreground text-center">
              Feel free to reach out to me on any of the following platforms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div className="w-full flex items-center justify-center gap-0 md:gap-8">
              <motion.div
                variants={{ hidden: { opacity: 0, y: -100 }, visible }}
                whileHover={{ scale: 1.2 }}
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
                whileHover={{ scale: 1.2 }}
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
                whileHover={{ scale: 1.2 }}
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
              <motion.div
                variants={{ hidden: { opacity: 0, y: -100 }, visible }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Link href="/contact" rel="noreferrer">
                  <div className="rounded-full shadow-lg p-6 cursor-pointer">
                    <AiOutlineMail size={20} />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
