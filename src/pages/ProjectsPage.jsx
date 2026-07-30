import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, ArrowLeft, Filter, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PROJECTS } from '../data/projectsData';

function GithubIcon({ size = 13, className = '' }) {
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

const FILTER_CHIPS = ['All', 'Frontend', 'Backend', 'AI/ML', 'Hackathons', 'Games', 'College'];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Instant Search & Category Filtering Logic
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      // Category Filter
      const matchesCategory =
        selectedCategory === 'All' || project.category.includes(selectedCategory);

      // Search Query Filter (Title, Description, Tech Pills, Badge)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.badge.toLowerCase().includes(q) ||
        project.techPills.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Background Subtle Ambient Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* TOP HEADER NAVIGATION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all backdrop-blur-md"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 bg-white/5 border border-white/10 backdrop-blur-md">
          <Sparkles size={14} />
          <span>PROJECT ARCHIVE</span>
        </div>

        <h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          All Projects
        </h1>

        <p className="text-sm sm:text-base text-white/65 max-w-2xl leading-relaxed">
          Explore my complete catalog of full-stack web applications, AI models, competitive programming solutions, and interactive games.
        </p>
      </motion.div>

      {/* SEARCH BAR & CATEGORY FILTER CHIPS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 space-y-6 border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      >
        {/* Instant Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, technology, or topic (e.g. React, AI, FastAPI)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white/40 mr-2 uppercase tracking-wider">
            <Filter size={13} />
            <span>Filter:</span>
          </div>

          {FILTER_CHIPS.map((chip) => {
            const isActive = selectedCategory === chip;
            return (
              <button
                key={chip}
                onClick={() => setSelectedCategory(chip)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-lg scale-105'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* RESPONSIVE PROJECT GRID */}
      <AnimatePresence mode="wait">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20 glass-panel rounded-3xl border border-white/10"
          >
            <p className="text-lg text-white/60 mb-2">No projects found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-sm text-emerald-400 hover:underline"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group glass-panel rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Thumbnail Image */}
                  <a
                    href={project.liveDemo !== '#' ? project.liveDemo : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-48 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
                      {project.badge}
                    </div>
                  </a>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* 2-line truncated description */}
                    <p className="text-sm text-white/65 line-clamp-2 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techPills.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-white/75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/10 mt-4">
                  <a
                    href={project.liveDemo !== '#' ? project.liveDemo : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white/90 hover:text-white inline-flex items-center gap-1.5 py-2"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white/60 hover:text-white inline-flex items-center gap-1.5 py-2"
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
