"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowLeft, RxGithubLogo, RxLinkedinLogo, RxEnvelopeClosed, RxMobile } from "react-icons/rx";
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket } from "react-icons/fa";
import CosmicGlobe from "@/components/main/CosmicGlobe";

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  clients?: string[];
  techStack: string[];
  points: string[];
}

interface ProjectBrief {
  title: string;
  subtitle: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    role: "Full Stack Developer (SDE)",
    company: "Propertise - FZCO",
    location: "Dubai, UAE (Remote)",
    duration: "Aug 2025 – Present",
    techStack: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Material UI", "TanStack Query", "Redux Toolkit"],
    points: [
      "Designed and implemented a configurable expense workflow system integrating vendors, budgets, procurement (POs), and multi-step financial approvals across portfolio, unit, and common-area assets.",
      "Built backend services for expense routing, transaction validation, and automated approval logic, supporting 1,000+ financial transactions with rule-based workflows and role-based authorization.",
      "Developed financial modules including invoices, debit/credit adjustments, refunds, and settlement reconciliation, while optimizing APIs and database queries to reduce server load by ~30% and improve response times by ~40%."
    ]
  },
  {
    role: "Full Stack Developer (SDE 1)",
    company: "Infinite Locus",
    location: "Delaware, US (Remote)",
    duration: "Jan 2025 – Jul 2025",
    clients: ["Supertails", "KPMG", "UDC", "TenXu", "Wellbeing Nutrition"],
    techStack: ["React.js", "Next.js", "TypeScript", "Node.js", "FastAPI", "GraphQL", "MongoDB", "SQL", "Tailwind CSS", "ShadCN UI", "TanStack Query", "Redux Toolkit", "Razorpay", "Material UI"],
    points: [
      "Developed healthcare booking modules for Supertails including PRM agent booking engine, user-facing clinic booking flow, mobile at-home booking system with Razorpay integration, and post-consultation management with live status tracking and PDF medical records.",
      "Enhanced KPMG financial valuation platform by implementing 2FA authentication system, RBAC user management, threaded comment module with file attachments, and resolved critical financial calculation bugs for Beta coefficients and debt ratios.",
      "Built e-commerce platform features for TenX U including GraphQL integration with Saleor backend, homepage with dynamic product rendering, wishlist functionality, user profile management, cart history, and responsive authentication flows.",
      "Created UDC admin content management module with multimedia slide creation supporting video/audio/image/MCQ content types, location-based API integration for city filtering, and comprehensive admin panel with file upload capabilities."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Fuellstack",
    location: "Bangalore, IN (Remote)",
    duration: "Jun 2024 – Nov 2024",
    clients: ["Elysian Softech", "LogicVeda", "SkinSage"],
    techStack: ["React", "TypeScript", "Node.js", "FastAPI", "MongoDB", "Redis", "OpenAI", "Context", "Docker", "Render", "Azure"],
    points: [
      "Delivered 3 production-grade platforms across education, healthcare, and AI messaging domains, building scalable systems used by 4,000+ active users and processing thousands of real-time interactions.",
      "Built LogicVeda, an internship management platform automating applications, MCQ assessments, assignments, payments (Razorpay), and certificate generation for 4,000+ students.",
      "Developed SkinSage, a tele-dermatology platform enabling dermatologist discovery, appointment booking, and real-time video consultations via Agora RTC with role-based dashboards for patients, doctors, and admins.",
      "Engineered an AI-powered omnichannel messaging platform for Elysian Softech integrating WhatsApp, Twilio, Facebook, email, and voice, with OpenAI-driven automated responses and conversation summarization.",
      "Built scalable backend services using Node.js and FastAPI with MongoDB and Redis, supporting multi-tenant messaging workflows, AI pipelines, and real-time operations.",
      "Containerized services with Docker and implemented CI/CD pipelines on Azure, improving deployment reliability and enabling automated builds, testing, and production releases."
    ]
  },
  {
    role: "Full Stack Development Intern",
    company: "Wisdom Peak Analytics",
    location: "Gurugram, IN",
    duration: "Mar 2024 – May 2024",
    techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Payment Gateway Integration"],
    points: [
      "Developed company portfolio website from scratch using React.js and modern UI principles, establishing digital presence for analytics startup with responsive design across all devices.",
      "Contributed to production travel agency platform by implementing user authentication.",
      "Optimized application performance through code refactoring and database query optimization, improving page load times by 40%.",
      "Collaborated with cross-functional team to deliver features on tight deadlines, gaining experience in agile development and startup environment."
    ]
  }
];

