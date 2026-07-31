import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Terminal, Database, Sparkles, GitBranch } from 'lucide-react';

const SKILLS_CARDS = [
  {
    id: 'frontend',
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building responsive, fast and modern web applications with reusable components and smooth user experiences.',
    pills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'problem-solving',
    icon: Terminal,
    title: 'Problem Solving',
    description: 'Strong understanding of Data Structures & Algorithms with experience solving coding challenges and competitive programming problems.',
    pills: ['Java', 'Python', 'DSA', 'LeetCode', 'Codeforces'],
  },
  {
    id: 'backend',
    icon: Database,
    title: 'Backend & Databases',
    description: 'Building APIs, managing databases and integrating backend services for scalable applications.',
    pills: ['FastAPI', 'Node.js', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    id: 'interactive-ui',
    icon: Sparkles,
    title: 'Interactive UI',
    description: 'Creating engaging user experiences with smooth animations, premium interactions and cinematic scrolling.',
    pills: ['GSAP', 'Framer Motion', 'Three.js', 'Lenis'],
  },
  {
    id: 'workflow',
    icon: GitBranch,
    title: 'Development Workflow',
    description: 'Version control, collaboration and deployment using modern development tools and Git-based workflows.',
    pills: ['Git', 'GitHub', 'Vercel', 'VS Code'],
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

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-16 max-w-[1280px] mx-auto pointer-events-none">
      {/* Dark overlay backdrop for readability */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] rounded-3xl -z-10" />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-[700px] mx-auto mb-16 sm:mb-20 space-y-4"
      >
        {/* Small Label */}
        <div className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-300 bg-white/5 border border-white/10 backdrop-blur-md shadow-md uppercase">
          <span>⚡ SKILLS & EXPERTISE</span>
        </div>

        {/* Main Heading (52–60px scale) */}
        <h2
          className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1]"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          Technologies I Use to Build Modern Digital Products
        </h2>

        {/* Subtitle (18–20px scale) */}
        <p className="text-base sm:text-lg text-white/65 font-normal leading-relaxed">
          From responsive frontend applications to AI-powered solutions and problem solving, I enjoy learning and building with technologies that create real impact.
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
        {SKILLS_CARDS.map((card, idx) => {
          const Icon = card.icon;
          const spanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

          return (
            <motion.div
              key={card.id}
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
              {/* Subtle Icon Glow Accent on Hover */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-2xl blur-xl group-hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />

              <div>
                {/* Icon Container */}
                <div className="relative mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-all duration-300 shadow-inner">
                  <Icon size={25} />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-white/65 leading-relaxed font-normal mb-8">
                  {card.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
                {card.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80 group-hover:bg-white/10 transition-all duration-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
