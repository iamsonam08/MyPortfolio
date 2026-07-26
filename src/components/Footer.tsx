import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      id="main-footer"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4 }}
      className="w-full border-t border-[#E2E8F0] dark:border-[#374151] bg-[#F8FAFC] dark:bg-[#0B1220] text-[#475569] dark:text-[#D1D5DB] mt-auto transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Column: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-sm tracking-tight text-[#0F172A] dark:text-white">
                Sonam Yadav
              </span>
              <span className="text-[#CBD5E1] dark:text-[#374151]">•</span>
              <span className="text-xs text-[#475569] dark:text-[#D1D5DB] font-mono font-medium">
                AI & Full Stack Engineer
              </span>
            </div>
            <p className="text-xs text-[#475569]/80 dark:text-[#9CA3AF]">
              © {currentYear} Sonam Yadav. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold">
            <NavLink
              to="/"
              className="hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/experience"
              className="hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
            >
              Experience
            </NavLink>
            <NavLink
              to="/certifications"
              className="hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
            >
              Certifications
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
            >
              Contact
            </NavLink>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#374151] text-[11px] font-mono text-[#475569] dark:text-[#D1D5DB] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="font-medium">System Ready</span>
          </div>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full border-t border-[#E2E8F0]/60 dark:border-[#374151]/60 pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#475569]/70 dark:text-[#9CA3AF] font-mono gap-2">
          <span>Designed & Developed with React, TypeScript & Tailwind CSS</span>
          <span>VPKBIET Baramati, Maharashtra</span>
        </div>
      </div>
    </motion.footer>
  );
};


