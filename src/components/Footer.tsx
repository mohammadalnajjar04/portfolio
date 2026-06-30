/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Meta */}
        <div className="text-center md:text-left space-y-2">
          <div className="font-sans font-extrabold text-white text-lg tracking-tighter uppercase">
            MOHAMMAD ALNAJJAR
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            Software Engineer &amp; Computer Science Graduate.
          </p>
        </div>

        {/* Info & Tech Stacks */}
        <div className="text-center md:text-right space-y-4">
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-zinc-600 font-mono leading-relaxed">
            © {new Date().getFullYear()} Mohammad Alnajjar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Elegant Floating Back-To-Top Anchor */}
      <button
        onClick={handleScrollToTop}
        className="absolute bottom-6 right-6 p-3 rounded-full bg-primary hover:bg-primary-container text-white transition-all shadow-lg hover:scale-105 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
