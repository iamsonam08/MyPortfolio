import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Code2, ExternalLink } from 'lucide-react';
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

      {/* Minimal Links Stack / Professional List */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="portfolio-card space-y-3 p-4 sm:p-5"
      >
        {/* Email */}
        <a
          href="mailto:yadusonam08@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sonam,%20I%20found%20your%20portfolio."
          target="_self"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-black/5 hover:border-[#055C5E]/30 hover:bg-[#F1F5F9] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#055C5E]/10 text-[#055C5E] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1E2525]">Email</div>
              <div className="text-xs sm:text-sm font-mono font-medium text-[#055C5E] group-hover:underline">
                yadusonam08@gmail.com
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#055C5E] transition-colors" />
        </a>

        {/* Location */}
        <a
          href="https://maps.google.com/?q=Baramati,Maharashtra,India"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-black/5 hover:border-[#055C5E]/30 hover:bg-[#F1F5F9] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#055C5E]/10 text-[#055C5E] flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1E2525]">Location</div>
              <div className="text-xs sm:text-sm font-mono text-[#1E2525]">
                Baramati, Maharashtra, India
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#055C5E] transition-colors" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sonam-yadav-949489316/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-black/5 hover:border-[#055C5E]/30 hover:bg-[#F1F5F9] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#055C5E]/10 text-[#055C5E] flex items-center justify-center shrink-0">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1E2525]">LinkedIn</div>
              <div className="text-xs sm:text-sm font-mono text-[#055C5E] group-hover:underline">
                in/sonam-yadav
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#055C5E] transition-colors" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/iamsonam08"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-black/5 hover:border-[#055C5E]/30 hover:bg-[#F1F5F9] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#055C5E]/10 text-[#055C5E] flex items-center justify-center shrink-0">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1E2525]">GitHub</div>
              <div className="text-xs sm:text-sm font-mono text-[#055C5E] group-hover:underline">
                iamsonam08
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#055C5E] transition-colors" />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/iamsonam08_06/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC] border border-black/5 hover:border-[#055C5E]/30 hover:bg-[#F1F5F9] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#055C5E]/10 text-[#055C5E] flex items-center justify-center shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1E2525]">LeetCode</div>
              <div className="text-xs sm:text-sm font-mono text-[#055C5E] group-hover:underline">
                iamsonam08_06
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#055C5E] transition-colors" />
        </a>
      </motion.div>

      {/* Call-to-action buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <DownloadResumeButton />
        <a
          href="mailto:yadusonam08@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sonam,%20I%20found%20your%20portfolio."
          target="_self"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Contact Sonam Yadav via email"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span>Contact Me (Email)</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
