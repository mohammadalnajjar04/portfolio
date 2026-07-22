/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, GraduationCap, Target, Terminal, Compass, BookOpen } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#171717] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          number="01 // BACKGROUND"
          title="About Me"
          subtitle="Academic background, career interests, and current location."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-8 md:p-10 rounded-2xl bg-[#1E1E1E] border border-white/5 space-y-6 shadow-xl relative overflow-hidden"
          >
            {/* Ambient subtle outline detail */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/3 rounded-full blur-2xl" />

            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Background</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
              Building applications from database to frontend.
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              My computer science background taught me to approach problems methodically and write code that is maintainable and well-structured. I enjoy working across the full stack — from designing database schemas to building responsive user interfaces. I'm currently focused on full-stack web development through Daleel Academy's intensive training program.
            </p>
          </motion.div>

          {/* Core Target / Objective Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 space-y-6 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Goal</span>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">What I'm Looking For</h4>
              <p className="text-zinc-400 text-sm leading-relaxed italic">
                "{personalInfo.objective}"
              </p>
            </div>
          </motion.div>

          {/* Academic Base Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 flex gap-4 items-start shadow-xl hover:border-white/10 transition-all"
          >
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Education</span>
              <h4 className="font-bold text-white text-base">B.Sc. Computer Science</h4>
              <p className="text-xs text-zinc-400 font-semibold">Jadara University</p>
              <p className="text-[11px] text-primary font-mono tracking-wider uppercase mt-1">Irbid, Jordan</p>
            </div>
          </motion.div>

          {/* Location & Operations Base Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 flex gap-4 items-start shadow-xl hover:border-white/10 transition-all"
          >
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Location</span>
              <h4 className="font-bold text-white text-base">Irbid, Jordan</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Available for remote work or on-site in Jordan.
              </p>
            </div>
          </motion.div>

          {/* Current Systems Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 flex gap-4 items-start shadow-xl hover:border-white/10 transition-all"
          >
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-primary">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Focus Areas</span>
              <h4 className="font-bold text-white text-base">Full-Stack & Oracle DB</h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {personalInfo.focus.map((item) => (
                  <span
                    key={item}
                    className="text-[9px] font-mono uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5 text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
