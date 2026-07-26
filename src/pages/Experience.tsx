import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Trophy,
  Award,
  CheckCircle2,
  Sparkles,
  Building2,
  Code2,
  Medal,
  GraduationCap,
  ArrowRight,
  FileText,
  Mail,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';

// ==========================================
// DATA STRUCTURES
// ==========================================

interface InternshipData {
  id: string;
  company: string;
  role: string;
  highlights: string[];
}

const INTERNSHIPS: InternshipData[] = [
  {
    id: 'saiket-systems',
    company: 'Saiket Systems',
    role: 'Software Development Intern',
    highlights: [
      'Worked on software and web development tasks',
      'Collaborated on frontend and backend development',
      'Improved real-world development workflow',
    ],
  },
  {
    id: 'code-alpha',
    company: 'CodeAlpha',
    role: 'App Development Intern',
    highlights: [
      'Built application features',
      'Worked on UI implementation',
      'Improved software engineering practices',
    ],
  },
];

interface LeadershipProject {
  title: string;
  role: string;
  tag: string;
}

const LEADERSHIP_PROJECTS: LeadershipProject[] = [
  {
    title: 'CrimeOps',
    role: 'Team Lead',
    tag: 'AI Crime Intelligence Platform',
  },
  {
    title: 'QuadX',
    role: 'Team Lead',
    tag: 'AI-Powered ERP Platform',
  },
  {
    title: 'EduComics',
    role: 'Team Lead',
    tag: 'Generative AI Educational Platform',
  },
];

const LEADERSHIP_RESPONSIBILITIES = [
  'Planning & Architectural Direction',
  'Frontend Systems Development',
  'Backend Collaboration & API Design',
  'Cross-functional Feature Coordination',
];

