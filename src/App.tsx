/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import GitHub from "./sections/GitHub";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#e3e2e2] flex flex-col antialiased selection:bg-primary/20 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Certificates />

        <GitHub />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
