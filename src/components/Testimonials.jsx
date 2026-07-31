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
    linkedin: 'https://www.linkedin.com/in/eklavyaverma18/',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQEPpumhlCERYQ/profile-displayphoto-crop_800_800/B56ZvFGC11HsAI-/0/1768538255998?e=1787184000&v=beta&t=MLA-b-EQE_nRFfyz3h1w0F3polIjlNKq4p0eVIF67uA',
  },
  {
    id: 'prashant',
    name: 'Prashant Gupta',
    role: 'Hackathon Teammate',
    rating: 5,
    review:
      'Suryakant is dependable, collaborative, and always willing to help the team. His ability to quickly adapt to new technologies made our hackathon projects more polished and efficient.',
    linkedin: 'https://www.linkedin.com/in/prashant-gupta-0839302b1/',
    avatar: 'https://avatars.githubusercontent.com/u/182350939?v=4',
  },
  {
    id: 'prem',
    name: 'Dr. Prem Chand Vashist',
    role: 'HOD of IT',
    rating: 4,
    review:
      'Suryakant possesses a strong aptitude for grasping new technologies and applying them to real-world problems. He consistently showed dedication, improved his technical skills, and delivered polished work during our sessions.',
    linkedin: 'https://www.linkedin.com/in/drpremchandvashist/',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQH3JQ1SGrA6iw/profile-displayphoto-crop_800_800/B56ZyTxsryI0AI-/0/1772005808404?e=1787184000&v=beta&t=88PUgSc55D0bhqtdn85HBNT92U5hfBMoy0B6ocouQL0',
  },
  {
    id: 'debjit',
    name: 'Debjit Mohapatra',
    role: 'Technical Mentor',
    rating: 5,
    review:
      "One of Suryakant's strengths is his eagerness to learn and build. He takes feedback positively, implements suggestions quickly, and consistently delivers high-quality work.",
    linkedin: 'https://www.linkedin.com/in/debjit-mohapatra-94875a232/',
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEJMZ0JOC-43g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718634838844?e=1787184000&v=beta&t=xNSDDu6JS_UzPzb2imKaUtWtAvn60K4V7WRqJ8KCpUc',
  },
  {
    id: 'satyam',
    name: 'Satyam Jaiswal',
    role: 'Problem Solving Partner',
    rating: 5,
    review:
      "Practicing DSA together has shown Suryakant's persistence and analytical thinking. He enjoys tackling challenging problems and is always motivated to improve.",
    linkedin: 'https://www.linkedin.com/in/satyamcodes136/',
    avatar: 'https://media.licdn.com/dms/image/v2/D5635AQGymoX3XZKLhw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1709652085927?e=1786100400&v=beta&t=CZKZAsqqvLb-a4EbEd5E8qexHdY9n7w91AsD7GiX66w',
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
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-16 max-w-[1280px] mx-auto pointer-events-none">
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

        {/* Main Heading (52–60px scale) */}
        <h2
          className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1]"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          What Collaborators & Mentors Say
        </h2>

        {/* Subtitle (18–20px scale) */}
        <p className="text-base sm:text-lg text-white/65 font-normal leading-relaxed">
          Feedback from hackathon teammates, academic mentors, and problem-solving partners.
        </p>
      </motion.div>

      {/* 5-CARD GRID LAYOUT (Row 1: 3 cards, Row 2: 2 centered cards) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10"
      >
        {TESTIMONIALS.map((item, idx) => {
          const spanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`interactive group relative rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 ${spanClass}`}
              style={{
                backgroundColor: 'rgba(18, 18, 20, 0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
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
                <p className="text-base text-white/80 leading-relaxed font-normal mb-8 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Bottom Row: Profile Avatar (enlarges on hover), Details & LinkedIn Link */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 group/author"
                >
                  {/* Avatar Picture with Hover Zoom */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 group-hover/author:border-emerald-400 transition-colors shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover/author:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover/author:text-emerald-300 transition-colors">
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
