"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
  const path = "/assets/Jack-Michell.pdf";
  const fileName = "Jack-Michell.pdf";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl mb-6 text-center font-semibold text-[#5651e5]">
          Resume
        </h1>
        <Card className="flex flex-col justify-center items-center">
          <CardHeader>
            <CardDescription className="text-center">
              Here you can download my resume and get a better idea of my
              experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-4">
            <Button variant="outline">
              <a href={path} download={fileName}>
                Download Resume
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
