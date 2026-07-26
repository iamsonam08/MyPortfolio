import { FC, ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { DownloadResumeButton } from '../components/DownloadResumeButton';
import {
  GraduationCap,
  Cpu,
  Code2,
  Lightbulb,
  Sparkles,
  Trophy,
  CheckCircle2,
  Target,
  ArrowRight,
  FileText,
  Mail,
  Layers,
  BookOpen,
  Compass,
  Rocket,
  ShieldCheck,
  Brain,
  Users,
  Zap,
  FolderGit2,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

export interface WhoIAmCard {
  id: string;
  category: string;
  title: string;
  metrics: string[];
  icon: ComponentType<{ className?: string }>;
  accentColor: string;
}

export interface JourneyMilestone {
  id: string;
  year?: string;
  title: string;
  description: string;
  highlight?: string;
  icon: ComponentType<{ className?: string }>;
}

export interface CoreStrength {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  tag: string;
}

// ==========================================
// DATA ARRAYS
// ==========================================

const WHO_I_AM_CARDS: WhoIAmCard[] = [
  {
    id: 'education',
    category: 'Education',
    title: 'Third-Year Computer Engineering Student',
    metrics: ['VPKBIET Baramati', '9.5+ Cumulative CGPA', 'Computer Science Core'],
    icon: GraduationCap,
    accentColor: '#0F766E',
  },
  {
    id: 'interests',
    category: 'Interests',
    title: 'AI & Full Stack Engineering',
    metrics: ['Artificial Intelligence', 'Full Stack Development', 'Machine Learning', 'Problem Solving'],
    icon: Cpu,
    accentColor: '#0F766E',
  },
  {
    id: 'experience',
    category: 'Experience',
    title: 'Hands-on Engineering & Competitions',
    metrics: ['2 Internships (Saiket & CodeAlpha)', '7+ Hackathons (SIH Finalist & GDG Top 10)', '300+ DSA Problems Solved'],
    icon: Rocket,
    accentColor: '#0F766E',
  },
  {
    id: 'learning',
    category: 'Learning',
    title: 'Continuous Skill Mastery',
    metrics: ['30+ Google Skills Boost Certificates', 'Gold League Google Cloud Standing', 'Continuous Technology Learning'],
    icon: BookOpen,
    accentColor: '#0F766E',
  },
];

const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    id: 'j1',
    year: '2023',
    title: 'Started Computer Engineering',
    description: 'Began Computer Engineering degree at VPKBIET Baramati, establishing fundamental principles of computer science.',
    highlight: 'VPKBIET Baramati',
    icon: GraduationCap,
  },
  {
    id: 'j2',
    title: 'Maintained 9+ CGPA',
    description: 'Consistently sustained top academic excellence with a 9.5+ cumulative CGPA while expanding technical depth.',
    highlight: '9.5+ CGPA',
    icon: Trophy,
  },
  {
    id: 'j3',
    title: 'Started DSA',
    description: 'Initiated structured study of Data Structures and Algorithms, building robust computational logic.',
    highlight: 'LeetCode & Logic',
    icon: Lightbulb,
  },
  {
    id: 'j4',
    title: 'Participated in Hackathons',
    description: 'Competed in 7+ hackathons, achieving Smart India Hackathon (SIH) finalist status and GDG Top 10 ranking.',
    highlight: '7+ Hackathons',
    icon: Rocket,
  },
  {
    id: 'j5',
    title: 'Completed Internships',
    description: 'Acquired hands-on experience as a Software Development Intern at Saiket Systems and CodeAlpha.',
    highlight: '2 Internships',
    icon: Layers,
  },
  {
    id: 'j6',
    title: 'Built AI Products',
    description: 'Architected and developed full-stack AI solutions including CrimeOps, QuadX, EduComics, and LineX.',
    highlight: 'Full Stack & Generative AI',
    icon: Sparkles,
  },
  {
    id: 'j7',
    title: 'Current Goal: Software Engineer',
    description: 'Actively seeking Software Engineering, Full Stack, and AI roles to build impactful software products.',
    highlight: 'Open for Roles',
    icon: Target,
  },
];

const CORE_STRENGTHS: CoreStrength[] = [
  {
    id: 's1',
    title: 'Problem Solving',
    description: '300+ LeetCode problems solved with a focus on optimal algorithm complexity, time management, and spatial efficiency.',
    icon: Brain,
    tag: 'Algorithmic Logic',
  },
  {
    id: 's2',
    title: 'Leadership',
    description: 'Led technical project teams during hackathons and engineering sprints, coordinating full-stack system architecture.',
    icon: Users,
    tag: 'Team Guidance',
  },
  {
    id: 's3',
    title: 'Continuous Learning',
    description: 'Driven by relentless curiosity, earning 30+ Google Skills Boost certifications across AI, ML, and Cloud computing.',
    icon: Compass,
    tag: '30+ Certifications',
  },
  {
    id: 's4',
    title: 'Team Collaboration',
    description: 'Thrive in cross-functional team workflows using git version control, peer reviews, and clear documentation.',
    icon: ShieldCheck,
    tag: 'Cross-functional',
  },
  {
    id: 's5',
    title: 'Rapid Learning',
    description: 'Proven capability to adopt new tech stacks, frameworks, and APIs swiftly to build working software fast.',
    icon: Zap,
    tag: 'Agile Adaptation',
  },
  {
    id: 's6',
    title: 'AI Development',
    description: 'Hands-on experience developing LLM pipelines, prompt engineering, Google AI Studio tools, and AI agents.',
    icon: Cpu,
    tag: 'Generative AI',
  },
];

