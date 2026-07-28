import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, User } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { DownloadResumeButton } from './DownloadResumeButton';

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Image candidate URLs with fallbacks for ImgBB direct links and CDN
  const imageSources = [
    'https://ibb.co/HDXs2y6V',
    'https://i.ibb.co/HDXs2y6V/image.png',
    'https://i.ibb.co/HDXs2y6V/image.jpg',
    'https://files.catbox.moe/dtf1eg.png',
  ];

  const [imgIndex, setImgIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (imgIndex < imageSources.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <section id="hero-section" className="py-4 sm:py-8 space-y-8 sm:space-y-10">
      {/* Top Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FFFFFF] border border-black/10 text-[#055C5E] text-xs font-mono font-semibold tracking-wide shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#055C5E] animate-pulse" />
          <span>Open to Software Engineering & AI Roles</span>
        </span>
      </motion.div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Name, Title, Intro & Buttons */}
        <div className="md:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.04 }}
            className="space-y-3"
          >
            {/* Visual Hierarchy: Bold, Dominant Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E2525]">
              Sonam Yadav
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#055C5E] font-mono">
              <span>Computer Engineering Student</span>
              <span className="text-[#9CA3AF]">•</span>
              <span>Full Stack Developer</span>
              <span className="text-[#9CA3AF]">•</span>
              <span>AI Enthusiast</span>
            </div>

            <div className="space-y-2 text-sm sm:text-base text-[#4B5563] leading-relaxed pt-1 max-w-xl">
              <p>Computer Engineering student with a strong interest in Full Stack Development and Artificial Intelligence.</p>
              <p>I enjoy building practical software that solves real-world problems through clean and user-focused solutions.</p>
              <p>Passionate about continuous learning, problem solving, and creating reliable applications with modern technologies.</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Link
              id="hero-cta-projects"
              to="/projects"
              className="btn-primary"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <DownloadResumeButton id="hero-cta-resume" className="btn-secondary" />

            <Link
              id="hero-cta-contact"
              to="/contact"
              className="btn-secondary"
            >
              <Mail className="w-3.5 h-3.5 text-[#055C5E]" />
              <span>Contact Me</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Clean Circular Portrait (Vertically Aligned) */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.06 }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Clean Circular Portrait with subtle shadow and no visible border */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-md bg-[#E0E0E0] flex items-center justify-center">
              {!imgError ? (
                <img
                  src={imageSources[imgIndex]}
                  alt="Sonam Yadav – Computer Engineering Student and Full Stack Developer"
                  loading="lazy"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 text-[#055C5E]">
                  <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-black/10 flex items-center justify-center shadow-xs">
                    <User className="w-8 h-8 text-[#055C5E]" />
                  </div>
                  <span className="text-sm font-mono font-bold tracking-wider text-[#1E2525]">
                    SY
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal Stats Overview Bar */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.12 }}
        className="pt-6 sm:pt-8 border-t border-black/10 grid grid-cols-2 sm:grid-cols-5 gap-4"
      >
        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#055C5E]">
            300+
          </div>
          <div className="text-xs text-[#4B5563] mt-0.5 font-medium">
            DSA Problems
          </div>
        </div>

        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#055C5E]">
            7+
          </div>
          <div className="text-xs text-[#4B5563] mt-0.5 font-medium">
            Hackathons
          </div>
        </div>

        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#055C5E]">
            4
          </div>
          <div className="text-xs text-[#4B5563] mt-0.5 font-medium">
            Key Projects
          </div>
        </div>

        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#055C5E]">
            2
          </div>
          <div className="text-xs text-[#4B5563] mt-0.5 font-medium">
            Internships
          </div>
        </div>

        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#055C5E]">
            9.5+
          </div>
          <div className="text-xs text-[#4B5563] mt-0.5 font-medium">
            Academic CGPA
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

