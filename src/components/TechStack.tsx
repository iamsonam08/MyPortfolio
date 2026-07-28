import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface TechCategory {
  title: string;
  skills: string[];
}

const TECH_STACK: TechCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'C++', 'Python', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Frontend',
    skills: ['React', 'Angular', 'Node.js', 'Express.js', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['Firestore', 'MongoDB', 'MySQL', 'Firebase', 'Google Cloud Platform', 'Vercel'],
  },
  {
    title: 'AI & Engineering Tools',
    skills: ['Machine Learning', 'TensorFlow', 'Scikit-Learn', 'Google AI Studio', 'Git & GitHub', 'Power BI'],
  },
];

export const TechStack: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="tech-stack-section" className="py-8 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] dark:text-[#FAFAFA]">
          Technical Capabilities
        </h2>
        <p className="text-sm text-[#6B7280] dark:text-[#A1A1AA]">
          Technologies and tools I use to build scalable systems and AI products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        {TECH_STACK.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.2, delay: idx * 0.04 }}
            className="p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] space-y-3"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#14B8A6]">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#FAFAFA] dark:bg-[#09090B] text-[#111827] dark:text-[#FAFAFA] border border-[#E5E7EB] dark:border-[#27272A]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
