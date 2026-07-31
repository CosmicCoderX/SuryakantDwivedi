import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Award, Sprout, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../data/projectsData';

function GithubIcon({ size = 15, className = '' }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

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

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function getBadgeIcon(badgeType) {
  switch (badgeType) {
    case 'award':
      return <Award size={14} className="text-amber-400" />;
    case 'success':
      return <Sprout size={14} className="text-emerald-400" />;
    case 'game':
      return <Gamepad2 size={14} className="text-indigo-400" />;
    default:
      return null;
  }
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 max-w-[1280px] mx-auto pointer-events-none">
      {/* Dark backdrop overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl -z-10" />

      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-[700px] mx-auto mb-20 sm:mb-24 space-y-4"
      >
        {/* Small Label */}
        <div className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-emerald-300 bg-white/5 border border-white/10 backdrop-blur-md shadow-md uppercase">
          <span>🚀 FEATURED WORK</span>
        </div>

        {/* Main Heading (52–60px scale) */}
        <h2
          className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1]"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          Projects That Turn Ideas Into Products
        </h2>

        {/* Subtitle (18–20px scale) */}
        <p className="text-base sm:text-lg text-white/65 font-normal leading-relaxed">
          A selection of projects showcasing my expertise in full-stack development, AI, machine learning, and interactive web experiences.
        </p>
      </motion.div>

      {/* 3 ALTERNATING VERTICAL CARDS WITH INCREASED SPACING (space-y-24) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="flex flex-col space-y-20 sm:space-y-24 w-full max-w-[95%] mx-auto mb-20"
      >
        {FEATURED_PROJECTS.map((project, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="interactive group relative w-full rounded-[28px] overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: 'rgba(18, 18, 20, 0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[440px]">
                {/* IMAGE CONTAINER */}
                <div
                  className={`lg:col-span-6 relative h-64 sm:h-80 lg:h-full overflow-hidden ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                  <div className={`hidden lg:block absolute inset-0 bg-gradient-to-${isImageLeft ? 'r' : 'l'} from-transparent to-[#121214]/90`} />
                </div>

                {/* CONTENT CONTAINER */}
                <div
                  className={`lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white/90 backdrop-blur-md">
                      {getBadgeIcon(project.badgeType)}
                      <span>{project.badge}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl sm:text-4xl font-bold tracking-tight text-white"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-white/70 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techPills.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80 group-hover:bg-white/10 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow-primary px-6 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow-secondary px-6 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* BOTTOM CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="interactive flex justify-center pt-4"
      >
        <Link
          to="/projects"
          className="btn-glow-primary px-9 py-4 text-sm sm:text-base font-semibold inline-flex items-center gap-3 rounded-full shadow-2xl hover:scale-[1.03] transition-transform"
        >
          <span>Explore All Projects</span>
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
