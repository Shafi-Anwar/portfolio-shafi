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
    title: "Animated website",
    description:
      "I have worked and learnt animations by building this website.",
    tags: ["HTML", "CSS","JS", "Shery.JS","GSAP"],
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
  "Python for data analysis",
  "Redux Toolkit",
  "React Hook Form",
  "Frontend",
  "Framer Motion",
  "Backend Development",
] as const;