const projectsBrief: ProjectBrief[] = [
  {
    title: "Blumehealth (Freelance)",
    subtitle: "Healthcare Platform",
    points: [
      "Delivered the entire product end-to-end with Next.js 15 + TypeScript on the frontend and Node.js/Express + MongoDB on the backend, covering provider onboarding, service catalogs, and channel-based content delivery.",
      "Built secure auth with JWT access/refresh tokens, role-based permissions, email verification/reset workflows, and Google OAuth support.",
      "Implemented Stripe Checkout + Webhooks for recurring plans and premium channel add-ons, including upgrade/downgrade flows.",
      "Added Cloudinary media handling, Joi validation, centralized error handling, and automated lint/test coverage (ESLint, Jest) for production readiness.",
      "Deployed the backend on AWS EC2 with PM2/Docker and shipped the frontend through Netlify builds."
    ]
  },
  {
    title: "GIT Papers Hub App",
    subtitle: "Academic Management System",
    points: [
      "Designed and shipped Git PapersHUB, a MERN-stack portal where students browse categorized previous-year exam papers through a polished React UI backed by Express/MongoDB services.",
      "Built secure authentication with role-based upload permissions so vetted contributors can upload new papers.",
      "Implemented structured document indexing plus optimized MongoDB queries/endpoints, cutting retrieval latency.",
      "Deployed the stack to cloud infrastructure (frontend on Vercel, API on managed hosting)."
    ]
  },
  {
    title: "NPTEL Certification Fraud Detection System",
    subtitle: "Machine Learning & Security",
    points: [
      "Developed a machine learning-based fraud detection system to identify anomalous certification activities using structured candidate datasets.",
      "Performed data preprocessing, feature engineering, and exploratory analysis to detect irregular behavior patterns.",
      "Implemented classification models and evaluated performance using precision, recall, and F1-score metrics."
    ]
  }
];

