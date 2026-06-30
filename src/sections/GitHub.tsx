/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, BookOpen } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { githubStatsData } from "../data/portfolioData";

export default function GitHub() {
  return (
    <section id="github" className="py-20 md:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          number="06 // GITHUB"
          title="GitHub"
          subtitle="My GitHub profile and open-source repositories."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Profile overview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/5">
                  <Github className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">GitHub</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans font-bold text-white text-xl">@{githubStatsData.username}</h4>
                <p className="text-sm text-zinc-400 font-mono">
                  Software Engineer
                </p>
              </div>

              {/* GitHub Stats Card */}
              <div className="pt-4">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubStatsData.username}&show_icons=true&theme=dark&bg_color=0D0D0D&border_color=ffffff0d&text_color=e3e2e2&icon_color=FF2D20&title_color=FF2D20&hide=contribs`}
                  alt={`${githubStatsData.username}'s GitHub stats`}
                  className="w-full rounded-xl border border-white/5"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <a
                href={githubStatsData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/5"
              >
                <span>View Profile</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Language stats and featured repos */}
          <div className="lg:col-span-8 space-y-8">
            {/* Language distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 shadow-xl"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubStatsData.username}&layout=compact&theme=dark&bg_color=0D0D0D&border_color=ffffff0d&text_color=e3e2e2&title_color=FF2D20`}
                alt={`${githubStatsData.username}'s top languages`}
                className="w-full rounded-xl border border-white/5"
                loading="lazy"
              />
            </motion.div>

            {/* Featured Repositories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 md:p-8 rounded-2xl bg-[#1E1E1E] border border-white/5 space-y-6 shadow-xl"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-primary" />
                <h4 className="font-sans font-bold text-white text-base uppercase tracking-wider">
                  Featured Repositories
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {githubStatsData.featuredRepos.map((repo) => (
                  <div
                    key={repo.name}
                    className="p-5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between h-[180px] hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white group-hover:text-primary transition-colors">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-mono text-xs font-bold">{repo.name}</span>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-wider">
                        {repo.language}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
