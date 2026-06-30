/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Clock, ArrowUpRight, Lock } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { certificatesData } from "../data/portfolioData";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-28 bg-[#171717] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          number="05 // CERTIFICATES"
          title="Certificates"
          subtitle="Professional certifications I am currently working toward."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/5 hover:border-primary/20 transition-all duration-300 group flex flex-col justify-between h-[220px] relative overflow-hidden"
            >
              {/* Subtle Ambient Accent Circle */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/2 rounded-full blur-xl group-hover:bg-primary/5 transition-colors" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 text-primary group-hover:bg-primary/5 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/20 text-amber-400 border border-amber-900/30 text-[10px] font-mono uppercase font-bold tracking-wider">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Planned</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-white text-base leading-snug group-hover:text-primary transition-colors mb-2">
                  {cert.title}
                </h3>
                {/* Issuer */}
                <p className="text-zinc-500 text-xs font-mono">{cert.issuer}</p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-600 mt-auto">
                <span className="uppercase tracking-wider">Not yet completed</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Planned
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
