import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  bullets: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-saiket',
    role: 'Software Development Intern',
    company: 'Saiket Systems',
    duration: '2025',
    location: 'Remote',
    bullets: [
      'Engineered responsive web applications and modular UI components using React and TypeScript.',
      'Integrated Firebase REST services and database logic for real-time full-stack data flow.',
      'Optimized component rendering performance and implemented clean Git feature workflows.',
    ],
  },
  {
    id: 'exp-codealpha',
    role: 'App Development Intern',
    company: 'CodeAlpha',
    duration: '2025',
    location: 'Remote',
    bullets: [
      'Developed cross-platform web and mobile features focused on high performance and clean UX.',
      'Refactored application state management to reduce unnecessary re-renders and load times.',
      'Implemented responsive UI layouts and resolved critical bugs across multiple client devices.',
    ],
  },
];

export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="page-experience" className="py-4 sm:py-6 space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F2B64E] bg-[#055C5E] px-2.5 py-0.5 rounded-sm inline-block">
          EXPERIENCE
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
          Work Experience
        </h1>
        <p className="text-xs sm:text-sm text-[#4B5563]">
          Internships, leadership roles, and practical software development experience.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-6 border-l-2 border-[#055C5E] space-y-8 pt-2">
        {EXPERIENCE_DATA.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.04 }}
            className="portfolio-card relative space-y-3"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[35px] top-5 w-3 h-3 rounded-full bg-[#F2B64E] border-2 border-[#055C5E] shadow-xs" />

            {/* Header Info */}
            <div className="space-y-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-base font-bold text-[#1E2525]">
                  {item.role}
                </h2>
                <span className="text-xs font-mono font-bold text-[#055C5E] bg-[#EFEFEF] px-2 py-0.5 rounded border border-[#055C5E]/20">
                  {item.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#055C5E]">
                <span>{item.company}</span>
                {item.location && (
                  <>
                    <span className="text-[#9CA3AF]">•</span>
                    <span className="font-mono text-[11px] text-[#4B5563]">{item.location}</span>
                  </>
                )}
              </div>
            </div>

            {/* 3 Concise Bullet Points */}
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E2525]">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#F2B64E] font-bold select-none text-xs mt-0.5">•</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

