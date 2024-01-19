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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Twitter Clone",
    description:
      "I worked as a frontend-developer on this project  for  2 months .",
    tags: ["React", "Tailwind",],
    
  },
  {
    title: "Discord Clone",
    description:
      "While doing this project I learnt NEXTJS App routing and learnt TS(typescript)",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "SupaBase"],
    
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
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Backend Development",
  "Data Analysis"
] as const;
