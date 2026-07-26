import React from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Shield,
  Building2,
  BookOpen,
  Users2,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';

interface Project {
  id: string;
  title: string;
  tag: string;
  isFlagship?: boolean;
  description: string;
  role: string;
  features?: string[];
  techStack: string[];
  liveDemoUrl: string;
  githubUrl?: string;
  previewColor: string;
  previewIcon: React.ComponentType<{ className?: string }>;
}

const PROJECTS: Project[] = [
  {
    id: 'crimeops',
    title: 'CrimeOps — AI-Powered Crime Intelligence Platform',
    tag: 'AI • Machine Learning • Maps',
    isFlagship: true,
    description:
      'An intelligent platform built for law enforcement agencies to analyse crime trends, visualise hotspots using Google Maps, monitor criminal activity and support faster data-driven decision making.',
    role: 'Machine Learning • Frontend Development • Backend Development',
    features: [
      'Crime Heatmaps',
      'Google Maps Integration',
      'Criminal Network Analysis',
      'Prediction Dashboard',
      'Live Intelligence Dashboard',
    ],
    techStack: ['React', 'TypeScript', 'Firebase', 'Google Maps', 'Machine Learning'],
    liveDemoUrl: 'https://crime-intelligence-brown.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-teal-950 to-slate-900',
    previewIcon: Shield,
  },
  {
    id: 'quadx',
    title: 'QuadX — AI-powered ERP Platform',
    tag: 'ERP • AI',
    isFlagship: false,
    description:
      'A modern ERP platform designed to simplify business operations with intelligent automation and centralized management.',
    role: 'Team Lead • Frontend Developer • Backend Contributor',
    features: [
      'Centralized Resource Planning',
      'AI Operations Automation',
      'Real-time Analytics',
    ],
    techStack: ['React', 'Firebase', 'Google AI Studio'],
    liveDemoUrl: 'https://quaad-x.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-emerald-950 to-slate-900',
    previewIcon: Building2,
  },
  {
    id: 'educomics',
    title: 'EduComics — Learning Through Comics',
    tag: 'Generative AI',
    isFlagship: false,
    description:
      'An AI-powered educational platform that converts school concepts into engaging visual comic stories, making learning easier and more memorable for students.',
    role: 'Team Lead • Frontend • Backend',
    features: [
      'AI Concept-to-Comic Generator',
      'Interactive Storyboards',
      'Student Learning Portal',
    ],
    techStack: ['React', 'Firebase', 'Google AI Studio'],
    liveDemoUrl: 'https://educomics.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-[#0F766E]/40 to-slate-900',
    previewIcon: BookOpen,
  },
  {
    id: 'linex',
    title: 'LineX — Smart Queue Management System',
    tag: 'Productivity',
    isFlagship: false,
    description:
      'A queue management application that allows users to reserve their place remotely, reducing waiting time and improving customer experience.',
    role: 'Frontend • Backend • Firebase',
    features: [
      'Remote Queue Ticket Reservation',
      'Live Wait Time Estimator',
      'Merchant Dashboard',
    ],
    techStack: ['React', 'TypeScript', 'Firebase'],
    liveDemoUrl: 'https://line-x-dusky.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-cyan-950 to-slate-900',
    previewIcon: Users2,
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="featured-projects-section" className="py-12 sm:py-20">
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
              FEATURED PROJECTS
            </span>
            <span className="h-[1px] w-8 bg-[#0F766E]/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Real Problems. Real Products. Real Impact.
          </h2>

          <p className="text-base sm:text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
            These projects demonstrate my ability to design, build and deploy AI-powered applications that solve practical real-world problems.
          </p>
        </motion.div>

        {/* Projects List (Alternating Layout) */}
        <div className="space-y-16 sm:space-y-24">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const PreviewIcon = project.previewIcon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
                className={`saas-card overflow-hidden p-6 sm:p-8 lg:p-10 relative ${
                  project.isFlagship
                    ? 'ring-2 ring-[#0F766E] shadow-lg bg-gradient-to-b from-white to-[#F8FAFC]/50 dark:from-[#111827] dark:to-[#0B1220]'
                    : ''
                }`}
              >
                {/* Flagship Banner Pill */}
                {project.isFlagship && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F766E] text-white text-xs font-mono font-semibold shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Flagship Case Study</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* PROJECT IMAGE / SCREENSHOT PLACEHOLDER */}
                  <div
                    className={`lg:col-span-6 w-full ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="group relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#E2E8F0] dark:border-[#1E293B] shadow-sm bg-slate-900 flex flex-col justify-between p-6 sm:p-8 text-white transition-all duration-300">
                      {/* Gradient Backdrop */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.previewColor} opacity-90 transition-transform duration-500 group-hover:scale-105`}
                      />

                      {/* Header bar inside mockup */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/80" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-[#5EEAD4] bg-[#0F766E]/40 px-2.5 py-0.5 rounded-full">
                          {project.tag}
                        </span>
                      </div>

                      {/* Center Mockup Content */}
                      <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center space-y-3">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#5EEAD4] shadow-inner group-hover:scale-110 transition-transform duration-300">
                          <PreviewIcon className="w-7 h-7" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white max-w-xs">
                          {project.title.split('—')[0]}
                        </h4>
                        <span className="text-xs text-slate-300 font-mono">
                          Interactive Live Demo Available
                        </span>
                      </div>

                      {/* Bottom Footer inside mockup */}
                      <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-white/10 pt-3">
                        <span className="flex items-center gap-1.5 text-[#5EEAD4]">
                          <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                          Deployed on Vercel
                        </span>
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors flex items-center gap-1"
                        >
                          Launch Demo <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT DETAILS CONTENT */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Tag & Title */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
                          {project.tag}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Role */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#CBD5E1]">
                        Role & Contribution:
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] bg-[#F8FAFC] dark:bg-[#0B1220] p-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#1E293B]">
                        {project.role}
                      </p>
                    </div>

                    {/* Features checklist if available */}
                    {project.features && project.features.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#CBD5E1]">
                          Key Features:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feat) => (
                            <div
                              key={feat}
                              className="flex items-center gap-2 text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC]"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#CBD5E1]">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded bg-[#F1F5F9] dark:bg-[#1F2937] text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#374151]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubUrl || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                      >
                        <Github className="w-4 h-4" />
                        <span>Case Study / Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
