/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Lock, Database, Code, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Status Badge Styling Helper
  const getStatusStyle = () => {
    switch (project.status) {
      case "private":
        return {
          bg: "bg-amber-950/40 text-amber-400 border-amber-900/30",
          icon: <Lock className="w-3.5 h-3.5" />
        };
      case "graduation":
        return {
          bg: "bg-emerald-950/40 text-emerald-400 border-emerald-900/30",
          icon: <ShieldCheck className="w-3.5 h-3.5" />
        };
      case "public":
        return {
          bg: "bg-primary/10 text-primary border-primary/20",
          icon: <Code className="w-3.5 h-3.5" />
        };
      default:
        return {
          bg: "bg-zinc-800/60 text-zinc-400 border-zinc-700/30",
          icon: <HelpCircle className="w-3.5 h-3.5" />
        };
    }
  };

  const statusStyle = getStatusStyle();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl overflow-hidden"
    >
      {/* Dynamic Background Red Ambient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
            {project.type}
          </span>
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusStyle.bg}`}>
            {statusStyle.icon}
            <span>{project.badge}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-white/5 rounded-md border border-white/5 flex items-center gap-1"
            >
              {tech.toLowerCase().includes("database") || tech.toLowerCase().includes("sql") ? (
                <Database className="w-3 h-3 text-primary" />
              ) : null}
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Button & Link Interactions */}
      <div className="pt-4 border-t border-white/5 mt-auto flex flex-wrap items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          {/* View Details Action */}
          {(project.status === "private" || project.status === "graduation" || project.status === "learning") && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-primary transition-colors"
            >
              <span>{isExpanded ? "Hide Architecture" : "View Details"}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}

          {/* Links for public projects */}
          {project.status === "public" && (
            <>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-1.5 text-xs font-mono text-primary hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-primary/10 hover:bg-primary/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </>
          )}
        </div>

        <span className="text-[11px] font-mono text-zinc-600">
          {project.status === "private" ? "Private" : project.status === "learning" ? "In Progress" : "Completed"}
        </span>
      </div>

      {/* Expandable Project Details & Architecture Breakdown */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/5 bg-black/20 p-4 rounded-xl space-y-3 text-xs text-zinc-300">
              <div className="font-semibold text-white tracking-wider uppercase text-[10px] text-primary">
                Project Details
              </div>
              <p className="leading-relaxed">
                {project.id === "agri-supply-chain" && (
                  "Built with PHP, JavaScript, HTML5, CSS3, and MySQL. Features AI-assisted decision-support modules for price prediction and logistics optimization, dynamic dashboards, and secure authentication."
                )}
                {project.id === "customer-service-mobile" && (
                  "Built with Android Studio, Java, and XML. Includes custom UI components for customer inquiry modules, SQLite offline data storage, and localized synchronization."
                )}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
