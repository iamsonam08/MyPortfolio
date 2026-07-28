import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Sparkles,
  Wrench,
  BookOpen,
  LucideIcon
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Code2,
    skills: ['Java', 'Python', 'C++', 'JavaScript'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Firebase Authentication', 'Cloud Firestore', 'REST APIs'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Cloud Firestore'],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: Cloud,
    skills: ['Google Cloud', 'Firebase', 'Cloud Functions', 'Google Maps API', 'Dialogflow CX'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: Sparkles,
    skills: ['Machine Learning', 'Prompt Engineering', 'Google AI Studio', 'Gemini API', 'AI Agents'],
  },
  {
    id: 'devtools',
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel'],
  },
  {
    id: 'cs-fundamentals',
    title: 'Computer Science Fundamentals',
    icon: BookOpen,
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
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
          Core technical competencies across software engineering, full-stack development, AI, and systems.
        </p>
      </div>

      {/* 8 Skill Cards in Clean Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              whileHover={{ y: shouldReduceMotion ? 0 : -3 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              className="portfolio-card p-5 rounded-xl bg-[#FFFFFF] border border-black/10 shadow-xs hover:shadow-md hover:border-[#055C5E]/30 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-black/5 pb-3">
                <div className="w-8 h-8 rounded-lg bg-[#055C5E]/10 text-[#055C5E] flex items-center justify-center shrink-0 border border-[#055C5E]/15">
                  <Icon className="w-4 h-4 text-[#055C5E]" />
                </div>
                <h3 className="text-sm font-bold tracking-tight text-[#1E2525]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#EFEFEF] text-[#1E2525] border border-black/5 hover:bg-[#055C5E] hover:text-white hover:border-[#055C5E] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;


