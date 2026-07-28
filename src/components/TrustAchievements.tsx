import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Code2,
  Trophy,
  FolderCode,
  Briefcase,
  GraduationCap,
  LucideIcon,
} from 'lucide-react';

interface HighlightItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: 'problems',
    number: '300+',
    title: 'Problems Solved',
    description: 'DSA practice on LeetCode and coding platforms.',
    icon: Code2,
  },
  {
    id: 'hackathons',
    number: '7+',
    title: 'Hackathons',
    description: 'National and college-level competitions.',
    icon: Trophy,
  },
  {
    id: 'projects',
    number: '4',
    title: 'Major Projects',
    description: 'Full-stack and AI-based applications.',
    icon: FolderCode,
  },
  {
    id: 'internships',
    number: '2',
    title: 'Internships',
    description: 'Software Development experience.',
    icon: Briefcase,
  },
  {
    id: 'cgpa',
    number: '9.5+',
    title: 'Current CGPA',
    description: 'Consistent academic excellence.',
    icon: GraduationCap,
  },
];

export const QuickHighlights: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="quick-highlights-section"
      className="bg-[#F7F7F5] rounded-[24px] p-6 sm:p-8 border border-[#D9E5E4] space-y-6 my-2 sm:my-4"
    >
      {/* Section Heading & Subtitle */}
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E2525]">
          Quick Highlights
        </h2>
        <p className="text-sm sm:text-base text-[#4B5563]">
          A snapshot of my technical achievements, academic performance, and engineering journey.
        </p>
      </div>

      {/* 5 Equal-Sized Cards in Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
        {HIGHLIGHTS_DATA.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="bg-[#FFFFFF] rounded-[20px] p-5 sm:p-6 border border-[#D9E5E4] shadow-xs hover:shadow-md hover:border-[#055C5E] transition-all duration-250 flex flex-col justify-between space-y-4 group cursor-default"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#055C5E]/10 text-[#055C5E] flex items-center justify-center shrink-0 border border-[#055C5E]/15 group-hover:bg-[#055C5E] group-hover:text-white transition-colors duration-250">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="text-[48px] sm:text-[52px] font-extrabold font-mono leading-none tracking-tight text-[#055C5E]">
                  {item.number}
                </div>
                <h3 className="text-[18px] font-bold text-[#1E2525] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export const TrustAchievements = QuickHighlights;
export default QuickHighlights;

