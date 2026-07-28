import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="page-about" className="py-4 sm:py-6 space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F2B64E] bg-[#055C5E] px-2.5 py-0.5 rounded-sm inline-block">
          ABOUT
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
          About Me
        </h1>
        <p className="text-xs sm:text-sm text-[#4B5563]">
          A brief look into my engineering background and software philosophy.
        </p>
      </div>

      {/* Main Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="portfolio-card"
      >
        <p className="text-sm sm:text-base text-[#1E2525] leading-relaxed font-medium">
          Driven by curiosity and software craft, I approach engineering as a discipline of clarity, performance, and modularity. Whether architecting intuitive web interfaces, optimizing algorithmic logic, or designing intelligent AI workflows, my focus is on building resilient systems that solve real-world problems efficiently.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href="mailto:yadusonam08@gmail.com"
          className="btn-primary"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email Me</span>
        </a>

        <a
          href="https://github.com/iamsonam08"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <Github className="w-3.5 h-3.5 text-[#055C5E]" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sonam-yadav-949489316/"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <Linkedin className="w-3.5 h-3.5 text-[#055C5E]" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default About;
