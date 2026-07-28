import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about-section" className="space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#14B8A6]">
          ABOUT
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
          About Me
        </h2>
        <p className="text-xs sm:text-sm text-[#9CA3AF]">
          A brief look into my engineering background and software philosophy.
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed max-w-3xl"
      >
        Driven by curiosity and software craft, I approach engineering as a discipline of clarity, performance, and modularity. Whether architecting intuitive web interfaces, optimizing algorithmic logic, or designing intelligent AI workflows, my focus is on building resilient systems that solve real-world problems efficiently.
      </motion.p>

      {/* Social Links */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href="mailto:yadusonam08@gmail.com"
          className="btn-secondary"
        >
          <Mail className="w-3.5 h-3.5 text-[#14B8A6]" />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/iamsonam08"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <Github className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sonam-yadav-949489316/"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default About;

