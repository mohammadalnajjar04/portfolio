/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SectionHeader from "../components/SectionHeader";
import TimelineItem from "../components/TimelineItem";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          number="04 // EXPERIENCE"
          title="Education & Training"
          subtitle="Academic background, training programs, and ongoing learning."
        />

        <div className="max-w-4xl mx-auto mt-12">
          {experienceData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
