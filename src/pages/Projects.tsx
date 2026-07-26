import { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Shield,
  Building2,
  BookOpen,
  Users2,
  X,
  Layers,
  Search,
  Code2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  category: 'ai' | 'fullstack' | 'productivity';
  isFlagship?: boolean;
  problem?: string;
  solution?: string;
  description: string;
  role: string;
  features: string[];
  techStack: string[];
  liveDemoUrl: string;
  githubUrl?: string;
  previewColor: string;
  previewIcon: React.ComponentType<{ className?: string }>;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 'crimeops',
    title: 'CrimeOps',
    subtitle: 'AI-Powered Crime Intelligence Platform',
    tag: 'AI • Machine Learning • Maps',
    category: 'ai',
    isFlagship: true,
    problem:
      'Law enforcement agencies struggle to process disjointed crime data rapidly, identify emergent criminal hotspots, and perform predictive intelligence in time to prevent incidents.',
    solution:
      'CrimeOps aggregates crime feeds into interactive Google Maps heatmaps, applies predictive Machine Learning algorithms to identify high-risk zones, and visualizes criminal network graphs in real time.',
    description:
      'An intelligent platform built for law enforcement agencies to analyse crime trends, visualise hotspots using Google Maps, monitor criminal activity and support faster data-driven decision making.',
    role: 'Machine Learning • Frontend Development • Backend Development',
    features: [
      'Crime Heatmaps & Spatial Density Analysis',
      'Google Maps API Integration',
      'Criminal Network Analysis & Node Visualization',
      'Machine Learning Predictive Analytics',
      'Live Incident Intelligence & Emergency Response Dashboard',
    ],
    techStack: ['React', 'TypeScript', 'Firebase', 'Google Maps', 'Machine Learning', 'Tailwind CSS'],
    liveDemoUrl: 'https://crime-intelligence-brown.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-teal-950 to-slate-900',
    previewIcon: Shield,
  },
  {
    id: 'quadx',
    title: 'QuadX',
    subtitle: 'AI-Powered ERP Platform',
    tag: 'ERP • AI',
    category: 'ai',
    isFlagship: false,
    problem:
      'Small and medium enterprises struggle with fragmented operational software, causing manual data entry overhead and delayed decision-making across departments.',
    solution:
      'QuadX unifies core business operations into a single intelligent platform powered by Google AI Studio, providing real-time resource allocation and automated workflow processing.',
    description:
      'A modern ERP platform designed to simplify business operations with intelligent automation and centralized management.',
    role: 'Team Lead • Frontend Developer • Backend Contributor',
    features: [
      'Centralized Resource & Inventory Management',
      'AI-Driven Operations Automation',
      'Real-time Analytics & Executive Financial Dashboard',
      'Role-based Multi-tenant Access Control',
    ],
    techStack: ['React', 'Firebase', 'Google AI Studio', 'TypeScript', 'Tailwind CSS'],
    liveDemoUrl: 'https://quaad-x.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-emerald-950 to-slate-900',
    previewIcon: Building2,
  },
  {
    id: 'educomics',
    title: 'EduComics',
    subtitle: 'Learning Through Comics Platform',
    tag: 'Generative AI',
    category: 'ai',
    isFlagship: false,
    problem:
      'Students frequently lose interest when studying complex textbook concepts, leading to lower retention rates and learning fatigue.',
    solution:
      'EduComics leverages Generative AI to convert textbook lesson concepts into engaging, visual comic strip stories customized to different grade levels.',
    description:
      'An AI-powered educational platform that converts school concepts into engaging visual comic stories, making learning easier and more memorable for students.',
    role: 'Team Lead • Frontend • Backend',
    features: [
      'AI Concept-to-Comic Story Generator',
      'Interactive Panel-by-Panel Reader',
      'Student Learning Portal & Quiz Generator',
      'Custom Subject Library Storage',
    ],
    techStack: ['React', 'Firebase', 'Google AI Studio', 'Tailwind CSS'],
    liveDemoUrl: 'https://educomics.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-[#0F766E]/40 to-slate-900',
    previewIcon: BookOpen,
  },
  {
    id: 'linex',
    title: 'LineX',
    subtitle: 'Smart Queue Management System',
    tag: 'Productivity',
    category: 'productivity',
    isFlagship: false,
    problem:
      'Physical waiting rooms and long customer queues in service hubs lead to customer dissatisfaction and inefficient staff allocation.',
    solution:
      'LineX allows customers to join virtual waitlists via mobile QR codes, receive real-time SMS notifications, and monitor accurate wait time estimates.',
    description:
      'A queue management application that allows users to reserve their place remotely, reducing waiting time and improving customer experience.',
    role: 'Frontend • Backend • Firebase Architect',
    features: [
      'Remote Queue Ticket Reservation',
      'Live Wait Time Estimator Engine',
      'Merchant Dashboard & Queue Control',
      'Real-time Firebase Firestore State Sync',
    ],
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveDemoUrl: 'https://line-x-dusky.vercel.app/',
    githubUrl: 'https://github.com',
    previewColor: 'from-slate-900 via-cyan-950 to-slate-900',
    previewIcon: Users2,
  },
];



