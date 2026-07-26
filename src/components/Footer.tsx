import { NavLink } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="w-full border-t border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#0B1220] text-[#475569] dark:text-[#CBD5E1] mt-auto transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Column: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                Sonam Yadav
              </span>
              <span className="text-[#E2E8F0] dark:text-[#1E293B]">•</span>
              <span className="text-xs text-[#475569] dark:text-[#CBD5E1] font-mono">
                Senior Engineering Portfolio
              </span>
            </div>
            <p className="text-xs text-[#475569]/80 dark:text-[#CBD5E1]/70">
              © {currentYear} Sonam Yadav. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
            <NavLink
              to="/"
              className="hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/certifications"
              className="hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
            >
              Certifications
            </NavLink>
            <NavLink
              to="/experience"
              className="hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
            >
              Experience
            </NavLink>
            <NavLink
              to="/resume"
              className="hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
            >
              Contact
            </NavLink>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] text-[11px] font-mono text-[#475569] dark:text-[#CBD5E1] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Design System Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
