import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = ['Home', 'Skills', 'Projects', 'Journey', 'Testimonials', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="interactive w-full max-w-6xl rounded-full transition-all duration-300 glass-panel"
        style={{
          backgroundColor: scrolled ? 'rgba(10, 10, 14, 0.85)' : 'rgba(18, 18, 22, 0.45)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : '0 8px 24px rgba(0, 0, 0, 0.3)',
          padding: '0.75rem 1.5rem',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1 group transition-transform duration-300 hover:scale-105"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Suryakant</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Right: Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item, idx) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    idx === 0
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pt-4 pb-2 border-t border-white/10 mt-3"
            >
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
