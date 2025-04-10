"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FadeText } from "./magicui/fade-text";
import { Dock } from "./magicui/dock";

export default function Hero() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };
  const hidden = { opacity: 0, y: -100 };

  return (
    <AnimatePresence>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.h1
          variants={{ hidden, visible }}
          className="text-center text-6xl sm:text-8xl lg:text-9xl font-bold text-[#5651e5]"
        >
          <FadeText text="Jack Michell" direction="down" />
        </motion.h1>
        <motion.div
          variants={{ hidden, visible }}
          className="mt-2 text-center text-muted-foreground text-sm sm:text-md lg:text-xl"
        >
          <FadeText
            text="I am dedicated to learning emerging technologies and developing
          solutions that address real world problems"
            direction="down"
          />
        </motion.div>

        <motion.div variants={{ hidden, visible }}>
          <Dock className="flex justify-center items-center p-8 mt-4">
            <motion.div className="w-full flex items-center justify-center gap-8">
              {/* <motion.div */}
              {/*   variants={{ hidden, visible }} */}
              {/*   whileHover={{ scale: 1.2 }} */}
              {/*   whileTap={{ scale: 0.8 }} */}
              {/* > */}
              {/*   <Link */}
              {/*     href="https://www.linkedin.com/in/jack-michell/" */}
              {/*     target="_blank" */}
              {/*     rel="noreferrer" */}
              {/*   > */}
              {/*     <FaLinkedin size={20} /> */}
              {/*   </Link> */}
              {/* </motion.div> */}
              <motion.div
                variants={{ hidden, visible }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Link
                  href="https://github.com/jrmichell"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={20} />
                </Link>
              </motion.div>
              <motion.div
                variants={{ hidden, visible }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Link href="mailto:jmichell2003@gmail.com" rel="noreferrer">
                  <AiOutlineMail size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </Dock>
        </motion.div>
      </motion.article>
    </AnimatePresence>
  );
}
