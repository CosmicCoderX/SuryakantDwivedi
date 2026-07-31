import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Terminal } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const iconClass = "group relative p-2.5 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08] text-white/50 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]";
  const iconBg = <div className="absolute inset-0 rounded-full bg-white/[0.03] border border-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-black py-12 px-6 sm:px-12 lg:px-16 z-20 relative text-white"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/[0.04] pt-8">

        {/* Left: Copyright */}
        <div className="text-white/30 text-xs font-medium tracking-wide">
          © {new Date().getFullYear()} Suryakant Dwivedi
        </div>

        {/* Center: Tech Stack */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center text-[10px] text-white/20 tracking-[0.2em] font-medium">
          <span className="opacity-70">Built with</span>
          <span className="text-white/40">React</span> •
          <span className="text-white/40">Three.js</span> •
          <span className="text-white/40">Framer Motion</span> •
          <span className="text-white/40">Vite</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/CosmicCoderX" target="_blank" rel="noopener noreferrer" className={iconClass}>
            {iconBg}
            <GithubIcon size={18} className="relative z-10" />
          </a>

          <a href="https://www.linkedin.com/in/suryakant-dwivedi-837415236/" target="_blank" rel="noopener noreferrer" className={iconClass}>
            {iconBg}
            <LinkedinIcon size={18} className="relative z-10" />
          </a>

          <a href="https://leetcode.com/u/LuffyX56/" target="_blank" rel="noopener noreferrer" className={iconClass}>
            {iconBg}
            <Code2 size={18} className="relative z-10" />
          </a>

          <a href="mailto:suryakantdwivedi8493@gmail.com" className={iconClass}>
            {iconBg}
            <Mail size={18} className="relative z-10" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
