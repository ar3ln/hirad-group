"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";

const { hero } = siteContent;

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.08]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Ambient floating orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--accent-dark)" }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--accent-primary)" }}
        />
      </motion.div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-primary) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Parallax background text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ y: y2, opacity: useTransform(scrollYProgress, [0, 0.4], [0.04, 0]) }}
      >
        <span
          className="text-[20vw] font-light tracking-widest select-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--accent-primary)",
            WebkitTextStroke: "1px var(--accent-dark)",
            WebkitTextFillColor: "transparent",
          }}
        >
          HIRAD
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, y: y1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Eyebrow */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
            }}
            className="flex items-center gap-3"
          >
            <span
              className="block w-12 h-px"
              style={{ backgroundColor: "var(--accent-primary)" }}
            />
            <span
              className="text-xs tracking-[0.4em] font-medium"
              style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
            >
              {hero.eyebrow.en}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUpVariant}
            className="leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span
              className="block text-5xl md:text-6xl lg:text-7xl font-light italic"
              style={{ color: "var(--text-primary)" }}
            >
              {hero.title1.en}
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-light shimmer-text">
              Luxury
            </span>
          </motion.h1>

          {/* Persian title */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.3 } },
            }}
            className="persian"
          >
            <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--text-secondary)" }}>
              {hero.title1.fa}
            </p>
            <p className="text-4xl md:text-5xl font-light" style={{ color: "var(--accent-light)" }}>
              {hero.title2.fa}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeUpVariant} className="flex flex-col gap-2 max-w-md">
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {hero.subtitle.en}
            </p>
            <p className="persian text-sm leading-loose" style={{ color: "var(--text-muted)" }}>
              {hero.subtitle.fa}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
            }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px var(--glow-color)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 text-sm tracking-widest font-medium transition-all"
              style={{
                background: "var(--gradient-accent)",
                backgroundSize: "200% auto",
                color: "var(--bg-primary)",
                fontFamily: "var(--font-body)",
                borderRadius: "2px",
              }}
            >
              {hero.cta1.fa}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, borderColor: "var(--accent-primary)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 text-sm tracking-widest font-light border transition-all"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--border-color)",
                fontFamily: "var(--font-body)",
                borderRadius: "2px",
              }}
            >
              {hero.cta2.fa}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.8, staggerChildren: 0.15 } },
            }}
            className="flex gap-8 pt-4 border-t"
            style={{ borderColor: "var(--border-color)" }}
          >
            {hero.stats.map((stat) => (
              <motion.div
                key={stat.value}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex flex-col gap-1"
              >
                <span
                  className="text-2xl font-light persian"
                  style={{ color: "var(--accent-primary)", fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {stat.label.en}
                </span>
                <span className="persian text-[10px]" style={{ color: "var(--text-muted)" }}>
                  {stat.label.fa}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Hero image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative hidden lg:block"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        >
          {/* Main image */}
          <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
                alt="Luxury Wedding Cake"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
            {/* Gold overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(10,10,10,0.4) 0%, transparent 60%, rgba(200,150,44,0.1) 100%)",
              }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-6 -left-8 p-4 border"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-color)",
              backdropFilter: "blur(20px)",
            }}
          >
            <p className="text-[10px] tracking-[0.3em] mb-1" style={{ color: "var(--accent-primary)" }}>
              SINCE
            </p>
            <p
              className="text-3xl font-light"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
            >
              2006
            </p>
            <p className="persian text-xs" style={{ color: "var(--text-muted)" }}>از سال ۱۳۸۵</p>
          </motion.div>

          {/* Corner accent */}
          <div
            className="absolute -top-3 -right-3 w-24 h-24 border-t border-r"
            style={{ borderColor: "var(--accent-primary)" }}
          />
          <div
            className="absolute -bottom-3 -left-3 w-24 h-24 border-b border-l"
            style={{ borderColor: "var(--accent-primary)" }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em]" style={{ color: "var(--text-muted)" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--accent-primary), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
