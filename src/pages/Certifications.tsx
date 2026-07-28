import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, Award, Cpu, Cloud, Terminal, Code2, BookOpen, Layers } from 'lucide-react';

interface FeaturedCert {
  id: string;
  title: string;
  issuer: string;
  description?: string;
  certUrl: string;
  buttonText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FEATURED_CERTS: FeaturedCert[] = [
  {
    id: 'oracle-ai-foundations',
    title: 'Oracle Certified Foundations Associate – AI Foundations (Oracle Cloud Infrastructure 2025)',
    issuer: 'Oracle',
    certUrl: 'https://drive.google.com/file/d/14gJu9BT3exfgKqlPypTeWGoxJfPiMr5I/view?usp=sharing',
    buttonText: 'View Credential',
    icon: Cpu,
  },
  {
    id: 'google-ai-agents',
    title: 'Google AI Agents Intensive',
    issuer: 'Google & Kaggle',
    description: 'Completed the 5-Day AI Agents Intensive course covering modern Generative AI concepts and AI agent development.',
    certUrl: 'https://drive.google.com/file/d/1JpnoTBwlkdh0fkLPwGFSa78joL3nejPb/view?usp=sharing',
    buttonText: 'View Credential',
    icon: Layers,
  },
  {
    id: 'google-study-jams',
    title: 'Google Cloud Study Jams 2025–26',
    issuer: 'Google Developer Groups On Campus',
    description: 'Hands-on learning in Google Cloud, Generative AI, and cloud technologies.',
    certUrl: 'https://drive.google.com/file/d/18DHDAn4ji9sMGxDF05E5cFZxgL24qz4c/view?usp=sharing',
    buttonText: 'View Credential',
    icon: Cloud,
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    certUrl: 'https://drive.google.com/file/d/1sIhdkrwiE-6B4Zo2pngv2zpAAnAPC0oF/view?usp=sharing',
    buttonText: 'View Credential',
    icon: BookOpen,
  },
  {
    id: 'linux-training',
    title: 'Linux Training',
    issuer: 'IIT Bombay Spoken Tutorial',
    certUrl: 'https://drive.google.com/file/d/1VKPtt7n410bf9G00KSK1kYWA1YSp4oei/view?usp=sharing',
    buttonText: 'View Credential',
    icon: Terminal,
  },
  {
    id: 'cpp-training',
    title: 'C++ Programming Training',
    issuer: 'IIT Bombay Spoken Tutorial',
    certUrl: 'https://drive.google.com/file/d/1YjoAbbcfXPKybbGGE9TdmwNygAkrmbfH/view?usp=sharing',
    buttonText: 'View Credential',
    icon: Code2,
  },
  {
    id: 'google-skills-boost',
    title: '30+ Google Skills Badges',
    issuer: 'Google Skills Boost',
    description: 'Completed 30+ Google Skills Boost badges covering Google Cloud, Gemini, Vertex AI, Prompt Engineering, Firebase, Machine Learning, Generative AI, and modern cloud technologies.',
    certUrl: 'https://www.skills.google/public_profiles/7b84c940-6f93-432b-80ab-7d2797714c93',
    buttonText: 'View Public Profile',
    icon: Award,
  },
];

export const Certifications: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="page-certifications" className="py-4 sm:py-6 space-y-6">
      {/* Page Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F2B64E] bg-[#055C5E] px-2.5 py-0.5 rounded-sm inline-block">
          CERTIFICATIONS
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2525]">
          Certifications & Badges
        </h1>
        <p className="text-xs sm:text-sm text-[#4B5563]">
          Verified technical credentials across AI, Cloud Infrastructure, Systems, and Software Engineering.
        </p>
      </div>

      {/* Certification Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        {FEATURED_CERTS.map((cert, idx) => {
          const Icon = cert.icon;

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.03 }}
              className="portfolio-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EFEFEF] border border-[#055C5E]/20 flex items-center justify-center text-[#055C5E]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-[#055C5E] font-bold">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1E2525]">
                  {cert.title}
                </h3>

                {cert.description && (
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-black/10">
                <a
                  href={cert.certUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <span>{cert.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#055C5E]" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;

