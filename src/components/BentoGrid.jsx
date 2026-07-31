import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { Trophy, MapPin, Globe, Briefcase, CheckCircle2 } from 'lucide-react';

const Noise = () => (
  <div 
    className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay z-0" 
    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
  />
);

const BentoCard = ({ children, className = '', index = 0 }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[28px] p-6 sm:p-8 transition-all duration-500 group ${className}`}
      style={{
        backgroundColor: 'rgba(18, 18, 18, 0.35)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Noise />
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[28px] z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      
      {/* Subtle border glow and brighten on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-500 pointer-events-none z-0" />
      <div className="absolute inset-0 rounded-[28px] border border-white/0 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};


// --- Card 1: Developer Snapshot (Counters) ---
const Counter = ({ value, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        const controls = animate(0, value, {
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          onUpdate(latest) { setCount(Math.floor(latest)); }
        });
        return () => controls.stop();
      }, delay * 1000);
    }
  }, [isInView, value, delay]);

  return <span ref={ref}>{count}</span>;
};

const CardSnapshot = () => (
  <div className="flex flex-col h-full justify-between gap-6">
    <div>
      <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-1">Developer Snapshot</h3>
      <p className="text-lg font-medium text-white tracking-tight">Proof of Work</p>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {[
        { value: 400, label: 'Problems Solved', suffix: '+' },
        { value: 8, label: 'Projects', suffix: '+' },
        { value: 10, label: 'Hackathons', suffix: '+' }
      ].map((item, i) => (
        <div key={i} className="flex flex-col relative group/counter">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tabular-nums tracking-tighter">
            <Counter value={item.value} delay={i * 0.2} />{item.suffix}
          </span>
          <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: 'easeOut' }}
              className="h-full bg-emerald-400 rounded-full"
            />
          </div>
          <span className="text-[10px] sm:text-xs text-white/50 font-medium leading-tight uppercase tracking-wider">{item.label}</span>
        </div>
      ))}
    </div>
    <div className="mt-auto pt-4 border-t border-white/5">
      <p className="text-xs text-white/40 font-medium flex items-center gap-2">
        <CheckCircle2 size={14} className="text-emerald-500" />
        Solved on LeetCode & CodeChef
      </p>
    </div>
  </div>
);


// --- Card 2: Tech Stack (Icon Cloud) ---
const TECH_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><path d="M7 16c2 1 6 1 8 0M6 19c3 1 8 1 11 0M12 2v6M9 5c1-1 2-2 3-2s2 1 3 2" /><path d="M5 12c3 2 10 2 13 0-1 4-6 6-13 0z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><path d="M12 2C8 2 8 3.5 8 5v2h8V5c0-1.5 0-3-4-3zM8 7v4c0 1.5 1.5 3 4 3s4-1.5 4-3V7" /><path d="M12 22c4 0 4-1.5 4-3v-2H8v2c0 1.5 0 3 4 3zM16 17v-4c0-1.5-1.5-3-4-3s-4 1.5-4 3v4" /><circle cx="10" cy="4.5" r="0.8" fill="currentColor" /><circle cx="14" cy="19.5" r="0.8" fill="currentColor" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><circle cx="12" cy="12" r="9" /><path d="M9 16V8l8 9.5" /><path d="M16 8v4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><path d="M3.89 15.67L8.25 3.55a.8.8 0 0 1 1.5.08l2.25 9.17" /><path d="M12.8 9.5l2.1-4.1a.8.8 0 0 1 1.45.05l3.75 11.22L12 21.5 3.89 15.67z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" /><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9v2a2 2 0 0 1-2 2H8" /><path d="M6 9v6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><path d="M4 4h16v8H12l-8 8V4z" /><path d="M12 12l8 8v-8h-8z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 sm:w-8 sm:h-8"><polygon points="12 2 22 7.5 22 17.5 12 23 2 17.5 2 7.5 12 2" /><polyline points="12 2 12 12.5 22 7.5" /><polyline points="12 12.5 2 7.5" /></svg>,
];

const CardTechStack = () => {
  const icons = [
    { el: TECH_ICONS[0], x: '15%', y: '30%', delay: 0 },
    { el: TECH_ICONS[1], x: '35%', y: '20%', delay: 0.1 },
    { el: TECH_ICONS[2], x: '65%', y: '25%', delay: 0.2 },
    { el: TECH_ICONS[3], x: '85%', y: '35%', delay: 0.3 },
    { el: TECH_ICONS[4], x: '20%', y: '65%', delay: 0.4 },
    { el: TECH_ICONS[5], x: '50%', y: '45%', delay: 0.5 },
    { el: TECH_ICONS[6], x: '75%', y: '55%', delay: 0.6 },
    { el: TECH_ICONS[7], x: '15%', y: '85%', delay: 0.7 },
    { el: TECH_ICONS[8], x: '45%', y: '75%', delay: 0.8 },
    { el: TECH_ICONS[9], x: '65%', y: '85%', delay: 0.9 },
    { el: TECH_ICONS[10], x: '85%', y: '75%', delay: 1.0 },
    { el: TECH_ICONS[11], x: '40%', y: '95%', delay: 1.1 },
  ];

  return (
    <div className="flex flex-col h-[280px] sm:h-full justify-between gap-6 relative">
      <div className="z-10 pointer-events-none">
        <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-1">Tech Stack</h3>
        <p className="text-lg font-medium text-white tracking-tight">Core Arsenal</p>
      </div>
      
      <div className="absolute inset-0 mt-16 z-0">
         <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 stroke-white/20" strokeWidth="1" strokeDasharray="4 4" fill="none">
            <motion.path 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
              d="M 15% 30% L 35% 20% L 50% 45% L 65% 25% L 85% 35% M 50% 45% L 20% 65% M 50% 45% L 75% 55% M 45% 75% L 65% 85%" 
            />
         </svg>
        
        {icons.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.5, type: "spring" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-crosshair group/icon"
            style={{ left: item.x, top: item.y }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3 + (i % 2), delay: i * 0.2, ease: "easeInOut" }}
              whileHover={{ scale: 1.3, color: 'rgba(255,255,255,1)', filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.8))' }}
              className="text-white/40 transition-colors duration-300 relative"
            >
              {item.el}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


// --- Card 3: Hackathon Highlights ---
const CardHackathons = () => (
  <div className="flex flex-col h-full gap-4">
    <div>
      <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-1">Highlights</h3>
      <p className="text-lg font-medium text-white tracking-tight">Milestones</p>
    </div>
    <div className="flex flex-col gap-5 mt-auto relative pl-4 pb-2">
      <div className="absolute left-1.5 top-2 bottom-2 w-[1px] bg-white/5">
        <motion.div 
          initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full bg-emerald-500/50"
        />
      </div>
      
      {[
        { title: 'IIIT Delhi', subtitle: 'Finalist' },
        { title: 'IIT Roorkee', subtitle: 'Finalist' },
        { title: 'HackWithUP', subtitle: 'Top 100' },
      ].map((item, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.2 }}
          className="relative flex flex-col group/timeline"
        >
          <div className="absolute -left-[20px] top-1.5 h-2 w-2 rounded-full border border-emerald-500/50 bg-black group-hover/timeline:bg-emerald-400 group-hover/timeline:border-emerald-400 transition-colors duration-300" />
          <span className="text-sm font-medium text-white/90">{item.title}</span>
          <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">{item.subtitle}</span>
        </motion.div>
      ))}
    </div>
  </div>
);


// --- Card 4: Currently Building ---
const CardBuilding = () => {
  const items = [
    { title: 'AI Applications', status: 'Building', color: 'bg-emerald-500' },
    { title: 'Motion UI', status: 'Exploring', color: 'bg-blue-500' },
    { title: 'Full Stack', status: 'Active', color: 'bg-purple-500' },
  ];
  
  return (
    <div className="flex flex-col h-full gap-4 justify-between">
      <div>
        <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-1">Current Focus</h3>
        <p className="text-lg font-medium text-white tracking-tight">Active Projects</p>
      </div>
      <div className="flex flex-col gap-2.5 mt-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.04)' }}
            className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300"
          >
            <span className="text-sm font-medium text-white/80">{item.title}</span>
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">{item.status}</span>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${item.color} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${item.color}`}></span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


