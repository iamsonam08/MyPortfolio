import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Code2,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

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
  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] flex items-center justify-center py-4 sm:py-8"
    >
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0F766E]/5 dark:bg-[#0F766E]/10 blur-3xl rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* LEFT COLUMN (60%) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="w-full lg:w-[58%] flex flex-col justify-center space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20 text-xs font-mono font-medium tracking-wide">
              <span>👋</span> Welcome to my Portfolio
            </span>
          </div>

          {/* Heading & Title Pills */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-[1.1]">
              Hi, I'm <br />
              <span className="text-[#0F172A] dark:text-[#F8FAFC]">Sonam Yadav</span>
            </h1>

            {/* Title Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
                AI Engineer
              </span>
              <span className="text-[#CBD5E1] dark:text-[#334155]">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC] shadow-2xs">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2.5 text-base sm:text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed max-w-2xl font-normal">
            <p>
              Building AI-powered applications that solve real-world problems using React, TypeScript, Firebase and Machine Learning.
            </p>
            <p className="text-sm sm:text-base text-[#475569]/90 dark:text-[#CBD5E1]/90">
              Passionate about transforming ideas into scalable software products with clean design and modern engineering practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              id="hero-cta-projects"
              to="/projects"
              className="btn-primary group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              id="hero-cta-resume"
              to="/resume"
              className="btn-secondary group"
            >
              <Download className="w-4 h-4 text-[#475569] dark:text-[#CBD5E1] group-hover:text-[#0F172A] dark:group-hover:text-[#F8FAFC]" />
              <span>Download Resume</span>
            </Link>

            <Link
              id="hero-cta-contact"
              to="/contact"
              className="px-5 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0F172A] dark:text-[#CBD5E1] dark:hover:text-[#F8FAFC] transition-colors inline-flex items-center justify-center gap-1.5 rounded-lg hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Statistics Grid (6 cards) */}
          <div className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 + idx * 0.05 }}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] shadow-2xs hover:border-[#0F766E]/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#475569] dark:text-[#CBD5E1] font-medium mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN (40%) - Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="w-full lg:w-[42%] flex justify-center lg:justify-end"
        >
          <div className="saas-card w-full max-w-md p-6 space-y-6 relative overflow-hidden">
            {/* Top Bar: Open to Work Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-[#475569] dark:text-[#CBD5E1] uppercase tracking-wider">
                Profile Card
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span>Open to Work</span>
              </div>
            </div>

            {/* Profile Photo Rectangular Placeholder */}
            <div className="w-full aspect-[4/3] rounded-lg bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#0F766E] flex flex-col items-center justify-center p-6 text-white relative overflow-hidden border border-[#E2E8F0] dark:border-[#1E293B] group">
              {/* Modern geometric background effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-bold text-2xl tracking-wider mb-3 shadow-inner text-white group-hover:scale-105 transition-transform duration-300">
                SY
              </div>
              
              <div className="text-center space-y-1 relative z-10">
                <span className="text-lg font-bold tracking-tight text-white block">
                  Sonam Yadav
                </span>
                <span className="text-xs font-mono text-[#5EEAD4] bg-[#0F766E]/40 px-2.5 py-0.5 rounded-full inline-block">
                  AI & Full Stack Engineer
                </span>
              </div>
            </div>

            {/* Candidate Identity Brief */}
            <div className="space-y-1 border-b border-[#E2E8F0] dark:border-[#1E293B] pb-4">
              <h2 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                Sonam Yadav
              </h2>
              <p className="text-xs font-mono text-[#0F766E] font-medium">
                AI Engineer • Full Stack Developer
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
                <span>Computer Engineering Student</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-[#0F766E] shrink-0" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-all cursor-pointer"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href="mailto:yadusonam08@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B] text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F766E] dark:hover:text-[#0F766E] hover:bg-[#F8FAFC] dark:hover:bg-[#1F2937] transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