export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'fullstack' | 'productivity'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="page-projects" className="space-y-12 sm:space-y-16">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 max-w-3xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0F766E] bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
            PORTFOLIO SHOWCASE
          </span>
          <span className="h-[1px] w-8 bg-[#0F766E]/30" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
          Featured Projects & Case Studies
        </h1>

        <p className="text-base sm:text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
          Detailed breakdown of AI-powered applications, full-stack software products, and engineering case studies designed for real-world impact.
        </p>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="saas-card p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'AI & Machine Learning' },
            { id: 'productivity', label: 'Productivity & Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#0F766E] text-white font-semibold'
                  : 'text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#475569] dark:text-[#CBD5E1]" />
          <input
            type="text"
            placeholder="Search stack or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#F8FAFC] dark:bg-[#0B1220] border border-[#E2E8F0] dark:border-[#1E293B] text-xs text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#0F766E]"
          />
        </div>
      </div>

      {/* FLAGSHIP PROJECT: CrimeOps (Large Showcase) */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="saas-card p-6 sm:p-8 lg:p-10 border-2 border-[#0F766E] shadow-xl relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC]/50 dark:from-[#111827] dark:to-[#0B1220]"
      >
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F766E] text-white text-xs font-mono font-semibold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flagship Case Study</span>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F766E]">
              CrimeOps
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
              CrimeOps — AI-Powered Crime Intelligence Platform
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#0F766E]">
              Role: Machine Learning • Frontend Development • Backend Development
            </p>
          </div>

          {/* Screenshot / Interactive Preview Mockup */}
          <div className="w-full aspect-[16/8] rounded-xl bg-slate-900 border border-[#E2E8F0] dark:border-[#1E293B] shadow-lg relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 opacity-90" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-[#5EEAD4] bg-[#0F766E]/40 px-3 py-1 rounded-full">
                Live Spatial Intelligence
              </span>
            </div>

            <div className="relative z-10 my-auto py-6 text-center space-y-3 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#5EEAD4] shadow-inner">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Predictive Heatmaps & Criminal Analytics
              </h3>
              <p className="text-xs text-slate-300">
                Google Maps integration visualizing crime density and predictive ML incident alerts.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono border-t border-white/10 pt-3">
              <span className="text-[#5EEAD4]">Production Deployment Active</span>
              <a
                href="https://crime-intelligence-brown.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary py-1.5 px-3 text-xs"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Problem & Solution Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                The Problem
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] dark:text-[#F8FAFC] leading-relaxed">
                {FEATURED_PROJECTS[0].problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F766E]">
                The Solution
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] dark:text-[#F8FAFC] leading-relaxed">
                {FEATURED_PROJECTS[0].solution}
              </p>
            </div>
          </div>

          {/* Key Features & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#CBD5E1]">
                Key Engineering Features
              </h4>
              <div className="space-y-2">
                {FEATURED_PROJECTS[0].features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-medium text-[#0F172A] dark:text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#CBD5E1]">
                Tech Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {FEATURED_PROJECTS[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white dark:bg-[#111827] text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#1E293B] shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B]">
            <a
              href={FEATURED_PROJECTS[0].liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Demo</span>
            </a>

            <button
              onClick={() => setSelectedProject(FEATURED_PROJECTS[0])}
              className="btn-secondary"
            >
              <Layers className="w-4 h-4" />
              <span>Full Case Study Details</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* OTHER FEATURED PROJECTS GRID (QuadX, EduComics, LineX) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#E2E8F0] dark:border-[#1E293B] pb-3">
          <Code2 className="w-5 h-5 text-[#0F766E]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Core Product Applications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects
            .filter((p) => !p.isFlagship)
            .map((project, index) => {
              const Icon = project.previewIcon;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="saas-card flex flex-col justify-between p-6 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="space-y-5">
                    {/* Visual Card Header Placeholder */}
                    <div className="w-full aspect-[16/9] rounded-lg bg-slate-900 border border-[#E2E8F0] dark:border-[#1E293B] flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.previewColor} opacity-90`} />
                      <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#5EEAD4]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="relative z-10 text-xs font-mono text-white font-semibold mt-2">
                        {project.title}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#0F766E] bg-[#0F766E]/10 px-2 py-0.5 rounded">
                        {project.tag}
                      </span>
                      <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Role */}
                    <div className="text-xs font-mono text-[#0F766E]">
                      <span className="text-[#475569] dark:text-[#CBD5E1] font-semibold">Role: </span>
                      {project.role}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#F1F5F9] dark:bg-[#1F2937] text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#374151]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-6 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center gap-2">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary text-xs py-1.5 px-3 flex-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-secondary text-xs py-1.5 px-3"
                    >
                      <span>Learn More</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* MORE PROJECTS COMING SOON PLACEHOLDER */}
      <section className="pt-4">
        <div className="saas-card p-6 sm:p-8 text-center space-y-3 bg-[#F8FAFC]/50 dark:bg-[#0B1220]/50 border-dashed border-2 border-[#E2E8F0] dark:border-[#1E293B]">
          <div className="w-10 h-10 mx-auto rounded-xl bg-[#0F766E]/10 border border-[#0F766E]/20 flex items-center justify-center text-[#0F766E]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
            More Production Projects Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1] max-w-md mx-auto">
            Currently engineering new AI-driven software products and full-stack solutions. Check back for upcoming live case studies.
          </p>
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="saas-card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative bg-white dark:bg-[#111827] my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-[#475569] hover:text-[#0F172A] dark:text-[#CBD5E1] dark:hover:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-[#0F766E] uppercase bg-[#0F766E]/10 px-2.5 py-0.5 rounded">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-[#475569] dark:text-[#CBD5E1]">
                  Role: {selectedProject.role}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#475569] dark:text-[#CBD5E1]">
                {selectedProject.problem && (
                  <div className="p-4 rounded-lg bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 space-y-1">
                    <span className="font-bold text-red-600 dark:text-red-400 font-mono">
                      Problem Context:
                    </span>
                    <p>{selectedProject.problem}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className="p-4 rounded-lg bg-[#0F766E]/10 border border-[#0F766E]/20 space-y-1">
                    <span className="font-bold text-[#0F766E] font-mono">
                      Engineered Solution:
                    </span>
                    <p>{selectedProject.solution}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-mono">
                    Key Features & Functionality:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 font-mono">
                    Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-[#F1F5F9] dark:bg-[#1F2937] text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#374151]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-end gap-3">
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs"
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
