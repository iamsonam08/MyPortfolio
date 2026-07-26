import { ComponentType, FC } from 'react';
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
  UserCheck,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

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
      'Worked on software and web development.',
      'Assisted in frontend and backend implementation.',
      'Improved practical software engineering workflow.',
    ],
  },
  {
    id: 'code-alpha',
    company: 'CodeAlpha',
    role: 'Application Development Intern',
    highlights: [
      'Developed application features.',
      'Improved UI implementation.',
      'Learned real development practices.',
    ],
  },
];

interface LeadershipRole {
  id: string;
  project: string;
  role: string;
  responsibilities: string[];
}

const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: 'crimeops-lead',
    project: 'CrimeOps',
    role: 'Team Lead',
    responsibilities: [
      'Team coordination',
      'Frontend Development',
      'Backend Collaboration',
    ],
  },
  {
    id: 'quadx-lead',
    project: 'QuadX',
    role: 'Team Lead',
    responsibilities: [
      'Project planning & oversight',
      'Frontend architecture',
      'AI integration testing',
    ],
  },
  {
    id: 'educomics-lead',
    project: 'EduComics',
    role: 'Team Lead',
    responsibilities: [
      'Full-stack coordination',
      'Generative AI prompt workflows',
      'User interface design',
    ],
  },
];

interface HackathonData {
  id: string;
  stat: string;
  title: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
}

const HACKATHONS: HackathonData[] = [
  {
    id: '7-hackathons',
    stat: '7+',
    title: 'Hackathons',
    subtitle: 'Competitive software engineering & rapid prototyping',
    icon: Trophy,
  },
  {
    id: 'gdg-hackathon',
    stat: 'Top 10',
    title: 'GDG Hackathon',
    subtitle: 'Google Developer Groups competition finalist',
    icon: Medal,
  },
  {
    id: 'sih-hackathon',
    stat: 'SIH',
    title: 'Smart India Hackathon',
    subtitle: 'CareerKey Team • National problem statement solver',
    icon: Award,
  },
];

interface AchievementData {
  id: string;
  stat: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

const ACHIEVEMENTS: AchievementData[] = [
  {
    id: 'dsa',
    stat: '300+',
    label: 'DSA Problems',
    icon: Code2,
  },
  {
    id: 'power-bi',
    stat: '1st Rank',
    label: 'Power BI Competition',
    icon: Trophy,
  },
  {
    id: 'ecell',
    stat: 'Technical Team Member',
    label: 'E-Cell',
    icon: Users,
  },
  {
    id: 'cgpa',
    stat: '9.5+ CGPA',
    label: 'Academic Excellence',
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

const TimelineCard: FC<TimelineCardProps> = ({ internship, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Timeline Node */}
      <div className="absolute -left-[31px] sm:-left-[39px] top-3 w-4 h-4 rounded-full bg-white dark:bg-[#0B1220] border-2 border-[#0F766E] dark:border-[#5EEAD4] flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-xs z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] dark:bg-[#5EEAD4]" />
      </div>

      {/* Timeline Content Card */}
      <motion.div
        whileHover={shouldReduceMotion ? {} : { y: -3 }}
        transition={{ duration: 0.2 }}
        className="saas-card p-6 sm:p-8 space-y-4 hover:border-[#0F766E]/40 hover:shadow-lg transition-shadow duration-200"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="w-4.5 h-4.5 text-[#0F766E] dark:text-[#5EEAD4]" />
            <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white">
              {internship.company}
            </h3>
          </div>
          <p className="text-sm font-semibold text-[#0F766E] dark:text-[#5EEAD4] font-mono">
            {internship.role}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
            Highlights
          </span>
          <ul className="space-y-2">
            {internship.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#D1D5DB]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface AchievementCardProps {
  achievement: AchievementData;
  index: number;
}

const AchievementCard: FC<AchievementCardProps> = ({ achievement, index }) => {
  const Icon = achievement.icon;
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
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs font-mono font-extrabold text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-3 py-1 rounded-lg">
          {achievement.stat}
        </span>
      </div>

      <div>
        <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
          {achievement.label}
        </h3>
      </div>
    </motion.div>
  );
};

// ==========================================
// MAIN EXPERIENCE PAGE
// ==========================================

export const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="page-experience" className="max-w-[1280px] mx-auto space-y-12 sm:space-y-16">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
            EXPERIENCE
          </span>
          <span className="h-[1px] w-8 bg-[#0F766E]/30" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight">
          Building Through Real-World Experience
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
          Every internship, hackathon and leadership opportunity has strengthened my technical, collaboration and problem-solving skills.
        </p>
      </motion.div>

      {/* SECTION 1 — PROFESSIONAL EXPERIENCE */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Briefcase className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Professional Experience
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8">
          {/* Animated Line Top to Bottom */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#E2E8F0] dark:bg-[#374151] origin-top"
          />

          {INTERNSHIPS.map((internship, index) => (
            <TimelineCard key={internship.id} internship={internship} index={index} />
          ))}
        </div>
      </section>

      {/* SECTION 2 — LEADERSHIP */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <UserCheck className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {LEADERSHIP_ROLES.map((lead, idx) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="saas-card p-6 space-y-4 hover:border-[#0F766E]/40 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
                    {lead.role}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#0F766E] dark:text-[#5EEAD4]" />
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white">
                  {lead.project}
                </h3>

                <div className="space-y-2 pt-2 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                    Responsibilities:
                  </span>
                  <ul className="space-y-1.5">
                    {lead.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-center gap-2 text-xs font-medium text-[#0F172A] dark:text-white">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — HACKATHONS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Trophy className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Hackathons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HACKATHONS.map((hackathon, idx) => {
            const Icon = hackathon.icon;
            return (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="saas-card p-6 space-y-4 hover:border-[#0F766E]/40 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono font-extrabold text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-3 py-1 rounded-lg">
                      {hackathon.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                    {hackathon.title}
                  </h3>

                  <p className="text-xs text-[#475569] dark:text-[#D1D5DB] font-medium leading-relaxed">
                    {hackathon.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — ACHIEVEMENTS */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <Award className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <AchievementCard key={ach.id} achievement={ach} index={idx} />
          ))}
        </div>
      </section>

      {/* SECTION 5 — CAREER OBJECTIVE CTA */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="saas-card p-8 sm:p-10 border-2 border-[#0F766E] dark:border-[#5EEAD4] bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] dark:from-[#111827] dark:via-[#0B1220] dark:to-[#0F172A] shadow-xl text-center space-y-6 max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#0F766E]/10 border border-[#0F766E]/30 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Open to AI Engineering and Software Engineering Opportunities
            </h2>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
              Looking for internship and full-time opportunities where I can build impactful software products and continue learning from experienced engineering teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.03 }} whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}>
              <Link to="/resume" className="btn-primary py-2.5 px-5 text-sm font-semibold rounded-xl">
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.03 }} whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}>
              <Link to="/contact" className="btn-secondary py-2.5 px-5 text-sm font-semibold rounded-xl">
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;
