import React from 'react';
import { Mail, Linkedin, Github, Code2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { DownloadResumeButton } from './DownloadResumeButton';

export const HomeCTA: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home-cta-section" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="portfolio-card space-y-4"
      >
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F2B64E] bg-[#055C5E] px-2.5 py-0.5 rounded-sm inline-block">
            CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
            Let's Work Together
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563]">
            Actively seeking Software Engineering, AI Engineering, and Full Stack opportunities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a href="mailto:yadusonam08@gmail.com" className="btn-primary">
            <Mail className="w-3.5 h-3.5" />
            <span>Email Me</span>
          </a>

          <DownloadResumeButton />

          <a
            href="https://www.linkedin.com/in/sonam-yadav-949489316/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#055C5E]" />
            <span>LinkedIn</span>
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
            href="https://leetcode.com/u/iamsonam08_06/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Code2 className="w-3.5 h-3.5 text-[#055C5E]" />
            <span>LeetCode</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
