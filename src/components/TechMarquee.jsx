import React from 'react';
import { motion } from 'framer-motion';

// Crisp Monochrome SVG Tech Icons
const MONOCHROME_ICONS = [
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Java',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M7 16c2 1 6 1 8 0M6 19c3 1 8 1 11 0M12 2v6M9 5c1-1 2-2 3-2s2 1 3 2" />
        <path d="M5 12c3 2 10 2 13 0-1 4-6 6-13 0z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M12 2C8 2 8 3.5 8 5v2h8V5c0-1.5 0-3-4-3zM8 7v4c0 1.5 1.5 3 4 3s4-1.5 4-3V7" />
        <path d="M12 22c4 0 4-1.5 4-3v-2H8v2c0 1.5 0 3 4 3zM16 17v-4c0-1.5-1.5-3-4-3s-4 1.5-4 3v4" />
        <circle cx="10" cy="4.5" r="0.8" fill="currentColor" />
        <circle cx="14" cy="19.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M7 9h6M10 9v9M14 13c1 0 3 .5 3 2s-1.5 2-3 2-3-.5-3-2M14 13c1 0 3-.5 3-2s-1.5-2-3-2" />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M3.89 15.67L8.25 3.55a.8.8 0 0 1 1.5.08l2.25 9.17" />
        <path d="M12.8 9.5l2.1-4.1a.8.8 0 0 1 1.45.05l3.75 11.22L12 21.5 3.89 15.67z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    name: 'Git',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <circle cx="12" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <path d="M18 9v2a2 2 0 0 1-2 2H8" />
        <path d="M6 9v6" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M4 16c1-3 5-5 10-5s7 2 8 5c-1 3-5 5-10 5s-7-2-8-5z" />
        <rect x="6" y="8" width="3" height="3" rx="0.5" />
        <rect x="10" y="8" width="3" height="3" rx="0.5" />
        <rect x="14" y="8" width="3" height="3" rx="0.5" />
        <rect x="10" y="4" width="3" height="3" rx="0.5" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <polygon points="12 2 22 7.5 22 17.5 12 23 2 17.5 2 7.5 12 2" />
        <polyline points="12 2 12 12.5 22 7.5" />
        <polyline points="12 12.5 2 7.5" />
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <path d="M4 4h16v8H12l-8 8V4z" />
        <path d="M12 12l8 8v-8h-8z" />
      </svg>
    ),
  },
  {
    name: 'GSAP',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 16V8l8 9.5" />
        <path d="M16 8v4" />
      </svg>
    ),
  },
];

export default function TechMarquee() {
  return (
    <section className="relative w-full py-16 sm:py-20 max-w-[1280px] mx-auto pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="interactive text-center space-y-8"
      >
        {/* Label */}
        <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Currently Exploring & Toolstack
        </div>

        {/* Infinite Horizontal Monochrome Marquee */}
        <div className="w-full overflow-hidden relative py-4">
          {/* Left and Right Fade Edge Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-slow flex items-center space-x-12 sm:space-x-16">
            {/* Repeat list to guarantee seamless infinite loop */}
            {[...MONOCHROME_ICONS, ...MONOCHROME_ICONS, ...MONOCHROME_ICONS].map((icon, idx) => (
              <div
                key={`${icon.name}-${idx}`}
                className="text-white/40 hover:text-white/90 transition-colors duration-300 transform hover:scale-115 shrink-0 cursor-pointer"
                title={icon.name}
              >
                {icon.svg}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
