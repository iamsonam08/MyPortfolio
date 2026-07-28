import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Firebase'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'AI',
    skills: ['Machine Learning', 'Google AI Studio'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="page-skills" className="py-4 sm:py-6 space-y-6">
      {/* Page Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#055C5E] bg-[#F2B64E] px-2.5 py-0.5 rounded-sm inline-block">
          SKILLS
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
          Skills & Technical Expertise
        </h1>
        <p className="text-xs sm:text-sm text-[#4B5563]">
          Core technical competencies across full-stack engineering, AI development, databases, and modern developer tooling.
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.03 }}
            className="portfolio-card space-y-2.5"
          >
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#055C5E]">
              {group.title}
            </h2>
            <p className="text-sm font-mono text-[#1E2525] font-medium leading-relaxed">
              {group.skills.join(' • ')}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