// --- Card 5: Live Code (VS Code Editor) ---
const CardCode = () => {
  const codeString = `const developer = {
  name: "Suryakant",
  building: "Modern Web Apps",
  status: "Available"
}`;
  
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('idle');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let i = 0;
    setDisplayedText('');
    setPhase('typing');
    
    const interval = setInterval(() => {
      setDisplayedText(codeString.slice(0, i + 1));
      i++;
      if (i >= codeString.length) {
        clearInterval(interval);
        setPhase('compiling');
        setTimeout(() => setPhase('terminal'), 800);
      }
    }, 40);
    
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col h-full relative overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#2d2d2d] border-b border-white/5 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[10px] text-white/40 font-medium">developer.js</span>
        <div className="w-8" />
      </div>

      {/* Editor Body */}
      <div className="flex flex-1 relative z-10 pb-16">
        {/* Line Numbers */}
        <div className="w-8 bg-[#1e1e1e] border-r border-white/5 py-3 flex flex-col items-center text-[10px] text-white/20 font-mono">
          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-3 font-mono text-[11px] sm:text-xs leading-[1.7] relative">
          <pre className="text-[#d4d4d4] m-0 whitespace-pre-wrap">
            {displayedText.split('\n').map((line, idx) => {
               // Use single quotes for class attributes to avoid colliding with the double-quote regex
               let hl = line.replace('const ', "<span class='text-[#569cd6]'>const </span>")
                            .replace('developer', "<span class='text-[#4fc1ff]'>developer</span>")
                            .replace('name:', "<span class='text-[#9cdcfe]'>name:</span>")
                            .replace('building:', "<span class='text-[#9cdcfe]'>building:</span>")
                            .replace('status:', "<span class='text-[#9cdcfe]'>status:</span>")
                            // This regex will now only match the double quotes in the actual code string
                            .replace(/"(.*?)"/g, "<span class='text-[#ce9178]'>\"$1\"</span>");
               return <div key={idx} dangerouslySetInnerHTML={{ __html: hl }} />;
            })}
          </pre>
          {(phase === 'typing' || phase === 'compiling') && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="absolute inline-block w-1.5 h-3.5 bg-[#d4d4d4] ml-1 mt-1"
              style={{ top: 'auto', bottom: 'auto' }}
            />
          )}
        </div>
      </div>

      {/* Terminal Drawer */}
      <AnimatePresence>
        {phase === 'terminal' && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="absolute bottom-0 left-0 w-full bg-[#1e1e1e] border-t border-white/10 flex flex-col font-mono text-[10px] sm:text-[11px] p-2 sm:p-3 z-30"
          >
            <div className="flex items-center justify-between text-white/40 mb-2">
              <span className="font-semibold tracking-wider">TERMINAL</span>
            </div>
            <div className="text-white/80 flex items-center gap-2">
              <span className="text-[#27c93f]">➜</span> <span className="text-[#4fc1ff]">portfolio</span> npm run dev
            </div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-[#d4d4d4] mt-1.5"
            >
               ready in 240ms.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="text-[#27c93f] mt-1.5 flex items-center gap-1.5"
            >
               <CheckCircle2 size={12} /> Build successful
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- Card 6: Availability (Status Widget) ---
const CardAvailability = () => (
  <div className="flex flex-col h-full gap-4">
    <div>
      <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-1">Status</h3>
      <p className="text-lg font-medium text-white tracking-tight">Availability</p>
    </div>
    
    <div className="flex flex-col gap-2.5 mt-auto">
      <div className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-white/40" />
          <span className="text-sm font-medium text-white/80">Greater Noida, India</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <Globe size={16} className="text-blue-400" />
          <span className="text-sm font-medium text-white/80">Open to Remote</span>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
        <div className="flex items-center gap-3">
          <Briefcase size={16} className="text-emerald-400" />
          <span className="text-sm font-medium text-white/90">Open for Internships</span>
        </div>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
      </div>
    </div>
    
    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
      <span className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Response Time</span>
      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 font-medium">
         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
         &lt; 24 Hours
      </span>
    </div>
  </div>
);


// --- Main Bento Grid Layout ---
export default function BentoGrid() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-16 max-w-[1280px] mx-auto pointer-events-none mb-12 sm:mb-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        
        {/* Row 1 */}
        {/* Large Card 1 - takes 2 cols on lg desktop */}
        <BentoCard index={1} className="lg:col-span-2 md:col-span-2">
          <CardSnapshot />
        </BentoCard>

        {/* Small Card 3 */}
        <BentoCard index={2}>
          <CardHackathons />
        </BentoCard>

        {/* Small Card 6 */}
        <BentoCard index={3}>
          <CardAvailability />
        </BentoCard>

        {/* Row 2 */}
        {/* Small Card 4 */}
        <BentoCard index={4}>
          <CardBuilding />
        </BentoCard>

        {/* Small Card 5 */}
        <BentoCard index={5} className="!p-0 border-none">
          {/* CardCode brings its own styling to look like VS Code, so we remove padding from BentoCard wrapper */}
          <div className="h-full w-full p-0">
             <CardCode />
          </div>
        </BentoCard>

        {/* Large Card 2 - takes 2 cols on lg desktop */}
        <BentoCard index={6} className="lg:col-span-2 md:col-span-2">
          <CardTechStack />
        </BentoCard>

      </div>
    </section>
  );
}
