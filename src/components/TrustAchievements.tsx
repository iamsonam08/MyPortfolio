import React from 'react';
import {
  Code2,
  Trophy,
  Award,
  Briefcase,
  Medal,
  BarChart3,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="p-4 rounded-md bg-[#111111] border border-[#1F2937] hover:border-[#374151] transition-colors duration-150 space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="w-7 h-7 rounded bg-[#1A1A1A] border border-[#1F2937] flex items-center justify-center text-[#14B8A6]">
          <Icon className="w-3.5 h-3.5" />
        </div>
        <span className="text-xl font-bold font-mono text-[#F8FAFC]">
          {achievement.stat}
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-xs font-bold text-[#F8FAFC]">
          {achievement.title}
        </h3>
        <p className="text-xs text-[#9CA3AF] leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

export const TrustAchievements = () => {
  return (
    <section id="trust-achievements-section" className="space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono font-medium uppercase tracking-wider text-[#14B8A6]">
          ACHIEVEMENTS
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC]">
          Numbers That Reflect My Journey
        </h2>
        <p className="text-xs sm:text-sm text-[#9CA3AF]">
          A quick overview of measurable achievements across problem solving, leadership, learning and real-world experience.
        </p>
      </div>

      {/* Achievement Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {ACHIEVEMENTS_DATA.map((item, index) => (
          <AchievementCard key={item.id} achievement={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TrustAchievements;
