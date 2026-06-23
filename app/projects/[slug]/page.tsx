"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { RxArrowLeft, RxGithubLogo } from "react-icons/rx";
import { FaGlobe, FaRegImage } from "react-icons/fa";

interface ProjectDetails {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  heroImage: string;
  tags: string[];
  role: string;
  duration: string;
  status: string;
  keyPoints: { title: string; desc: string }[];
  screenshots: { title: string; desc: string }[];
  github: string;
  demo?: string;
  accentColor: string;
  glowColor: string;
}

const projectsData: Record<string, ProjectDetails> = {
  "git-papers-hub": {
    slug: "git-papers-hub",
    title: "Git Papers Hub",
    subtitle: "Academic Resource Hub & Document Search Engine",
    description: "Paper Management System for Students. A web application that allows users to search for Previous Year papers and view them in a user-friendly interface.",
    longDescription: "Git Papers Hub is engineered to solve a common friction point in student life: finding past exam papers. It aggregates years of examination papers across multiple departments and semesters into a single, high-performance portal. The system handles large PDF document files, renders them natively within the browser, and features a contribution pipeline that allows verified students to upload and tag new materials.",
    heroImage: "/Gitpaers.png",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    role: "Full-Stack Developer & Lead Designer",
    duration: "Oct - Dec 2023",
    status: "Production Ready",
    keyPoints: [
      {
        title: "Advanced Document Indexing",
        desc: "Utilizes MongoDB full-text search indexes to match query terms to course codes, titles, and semesters within milliseconds.",
      },
      {
        title: "In-Browser PDF Renderer",
        desc: "Custom-built document viewer wrapper that eliminates PDF download overhead and supports responsive scaling on mobile devices.",
      },
      {
        title: "Contributor Verification Flow",
        desc: "A secure, role-based authorization system that lets students submit files while reserving publication approval for administrators.",
      },
      {
        title: "Glassmorphic Theme Integration",
        desc: "Designed using sleek backdrop-blur parameters and subtle glowing indicators to fit the modern student workflow aesthetics.",
      }
    ],
    screenshots: [
      { title: "Dashboard Overview", desc: "Main landing interface showing recently viewed papers and quick search filters." },
      { title: "Integrated PDF Viewer", desc: "Native interactive paper reader with sidebar navigation and zoom utilities." },
      { title: "Student Upload Portal", desc: "Drag-and-drop submission form with real-time course validation tags." }
    ],
    github: "https://github.com/sigma390",
    demo: "#",
    accentColor: "from-purple-600 to-indigo-600",
    glowColor: "rgba(112, 66, 248, 0.3)",
  },
  "analytics-company-website": {
    slug: "analytics-company-website",
    title: "Analytics Company Website",
    subtitle: "High-Performance Data Visualization & Corporate Landing Portal",
    description: "A website for an analytics company that provides data-driven insights and solutions to help businesses make informed decisions and drive growth.",
    longDescription: "Built for a forward-thinking analytics group, this corporate web platform translates complex data operations into beautiful, engaging stories. The core value lies in its high-speed performance and visually breathtaking charts, illustrating the power of big data. The application uses state-of-the-art animation orchestration to deliver a responsive, immersive experience that turns prospects into partners.",
    heroImage: "/AnalyticsWeb.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Recharts", "TypeScript"],
    role: "Frontend Engineer & UI Designer",
    duration: "Jan - Feb 2024",
    status: "Live & Deployed",
    keyPoints: [
      {
        title: "Interactive Live Chart Demos",
        desc: "Features interactive analytics components that simulate real-time API polling, showing visitors the exact capability of the company's stack.",
      },
      {
        title: "Scroll-Triggered Parallax Stories",
        desc: "Uses Framer Motion scroll indicators to choreograph text reveals and SVG path drawing animations as users learn about key services.",
      },
      {
        title: "Optimized Asset Loading",
        desc: "Implements strict media optimization and lazy-loading components to maintain a perfect Lighthouse speed index score.",
      },
      {
        title: "Pixel-Perfect Responsive Styling",
        desc: "Adapts visual density dynamically from massive 4K desktop screens down to standard mobile screens without losing layout coherence.",
      }
    ],
    screenshots: [
      { title: "Interactive Hero Demo", desc: "Glassmorphic hero screen featuring simulated data visualizer charts." },
      { title: "Services Breakdown Grid", desc: "Grid cards utilizing interactive hover-glowing panels and custom icons." },
      { title: "Dynamic Client Success Story", desc: "A narrative scroll-timeline demonstrating client ROI through animated bar graphs." }
    ],
    github: "https://github.com/sigma390",
    demo: "#",
    accentColor: "from-cyan-500 to-blue-600",
    glowColor: "rgba(0, 229, 255, 0.3)",
  },
  "space-themed-website": {
    slug: "space-themed-website",
    title: "Space Themed Website",
    subtitle: "Cosmic 3D Portfolio & Creative Web Showcase",
    description: "Explore my space-themed portfolio for a cosmic collection of innovative and boundary-pushing projects that defy gravity and showcase my out-of-this-world creativity.",
    longDescription: "This developer portfolio represents the convergence of high-performance WebGL graphics and modern responsive layouts. By utilizing three-dimensional orbital particle starfields and interactive canvas modules, the site transports the viewer into a deep-space station. Every button hover, card rotation, and transition is designed to convey high craft and agentic coding capabilities.",
    heroImage: "/Spacw.png",
    tags: ["Next.js 13", "Three.js", "React Three Fiber", "Framer Motion", "Tailwind CSS", "TypeScript"],
    role: "Creative Technologist",
    duration: "March 2024",
    status: "Production Complete",
    keyPoints: [
      {
        title: "3D Particle Starfield Canvas",
        desc: "An optimized WebGL star background utilizing custom shaders and math coordinate equations, rendering 5000+ individual stars smoothly.",
      },
      {
        title: "Dynamic Skill Orbit Grid",
        desc: "Renders skill badges utilizing staggered entry patterns, making technical competency feel like a constellation map.",
      },
      {
        title: "Advanced Backdrop Filter Navbar",
        desc: "A floating menu utilizing hardware-accelerated blur filters and glowing border lines that adjust state based on scroll coordinates.",
      },
      {
        title: "Performance Shader Culling",
        desc: "Implements React Three Fiber hook optimizations to pause 3D loops when sections are out of the viewport, conserving GPU.",
      }
    ],
    screenshots: [
      { title: "Starfield Hero Arena", desc: "Main landing perspective featuring floating 3D planets and interactive call-to-actions." },
      { title: "Skills Constellation Grid", desc: "Dynamic rendering area displaying skill categories grouped into cosmic nodes." },
      { title: "Detailed Projects Console", desc: "Dedicated section showcasing project items with custom gradient glass panels." }
    ],
    github: "https://github.com/sigma390",
    demo: "#",
    accentColor: "from-purple-500 to-cyan-500",
    glowColor: "rgba(186, 156, 255, 0.3)",
  },
};

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-4 md:px-10 lg:px-20 relative z-[30] overflow-hidden">
      {/* Background Orbs */}
      <div 
        className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full blur-[150px] pointer-events-none transition-all duration-1000" 
        style={{ backgroundColor: project.glowColor }}
      />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7042f8]/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7042f861] bg-[#0300145e] text-gray-300 hover:text-white hover:border-[#ba9cff] transition-all duration-300 backdrop-blur-md group"
          >
            <RxArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/projects"
            className="text-sm text-gray-400 hover:text-[#ba9cff] transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#2A0E61]/70 overflow-hidden shadow-2xl bg-[#0300147a] backdrop-blur-sm mb-16"
        >
          <div className="aspect-video md:aspect-[21/9] relative w-full overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/60 to-[#030014]/10" />
            
            {/* Overlay Text Details inside Hero */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col justify-end">
              <div className="flex flex-wrap items-center gap-3 mb-3 font-mono">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#7042f861] bg-[#7042f820] text-[#ba9cff]">
                  {project.role}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#00e5ff61] bg-[#00e5ff15] text-[#00e5ff]">
                  {project.duration}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  {project.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
                {project.title}
              </h1>
              <p className={`text-base md:text-xl font-medium bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
                {project.subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        {/* OVERVIEW & TECH USED SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left / Center 2 Columns: Description & Key Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b border-[#2A0E61] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Mission Description
              </h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 border-b border-[#2A0E61] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Key Deliverables & Capabilities
              </h2>
              <div className="flex flex-col gap-6">
                {project.keyPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl border border-[#2A0E61]/40 bg-[#080226]/30 hover:border-[#7042f8]/50 transition-all duration-300">
                    <span className="text-2xl font-bold text-[#ba9cff]">0{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{point.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Spec Sheet & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* System Specs panel */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#0300148a] p-6 backdrop-blur-md shadow-lg shadow-purple-500/[0.02]">
              <h3 className="text-lg font-bold mb-4 text-[#ba9cff] uppercase tracking-widest text-xs">
                System Specs
              </h3>
              <div className="flex flex-col gap-4 text-sm font-mono">
                <div className="flex justify-between border-b border-[#2a0e61]/50 pb-2">
                  <span className="text-gray-400">Developer Role</span>
                  <span className="font-semibold text-white">{project.role}</span>
                </div>
                <div className="flex justify-between border-b border-[#2a0e61]/50 pb-2">
                  <span className="text-gray-400">Timeline</span>
                  <span className="font-semibold text-white">{project.duration}</span>
                </div>
                <div className="flex justify-between border-b border-[#2a0e61]/50 pb-2">
                  <span className="text-gray-400">Status</span>
                  <span className="font-semibold text-emerald-400">{project.status}</span>
                </div>
              </div>
            </div>

            {/* Tech Stack tag panel */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#0300148a] p-6 backdrop-blur-md shadow-lg shadow-purple-500/[0.02]">
              <h3 className="text-lg font-bold mb-4 text-[#00e5ff] uppercase tracking-widest text-xs">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#2A0E61] bg-[#080226] text-gray-300 hover:text-[#ba9cff] hover:border-[#7042f8]/50 transition-all cursor-default font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Panel */}
            <div className="flex flex-col gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#7042f861] bg-[#7042f810] text-[#ba9cff] hover:bg-[#7042f820] hover:border-[#ba9cff] transition-all font-semibold shadow-md"
              >
                <RxGithubLogo className="text-xl" />
                Explore Source Code
              </a>
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#7042f8] to-[#00e5ff] text-white hover:opacity-90 transition-all font-semibold shadow-lg shadow-[#7042f8]/20"
                >
                  <FaGlobe className="text-sm" />
                  Launch Application
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* SCREENSHOTS / GALLERIES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#2A0E61] pt-16"
        >
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Interface Visualizations</h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-2xl">
            High-fidelity module layouts and client screens demonstrating interactive performance and responsive layouts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.screenshots.map((shot, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-[#2A0E61] bg-[#080226]/20 p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-[#7042f8]/70 hover:shadow-[0_0_20px_rgba(112,66,248,0.1)]"
              >
                {/* Floating graphic indicator */}
                <div className="absolute top-4 right-4 text-gray-600 group-hover:text-[#00e5ff] transition-colors">
                  <FaRegImage className="text-2xl" />
                </div>

                {/* Grid Design details to make it feel like a blueprint layout */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

                <div className="pt-8">
                  <span className="text-xs uppercase tracking-widest text-[#ba9cff] font-semibold">
                    Screenshot Placeholder 0{index + 1}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-[#00e5ff] transition-colors">
                    {shot.title}
                  </h4>
                </div>

                <p className="text-gray-400 text-xs md:text-sm mt-4 leading-relaxed relative z-10">
                  {shot.desc}
                </p>

                {/* Highlight line animation */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
