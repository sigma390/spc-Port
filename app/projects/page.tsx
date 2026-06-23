"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowLeft, RxGithubLogo } from "react-icons/rx";
import { FaGlobe } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  duration: string;
  status: string;
  features: string[];
  github: string;
  demo?: string;
  accentColor: string; // Tailwind glow / gradient class
}

const projectsData: Project[] = [
  {
    title: "Git Papers Hub",
    subtitle: "Academic Resource Hub & Document Search Engine",
    description: "A comprehensive Paper Management System designed specifically for students to search, view, and organize past university exam papers. Built to eliminate the stress of academic prep, it features high-performance search APIs, categorized navigation, and a modern glassmorphic dashboard.",
    image: "/Gitpaers.png",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    role: "Full-Stack Developer & Lead Designer",
    duration: "Oct - Dec 2023",
    status: "Completed",
    features: [
      "High-performance full-text search with MongoDB search indexes",
      "Category filters for department, year, semester, and course codes",
      "Secure admin portal for validating and publishing student uploads",
      "Integrated custom PDF viewer with document caching"
    ],
    github: "https://github.com/sigma390",
    demo: "#",
    accentColor: "from-purple-500 to-indigo-500",
  },
  {
    title: "Analytics Company Website",
    subtitle: "Corporate Visual Analytics & Responsive Landing Portal",
    description: "A high-end business landing page and product showcase built for a data analytics company. The site features rich data visualizations, interactive dashboard previews, and performance-optimized scroll animations to convey authority and modern sophistication.",
    image: "/AnalyticsWeb.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Recharts", "TypeScript"],
    role: "Frontend Engineer & UI Designer",
    duration: "Jan - Feb 2024",
    status: "Live",
    features: [
      "Custom interactive charts with real-time data streaming simulation",
      "Fluid scroll-triggered animations and parallax effects",
      "Glassmorphic hero banner with glowing neon accent boundaries",
      "Fully responsive layout across all device viewports"
    ],
    github: "https://github.com/sigma390",
    demo: "#",
    accentColor: "from-cyan-500 to-blue-500",
  },
  {
    title: "Space Themed Portfolio",
    subtitle: "Cosmic 3D Portfolio & Creative Web Showcase",
    description: "An immersive space-themed developer portfolio designed to showcase projects and technical skills in a 3D universe. It utilizes high-end WebGL particle systems and modern visual design to create an unforgettable landing page experience.",
    image: "/Spacw.png",
    tags: ["Next.js 13", "Three.js", "React Three Fiber", "Framer Motion", "Tailwind CSS"],
    role: "Creative Technologist",
    duration: "March 2024",
    status: "Completed",
    features: [
      "Interactive 3D starfield background with responsive cursor tracking",
      "Glassmorphic floating navbar with active route indications",
      "State-of-the-art hover animations and gradient transitions",
      "Dynamic rendering of developer skills using staggered entry patterns"
    ],
    github: "https://github.com/sigma390",
    demo: "#",
    accentColor: "from-purple-500 to-cyan-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-4 md:px-10 lg:px-20 relative z-[30] overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7042f8]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00e5ff]/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7042f861] bg-[#0300145e] text-gray-300 hover:text-white hover:border-[#ba9cff] transition-all duration-300 backdrop-blur-md group"
          >
            <RxArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-500 tracking-tight py-4"
          >
            Project Chronicles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-2"
          >
            An in-depth catalog of my engineering and design journeys, showing how code, styling, and 3D systems merge to build stellar digital tools.
          </motion.p>
        </div>

        {/* Projects Stream */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-24"
        >
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between"
              >
                {/* Image Section (alternates left/right on large screens) */}
                <div
                  className={`w-full lg:w-1/2 relative overflow-hidden rounded-xl border border-[#2A0E61]/70 shadow-[0_0_30px_rgba(112,66,248,0.15)] bg-[#0300147a] backdrop-blur-sm group hover:border-[#7042f8]/60 transition-all duration-500 cursor-pointer ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`w-full lg:w-1/2 flex flex-col ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* System Specs Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 font-mono">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#7042f861] bg-[#7042f815] text-[#ba9cff]">
                      {project.role}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#00e5ff61] bg-[#00e5ff10] text-[#00e5ff]">
                      {project.duration}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                    {project.title}
                  </h2>
                  <h3 className={`text-lg font-medium mb-6 bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-[15px] md:text-base">
                    {project.description}
                  </p>

                  {/* Key Achievements/Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">
                      Key Capabilities:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#00e5ff] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg text-xs border border-[#2A0E61] bg-[#080226] text-gray-300 hover:text-[#ba9cff] hover:border-[#7042f8]/50 transition-colors font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#7042f861] bg-[#7042f810] text-[#ba9cff] hover:bg-[#7042f820] hover:border-[#ba9cff] transition-all text-sm font-semibold"
                    >
                      <RxGithubLogo className="text-lg" />
                      Source Code
                    </a>
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#7042f8] to-[#9cb2ff] text-white hover:opacity-90 transition-all text-sm font-semibold shadow-lg shadow-[#7042f8]/20"
                      >
                        <FaGlobe className="text-sm" />
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
