/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Code, Layout, Server, Database, Wrench, GraduationCap, Smartphone } from "lucide-react";
import { SkillGroup } from "../data/portfolioData";

interface SkillCardProps {
  group: SkillGroup;
  index: number;
}

export default function SkillCard({ group, index }: SkillCardProps) {
  // Category Icon Resolver
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "programming":
        return <Code className="w-5 h-5 text-primary" />;
      case "frontend":
        return <Layout className="w-5 h-5 text-primary" />;
      case "backend":
        return <Server className="w-5 h-5 text-primary" />;
      case "database":
        return <Database className="w-5 h-5 text-primary" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-primary" />;
      case "currently learning":
        return <GraduationCap className="w-5 h-5 text-primary" />;
      case "mobile learning":
        return <Smartphone className="w-5 h-5 text-primary" />;
      default:
        return <Code className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="p-6 rounded-2xl bg-[#1E1E1E] border border-white/5 hover:border-primary/10 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Decorative vertical border highlight */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-primary transition-colors duration-300" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/5 transition-colors duration-300">
          {getCategoryIcon(group.category)}
        </div>
        <h3 className="font-sans font-bold text-white text-base tracking-wide uppercase">
          {group.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between gap-2 px-3.5 py-2 text-xs font-mono rounded-lg bg-black/30 border border-white/5 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all duration-200"
          >
            <span>{skill.name}</span>
            {skill.level && (
              <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                {skill.level}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
