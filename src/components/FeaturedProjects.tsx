import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Shield, Building2, BookOpen, Users2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { ProjectMockupPreview } from './ProjectMockupPreview';

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  previewColor: string;
  previewIcon: React.ComponentType<{ className?: string }>;
}

const PROJECTS: Project[] = [
  {
    id: 'linex',
    name: 'LineX',
    description:
      'Smart queue management platform enabling customers to reserve places remotely and minimize wait times.',
    techStack: ['React', 'TypeScript', 'Firebase'],
    liveDemoUrl: 'https://line-x-dusky.vercel.app/',
    githubUrl: 'https://github.com/iamsonam08/line-x',
    previewColor: 'from-[#0D0D0D] via-[#0F766E]/20 to-[#0D0D0D]',
    previewIcon: Users2,
  },
  {
    id: 'educomics',
    name: 'EduComics',
    description:
      'Generative AI platform that converts complex educational lessons into engaging visual comic stories for students.',
    techStack: ['React', 'Firebase', 'Google AI Studio'],
    liveDemoUrl: 'https://educomics.vercel.app/',
    githubUrl: 'https://github.com/iamsonam08/educomics',
    previewColor: 'from-[#0D0D0D] via-[#0F766E]/15 to-[#0D0D0D]',
    previewIcon: BookOpen,
  },
  {
    id: 'quadx',
    name: 'QuadX',
    description:
      'Modern ERP platform powered by Google AI Studio for automated business operations and resource planning.',
    techStack: ['React', 'Firebase', 'Google AI Studio'],
    liveDemoUrl: 'https://quaad-x.vercel.app/',
    githubUrl: 'https://github.com/iamsonam08/quadx',
    previewColor: 'from-[#0D0D0D] via-[#0F766E]/20 to-[#0D0D0D]',
    previewIcon: Building2,
  },
  {
    id: 'crime-intelligence',
    name: 'Crime Intelligence Dashboard',
    description:
      'AI-powered crime intelligence platform helping law enforcement visualize hotspots and analyze crime trends on Google Maps.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Google Maps API', 'Machine Learning'],
    liveDemoUrl: 'https://crime-intelligence-brown.vercel.app/',
    githubUrl: 'https://github.com/iamsonam08/crime-intelligence-dashboard',
    previewColor: 'from-[#0D0D0D] via-[#0F766E]/25 to-[#0D0D0D]',
    previewIcon: Shield,
  },
];

export const FeaturedProjects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="featured-projects-section" className="space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F2B64E] bg-[#055C5E] px-2.5 py-0.5 rounded-sm inline-block">
          PROJECTS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
          Featured Projects
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5563]">
          A selection of software projects solving real-world problems.
        </p>
      </div>

      {/* Grid of Clean White Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {PROJECTS.map((project, index) => {
          const PreviewIcon = project.previewIcon;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.2, delay: index * 0.04 }}
              className="portfolio-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                {/* Clean Project Screenshot / Mockup Header */}
                <ProjectMockupPreview projectId={project.id} projectName={project.name} />

                {/* Project Info */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#1E2525]">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-[#EFEFEF] text-[#055C5E] border border-[#055C5E]/80 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Full Width */}
              <div className="pt-3 border-t border-black/10">
                {project.id === 'linex' || !project.liveDemoUrl ? (
                  <Link
                    to={`/project/${project.id}`}
                    className="btn-primary w-full justify-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </Link>
                ) : (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;

