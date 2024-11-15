"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="m-3">
        <span className="font-underline">I am Shafi, I love to code, my main focus is to build fully functional Full stack web apps, with best UI experience and DX,</span>
      </p>

      <p>
        <span className="italic">My Tech Stack is: Nextjs 15, Typescript, React, Tailwindcss, neondb, Prisma(ORM), React Query</span>, 
        For more things pls feel free to connect with me 😊{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Next JS 15, </span>. 
      </p>
    </motion.section>
  );
}
