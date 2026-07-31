import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const badgeSlide = {
  hidden: { x: -25, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const CAPABILITIES = ['💻 Web Apps', '🤖 AI Products', '⚡ Motion UI', '🚀 Full Stack'];

export default function Hero() {
  const [capabilityIndex, setCapabilityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCapabilityIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col pt-28 pb-12 px-6 sm:px-12 lg:px-16 max-w-[1280px] mx-auto pointer-events-none">
      {/* Top Layout: LEFT Column & RIGHT Intro Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center mt-6 lg:mt-16 z-10 w-full"
      >
        {/* LEFT COLUMN: 4 columns max */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-8 w-full">
          {/* Small rounded status badge */}
          <motion.div
            variants={badgeSlide}
            className="interactive inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/15 backdrop-blur-md text-emerald-300 shadow-md"
          >
            <span className="pulse-green"></span>
            <span>Available for Internships</span>
          </motion.div>

          {/* New 3-Line Headline */}
          <motion.div variants={fadeInUp} className="space-y-1">
            <h1
              className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
            >
              Building<br />
              Modern Web<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/30">
                Experiences.
              </span>
            </h1>
          </motion.div>

          {/* Animated Capability Switcher */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 text-base sm:text-lg font-medium"
          >
            <span className="text-white/50">Focused On</span>
            <div className="relative h-[30px] w-[180px] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={capabilityIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-white tracking-wide"
                >
                  {CAPABILITIES[capabilityIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

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
              <span>Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* CENTER COLUMN: Transparent Spacer to protect the portrait */}
        <div className="hidden lg:block lg:col-span-4 h-full pointer-events-none"></div>

        {/* RIGHT COLUMN: Intro Card - 4 columns max */}
        <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end mt-24 sm:mt-32 lg:mt-0 w-full ml-auto">
          <motion.div
            variants={fadeInUp}
            className="interactive glass-panel p-6 sm:p-7 space-y-4 shadow-2xl relative overflow-hidden group hover:border-white/25 transition-all duration-300 w-full max-w-sm"
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
                href="https://www.linkedin.com/in/suryakant-dwivedi-837415236/"
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
    </section>
  );
}
