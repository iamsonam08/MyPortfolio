import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle header border on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-[#EFEFEF]/95 backdrop-blur-md ${
        scrolled
          ? 'border-b border-black/10 shadow-xs'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <NavLink
            id="brand-logo"
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-md bg-[#055C5E] text-[#FFFFFF] flex items-center justify-center font-bold text-xs tracking-tight shadow-xs">
              SY
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[#1E2525] group-hover:text-[#F2B64E] transition-colors">
              Sonam Yadav
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#F2B64E] font-semibold'
                      : 'text-[#1E2525] hover:text-[#F2B64E]'
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="relative inline-flex items-center justify-center">
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F2B64E] rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile & Tablet Controls */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md text-[#1E2525] hover:bg-black/5 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />

            <motion.div
              id="mobile-menu-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[260px] bg-[#FFFFFF] z-50 p-5 shadow-xl flex flex-col justify-between border-l border-black/10 lg:hidden"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-semibold text-xs tracking-wide uppercase text-[#055C5E]">
                    Navigation
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-md text-[#1E2525] hover:bg-black/5 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive
                            ? 'bg-[#055C5E]/10 text-[#055C5E] font-semibold border-l-2 border-[#F2B64E]'
                            : 'text-[#1E2525] hover:text-[#F2B64E] hover:bg-[#EFEFEF]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
