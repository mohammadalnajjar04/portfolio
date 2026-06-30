/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs text-primary font-semibold tracking-wider">
          {number}
        </span>
        <div className="w-8 h-[1px] bg-primary/40"></div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-zinc-400 font-normal max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
