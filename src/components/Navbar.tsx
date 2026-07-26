import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Experience', path: '/experience' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E293B] shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <NavLink
            id="brand-logo"
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-white dark:bg-[#F8FAFC] dark:text-[#0F172A] flex items-center justify-center font-bold text-xs tracking-wider shadow-xs transition-transform duration-200 group-hover:scale-105">
              SY
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#0F766E] dark:group-hover:text-[#0F766E] transition-colors">
                Sonam Yadav
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#475569] dark:text-[#CBD5E1] font-mono">
                Software Engineer
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none ${
                    isActive
                      ? 'text-[#0F766E] dark:text-[#0F766E] font-semibold'
                      : 'text-[#475569] hover:text-[#0F172A] dark:text-[#CBD5E1] dark:hover:text-[#F8FAFC]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#0F766E] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              className="ml-3 p-2 rounded-lg text-[#475569] hover:text-[#0F172A] dark:text-[#CBD5E1] dark:hover:text-[#F8FAFC] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937] transition-colors focus:outline-none cursor-pointer"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#475569]" />
              )}
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              className="p-2 rounded-lg text-[#475569] hover:text-[#0F172A] dark:text-[#CBD5E1] dark:hover:text-[#F8FAFC] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937] transition-colors focus:outline-none cursor-pointer"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#475569]" />
              )}
            </button>

            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#0F172A] dark:text-[#F8FAFC] hover:bg-[#F1F5F9] dark:hover:bg-[#1F2937] transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#111827] px-4 pt-2 pb-4 shadow-md overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#0F766E]/10 text-[#0F766E] font-semibold'
                        : 'text-[#475569] hover:bg-[#F8FAFC] dark:text-[#CBD5E1] dark:hover:bg-[#1F2937]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
