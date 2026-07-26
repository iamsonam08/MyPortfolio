import React from 'react';
import {
  Code2,
  Trophy,
  Award,
  Briefcase,
  Medal,
  BarChart3,
} from 'lucide-react';
import { motion } from 'motion/react';

interface AchievementItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  stat: string;
  title: string;
  description: string;
}

const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'dsa',
    icon: Code2,
    stat: '300+',
    title: 'DSA Problems',
    description: 'Solved across multiple topics using Java and C++.',
  },
  {
    id: 'hackathons',
    icon: Trophy,
    stat: '7+',
    title: 'Hackathons',
    description: 'National and college-level hackathons.',
  },
  {
    id: 'gcp-certs',
    icon: Award,
    stat: '30+',
    title: 'Google Cloud Certifications',
    description: 'AI, Cloud, Firebase and Machine Learning.',
  },
  {
    id: 'internships',
    icon: Briefcase,
    stat: '2',
    title: 'Software Internships',
    description: 'Saiket Systems and CodeAlpha.',
  },
  {
    id: 'gdg-hackathon',
    icon: Medal,
    stat: 'Top 10',
    title: 'GDG Hackathon',
    description: 'Recognised among the top teams.',
  },
  {
    id: 'power-bi',
    icon: BarChart3,
    stat: '1st Rank',
    title: 'Power BI Competition',
    description: 'Won the college Power BI competition.',
  },
];

interface AchievementCardProps {
  achievement: AchievementItem;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="saas-card flex flex-col justify-between p-6 hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md transition-all duration-200 group cursor-default"
    >
      <div className="space-y-4">
        {/* Outline Icon */}
        <div className="w-10 h-10 rounded-lg bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] group-hover:scale-105 transition-transform duration-200">
          <Icon className="w-5 h-5" />
        </div>

        {/* Large Stat Number */}
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            {achievement.stat}
          </div>
          <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] mt-1">
            {achievement.title}
          </h3>
        </div>

        {/* One-Line Description */}
        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

export const TrustAchievements = () => {
  return (
    <section id="trust-achievements-section" className="py-12 sm:py-16">
      <div className="w-full max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="space-y-3 max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E]">
              ACHIEVEMENTS
            </span>
            <span className="h-[1px] w-8 bg-[#0F766E]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Numbers That Reflect My Journey
          </h2>

          <p className="text-base sm:text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
            A quick overview of measurable achievements across problem solving, leadership, learning and real-world experience.
          </p>
        </motion.div>

        {/* Achievement Cards Grid (Desktop 6, Tablet 3x2, Mobile 2x3) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <AchievementCard key={item.id} achievement={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustAchievements;
