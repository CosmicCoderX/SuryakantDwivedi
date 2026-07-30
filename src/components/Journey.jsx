import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

const MILESTONES = [
  {
    id: 'education',
    emojiIcon: '🎓',
    date: '2023 — Present',
    title: 'B.Tech in Computer Science',
    subtitle: 'G.L Bajaj Institute of Technology and Management',
    highlights: [
      'Focused on Data Structures & Algorithms',
      'Built modern frontend & full-stack projects',
      'Started participating in hackathons',
    ],
    tags: ['Java', 'React', 'Learning'],
    side: 'left',
  },
  {
    id: 'legalsangam',
    emojiIcon: '⚖️',
    date: '2025',
    title: 'LegalSangam',
    subtitle: 'AI Legal Services Platform',
    achievements: [
      '🏆 O to 1 Hackathon – IIIT Delhi Finalist',
      '🏆 Mind Flayers Hackathon – Top 5',
      '🏆 HackWithUttarPradesh Finalist',
    ],
    description: 'Designed an AI-powered legal platform using React, TypeScript, Firebase, Botpress, and WebRTC to improve legal accessibility.',
    tags: ['React', 'Firebase', 'AI', 'Hackathon'],
    side: 'right',
  },
  {
    id: 'ideastorm',
    emojiIcon: '🅿️',
    date: '2025',
    title: 'IdeaStorm',
    subtitle: 'IIT Roorkee Finalist',
    description: 'Built Parkik, a smart parking management platform featuring real-time slot tracking, reservations, and vehicle safety features.',
    tags: ['IoT', 'Web', 'Innovation'],
    side: 'left',
  },
  {
    id: 'hackathons',
    emojiIcon: '🚀',
    date: '2024–2026',
    title: 'Hackathons & Competitive Programming',
    description: 'Participated in more than 10 hackathons while continuously improving problem-solving skills and building products under strict deadlines.',
    highlights: [
      'HackHatch • SAP Hackfest • Adobe India Hackathon',
      'EY Techathon • HACKHAZARDS',
      '10+ Hackathons | 400+ DSA Problems Solved',
    ],
    tags: ['Problem Solving', 'Innovation', 'Teamwork'],
    side: 'right',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function Journey() {
  return (
    <section id="journey" className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pointer-events-none">
      {/* Dark backdrop overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl -z-10" />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-[720px] mx-auto mb-16 sm:mb-24 space-y-4"
      >
        {/* Small Badge */}
        <div className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-emerald-300 bg-white/5 border border-white/10 backdrop-blur-md shadow-md uppercase">
          <span>🎓 JOURNEY & MILESTONES</span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          From Learning to Building Real Products
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/65 font-normal leading-relaxed">
          Every project, hackathon, and challenge has shaped my journey as a developer. Here's a timeline of the milestones that define my growth.
        </p>
      </motion.div>

      {/* VERTICAL TIMELINE CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative w-full max-w-5xl mx-auto"
      >
        {/* GLOWING CENTER TIMELINE LINE (Desktop center, Mobile left) */}
        <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-emerald-500/70 via-white/30 to-emerald-500/70 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] z-0" />

        <div className="space-y-12 sm:space-y-16 relative z-10">
          {MILESTONES.map((item, index) => {
            const isLeft = item.side === 'left';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* GLOWING TIMELINE NODE */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-neutral-900 border-2 border-emerald-400/80 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(34,197,94,0.6)] z-20 group-hover:scale-110 transition-transform">
                  <span>{item.emojiIcon}</span>
                </div>

                {/* CARD POSITIONING (LEFT or RIGHT on desktop, full width on mobile) */}
                <div
                  className={`pl-16 lg:pl-0 ${
                    isLeft
                      ? 'lg:pr-12 lg:text-right lg:col-start-1'
                      : 'lg:pl-12 lg:text-left lg:col-start-2'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="interactive group rounded-[28px] p-7 sm:p-8 transition-all duration-300 text-left"
                    style={{
                      backgroundColor: 'rgba(18, 18, 18, 0.55)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-emerald-300 mb-4 backdrop-blur-md">
                      <Calendar size={13} />
                      <span>{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    {item.subtitle && (
                      <p className="text-sm font-semibold text-white/80 mb-3">
                        {item.subtitle}
                      </p>
                    )}

                    {/* Achievements List (if present) */}
                    {item.achievements && (
                      <div className="space-y-1.5 mb-4 py-2 px-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        {item.achievements.map((ach) => (
                          <div key={ach} className="text-xs sm:text-sm font-medium text-amber-200">
                            {ach}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Description Paragraph */}
                    {item.description && (
                      <p className="text-sm text-white/65 leading-relaxed font-normal mb-4">
                        {item.description}
                      </p>
                    )}

                    {/* Highlights List (if present) */}
                    {item.highlights && (
                      <div className="space-y-1.5 mb-4">
                        {item.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-white/75">
                            <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80 group-hover:scale-105 group-hover:bg-white/10 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
