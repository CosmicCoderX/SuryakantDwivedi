import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';

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

const fadeInUp = {
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const badgeSlide = {
  hidden: { x: -25, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-full flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pointer-events-none">
      {/* Top Split Layout: LEFT 40% & RIGHT 30% */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-4 sm:mt-8 z-10"
      >
        {/* LEFT COLUMN (~40%) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Small rounded status badge */}
          <motion.div
            variants={badgeSlide}
            className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/15 backdrop-blur-md text-emerald-300 shadow-lg"
          >
            <span className="pulse-green"></span>
            <span>Available for Internships</span>
          </motion.div>

          {/* Large Heading */}
          <motion.div variants={fadeInUp} className="space-y-1">
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
            >
              Suryakant
            </h1>
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
            >
              Dwivedi
            </h1>
          </motion.div>

          {/* Roles Subtitle */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-white/90"
          >
            <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10">
              Full Stack Developer
            </span>
            <span className="text-white/40">•</span>
            <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10">
              AI Enthusiast
            </span>
            <span className="text-white/40">•</span>
            <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10">
              Competitive Programmer
            </span>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-white/70 max-w-xl font-normal leading-relaxed"
          >
            Building scalable web applications, AI-powered solutions, and interactive digital experiences with modern technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="interactive flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn-glow-primary px-7 py-3.5 text-sm sm:text-base inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn-glow-secondary px-7 py-3.5 text-sm sm:text-base inline-flex items-center gap-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (~30%) */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end mt-4 lg:mt-0">
          <motion.div
            variants={fadeInUp}
            className="interactive glass-panel p-6 sm:p-7 rounded-2xl max-w-md border border-white/15 space-y-4 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300"
          >
            {/* Subtle glow accent inside card */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Hi, I'm Suryakant.
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              I'm a Computer Science student passionate about building modern web applications, AI-powered products, and solving challenging algorithmic problems.
            </p>

            <div className="pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-glow-accent px-5 py-2.5 text-sm inline-flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <Send size={15} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM CENTER: Giant Transparent Typography "SURYAKANT" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="w-full text-center overflow-hidden py-2 select-none pointer-events-none z-0"
      >
        <span className="giant-typography text-[15vw] sm:text-[16vw] lg:text-[17vw] leading-none block tracking-tighter">
          SURYAKANT
        </span>
      </motion.div>
    </section>
  );
}
