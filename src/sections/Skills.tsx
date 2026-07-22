/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SectionHeader from "../components/SectionHeader";
import SkillCard from "../components/SkillCard";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          number="02 // SKILLS"
          title="Technical Skills"
          subtitle="Languages, frameworks, tools, and technologies I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((group, index) => (
            <SkillCard key={group.category} group={group} index={index} />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#1E1E1E]/40 border border-white/5 text-center max-w-2xl mx-auto">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed">
            AI-assisted development tools (Cursor, Copilot, MCP Servers) and languages (Arabic, English) are also part of my toolkit.
          </p>
        </div>
      </div>
    </section>
  );
}
