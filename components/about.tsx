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
      <SectionHeading>About Me</SectionHeading>
      <p className="m-3">
        <span className="font-underline">Hi, I’m Shafi. I love to code and create amazing web applications. My main focus is on building fully functional full-stack web apps, delivering the best UI/UX experience, and ensuring top-notch developer experience (DX).</span>
      </p>

      <p>
        <span className="italic">My tech stack includes: Next.js 15, TypeScript, React, Tailwind CSS, NeonDB, Prisma (ORM), React Query</span>. I am passionate about building fast, scalable web apps that are not only efficient but also user-friendly. My goal is to create web solutions that are both high in performance and visually engaging. 
      </p>
      
      <p>
        I believe in writing clean, maintainable code and following best practices to ensure quality throughout the development process. I focus on making the user experience intuitive and smooth while building apps that are easy to scale and maintain. 
      </p>
      
      <p>
        Currently, I am diving deeper into <span className="font-medium">Next.js 15</span>, learning its latest features like enhanced layouts, edge functions, and improved server-side capabilities. I am always eager to expand my knowledge and explore new technologies that help me improve as a developer.
      </p>

      <p>
        If you're looking for a passionate developer who is constantly learning and ready to tackle new challenges, feel free to reach out. Let’s build something great together! 😊
      </p>
    </motion.section>
  );
}
