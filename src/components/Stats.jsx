import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ value, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const STATS_DATA = [
  {
    numericValue: 400,
    suffix: '+',
    title: 'Problems Solved',
    subtitle: 'LeetCode + CodeChef + Codeforces',
  },
  {
    numericValue: 8,
    suffix: '+',
    title: 'Projects Deployed',
    subtitle: 'Production-ready applications',
  },
  {
    numericValue: 10,
    suffix: '+',
    title: 'Hackathons',
    subtitle: 'National level participation',
  },
  {
    numericValue: 3,
    suffix: '+',
    title: 'Hackathon Finalist',
    subtitle: 'IIIT Delhi • IIT Roorkee • HackWithUP',
  },
];

export default function Stats() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="interactive w-full rounded-3xl p-8 sm:p-12 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(20, 20, 20, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 1px rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS_DATA.map((stat, index) => {
            const isLast = index === STATS_DATA.length - 1;
            return (
              <div
                key={stat.title}
                className={`flex flex-col items-start lg:items-center text-left lg:text-center px-4 sm:px-6 py-2 transition-transform duration-300 hover:-translate-y-1.5 ${
                  !isLast ? 'lg:border-r lg:border-white/10' : ''
                }`}
              >
                {/* Number with CountUp */}
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
                >
                  <Counter value={stat.numericValue} suffix={stat.suffix} />
                </div>

                {/* Main Label */}
                <h3 className="text-base sm:text-lg font-bold text-white/95 tracking-wide mb-1">
                  {stat.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-normal text-white/55 leading-relaxed max-w-[220px]">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
