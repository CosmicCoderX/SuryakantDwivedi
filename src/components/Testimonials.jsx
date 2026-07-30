import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

function LinkedInIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    id: 'eklavya',
    name: 'Eklavya Verma',
    role: 'Hackathon Teammate',
    rating: 5,
    review:
      'Working with Suryakant during hackathons was a great experience. He consistently approached challenges with a problem-solving mindset, contributed effectively to frontend development, and remained calm even under tight deadlines.',
    linkedin: 'https://www.linkedin.com/in/eklavya-verma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    initials: 'EV',
  },
  {
    id: 'prashant',
    name: 'Prashant Gupta',
    role: 'Hackathon Teammate',
    rating: 5,
    review:
      'Suryakant is dependable, collaborative, and always willing to help the team. His ability to quickly adapt to new technologies made our hackathon projects more polished and efficient.',
    linkedin: 'https://www.linkedin.com/in/prashant-gupta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    initials: 'PG',
  },
  {
    id: 'sohail',
    name: 'Sohail Iqbal',
    role: 'Academic Mentor',
    rating: 5,
    review:
      'Suryakant demonstrates strong curiosity and dedication toward learning modern technologies. His willingness to continuously improve and apply concepts in practical projects makes him stand out.',
    linkedin: 'https://www.linkedin.com/in/sohail-iqbal',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    initials: 'SI',
  },
  {
    id: 'shikhar',
    name: 'Shikhar Pandey',
    role: 'Technical Mentor',
    rating: 5,
    review:
      "One of Suryakant's strengths is his eagerness to learn and build. He takes feedback positively, implements suggestions quickly, and consistently delivers high-quality work.",
    linkedin: 'https://www.linkedin.com/in/shikhar-pandey',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
    initials: 'SP',
  },
  {
    id: 'satyam',
    name: 'Satyam Jaiswal',
    role: 'Problem Solving Partner',
    rating: 5,
    review:
      "Practicing DSA together has shown Suryakant's persistence and analytical thinking. He enjoys tackling challenging problems and is always motivated to improve.",
    linkedin: 'https://www.linkedin.com/in/satyam-jaiswal',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
    initials: 'SJ',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pointer-events-none">
      {/* Dark backdrop overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl -z-10" />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-[720px] mx-auto mb-16 sm:mb-20 space-y-4"
      >
        {/* Small Badge */}
        <div className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-300 bg-white/5 border border-white/10 backdrop-blur-md shadow-md uppercase">
          <span>💬 TESTIMONIALS</span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          What Collaborators & Mentors Say
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/65 font-normal leading-relaxed">
          Feedback from hackathon teammates, academic mentors, and problem-solving partners.
        </p>
      </motion.div>

      {/* 5-CARD GRID LAYOUT (Row 1: 3 cards, Row 2: 2 centered cards) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
      >
        {TESTIMONIALS.map((item, idx) => {
          // Row 1: First 3 cards take 2 of 6 cols (1/3 width each)
          // Row 2: Last 2 cards take 3 of 6 cols (1/2 width each, centered)
          const spanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`interactive group relative rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 ${spanClass}`}
              style={{
                backgroundColor: 'rgba(18, 18, 18, 0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  {/* 5 Gold Stars */}
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  <Quote size={20} className="text-white/20 group-hover:text-white/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Bottom Row: Profile Avatar, Details & LinkedIn Link */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group/author"
                >
                  {/* Avatar Picture / Initials */}
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 group-hover/author:border-emerald-400 transition-colors shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover/author:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover/author:text-emerald-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/50 font-medium">
                      {item.role}
                    </p>
                  </div>
                </a>

                {/* LinkedIn External Link Button */}
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-sm"
                  title={`Open ${item.name}'s LinkedIn Profile`}
                >
                  <LinkedInIcon size={16} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
