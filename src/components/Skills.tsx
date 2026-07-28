import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SkillGroup {
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
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
    <section id="skills-section" className="space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#055C5E] bg-[#F2B64E] px-2.5 py-0.5 rounded-sm inline-block">
          SKILLS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
          Skills & Technical Expertise
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5563]">
          Core technologies, languages, and engineering tools I build with.
        </p>
      </div>

      {/* Grouped Minimal Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.2, delay: idx * 0.03 }}
            className="portfolio-card space-y-2.5"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#055C5E]">
              {group.title}
            </h3>
            <p className="text-sm font-mono text-[#1E2525] font-medium leading-relaxed">
              {group.skills.join(' • ')}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

