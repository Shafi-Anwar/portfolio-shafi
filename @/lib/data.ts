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
    imageUrl: FaTwitter,
  },
  {
    title: "Discord Clone",
    description:
      "While doing this project I learnt NEXTJS App routing and learnt TS(typescript)",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "SupaBase"],
    imageUrl: FaDiscord,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: FaReact
    ,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Backend Development",
  "Data Science"
] as const;
