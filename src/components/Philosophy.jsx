import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Rocket } from 'lucide-react';

const PHILOSOPHY_CARDS = [
  {
    id: 'quality',
    icon: Sparkles,
    emojiIcon: '✨',
    title: 'Quality Focus',
    description: 'I prioritize clean, maintainable, and scalable code while paying close attention to performance, accessibility, and user experience.',
    tags: ['Clean Code', 'Scalable', 'Performance'],
    accentGlow: 'from-amber-500/10 via-purple-500/5 to-transparent',
  },
  {
    id: 'communication',
    icon: MessageSquare,
    emojiIcon: '💬',
    title: 'Clear Communication',
    description: 'I believe transparent communication and active collaboration create better products and stronger teams.',
    tags: ['Teamwork', 'Communication', 'Ownership'],
    accentGlow: 'from-blue-500/10 via-emerald-500/5 to-transparent',
  },
  {
    id: 'delivery',
    icon: Rocket,
    emojiIcon: '🚀',
    title: 'On-Time Delivery',
    description: 'I enjoy solving problems under pressure and delivering high-quality solutions within deadlines without compromising quality.',
    tags: ['Reliable', 'Deadline Driven', 'Problem Solver'],
    accentGlow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 max-w-[1280px] mx-auto pointer-events-none">
      {/* Dark backdrop overlay for readability */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] rounded-3xl -z-10" />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-[700px] mx-auto mb-16 sm:mb-20 space-y-4"
      >
        {/* Small Badge */}
        <div className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-300 bg-white/5 border border-white/10 backdrop-blur-md shadow-md uppercase">
          <span>💡 WORK PHILOSOPHY</span>
        </div>

        {/* Main Heading (52–60px scale) */}
        <h2
          className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1]"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          How I Work
        </h2>

        {/* Subtitle (18–20px scale) */}
        <p className="text-base sm:text-lg text-white/65 font-normal leading-relaxed">
          I believe great software is built through quality engineering, clear communication, and consistent delivery.
        </p>
      </motion.div>

      {/* 3 EQUAL HEIGHT CARDS GRID IN SINGLE HORIZONTAL ROW ON DESKTOP */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        {PHILOSOPHY_CARDS.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="interactive group relative rounded-[28px] p-8 flex flex-col justify-between min-h-[270px] transition-all duration-300 hover:border-white/25"
            style={{
              backgroundColor: 'rgba(18, 18, 20, 0.55)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Soft Ambient Inner Glow on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-b ${card.accentGlow} rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div>
              {/* Icon Container */}
              <div className="relative mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl group-hover:scale-105 group-hover:border-white/25 transition-all duration-300 shadow-inner">
                <span>{card.emojiIcon}</span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-base text-white/65 leading-relaxed font-normal mb-8">
                {card.description}
              </p>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80 group-hover:bg-white/10 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
