import { FC, ComponentType } from 'react';
import {
  CheckCircle2,
  Compass,
  Layers,
  Users,
  Target,
  Award,
  Sparkles,
  ArrowUpRight,
  GraduationCap,
  Lightbulb,
} from 'lucide-react';
import { motion } from 'motion/react';

const ACHIEVEMENTS = [
  '300+ DSA Problems Solved',
  '7+ Hackathons Participated',
  '30+ Google Cloud Certifications',
  'Team Lead on AI Projects',
  'Top 10 GDG Hackathon Finalist',
  'Power BI Competition Winner',
  '2 Software Internships',
];

const FOCUS_SKILLS = [
  'AI Engineering',
  'Generative AI',
  'React',
  'TypeScript',
  'Firebase',
  'Machine Learning',
];

interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    id: 'problem-first',
    title: 'Problem First',
    description:
      'I begin by understanding the real-world problem before choosing technologies. Good software starts with solving the right problem.',
    icon: Target,
  },
  {
    id: 'build-for-users',
    title: 'Build for Users',
    description:
      'I focus on creating intuitive, reliable and accessible experiences that people can use with confidence.',
    icon: Users,
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description:
      'I regularly improve my skills through Google Skills Boost, DSA practice, hackathons and real-world projects.',
    icon: GraduationCap,
  },
  {
    id: 'quality-over-quantity',
    title: 'Quality over Quantity',
    description:
      'I prefer building a few polished, meaningful projects instead of many unfinished ones.',
    icon: Sparkles,
  },
];

interface PhilosophyCardProps {
  item: PhilosophyItem;
  index: number;
}

const PhilosophyCard: FC<PhilosophyCardProps> = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="saas-card p-6 sm:p-7 rounded-2xl space-y-3 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const About = () => {
  return (
    <section id="about-section" className="py-12 sm:py-20 space-y-16 sm:space-y-20">
      <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
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
              ABOUT ME
            </span>
            <span className="h-[1px] w-8 bg-[#0F766E]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Building Technology That Creates Real Impact
          </h2>

          <p className="text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed pt-1">
            I enjoy designing and building AI-powered software that solves practical problems. My focus is on creating applications that are useful, scalable and easy to use rather than simply experimenting with technology.
          </p>
        </motion.div>

        {/* Two-Column Grid (Left: 55%, Right: 45%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: 4 Story Content Blocks (7 cols / 58%) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* 1. My Journey */}
            <div className="saas-card p-6 space-y-3 hover:border-[#0F766E]/30 transition-colors">
              <div className="flex items-center gap-2.5 text-[#0F172A] dark:text-white font-semibold text-base sm:text-lg">
                <div className="p-2 rounded-md bg-[#0F766E]/10 text-[#0F766E] dark:text-[#5EEAD4]">
                  <Compass className="w-4 h-4" />
                </div>
                <h3>My Journey</h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
                Computer Engineering student with a strong academic record and practical experience in AI, Full Stack Development and Machine Learning.
              </p>
              <p className="text-xs sm:text-sm text-[#475569]/90 dark:text-[#9CA3AF] leading-relaxed pt-0.5">
                Worked on real-world applications including education technology, ERP systems, crime intelligence and queue management.
              </p>
            </div>

            {/* 2. What I Build */}
            <div className="saas-card p-6 space-y-3 hover:border-[#0F766E]/30 transition-colors">
              <div className="flex items-center gap-2.5 text-[#0F172A] dark:text-white font-semibold text-base sm:text-lg">
                <div className="p-2 rounded-md bg-[#0F766E]/10 text-[#0F766E] dark:text-[#5EEAD4]">
                  <Layers className="w-4 h-4" />
                </div>
                <h3>What I Build</h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
                Focus on AI-powered web applications, Full Stack Development, Machine Learning, Firebase, Modern React applications, and scalable software architecture.
              </p>
            </div>

            {/* 3. Leadership */}
            <div className="saas-card p-6 space-y-3 hover:border-[#0F766E]/30 transition-colors">
              <div className="flex items-center gap-2.5 text-[#0F172A] dark:text-white font-semibold text-base sm:text-lg">
                <div className="p-2 rounded-md bg-[#0F766E]/10 text-[#0F766E] dark:text-[#5EEAD4]">
                  <Users className="w-4 h-4" />
                </div>
                <h3>Leadership & Collaboration</h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
                Team Lead on multiple AI projects. Worked collaboratively across frontend and backend. Participated in multiple hackathons and continuously improving through DSA and Google Cloud learning.
              </p>
            </div>

            {/* 4. Career Goal */}
            <div className="saas-card p-6 space-y-3 hover:border-[#0F766E]/30 transition-colors">
              <div className="flex items-center gap-2.5 text-[#0F172A] dark:text-white font-semibold text-base sm:text-lg">
                <div className="p-2 rounded-md bg-[#0F766E]/10 text-[#0F766E] dark:text-[#5EEAD4]">
                  <Target className="w-4 h-4" />
                </div>
                <h3>Career Goal</h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
                Seeking Software Engineering and AI Engineering opportunities where I can contribute to products that solve meaningful real-world problems while continuously learning from experienced teams.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Achievement & Current Focus Card (5 cols / 42%) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 lg:sticky lg:top-24 space-y-6"
          >
            {/* Premium Achievement Card */}
            <div className="saas-card p-6 sm:p-8 space-y-6 border-[#E2E8F0] dark:border-[#374151] shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] dark:border-[#374151] pb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
                  <h3 className="font-bold text-base sm:text-lg text-[#0F172A] dark:text-white">
                    Key Achievements
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0F766E]/10 text-[#0F766E] dark:text-[#5EEAD4] font-medium">
                  Evidence
                </span>
              </div>

              {/* Achievements Checklist */}
              <div className="space-y-3">
                {ACHIEVEMENTS.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.05 * idx }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0]/80 dark:border-[#374151] text-xs sm:text-sm font-medium text-[#0F172A] dark:text-white group hover:border-[#0F766E]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span className="flex-1">{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#475569] dark:text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Current Focus Section */}
              <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#374151] space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0F766E] dark:text-[#5EEAD4]" />
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                    Current Technical Focus
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {FOCUS_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#1F2937] border border-[#E2E8F0] dark:border-[#374151] text-xs font-medium text-[#0F172A] dark:text-white shadow-2xs hover:border-[#0F766E]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ENGINEERING PHILOSOPHY SECTION */}
        <div className="pt-8 border-t border-[#E2E8F0] dark:border-[#374151] space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="space-y-3 max-w-3xl"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
                ENGINEERING PHILOSOPHY
              </span>
              <span className="h-[1px] w-8 bg-[#0F766E]/30" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
              How I Build Software
            </h2>
          </motion.div>

          {/* 2x2 Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHILOSOPHY_ITEMS.map((item, index) => (
              <PhilosophyCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
