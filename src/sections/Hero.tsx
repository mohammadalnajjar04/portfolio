/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Download, Terminal, Database, Code } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const titles = [
    "Computer Science Graduate",
    "Software Engineer",
    "Full-Stack Developer",
    "Oracle SQL Developer"
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [titles.length]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D] py-20"
    >
      {/* Dynamic Ambient Red Halo/Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[15%] right-[10%] w-[30vw] h-[30vw] bg-primary/3 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Futuristic Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col justify-center items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 shadow-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] tracking-wider uppercase">Open to software engineering opportunities</span>
        </motion.div>

        {/* Large Professional Display Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase mb-6"
        >
          MOHAMMAD<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-primary">
            ALNAJJAR
          </span>
        </motion.h1>

        {/* Dynamic Rotating Titles */}
        <div className="h-10 sm:h-12 mb-8 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 font-mono text-sm sm:text-base lg:text-lg text-primary uppercase tracking-[0.2em] font-medium"
            >
              {titleIndex === 0 && <Code className="w-4 h-4 text-primary" />}
              {titleIndex === 1 && <Terminal className="w-4 h-4 text-primary" />}
              {titleIndex === 2 && <Code className="w-4 h-4 text-primary" />}
              {titleIndex === 3 && <Database className="w-4 h-4 text-primary" />}
              <span>{titles[titleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Short Professional Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-12"
        >
          Computer Science graduate with experience in full-stack development, database systems, and Oracle technologies. I build clean, functional applications that solve real problems.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={() => handleScrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-container text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("contact");
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-[#1E1E1E]/40 hover:bg-[#1E1E1E]/80 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Contact Me</span>
          </a>

          <a
            href="/resume.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-primary/20 hover:border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
            aria-label="Download resume (PDF)"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Social Badges Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-8 border-t border-white/5 pt-8 w-full max-w-lg"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group font-mono text-[10px] uppercase tracking-widest"
          >
            <Github className="w-4.5 h-4.5 group-hover:scale-110 transition-transform text-zinc-400 group-hover:text-primary" />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group font-mono text-[10px] uppercase tracking-widest"
          >
            <Linkedin className="w-4.5 h-4.5 group-hover:scale-110 transition-transform text-zinc-400 group-hover:text-primary" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group font-mono text-[10px] uppercase tracking-widest"
          >
            <Mail className="w-4.5 h-4.5 group-hover:scale-110 transition-transform text-zinc-400 group-hover:text-primary" />
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