// ==========================================
// REUSABLE SUB-COMPONENTS
// ==========================================

const WhoIAmCardComponent: FC<{ card: WhoIAmCard; index: number }> = ({ card, index }) => {
  const Icon = card.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="saas-card p-6 flex flex-col justify-between space-y-4 hover:border-[#0F766E]/40 hover:shadow-md transition-shadow duration-200"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-1 rounded-md">
            {card.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
          {card.title}
        </h3>
      </div>

      <div className="pt-3 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80 space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {card.metrics.map((metric) => (
            <span
              key={metric}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#F1F5F9] dark:bg-[#1E293B] text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#374151] inline-flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3 h-3 text-[#0F766E] dark:text-[#5EEAD4] shrink-0" />
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// MAIN ABOUT PAGE
// ==========================================

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="page-about" className="max-w-[1280px] mx-auto space-y-12 sm:space-y-16">
      {/* SECTION 1 — HERO */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
            ABOUT ME
          </span>
          <span className="h-[1px] w-8 bg-[#0F766E]/30" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
          Building Software That Solves Real Problems
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
          I'm a third-year Computer Engineering student passionate about AI, Full Stack Development and building software that creates meaningful real-world impact.
        </p>
      </motion.div>

      {/* SECTION 2 — WHO I AM */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Sparkles className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Who I Am
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_I_AM_CARDS.map((card, idx) => (
            <WhoIAmCardComponent key={card.id} card={card} index={idx} />
          ))}
        </div>
      </section>

      {/* SECTION 3 — JOURNEY TIMELINE */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Compass className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Journey Timeline
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E2E8F0] dark:border-[#374151] space-y-6">
          {JOURNEY_TIMELINE.map((item, idx) => {
            const Icon = item.icon;
            const isTarget = item.id === 'j7';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Node Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-3 w-4 h-4 rounded-full bg-white dark:bg-[#0B1220] border-2 ${
                    isTarget ? 'border-[#0F766E] dark:border-[#5EEAD4] bg-[#0F766E] ring-4 ring-[#0F766E]/20' : 'border-[#0F766E] dark:border-[#5EEAD4]'
                  } flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-xs z-10`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isTarget ? 'bg-white' : 'bg-[#0F766E] dark:bg-[#5EEAD4]'
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div
                  className={`saas-card p-5 sm:p-6 space-y-2 hover:border-[#0F766E]/40 transition-all duration-200 ${
                    isTarget ? 'ring-2 ring-[#0F766E] dark:ring-[#5EEAD4] bg-[#0F766E]/5' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        {item.year && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] block">
                            {item.year}
                          </span>
                        )}
                        <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {item.highlight && (
                      <span className="text-[11px] font-mono font-semibold text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded-full">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — CORE STRENGTHS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Zap className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Core Strengths
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_STRENGTHS.map((strength, idx) => {
            const Icon = strength.icon;

            return (
              <motion.div
                key={strength.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="saas-card p-6 space-y-3 hover:border-[#0F766E]/40 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-1 rounded-md">
                      {strength.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {strength.title}
                  </h3>

                  <p className="text-xs text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5 — FUTURE VISION */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Target className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Future Vision
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
          className="saas-card p-6 sm:p-8 border-l-4 border-l-[#0F766E] dark:border-l-[#5EEAD4] space-y-3"
        >
          <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC]">
            What I'm Working Towards
          </h3>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
            I aspire to build AI-powered products that solve meaningful real-world problems while continuously improving as a software engineer.
          </p>
        </motion.div>
      </section>

      {/* SECTION 6 — CTA */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="saas-card p-8 sm:p-10 border-2 border-[#0F766E] dark:border-[#5EEAD4] bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] dark:from-[#111827] dark:via-[#0B1220] dark:to-[#0F172A] shadow-xl text-center space-y-6 max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#0F766E]/10 border border-[#0F766E]/30 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
              Let's Connect
            </h2>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              Explore my software engineering work, get in touch for potential collaborations or download my latest technical resume.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.03 }} whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}>
              <Link to="/projects" className="btn-primary py-2.5 px-5 text-sm font-semibold rounded-xl inline-flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.03 }} whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}>
              <Link to="/contact" className="btn-secondary py-2.5 px-5 text-sm font-semibold rounded-xl inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </motion.div>

            <DownloadResumeButton />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

