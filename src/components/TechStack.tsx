import React from 'react';
import {
  Layout,
  Server,
  Database,
  Code2,
  Sparkles,
  Cloud,
} from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  skills: string[];
}

const TECH_CATEGORIES: CategoryItem[] = [
  {
    id: 'frontend',
    icon: Layout,
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and highly interactive web applications.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Angular',
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Architecture',
    description: 'Building robust API services, serverless microservices, and application logic.',
    skills: ['Node.js', 'Express.js', 'Firebase', 'REST APIs'],
  },
  {
    id: 'database',
    icon: Database,
    title: 'Database & Persistence',
    description: 'Managing structured, unstructured, and document-based data persistence.',
    skills: ['Firestore', 'MongoDB', 'MySQL'],
  },
  {
    id: 'languages',
    icon: Code2,
    title: 'Programming Languages',
    description: 'Core algorithmic problem solving, data structures, and typed programming.',
    skills: ['Java', 'C++', 'Python'],
  },
  {
    id: 'ai-ml',
    icon: Sparkles,
    title: 'Artificial Intelligence',
    description: 'Developing ML pipelines, predictive models, and Generative AI integrations.',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'Scikit-learn',
      'Prompt Engineering',
      'Generative AI',
    ],
  },
  {
    id: 'tools-cloud',
    icon: Cloud,
    title: 'Tools & Cloud Infrastructure',
    description: 'Version control, cloud platforms, modern build tools, and analytics engines.',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'VS Code',
      'Figma',
      'Power BI',
      'Google Cloud',
      'AWS',
    ],
  },
];

interface TechCardProps {
  category: CategoryItem;
  index: number;
}

const TechCard: React.FC<TechCardProps> = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="saas-card p-6 sm:p-7 flex flex-col justify-between h-full space-y-6 hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md transition-all duration-200 group"
    >
      <div className="space-y-4">
        {/* Category Header with Icon & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4] shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
              {category.title}
            </h3>
            <span className="text-[10px] font-mono text-[#0F766E] dark:text-[#5EEAD4] uppercase tracking-wider font-semibold">
              {category.skills.length} Technical Skills
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Technology Pills Grid */}
      <div className="pt-3 border-t border-[#E2E8F0]/80 dark:border-[#374151]">
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] text-xs font-mono font-medium text-[#0F172A] dark:text-white shadow-2xs hover:border-[#0F766E]/40 dark:hover:border-[#5EEAD4]/40 hover:bg-white dark:hover:bg-[#111827] transition-all duration-150"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  return (
    <section id="tech-stack-section" className="py-10 sm:py-16">
      <div className="w-full max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="space-y-3 max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
              TECH STACK
            </span>
            <span className="h-[1px] w-8 bg-[#0F766E]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Technologies I Build With
          </h2>

          <p className="text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
            A carefully selected set of technologies I use to design, develop and deploy modern AI-powered software products.
          </p>
        </motion.div>

        {/* 2-Column Responsive Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TECH_CATEGORIES.map((category, index) => (
            <TechCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

