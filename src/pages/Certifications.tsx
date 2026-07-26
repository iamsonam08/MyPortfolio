import { useState, FC, ComponentType } from 'react';
import {
  Award,
  Sparkles,
  Trophy,
  ExternalLink,
  BookOpen,
  Flame,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Cloud,
  Database,
  Code2,
  BarChart3,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

export type CategoryFilter =
  | 'All'
  | 'Artificial Intelligence'
  | 'Machine Learning'
  | 'Firebase'
  | 'Google Cloud'
  | 'Software Engineering'
  | 'Data & Analytics';

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  category: CategoryFilter;
  issueDate: string;
  credentialUrl: string;
  skills: string[];
  icon: ComponentType<{ className?: string }>;
}

export interface SummaryStat {
  id: string;
  label: string;
  value: string;
  subtext: string;
  icon: ComponentType<{ className?: string }>;
}

export interface LearningStage {
  id: string;
  stage: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress';
  icon: ComponentType<{ className?: string }>;
}

// ==========================================
// MOCK DATA (SUITE OF CERTIFICATIONS)
// ==========================================

const SUMMARY_STATS: SummaryStat[] = [
  {
    id: 'total-certifications',
    label: 'Total Certifications',
    value: '30+',
    subtext: 'Verified Skill Badges & Certificates',
    icon: Award,
  },
  {
    id: 'google-skills-boost',
    label: 'Google Skills Boost',
    value: 'Gold League',
    subtext: 'Top Tier Cloud Learning Tier',
    icon: Trophy,
  },
  {
    id: 'ai-cloud-learning',
    label: 'AI & Cloud Learning',
    value: 'Active Badges',
    subtext: 'Hands-on Lab Competencies',
    icon: Sparkles,
  },
  {
    id: 'continuous-learning',
    label: 'Continuous Learning',
    value: '100% Verified',
    subtext: 'Structured Engineering Growth',
    icon: ShieldCheck,
  },
];

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Artificial Intelligence',
  'Machine Learning',
  'Firebase',
  'Google Cloud',
  'Software Engineering',
  'Data & Analytics',
];

const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Generative AI Fundamentals',
    organization: 'Google Skills Boost',
    category: 'Artificial Intelligence',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['Large Language Models', 'Prompt Engineering', 'Generative AI'],
    icon: Cpu,
  },
  {
    id: 'cert-2',
    title: 'Google Cloud Infrastructure & Deployment',
    organization: 'Google Skills Boost',
    category: 'Google Cloud',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['Cloud Run', 'App Engine', 'Compute Engine', 'IAM'],
    icon: Cloud,
  },
  {
    id: 'cert-3',
    title: 'Firebase Firestore & Realtime Architecture',
    organization: 'Google Skills Boost',
    category: 'Firebase',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['Firestore DB', 'Firebase Auth', 'Security Rules', 'Cloud Functions'],
    icon: Database,
  },
  {
    id: 'cert-4',
    title: 'Machine Learning Specialization & Optimization',
    organization: 'Google Skills Boost',
    category: 'Machine Learning',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['Model Training', 'Scikit-Learn', 'Feature Engineering'],
    icon: Flame,
  },
  {
    id: 'cert-5',
    title: 'Full-Stack Software Engineering Practices',
    organization: 'Google Skills Boost',
    category: 'Software Engineering',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['React', 'TypeScript', 'API Design', 'Clean Architecture'],
    icon: Code2,
  },
  {
    id: 'cert-6',
    title: 'Data Analytics & Insights Dashboarding',
    organization: 'Google Skills Boost',
    category: 'Data & Analytics',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['Power BI', 'SQL Querying', 'Data Visualization'],
    icon: BarChart3,
  },
  {
    id: 'cert-7',
    title: 'Google Cloud Generative AI Explorer',
    organization: 'Google Skills Boost',
    category: 'Artificial Intelligence',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['Gemini API', 'Vector Embeddings', 'Multimodal AI'],
    icon: Sparkles,
  },
  {
    id: 'cert-8',
    title: 'Cloud Security & Identity Management',
    organization: 'Google Skills Boost',
    category: 'Google Cloud',
    issueDate: '2024 • Verified Credential',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    skills: ['Cloud IAM', 'OAuth 2.0', 'API Gateway', 'Zero Trust'],
    icon: ShieldCheck,
  },
];

