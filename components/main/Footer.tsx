"use client";

import React from "react";
import Link from "next/link";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo, RxEnvelopeClosed } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full relative z-[30] border-t border-[#2A0E61] bg-[#0300147a] backdrop-blur-md text-gray-200 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Omkar Patil
          </Link>
          <p className="text-gray-400 text-sm mt-2 max-w-xs leading-relaxed">
            Engineering scalable full-stack applications, interactive 3D frontends, and robust system architectures.
          </p>
        </div>

        {/* Quick Portal Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-sm uppercase tracking-widest text-[#ba9cff] mb-4">Navigations</h4>
          <div className="flex flex-col gap-2 items-center md:items-start text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home System
            </Link>
            <Link href="/about-me" className="text-gray-400 hover:text-white transition-colors duration-300">
              About Me Core
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
              Project Archive
            </Link>
          </div>
        </div>

        {/* Real Social Connections */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-sm uppercase tracking-widest text-[#00e5ff] mb-4">Social Gateways</h4>
          <div className="flex flex-wrap md:flex-col gap-3 justify-center text-sm">
            <a
              href="https://github.com/sigma390"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff00ff] hover:shadow-[0_0_8px_rgba(255,0,255,0.4)] px-2 py-1 rounded transition-all duration-300"
            >
              <RxGithubLogo className="text-base" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/omkar-patil-4087b4242/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff00ff] hover:shadow-[0_0_8px_rgba(255,0,255,0.4)] px-2 py-1 rounded transition-all duration-300"
            >
              <RxLinkedinLogo className="text-base" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/_omkar._patil?igshid=YTQwZjQ0NmI0OA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff00ff] hover:shadow-[0_0_8px_rgba(255,0,255,0.4)] px-2 py-1 rounded transition-all duration-300"
            >
              <RxInstagramLogo className="text-base" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100012152537560&mibextid=pwzcmfqlRWHhawsM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff00ff] hover:shadow-[0_0_8px_rgba(255,0,255,0.4)] px-2 py-1 rounded transition-all duration-300"
            >
              <FaFacebook className="text-base" />
              <span>Facebook</span>
            </a>
            <a
              href="mailto:390.ompatil@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-[#ff00ff] hover:shadow-[0_0_8px_rgba(255,0,255,0.4)] px-2 py-1 rounded transition-all duration-300"
            >
              <RxEnvelopeClosed className="text-base" />
              <span>390.ompatil@gmail.com</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-[#2A0E61]/40 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Omkar Patil. All rights reserved.</p>
        <p className="font-mono">Status: Mission Completed</p>
      </div>
    </footer>
  );
};

export default Footer;