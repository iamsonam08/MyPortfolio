import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about-section" className="bg-[#EFEFEF] py-2 space-y-4">
      {/* Section Header */}
      <div>
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#055C5E] block mb-2">
          ABOUT
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#1E2525] lg:leading-tight">
          About Me
        </h2>
      </div>

      {/* Body Text */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="text-sm sm:text-base lg:text-lg text-[#1E2525]/90 leading-[1.8] max-w-3xl space-y-4"
      >
        <p>
          I'm a third-year Computer Engineering student with a strong interest in Full Stack Development and Artificial Intelligence.
        </p>
        <p>
          I enjoy building practical software that solves real-world problems instead of working only on academic assignments. Through projects, internships, hackathons, and 300+ DSA problems, I've strengthened my problem-solving skills while continuously improving as a developer.
        </p>
        <p>
          My goal is to become a Software Engineer who builds reliable, user-focused, and impactful applications using modern technologies and AI.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

