/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ContactForm from "../components/ContactForm";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const contactDetails = [
    {
      id: "email",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-5 h-5 text-primary" />
    },
    {
      id: "phone",
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: <Phone className="w-5 h-5 text-primary" />
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "mohammad-alnajjar04",
      href: personalInfo.linkedin,
      icon: <Linkedin className="w-5 h-5 text-primary" />
    },
    {
      id: "github",
      label: "GitHub",
      value: "mohammadalnajjar04",
      href: personalInfo.github,
      icon: <Github className="w-5 h-5 text-primary" />
    },
    {
      id: "location",
      label: "Location",
      value: personalInfo.location,
      icon: <MapPin className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#171717] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          number="07 // CONTACT"
          title="Get in Touch"
          subtitle="Interested in working together? Send me a message and I'll get back to you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left panel: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
                Let's Work <span className="text-primary">Together</span>
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                I'm open to full-time roles, freelance projects, and collaboration opportunities. Send me a message and I'll respond as soon as I can.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {contactDetails.map((detail) => {
                const CardWrapper = detail.href ? "a" : "div";
                return (
                  <motion.div
                    key={detail.id}
                    whileHover={detail.href ? { scale: 1.01, borderColor: "rgba(255, 45, 32, 0.2)" } : {}}
                    className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5 flex items-center gap-4 group transition-all"
                  >
                    {/* Icon container */}
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-primary/5 transition-colors">
                      {detail.icon}
                    </div>

                    {/* Meta info */}
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                        {detail.label}
                      </span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.id !== "email" && detail.id !== "phone" ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-sm md:text-base font-bold text-white hover:text-primary transition-colors font-mono"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm md:text-base font-bold text-white font-mono">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right panel: Form input */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
