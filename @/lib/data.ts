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
    title: "MarketHippo",
    description:
      "I am working on this project  for   1 month .",
    tags: ["Next.JS", "CSS","Express.JS", "Node.JS"],
    
  },
  {
    title: "DOCS(UI Project)",
    description:
      "While doing this project I learnt Tailwindcss in advanced and whole react",
    tags: ["React", "Javascript","React-icons", "TailwindCSS"],
    
  },
  {
    title: "Aussie jobs",
    description:
      "A job seeking platform for interns and job seekers, While doing this projects I learnt MERN stack and how to connect DB to project.",
    tags: ["MongoDB", "Express.JS", "React", "Tailwind", "Node.JS"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "SQL",
  "Python",
  "Frontend",
  "Framer Motion",
  "Backend Development",
] as const;
