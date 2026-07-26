import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Code2,
  Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { DownloadResumeButton } from './DownloadResumeButton';

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: '300+', label: 'DSA Problems' },
  { value: '7+', label: 'Hackathons' },
  { value: '30+', label: 'Google Skills' },
  { value: '4', label: 'Projects' },
  { value: '2', label: 'Internships' },
  { value: '9.5+', label: 'CGPA' },
];

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero-section"
      className="relative flex items-center justify-center py-2 sm:py-6"
    >
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#0F766E]/5 dark:bg-[#0F766E]/10 blur-3xl rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-14">
        {/* LEFT COLUMN (58%) */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center space-y-5 sm:space-y-6">
          {/* Badge & Heading (First in sequence) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.0, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="space-y-4"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20 text-xs font-mono font-medium tracking-wide">
                <span>👋</span> Welcome to my Portfolio
              </span>
            </div>

            {/* Heading & Title Pills */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="text-[#0F172A] dark:text-white">Sonam Yadav</span>
              </h1>

              {/* Title Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#374151] text-xs font-semibold text-[#0F172A] dark:text-white shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
                  AI Engineer
                </span>
                <span className="text-[#CBD5E1] dark:text-[#374151]">•</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#374151] text-xs font-semibold text-[#0F172A] dark:text-white shadow-2xs">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Subtitle (Second in sequence - 0.1s stagger) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="space-y-2 text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed max-w-2xl font-normal"
          >
            <p>
              Building AI-powered applications that solve real-world problems using React, TypeScript, Firebase and Machine Learning.
            </p>
            <p className="text-sm sm:text-base text-[#475569]/90 dark:text-[#9CA3AF]">
              Passionate about transforming ideas into scalable software products with clean design and modern engineering practices.
            </p>
          </motion.div>

          {/* CTA Buttons (Third in sequence - 0.2s stagger) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full"
          >
            <motion.div className="w-full sm:w-auto" whileHover={shouldReduceMotion ? {} : { scale: 1.03 }} whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}>
              <Link
                id="hero-cta-projects"
                to="/projects"
                className="btn-primary group py-2.5 px-5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div className="w-full sm:w-auto" whileHover={shouldReduceMotion ? {} : { scale: 1.03 }} whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}>
              <DownloadResumeButton id="hero-cta-resume" />
            </motion.div>

            <motion.div className="w-full sm:w-auto" whileHover={shouldReduceMotion ? {} : { scale: 1.03 }} whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}>
              <Link
                id="hero-cta-contact"
                to="/contact"
                className="btn-secondary group py-2.5 px-5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-[#475569] dark:text-[#D1D5DB] group-hover:text-[#0F172A] dark:group-hover:text-white" />
                <span>Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Statistics Grid (Fourth in sequence) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="pt-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : 0.3 + idx * 0.04 }}
                  whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#374151] shadow-2xs hover:border-[#0F766E]/40 dark:hover:border-[#5EEAD4]/40 transition-all duration-200"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#0F172A] dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#475569] dark:text-[#D1D5DB] font-medium mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (42%) - Profile Card / Image (Fourth in sequence - 0.3s stagger) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="w-full lg:w-[42%] flex justify-center lg:justify-end"
        >
          <div className="saas-card w-full max-w-md p-6 space-y-5 relative overflow-hidden bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#374151] shadow-md rounded-2xl">
            {/* Top Bar: Open to Work Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-[#475569] dark:text-[#9CA3AF] uppercase tracking-wider">
                Profile Overview
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span>Open to Opportunities</span>
              </div>
            </div>

            {/* Profile Photo Rectangular Placeholder */}
            <div className="w-full aspect-[16/10] rounded-xl bg-slate-900 flex flex-col items-center justify-center p-6 text-white relative overflow-hidden border border-[#E2E8F0] dark:border-[#374151] group">
              {/* Subtle accent backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F766E]/40 opacity-95 transition-transform duration-500 group-hover:scale-105" />
              
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-bold text-xl tracking-wider mb-2.5 shadow-inner text-white group-hover:scale-105 transition-transform duration-300">
                SY
              </div>
              
              <div className="text-center space-y-1 relative z-10">
                <span className="text-base font-bold tracking-tight text-white block">
                  Sonam Yadav
                </span>
                <span className="text-xs font-mono text-[#5EEAD4] bg-[#0F766E]/40 px-2.5 py-0.5 rounded-full inline-block">
                  AI & Full Stack Engineer
                </span>
              </div>
            </div>

            {/* Candidate Identity Brief */}
            <div className="space-y-1 border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3.5">
              <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                Sonam Yadav
              </h2>
              <p className="text-xs font-mono text-[#0F766E] font-semibold">
                Computer Engineering Student • AI & Full Stack
              </p>
            </div>

            {/* Quick Info List */}
            <div className="space-y-2.5 text-xs font-medium text-[#475569] dark:text-[#CBD5E1]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#0F766E] shrink-0" />
                <span>Baramati, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#0F766E] shrink-0" />
                <span>VPKBIET Baramati (CGPA 9.5+)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-[#0F766E] shrink-0" />
                <span>Available for Internship & Full-time</span>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between gap-2">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
              >
                <Code2 className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href="mailto:yadusonam08@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

