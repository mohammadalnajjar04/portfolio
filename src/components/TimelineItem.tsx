/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Code2, Award } from "lucide-react";
import { Experience } from "../data/portfolioData";

interface TimelineItemProps {
  item: Experience;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  // Determine relevant icon for timeline item
  const getTimelineIcon = (id: string) => {
    if (id.includes("dalil")) return <Briefcase className="w-5 h-5 text-primary" />;
    if (id.includes("bsc") || id.includes("degree")) return <GraduationCap className="w-5 h-5 text-primary" />;
    if (id.includes("oracle")) return <Code2 className="w-5 h-5 text-primary" />;
    return <Award className="w-5 h-5 text-primary" />;
  };

  return (
    <div className="relative pl-8 md:pl-12 pb-12 last:pb-0">
      {/* Decorative vertical connection line */}
      <div className="absolute left-[15px] md:left-[23px] top-8 bottom-0 w-[1px] bg-zinc-800 last:hidden" />

      {/* Decorative timeline bullet node */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="absolute left-0 md:left-2 top-1.5 w-8 h-8 rounded-full bg-[#1E1E1E] border border-white/10 flex items-center justify-center z-10 shadow-lg group-hover:border-primary/50 transition-colors"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 hover:border-white/10 transition-all duration-300 shadow-md"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5">
              {getTimelineIcon(item.id)}
            </div>
            <div>
              <h3 className="font-sans font-bold text-white text-lg tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm font-mono text-zinc-400">
                {item.organization}
              </p>
            </div>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20 self-start md:self-center">
            {item.period}
          </span>
        </div>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-black/20 px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
