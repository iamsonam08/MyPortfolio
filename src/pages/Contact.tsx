import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Code2, ExternalLink } from 'lucide-react';
import { DownloadResumeButton } from '../components/DownloadResumeButton';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="page-contact" className="py-4 sm:py-6 space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F2B64E] bg-[#055C5E] px-2.5 py-0.5 rounded-sm inline-block">
          CONTACT
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
          Get in Touch
        </h1>
        <p className="text-xs sm:text-sm text-[#4B5563]">
          Available for software engineering roles, technical projects, and collaborations.
        </p>
      </div>

      {/* Minimal Links Stack */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="portfolio-card space-y-4"
      >
        {/* Email */}
        <div className="flex items-center justify-between pb-3.5 border-b border-black/10">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#055C5E]" />
            <span className="text-xs sm:text-sm font-semibold text-[#1E2525]">Email</span>
          </div>
          <a
            href="mailto:yadusonam08@gmail.com"
            className="text-xs sm:text-sm font-mono font-medium text-[#055C5E] hover:underline"
          >
            yadusonam08@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between pb-3.5 border-b border-black/10">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#055C5E]" />
            <span className="text-xs sm:text-sm font-semibold text-[#1E2525]">Location</span>
          </div>
          <span className="text-xs sm:text-sm font-mono text-[#1E2525]">
            Baramati, Maharashtra
          </span>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between pb-3.5 border-b border-black/10">
          <div className="flex items-center gap-3">
            <Linkedin className="w-4 h-4 text-[#055C5E]" />
            <span className="text-xs sm:text-sm font-semibold text-[#1E2525]">LinkedIn</span>
          </div>
          <a
            href="https://www.linkedin.com/in/sonam-yadav-949489316/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-[#055C5E] hover:underline"
          >
            <span>in/sonam-yadav</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#055C5E]" />
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-between pb-3.5 border-b border-black/10">
          <div className="flex items-center gap-3">
            <Github className="w-4 h-4 text-[#055C5E]" />
            <span className="text-xs sm:text-sm font-semibold text-[#1E2525]">GitHub</span>
          </div>
          <a
            href="https://github.com/iamsonam08"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-[#055C5E] hover:underline"
          >
            <span>iamsonam08</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#055C5E]" />
          </a>
        </div>

        {/* LeetCode */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-4 h-4 text-[#055C5E]" />
            <span className="text-xs sm:text-sm font-semibold text-[#1E2525]">LeetCode</span>
          </div>
          <a
            href="https://leetcode.com/u/iamsonam08_06/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-[#055C5E] hover:underline"
          >
            <span>iamsonam08_06</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#055C5E]" />
          </a>
        </div>
      </motion.div>

      {/* Resume Download Action */}
      <div className="pt-2 flex justify-start">
        <DownloadResumeButton />
      </div>
    </div>
  );
};

export default Contact;
