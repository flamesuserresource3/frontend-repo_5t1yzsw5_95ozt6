import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b12]/40 to-[#0b0b12]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_30%,rgba(56,189,248,0.18),transparent)]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-400" />
          Photographer • Creative Technologist
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-6 text-4xl font-[800] leading-tight md:text-6xl"
        >
          <span className="bg-gradient-to-br from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
            ahmd zian
          </span>
          <br />
          <span className="text-white/90">Modern photography — cinematic, minimalist, bold.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-white/70 md:text-lg"
        >
          A modern portfolio with an interactive 3D cover, quick uploads, and an elegant blue–purple gradient aesthetic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#upload"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Upload your work
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            View gallery
          </a>
        </motion.div>

        {/* Animated accent underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-indigo-400/70 via-sky-400/70 to-fuchsia-400/70"
        />
      </div>
    </section>
  );
}
