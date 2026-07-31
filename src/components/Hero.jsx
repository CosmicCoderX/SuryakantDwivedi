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
  hidden: { y: 30, opacity: 0 },
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
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-12 max-w-[1280px] mx-auto pointer-events-none">
      {/* Top Split Layout: LEFT Column & RIGHT Intro Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6 z-10"
      >
        {/* LEFT COLUMN: Shifted further left */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-7">
          {/* Small rounded status badge */}
          <motion.div
            variants={badgeSlide}
            className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/15 backdrop-blur-md text-emerald-300 shadow-md"
          >
            <span className="pulse-green"></span>
            <span>Available for Internships</span>
          </motion.div>

          {/* Reduced Heading (15–20% smaller) */}
          <motion.div variants={fadeInUp} className="space-y-1">
            <h1
              className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
            >
              Suryakant
            </h1>
            <h1
              className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
            >
              Dwivedi
            </h1>
          </motion.div>

          {/* Single Elegant Line for Roles */}
          <motion.div
            variants={fadeInUp}
            className="text-sm sm:text-base font-semibold text-white/80 tracking-wide"
          >
            <span>Full Stack Developer</span>
            <span className="mx-2.5 text-white/40">•</span>
            <span>AI Enthusiast</span>
            <span className="mx-2.5 text-white/40">•</span>
            <span>Competitive Programmer</span>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-white/70 max-w-lg font-normal leading-relaxed"
          >
            Building scalable web applications, AI-powered solutions, and interactive digital experiences with modern technologies.
          </motion.p>

          {/* Exactly Two Action Buttons */}
          <motion.div variants={fadeInUp} className="interactive flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-glow-primary px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight size={17} />
            </motion.a>

            <motion.a
              href="#resume"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-glow-secondary px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Positioned lower and further right to avoid covering the face */}
        <div className="lg:col-span-6 flex flex-col justify-end items-start lg:items-end lg:mt-24">
          <motion.div
            variants={fadeInUp}
            className="interactive glass-panel p-6 sm:p-7 max-w-[320px] space-y-4 shadow-2xl relative overflow-hidden group hover:border-white/25 transition-all duration-300"
          >
            {/* Subtle inner glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />

            <h2 className="text-xl font-bold text-white tracking-tight">
              Hi, I'm Suryakant.
            </h2>
            <p className="text-sm text-white/75 leading-relaxed font-normal">
              I'm a Computer Science student passionate about building modern web applications, AI-powered products, and solving challenging algorithmic problems.
            </p>

            <div className="pt-1">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-glow-accent px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <Send size={14} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM CENTER: Giant Watermark Typography "SURYAKANT" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="w-full text-center overflow-hidden py-2 select-none pointer-events-none z-0"
      >
        <span className="giant-typography text-[14vw] sm:text-[15vw] leading-none block tracking-tighter">
          SURYAKANT
        </span>
      </motion.div>
    </section>
  );
}
