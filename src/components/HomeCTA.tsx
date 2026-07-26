import { Link } from 'react-router-dom';
import { DownloadResumeButton } from './DownloadResumeButton';
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  Code2,
  FileText,
  Sparkles,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

export const HomeCTA = () => {
  return (
    <section id="home-cta-section" className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-7xl mx-auto rounded-2xl sm:rounded-3xl border border-[#E2E8F0] dark:border-[#1E293B] bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] dark:from-[#111827] dark:via-[#0B1220] dark:to-[#0F172A] shadow-xl p-6 sm:p-10 lg:p-12 space-y-10 relative overflow-hidden"
      >
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#0F766E]/5 dark:bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
              GET IN TOUCH
            </span>
            <span className="h-[1px] w-8 bg-[#0F766E]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight">
            Let's Build Something Meaningful Together
          </h2>

          <p className="text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
            I'm actively looking for Software Engineering, AI Engineering and Full Stack opportunities where I can contribute to impactful products and continue growing as an engineer.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* LEFT: Professional Profile & Contact Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Professional Profile Card */}
            <div className="saas-card p-6 sm:p-8 space-y-6 bg-white dark:bg-[#111827] border-[#E2E8F0] dark:border-[#374151] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0] dark:border-[#374151]">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] dark:text-white">
                    Sonam Yadav
                  </h3>
                  <p className="text-xs font-mono text-[#0F766E] dark:text-[#5EEAD4] font-semibold mt-0.5">
                    AI & Full Stack Engineer
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0F766E] dark:text-[#5EEAD4]" />
                  <span className="text-xs font-medium text-[#475569] dark:text-[#D1D5DB]">
                    Baramati, Maharashtra
                  </span>
                </div>
              </div>

              {/* Availability Badges */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                  Availability
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-xs font-mono font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open to Internship
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] dark:text-[#5EEAD4] border border-[#0F766E]/20 text-xs font-mono font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open to Full-time
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#374151] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#475569] dark:text-[#9CA3AF] block uppercase font-medium">
                      Email Address
                    </span>
                    <a
                      href="mailto:yadusonam08@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
                    >
                      yadusonam08@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#475569] dark:text-[#9CA3AF] block uppercase font-medium">
                      Phone Number
                    </span>
                    <a
                      href="tel:7249853561"
                      className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white hover:text-[#0F766E] dark:hover:text-[#5EEAD4] transition-colors"
                    >
                      +91 7249853561
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Buttons & Social Action Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                Connect & Explore
              </span>

              <div className="flex flex-col gap-2.5">
                {/* Email Me Button */}
                <a
                  href="mailto:yadusonam08@gmail.com"
                  className="btn-primary w-full justify-center text-sm py-3 px-6 font-semibold rounded-xl shadow-xs hover:shadow-md transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                {/* LinkedIn & GitHub in parallel row */}
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary justify-center text-xs py-2.5 px-4 font-semibold rounded-xl"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary justify-center text-xs py-2.5 px-4 font-semibold rounded-xl"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                {/* LeetCode & Download Resume in parallel row */}
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary justify-center text-xs py-2.5 px-4 font-semibold rounded-xl"
                  >
                    <Code2 className="w-4 h-4 text-amber-500" />
                    <span>LeetCode</span>
                  </a>

                  <DownloadResumeButton className="btn-secondary w-full justify-center text-xs py-2.5 px-4 font-semibold rounded-xl" />
                </div>
              </div>
            </div>

            {/* Closing Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#111827]/80 border border-[#E2E8F0] dark:border-[#374151] space-y-2 relative">
              <Quote className="w-5 h-5 text-[#0F766E]/40 dark:text-[#5EEAD4]/50" />
              <p className="text-xs sm:text-sm font-medium italic text-[#0F172A] dark:text-white leading-relaxed">
                "I enjoy building technology that solves real-world problems and creates meaningful impact."
              </p>
              <div className="flex items-center gap-1.5 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
                <span className="text-[11px] font-mono font-semibold text-[#0F766E] dark:text-[#5EEAD4]">
                  Sonam Yadav
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