const LEARNING_JOURNEY: LearningStage[] = [
  {
    id: 'stage-1',
    stage: 'Stage 01',
    title: 'Introduction to AI',
    description: 'Foundational concepts of artificial intelligence, algorithms, and computational logic.',
    status: 'Completed',
    icon: Cpu,
  },
  {
    id: 'stage-2',
    stage: 'Stage 02',
    title: 'Generative AI',
    description: 'Mastering LLMs, prompt engineering, multimodal architectures, and Google AI Studio integration.',
    status: 'Completed',
    icon: Sparkles,
  },
  {
    id: 'stage-3',
    stage: 'Stage 03',
    title: 'Firebase',
    description: 'Architecting scalable serverless backends with Firestore, Firebase Auth, and Security Rules.',
    status: 'Completed',
    icon: Database,
  },
  {
    id: 'stage-4',
    stage: 'Stage 04',
    title: 'Cloud Computing',
    description: 'Deploying cloud applications, containerization, and managing Google Cloud infrastructure.',
    status: 'Completed',
    icon: Cloud,
  },
  {
    id: 'stage-5',
    stage: 'Stage 05',
    title: 'Machine Learning',
    description: 'Supervised & unsupervised learning algorithms, feature engineering, and predictive modeling.',
    status: 'Completed',
    icon: Flame,
  },
  {
    id: 'stage-6',
    stage: 'Stage 06',
    title: 'MLOps',
    description: 'Automating machine learning pipelines, model monitoring, and continuous deployment.',
    status: 'Completed',
    icon: Layers,
  },
  {
    id: 'stage-7',
    stage: 'Stage 07',
    title: 'Current Learning',
    description: 'Advanced Autonomous AI Agents, Custom Fine-Tuning, and Enterprise System Design.',
    status: 'In Progress',
    icon: GraduationCap,
  },
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

interface CertificateCardProps {
  cert: CertificateItem;
  index: number;
}

const CertificateCard: FC<CertificateCardProps> = ({ cert, index }) => {
  const Icon = cert.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
      exit={{ opacity: 0, scale: 0.95, y: 12 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="saas-card p-6 flex flex-col justify-between space-y-5 hover:border-[#0F766E]/40 hover:shadow-lg transition-shadow duration-200 group"
    >
      <div className="space-y-4">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4] shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-1 rounded-md">
            {cert.category}
          </span>
        </div>

        {/* Title & Organization */}
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-[#0F172A] dark:text-white tracking-tight group-hover:text-[#0F766E] dark:group-hover:text-[#5EEAD4] transition-colors leading-snug">
            {cert.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-[#475569] dark:text-[#D1D5DB] font-mono font-medium">
            <span>{cert.organization}</span>
            <span>•</span>
            <span className="text-[#0F766E] dark:text-[#5EEAD4]">{cert.issueDate}</span>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-[#F1F5F9] dark:bg-[#1F2937] text-[#0F172A] dark:text-white border border-[#E2E8F0] dark:border-[#374151]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* View Credential Button */}
      <div className="pt-3 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80">
        <motion.a
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary w-full justify-center text-xs py-2 px-3 font-semibold rounded-xl group/btn"
        >
          <span>View Credential</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4] group-hover/btn:translate-x-0.5 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};

// ==========================================
// MAIN CERTIFICATIONS PAGE
// ==========================================

export const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredCertificates =
    selectedCategory === 'All'
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === selectedCategory);

  return (
    <div id="page-certifications" className="max-w-[1280px] mx-auto space-y-12 sm:space-y-16">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
            CERTIFICATIONS
          </span>
          <span className="h-[1px] w-8 bg-[#0F766E]/30" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight">
          Continuous Learning & Professional Growth
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
          A collection of certifications that demonstrate my continuous learning journey in Artificial Intelligence, Cloud Computing, Firebase, Machine Learning and Software Engineering.
        </p>
      </motion.div>

      {/* SECTION 1 — SUMMARY DASHBOARD CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {SUMMARY_STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="saas-card p-6 flex flex-col justify-between space-y-4 hover:border-[#0F766E]/40 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                  {stat.label}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
                  <Icon className="w-4.5 h-4.5" />
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs text-[#475569] dark:text-[#D1D5DB] mt-1 font-medium">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SECTION 2 & 3 — CERTIFICATIONS DASHBOARD & CATEGORY FILTERS */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8F0] dark:border-[#374151] pb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              Credentials Dashboard
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111827] text-[#475569] dark:text-[#D1D5DB] border border-[#E2E8F0] dark:border-[#374151] hover:border-[#0F766E]/40'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Certificate Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SECTION 4 — LEARNING JOURNEY (VERTICAL TIMELINE) */}
      <section className="space-y-8">
        <div className="flex items-center gap-2.5 border-b border-[#E2E8F0] dark:border-[#374151] pb-3">
          <BookOpen className="w-5 h-5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
            Learning Journey Roadmap
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E2E8F0] dark:border-[#374151] space-y-6">
          {LEARNING_JOURNEY.map((item, idx) => {
            const Icon = item.icon;
            const isInProgress = item.status === 'In Progress';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="relative group"
              >
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-3 w-4 h-4 rounded-full bg-white dark:bg-[#0B1220] border-2 ${
                    isInProgress ? 'border-amber-500 animate-pulse' : 'border-[#0F766E] dark:border-[#5EEAD4]'
                  } flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-xs z-10`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isInProgress ? 'bg-amber-500' : 'bg-[#0F766E] dark:bg-[#5EEAD4]'
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div
                  className={`saas-card p-5 sm:p-6 space-y-2 hover:border-[#0F766E]/40 transition-all duration-200 ${
                    isInProgress ? 'ring-1 ring-amber-500/40 bg-amber-500/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] block">
                          {item.stage}
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold ${
                        isInProgress
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                          : 'bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#D1D5DB] leading-relaxed pt-1 font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="saas-card p-8 sm:p-10 border-2 border-[#0F766E] dark:border-[#5EEAD4] bg-gradient-to-br from-white via-[#F8FAFC] to-[#F1F5F9] dark:from-[#111827] dark:via-[#0B1220] dark:to-[#0F172A] shadow-xl text-center space-y-6 max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#0F766E]/10 border border-[#0F766E]/30 flex items-center justify-center text-[#0F766E] dark:text-[#5EEAD4]">
            <Trophy className="w-6 h-6" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Learning Never Stops
            </h2>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
              I continuously improve my technical skills through structured learning, hands-on projects and real-world implementation.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              href="https://www.cloudskillsboost.google/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-3 px-6 text-sm font-semibold rounded-xl"
            >
              <Award className="w-4.5 h-4.5" />
              <span>View Google Skills Profile</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Certifications;
