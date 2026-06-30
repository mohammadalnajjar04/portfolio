/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#171717] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          number="03 // PROJECTS"
          title="Projects"
          subtitle="Applications and systems I have built or am currently developing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