interface HackathonData {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const HACKATHONS: HackathonData[] = [
  {
    id: '7-hackathons',
    title: '7+ Hackathons',
    badge: 'Competitive Engineering',
    description:
      'Participated in multiple competitive regional and national hackathons, building rapid AI and full-stack software prototypes under tight deadlines.',
    icon: Trophy,
  },
  {
    id: 'gdg-hackathon',
    title: 'Top 10 — GDG Hackathon',
    badge: 'Google Developer Groups',
    description:
      'Ranked among top 10 finalist teams in GDG Hackathon for designing and presenting intelligent web application solutions.',
    icon: Medal,
  },
  {
    id: 'sih-hackathon',
    title: 'Smart India Hackathon Participant',
    badge: 'CareerKey Team',
    description:
      'Represented CareerKey team at Smart India Hackathon (SIH), tackling national problem statements through software innovation.',
    icon: Award,
  },
];

interface AchievementData {
  id: string;
  stat: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ACHIEVEMENTS: AchievementData[] = [
  {
    id: 'dsa',
    stat: '300+',
    label: 'DSA Problems',
    description: 'Solved data structures and algorithms problems across LeetCode & GeeksforGeeks.',
    icon: Code2,
  },
  {
    id: 'power-bi',
    stat: '1st Rank',
    label: 'Power BI Competition',
    description: 'Secured 1st rank in campus business intelligence and data dashboard competition.',
    icon: Trophy,
  },
  {
    id: 'ecell',
    stat: 'Tech Team Member',
    label: 'E-Cell',
    description: 'Active tech team member contributing to Entrepreneurship Cell digital platforms and tech events.',
    icon: Users,
  },
  {
    id: 'cgpa',
    stat: '9.5+ CGPA',
    label: 'Academic Excellence',
    description: 'Maintained consistently high academic standing across engineering coursework.',
    icon: GraduationCap,
  },
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

interface TimelineCardProps {
  internship: InternshipData;
  index: number;
}

const TimelineCard = ({ internship, index }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#0B1220] border-2 border-[#0F766E] flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
      </div>

      {/* Card Content */}
      <div className="saas-card p-6 sm:p-8 space-y-4 hover:border-[#0F766E]/40 transition-all duration-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#0F766E]" />
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              {internship.company}
            </h3>
          </div>
          <p className="text-sm font-semibold text-[#0F766E]">
            {internship.role}
          </p>
        </div>

        <div className="space-y-2 pt-1 border-t border-[#E2E8F0]/80 dark:border-[#1E293B]/80">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#CBD5E1]">
            Key Highlights
          </span>
          <ul className="space-y-2">
            {internship.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

interface AchievementCardProps {
  achievement: AchievementData;
  index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const Icon = achievement.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="saas-card p-6 space-y-3 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-sm font-mono font-extrabold text-[#0F766E] bg-[#0F766E]/10 px-3 py-1 rounded-lg">
            {achievement.stat}
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F8FAFC]">
            {achievement.label}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed mt-1">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// MAIN EXPERIENCE PAGE
// ==========================================

export const Experience = () => {
  return (
    <div id="page-experience" className="space-y-12 sm:space-y-16">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 max-w-3xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
            EXPERIENCE
          </span>
          <span className="h-[1px] w-8 bg-[#0F766E]/30" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
          Learning Through Real-World Engineering
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
          My journey through internships, leadership roles, hackathons, and technical competitions has helped me build practical software engineering skills beyond the classroom.
        </p>
      </motion.div>

      {/* SECTION 1 — INTERNSHIPS */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          <Briefcase className="w-5 h-5 text-[#0F766E]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Professional Internships
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E2E8F0] dark:border-[#1E293B] space-y-8">
          {INTERNSHIPS.map((internship, index) => (
            <TimelineCard key={internship.id} internship={internship} index={index} />
          ))}
        </div>
      </section>

      {/* SECTION 2 — LEADERSHIP */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          <Users className="w-5 h-5 text-[#0F766E]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Engineering Leadership
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="saas-card p-6 sm:p-8 space-y-6 border-l-4 border-l-[#0F766E]"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F766E] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
                Team Lead
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Directing Core Software Initiatives
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              Led team development across flagships and specialized AI platforms, driving execution from initial planning to full-stack integration.
            </p>
          </div>

          {/* Highlight Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LEADERSHIP_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#1E293B] space-y-1.5 hover:border-[#0F766E]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-[#0F172A] dark:text-[#F8FAFC]">
                    {proj.title}
                  </h4>
                  <Sparkles className="w-4 h-4 text-[#0F766E]" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#0F766E] block uppercase">
                  {proj.role}
                </span>
                <p className="text-xs text-[#475569] dark:text-[#CBD5E1]">
                  {proj.tag}
                </p>
              </div>
            ))}
          </div>

          {/* Core Responsibilities */}
          <div className="pt-4 border-t border-[#E2E8F0]/80 dark:border-[#1E293B]/80 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#CBD5E1]">
              Core Responsibilities & Technical Coordination
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {LEADERSHIP_RESPONSIBILITIES.map((resp) => (
                <div key={resp} className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — HACKATHONS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          <Trophy className="w-5 h-5 text-[#0F766E]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Hackathons & Competitions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HACKATHONS.map((hackathon, idx) => {
            const Icon = hackathon.icon;
            return (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="saas-card p-6 space-y-3 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#0F766E]">
                    {hackathon.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {hackathon.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                  {hackathon.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — ACHIEVEMENTS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          <Award className="w-5 h-5 text-[#0F766E]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Achievements & Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <AchievementCard key={ach.id} achievement={ach} index={idx} />
          ))}
        </div>
      </section>

      {/* SECTION 5 — WHAT I'M LOOKING FOR (CTA) */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="saas-card p-8 sm:p-10 border-2 border-[#0F766E] bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] dark:from-[#111827] dark:via-[#0B1220] dark:to-[#0F172A] shadow-xl text-center space-y-6 max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#0F766E]/10 border border-[#0F766E]/30 flex items-center justify-center text-[#0F766E]">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
              Open to Software Engineering and AI opportunities.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              Interested in internships and full-time opportunities where I can contribute to meaningful products while continuing to grow as a software engineer.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/resume" className="btn-primary">
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link to="/contact" className="btn-secondary">
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;
