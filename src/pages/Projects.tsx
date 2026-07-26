import { useState, ComponentType, FC } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Shield,
  Building2,
  BookOpen,
  Users2,
  X,
  Info,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export interface ProjectItem {
  id: string;
  name: string;
  title: string;
  description: string;
  roles: string[];
  techStack: string[];
  liveDemoUrl: string;
  isFeatured?: boolean;
  tag: string;
  previewColor: string;
  previewIcon: ComponentType<{ className?: string }>;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'crimeops',
    name: 'CrimeOps',
    title: 'CrimeOps – AI-Powered Crime Intelligence Platform',
    description:
      'An intelligent platform that helps law enforcement analyse crime patterns, visualise hotspots using Google Maps and support faster data-driven decisions.',
    roles: ['Machine Learning', 'Frontend Development', 'Backend Development'],
    techStack: ['React', 'TypeScript', 'Firebase', 'Google Maps API', 'Machine Learning'],
    liveDemoUrl: 'https://crime-intelligence-brown.vercel.app/',
    isFeatured: true,
    tag: 'Flagship Case Study • AI & Maps',
    previewColor: 'from-slate-900 via-teal-950 to-slate-900',
    previewIcon: Shield,
    problem:
      'Law enforcement agencies struggle to process disjointed crime data rapidly, identify emergent criminal hotspots, and perform predictive intelligence in time to prevent incidents.',
    solution:
      'CrimeOps aggregates crime feeds into interactive Google Maps heatmaps, applies predictive Machine Learning algorithms to identify high-risk zones, and visualizes criminal network graphs in real time.',
    keyFeatures: [
      'Interactive Crime Hotspot Heatmaps with Google Maps API',
      'Predictive Machine Learning Risk Scoring Algorithms',
      'Criminal Network Graph & Node Relationship Analytics',
      'Live Incident Emergency Response Dispatch Portal',
      'Real-time Data Processing & Spatial Density Metrics',
    ],
  },
  {
    id: 'quadx',
    name: 'QuadX',
    title: 'AI-Powered ERP Platform',
    description:
      'An ERP solution that simplifies business management through AI-assisted workflows and a modern dashboard.',
    roles: ['Team Lead', 'Frontend', 'Backend Contributor'],
    techStack: ['React', 'Firebase', 'Google AI Studio'],
    liveDemoUrl: 'https://quaad-x.vercel.app/',
    isFeatured: false,
    tag: 'Enterprise ERP • AI',
    previewColor: 'from-slate-900 via-emerald-950 to-slate-900',
    previewIcon: Building2,
    problem:
      'Small and medium enterprises suffer from fragmented operational software, causing manual data entry overhead and delayed cross-department decisions.',
    solution:
      'QuadX unifies core business operations into an intelligent dashboard powered by Google AI Studio, facilitating automated workflows and real-time resource allocation.',
    keyFeatures: [
      'Centralized Resource & Inventory Management',
      'Google AI Studio Workflow Automation',
      'Real-Time Financial & Operational Dashboards',
      'Role-Based Multi-Tenant Access Controls',
    ],
  },
  {
    id: 'educomics',
    name: 'EduComics',
    title: 'Learning Through Comics',
    description:
      'An AI platform that converts educational concepts into engaging comic stories to improve learning for school students.',
    roles: ['Team Lead', 'Frontend', 'Backend'],
    techStack: ['React', 'Firebase', 'Google AI Studio'],
    liveDemoUrl: 'https://educomics.vercel.app/',
    isFeatured: false,
    tag: 'EdTech • Generative AI',
    previewColor: 'from-slate-900 via-[#0F766E]/40 to-slate-900',
    previewIcon: BookOpen,
    problem:
      'Students frequently lose focus when studying dense textbook concepts, leading to lower retention rates and learning fatigue.',
    solution:
      'EduComics leverages Generative AI to convert lesson outlines into vivid, panel-by-panel comic strip stories customized for school students.',
    keyFeatures: [
      'AI Concept-to-Comic Storyboard Generator',
      'Interactive Panel Reader & Audio Narrative',
      'Custom Subject Library & Student Progress Tracker',
      'Automated Quiz Generation from Comic Content',
    ],
  },
  {
    id: 'linex',
    name: 'LineX',
    title: 'Smart Queue Management System',
    description:
      'A queue management platform that allows users to reserve their place remotely and reduce waiting time.',
    roles: ['Frontend', 'Backend'],
    techStack: ['React', 'Firebase'],
    liveDemoUrl: 'https://line-x-dusky.vercel.app/',
    isFeatured: false,
    tag: 'Productivity & Systems',
    previewColor: 'from-slate-900 via-cyan-950 to-slate-900',
    previewIcon: Users2,
    problem:
      'Physical wait times in service centers create customer frustration, crowding, and inefficient staff scheduling.',
    solution:
      'LineX enables virtual queue ticketing, real-time wait notifications, and automated queue tracking via Firebase Firestore.',
    keyFeatures: [
      'Remote Queue Ticket Reservation via QR/Mobile',
      'Live Queue Wait-Time Estimator Engine',
      'Merchant Dashboard & Queue Dispatcher',
      'Real-Time Firebase Firestore Synchronization',
    ],
  },
];

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