const skillsMatrix = {
  languages: ["TypeScript", "JavaScript", "Python", "Go/Golang", "C++"],
  aiTools: ["Cursor IDE", "Windsurf IDE", "AI Code Generation", "Debugging Workflows"],
  frontend: ["React.js", "Next.js", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Material UI", "ShadCN UI"],
  backend: ["Node.js", "Express.js", "FastAPI", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Socket.io"],
  devops: ["AWS EC2", "Vercel", "Netlify", "Git/GitHub", "CI/CD", "Docker", "Jest", "ESLint"],
  integrations: ["Razorpay", "Stripe", "AG Grid", "Axios", "JWT Authentication", "OAuth", "2FA"]
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-4 md:px-10 lg:px-20 relative z-[30] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#7042f8]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00e5ff]/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7042f861] bg-[#0300145e] text-gray-300 hover:text-white hover:border-[#ba9cff] transition-all duration-300 backdrop-blur-md group"
          >
            <RxArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* HERO/HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#2A0E61]/70 bg-[#0300147a] backdrop-blur-sm p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden"
        >
          {/* Blueprint background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-30" />
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
            <div className="w-full lg:w-3/5">
              <span className="text-xs font-bold tracking-widest text-[#00e5ff] uppercase font-mono">
                System Administrator / Developer Profile
              </span>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-500 tracking-tight mt-2 mb-4">
                Omkar Patil
              </h1>
              <p className="text-gray-300 text-base md:text-lg font-medium mb-6">
                Full Stack Developer with a proven record of shipping configurable financial workflows, healthcare engines, and scalable AI platforms.
              </p>

              {/* Contact Details embedded below bio */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 font-mono">
                <a href="mailto:390.ompatil@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors bg-[#080226]/40 px-3.5 py-2 rounded-lg border border-[#2A0E61]/60">
                  <RxEnvelopeClosed className="text-base text-[#ba9cff]" />
                  <span>390.ompatil@gmail.com</span>
                </a>
                <a href="tel:7083630557" className="flex items-center gap-2.5 hover:text-white transition-colors bg-[#080226]/40 px-3.5 py-2 rounded-lg border border-[#2A0E61]/60">
                  <RxMobile className="text-base text-[#00e5ff]" />
                  <span>+91 7083630557</span>
                </a>
              </div>
              <div className="flex gap-4 font-mono">
                <a
                  href="https://github.com/sigma390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#7042f861] bg-[#7042f810] text-[#ba9cff] hover:bg-[#7042f820] hover:border-[#ba9cff] transition-all"
                >
                  <RxGithubLogo className="text-sm" />
                  GitHub Archive
                </a>
                <a
                  href="https://www.linkedin.com/in/omkar-patil-4087b4242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#00e5ff61] bg-[#00e5ff10] text-[#00e5ff] hover:bg-[#00e5ff20] hover:border-[#00e5ff] transition-all"
                >
                  <RxLinkedinLogo className="text-sm" />
                  LinkedIn Portal
                </a>
              </div>
            </div>

            {/* Right side: 3D Cosmic Globe animation */}
            <div className="w-full lg:w-2/5 flex items-center justify-center">
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] relative">
                <CosmicGlobe />
              </div>
            </div>
          </div>
        </motion.div>

        {/* EDUCATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-xl border border-[#2A0E61] bg-[#0300148a] p-6 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-2xl text-[#00e5ff]" />
            <h2 className="text-xl font-bold tracking-wider uppercase text-gray-300">Education Details</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">KLS Gogte Institute of Technology</h3>
              <p className="text-gray-400 text-sm md:text-base">Bachelor of Engineering, Major in Computer Science</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 font-bold text-sm font-mono">
                CGPA: 9.23 / 10
              </span>
            </div>
          </div>
        </motion.div>

        {/* PROFESSIONAL TIMELINE SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <FaBriefcase className="text-2xl text-[#ba9cff]" />
            <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-200">Mission logs: Professional Experience</h2>
          </div>

          <div className="relative border-l border-[#2A0E61] ml-4 md:ml-6 pl-8 md:pl-10 flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline node dot */}
                <span className="absolute -left-[41px] md:-left-[51px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#030014] border-2 border-[#7042f8] shadow-[0_0_10px_#7042f8]">
                  <span className="h-2 w-2 rounded-full bg-[#00e5ff]" />
                </span>

                {/* Experience Card */}
                <div className="rounded-xl border border-[#2A0E61] bg-[#0300148a] p-6 backdrop-blur-md hover:border-[#7042f8]/60 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 border-b border-[#2a0e61]/50 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#ba9cff] transition-colors">{exp.role}</h3>
                      <p className="text-gray-400 text-sm font-medium mt-0.5">
                        {exp.company} <span className="text-[#00e5ff]">•</span> {exp.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold border border-[#7042f861] bg-[#7042f815] text-[#ba9cff] font-mono">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {exp.clients && (
                    <div className="mb-4">
                      <span className="text-xs uppercase font-bold tracking-widest text-[#00e5ff] mr-2">Clients:</span>
                      <span className="text-sm text-gray-300">{exp.clients.join(", ")}</span>
                    </div>
                  )}

                  {/* Bullet accomplishments */}
                  <ul className="flex flex-col gap-3 text-gray-300 text-sm md:text-base mb-6 list-none">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#7042f8] text-lg font-bold mt-[-2px]">&gt;_</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-2">Technologies Deployed</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md text-xs border border-[#2a0e61] bg-[#080226]/50 text-gray-300 hover:text-[#ff00ff] hover:border-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-default font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <FaRocket className="text-2xl text-[#00e5ff]" />
            <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-200">Other Operations: Major Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsBrief.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-xl border border-[#2A0E61] bg-[#0300148a] p-6 backdrop-blur-md hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#00e5ff] tracking-wider uppercase">{proj.subtitle}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-4">{proj.title}</h3>
                  <ul className="flex flex-col gap-2.5 text-gray-400 text-xs md:text-sm list-none">
                    {proj.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECHNICAL SKILLS MATRIX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#2A0E61] pt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaCode className="text-2xl text-[#ba9cff]" />
            <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-200">Technical Skills Matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#080226]/20 p-5">
              <h3 className="text-sm font-bold text-[#ba9cff] uppercase tracking-widest mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skillsMatrix.languages.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded bg-[#030014] border border-[#2A0E61] text-xs text-gray-300 hover:text-[#ff00ff] hover:border-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-default font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#080226]/20 p-5">
              <h3 className="text-sm font-bold text-[#00e5ff] uppercase tracking-widest mb-3">AI-Assisted Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skillsMatrix.aiTools.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded bg-[#030014] border border-[#2A0E61] text-xs text-gray-300 hover:text-[#ff00ff] hover:border-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-default font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#080226]/20 p-5">
              <h3 className="text-sm font-bold text-[#ba9cff] uppercase tracking-widest mb-3">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skillsMatrix.frontend.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded bg-[#030014] border border-[#2A0E61] text-xs text-gray-300 hover:text-[#ff00ff] hover:border-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-default font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#080226]/20 p-5">
              <h3 className="text-sm font-bold text-[#00e5ff] uppercase tracking-widest mb-3">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skillsMatrix.backend.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded bg-[#030014] border border-[#2A0E61] text-xs text-gray-300 hover:text-[#ff00ff] hover:border-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-default font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#080226]/20 p-5">
              <h3 className="text-sm font-bold text-[#ba9cff] uppercase tracking-widest mb-3">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skillsMatrix.devops.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded bg-[#030014] border border-[#2A0E61] text-xs text-gray-300 hover:text-[#ff00ff] hover:border-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-default font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="rounded-xl border border-[#2A0E61] bg-[#080226]/20 p-5">
              <h3 className="text-sm font-bold text-[#00e5ff] uppercase tracking-widest mb-3">Integrations & Security</h3>
              <div className="flex flex-wrap gap-2">
                {skillsMatrix.integrations.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded bg-[#030014] border border-[#2A0E61] text-xs text-gray-300 hover:text-[#ff00ff] hover:border-[#ff00ff] hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 cursor-default font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
