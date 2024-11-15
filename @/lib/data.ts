import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaDiscord, FaReact, FaTwitter } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuCode } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;



export const projectsData = [
  {
    title: "Maneger",
    description:
      "This is the web app that helps employer to manage employee data",
    tags: ["Nextjs", "Tailwindcss","JS"],
    link:"",
  },
  {
    title: "DOCS(UI Project)",
    description:
      "While doing this project I learnt Tailwindcss in advanced  react and I also learnt animations, this is only frontend website design project ",
    tags: ["React", "Javascript","React-icons", "TailwindCSS"],
    link:"docs-page-ui.vercel.app",
  },
  {
    title: "Aussie jobs",
    description:
      "A job seeking platform for interns and job seekers, While doing this projects I learnt MERN stack and how to connect DB to project.",
    tags: ["MongoDB", "Express.JS", "React", "Tailwind", "Node.JS"],
    link:"",
  },
  {
    title: "StreamScrape",
    description:
      "A platform where business owners can manage their workflows very easily and smoothly(working...)",
    tags: ["Nextjs 15", "ReactQuery", "ReactFlow", "Tailwind CSS", "Node.JS", "TS"],
    link:"coming so",
  },
    {
      title: "Poal",
      description:
        "A loom clone but with Advance AI features(work in progress...)",
      tags: ["Neon DB", "Prisma", "NextJS", "Tailwind CSS", "AWS", "TS", "more...."],
      link:"link coming soon....",

  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Query",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "SQL",
  "Prisma",
  "ReactFlow",
  "Python for data analysis",
  "Redux Toolkit",
  "React Hook Form",
  "Frontend",
  "Framer Motion",
] as const;
