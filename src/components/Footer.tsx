import { NavLink } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="w-full border-t border-black/10 bg-[#EFEFEF] text-[#4B5563] mt-auto"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div>
          <span className="font-bold text-[#1E2525]">Sonam Yadav</span> © {currentYear} • Full Stack & AI Engineer
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
          <NavLink to="/" className="hover:text-[#055C5E] transition-colors">
            Home
          </NavLink>
          <NavLink to="/projects" className="hover:text-[#055C5E] transition-colors">
            Projects
          </NavLink>
          <NavLink to="/skills" className="hover:text-[#055C5E] transition-colors">
            Skills
          </NavLink>
          <NavLink to="/experience" className="hover:text-[#055C5E] transition-colors">
            Experience
          </NavLink>
          <NavLink to="/certifications" className="hover:text-[#055C5E] transition-colors">
            Certifications
          </NavLink>
          <NavLink to="/about" className="hover:text-[#055C5E] transition-colors">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#055C5E] transition-colors">
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
