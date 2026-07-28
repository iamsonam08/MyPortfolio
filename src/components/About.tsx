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
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#1E2525] lg:leading-tight mb-2">
          About Me
        </h2>
        <p className="text-xs sm:text-sm text-[#5A5A5A]">
          A little about my background and interests.
        </p>
      </div>

      {/* Body Text */}
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="text-sm sm:text-base lg:text-lg text-[#1E2525]/90 leading-[1.8] max-w-3xl"
      >
        I'm a third-year Computer Engineering student with a strong interest in Full Stack Development and Artificial Intelligence. I enjoy building practical applications that solve real-world problems and continuously improving my skills through projects, internships, hackathons, and DSA.
      </motion.p>
    </section>
  );
};

export default About;

