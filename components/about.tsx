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
      className="mb-28 max-w-4xl text-center sm:text-left mx-auto px-4 sm:px-8 scroll-mt-28 transition-opacity duration-500 ease-out"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-6">
        About Me
      </SectionHeading>

      <p className="m-3 text-lg sm:text-xl font-medium text-gray-800">
        <span className="font-bold text-indigo-500">
          Hi, I’m Shafi! 👋
        </span>{" "}
        I’m a passionate full-stack web developer with a love for crafting
        amazing web applications. My main focus is on building fully functional
        web apps that provide a seamless user experience (UI/UX) while making the
        developer workflow smooth and enjoyable (DX).
      </p>

      <p className="m-3 text-lg sm:text-xl text-gray-700">
        My <span className="font-medium text-indigo-600">Tech Stack</span> includes:
        <span className="font-semibold"> Next.js 15, TypeScript, React, Tailwind CSS, NeonDB, Prisma (ORM), React Query</span>. I enjoy creating fast, scalable applications that are not only
        performant but also visually engaging. I thrive in building apps with a
        focus on user experience while ensuring the underlying codebase is clean,
        maintainable, and easy to scale.
      </p>

      <p className="m-3 text-lg sm:text-xl text-gray-700">
        I'm passionate about writing clean, efficient code and adhering to best
        practices to deliver the best product possible. Whether it's working on
        front-end components or building back-end logic, I always keep both the
        user and developer experience in mind.
      </p>

      <p className="m-3 text-lg sm:text-xl text-gray-700">
        Currently, I’m diving deeper into{" "}
        <span className="font-medium text-indigo-600">Next.js 15</span>, learning its
        latest features like enhanced layouts, edge functions, and improved
        server-side rendering capabilities. I'm always looking for new technologies
        and tools that can help me create even better applications.
      </p>

      <p className="m-3 text-lg sm:text-xl text-gray-700">
        I believe that continuous learning is key to growth, and I’m always excited
        to collaborate with like-minded individuals on innovative projects.{" "}
        <span className="font-medium text-indigo-600">Feel free to connect with me!</span>{" "}
        Let's build something amazing together! 😊
      </p>
    </motion.section>
  );
}