const FeaturedProjectCard: FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const IconComponent = project.previewIcon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="saas-card overflow-hidden p-6 sm:p-8 lg:p-10 relative ring-2 ring-[#0F766E] shadow-lg hover:shadow-xl bg-gradient-to-b from-white to-[#F8FAFC]/60 dark:from-[#111827] dark:to-[#0B1220] transition-shadow duration-200"
    >
      {/* Flagship Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F766E] text-white text-xs font-mono font-semibold shadow-xs z-20">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Featured Case Study</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch h-full">
        {/* Screenshot / Visual Placeholder */}
        <div className="lg:col-span-6 w-full flex flex-col justify-center">
          <div className="group relative w-full h-full min-h-[280px] sm:min-h-[320px] rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs bg-slate-900 flex flex-col justify-between p-6 sm:p-8 text-white transition-all duration-300">
            {/* Gradient Backdrop */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.previewColor} opacity-90 transition-transform duration-500 group-hover:scale-105`}
            />

            {/* Top Browser Bar Mockup */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-[#5EEAD4] bg-[#0F766E]/40 px-2.5 py-0.5 rounded-full font-semibold">
                {project.tag}
              </span>
            </div>

            {/* Center Mockup Content */}
            <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#5EEAD4] shadow-inner group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-sm font-bold tracking-wide text-white block">
                  {project.name}
                </span>
                <span className="text-xs text-slate-300/80 font-mono italic block">
                  Interactive Application Screenshot Placeholder
                </span>
              </div>
            </div>

            {/* Bottom Footer inside mockup */}
            <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-white/10 pt-3">
              <span className="flex items-center gap-1.5 text-[#5EEAD4] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                Deployed Live
              </span>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 font-semibold"
              >
                Launch App <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Tag & Title */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded inline-block">
                {project.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
              {project.description}
            </p>

            {/* Role List */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                Role & Responsibilities:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.roles.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] text-xs font-semibold text-[#0F172A] dark:text-white"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                Technologies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[#F1F5F9] dark:bg-[#1F2937] text-[#0F172A] dark:text-white border border-[#E2E8F0] dark:border-[#374151]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80">
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs py-2.5 px-5 font-semibold rounded-xl flex justify-center items-center gap-2 w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              onClick={() => onOpenDetails(project)}
              className="btn-secondary text-xs py-2.5 px-5 font-semibold rounded-xl cursor-pointer flex justify-center items-center gap-2 w-full sm:w-auto"
            >
              <Info className="w-4 h-4 text-[#0F766E] dark:text-[#5EEAD4]" />
              <span>View Details</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GridProjectCard: FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const IconComponent = project.previewIcon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="saas-card p-6 sm:p-7 flex flex-col justify-between h-full space-y-6 hover:border-[#0F766E]/40 hover:shadow-lg transition-shadow duration-200 group"
    >
      <div className="space-y-5">
        {/* Visual Header Placeholder */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#E2E8F0] dark:border-[#374151] shadow-2xs bg-slate-900 flex flex-col justify-between p-4 text-white">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.previewColor} opacity-90 transition-transform duration-500 group-hover:scale-105`}
          />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-[#5EEAD4] bg-[#0F766E]/40 px-2 py-0.5 rounded font-semibold">
              {project.tag}
            </span>
          </div>

          <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#5EEAD4] shadow-inner group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-300/80 font-mono italic">
              Screenshot Placeholder
            </span>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="text-[#5EEAD4] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
              Live Demo
            </span>
            <span className="text-slate-300">{project.name}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-[#5EEAD4] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Role List */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
            Role:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.roles.map((r) => (
              <span
                key={r}
                className="px-2 py-0.5 rounded bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#374151] text-[11px] font-medium text-[#0F172A] dark:text-white"
              >
                • {r}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-[#F1F5F9] dark:bg-[#1F2937] text-[#0F172A] dark:text-white border border-[#E2E8F0] dark:border-[#374151]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Aligned at Bottom */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-3 border-t border-[#E2E8F0]/80 dark:border-[#374151]/80">
        <motion.a
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          href={project.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary flex-1 justify-center text-xs py-2.5 px-3 font-semibold rounded-xl w-full sm:w-auto"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </motion.a>
        <motion.button
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          onClick={() => onOpenDetails(project)}
          className="btn-secondary flex-1 justify-center text-xs py-2.5 px-3 font-semibold rounded-xl cursor-pointer w-full sm:w-auto"
        >
          <Info className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
          <span>View Details</span>
        </motion.button>
      </div>
    </motion.div>
  );
};


export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProject = PROJECTS_DATA.find((p) => p.isFeatured) || PROJECTS_DATA[0];
  const gridProjects = PROJECTS_DATA.filter((p) => p.id !== featuredProject.id);

  return (
    <div id="page-projects" className="max-w-[1280px] mx-auto space-y-10 sm:space-y-14">
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3 max-w-3xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
            PROJECTS
          </span>
          <span className="h-[1px] w-8 bg-[#0F766E]/30" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight">
          Projects That Solve Real-World Problems
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#D1D5DB] leading-relaxed">
          A collection of AI-powered and full-stack applications built to solve practical problems through modern software engineering.
        </p>
      </motion.div>

      {/* FEATURED PROJECT (CRIMEOPS) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
            Featured Architecture
          </span>
        </div>
        <FeaturedProjectCard
          project={featuredProject}
          onOpenDetails={(proj) => setSelectedProject(proj)}
        />
      </div>

      {/* RESPONSIVE GRID (3 PROJECTS BELOW) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
            More Software Products ({gridProjects.length})
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {gridProjects.map((project) => (
            <GridProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* MODAL CASE STUDY DETAILS */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#374151] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#E2E8F0] dark:border-[#374151] pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
                    {selectedProject.tag}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-[#475569] hover:text-[#0F172A] dark:text-[#D1D5DB] dark:hover:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Roles & Tech */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                    Roles & Contribution
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm font-medium text-[#0F172A] dark:text-white">
                    {selectedProject.roles.map((r) => (
                      <li key={r} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#F1F5F9] dark:bg-[#1F2937] text-[#0F172A] dark:text-white border border-[#E2E8F0] dark:border-[#374151]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Problem & Solution */}
              {selectedProject.problem && (
                <div className="space-y-3 bg-[#F8FAFC] dark:bg-[#0B1220] p-4 rounded-xl border border-[#E2E8F0] dark:border-[#374151]">
                  <div>
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
                      Problem Statement
                    </h5>
                    <p className="text-xs sm:text-sm text-[#475569] dark:text-[#D1D5DB]">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                      Engineering Solution
                    </h5>
                    <p className="text-xs sm:text-sm text-[#475569] dark:text-[#D1D5DB]">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Key Features */}
              {selectedProject.keyFeatures && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#9CA3AF]">
                    Key Features & Functional Scope
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.keyFeatures.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2 text-xs font-medium text-[#0F172A] dark:text-white bg-[#F8FAFC] dark:bg-[#0B1220] p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#374151]"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer CTA */}
              <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#374151] flex items-center justify-between">
                <span className="text-xs font-mono text-[#475569] dark:text-[#D1D5DB]">
                  Live Application Link
                </span>
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs py-2.5 px-5 font-semibold rounded-xl"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
