"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";

const { about } = siteContent;

function TimelineItem({
  item,
  index,
  total,
}: {
  item: typeof about.timeline[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`flex-1 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
        style={{ display: index < total ? "block" : "none" }}
      >
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.02 }}
        >
          <p
            className="text-xs tracking-[0.4em] mb-2"
            style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
          >
            {item.yearEn} · <span className="persian">{item.year}</span>
          </p>
          <h3
            className="text-2xl md:text-3xl font-light mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {item.title.en}
          </h3>
          <p className="persian text-xl mb-3" style={{ color: "var(--text-secondary)" }}>
            {item.title.fa}
          </p>
          <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--text-muted)" }}>
            {item.desc.en}
          </p>
          <p className="persian text-sm leading-loose" style={{ color: "var(--text-muted)" }}>
            {item.desc.fa}
          </p>
        </motion.div>
      </motion.div>

      {/* Center: Year bubble */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center z-10"
          style={{
            borderColor: "var(--accent-primary)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <motion.div
            className="absolute inset-1 rounded-full opacity-20"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
          <span
            className="text-[10px] font-light tracking-wide text-center"
            style={{ color: "var(--accent-light)", fontFamily: "var(--font-body)" }}
          >
            {item.yearEn.slice(-2)}
          </span>
        </motion.div>

        {/* Vertical line */}
        {index < total - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              width: "1px",
              height: "80px",
              background: "linear-gradient(to bottom, var(--accent-primary), transparent)",
              transformOrigin: "top",
              marginTop: "8px",
            }}
          />
        )}
      </div>

      {/* Empty side for alternating layout */}
      <div className="flex-1" />
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Parallax background text */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span
          className="text-[25vw] font-light select-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(200,150,44,0.04)",
          }}
        >
          STORY
        </span>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs tracking-[0.5em] mb-4"
            style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
          >
            {about.eyebrow.en}
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {about.title.en}
          </h2>
          <p className="persian text-3xl font-light" style={{ color: "var(--text-secondary)" }}>
            {about.title.fa}
          </p>
          <p className="text-sm mt-4 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            {about.subtitle.en}
          </p>
          <p className="persian text-sm mt-2 max-w-md mx-auto leading-loose" style={{ color: "var(--text-muted)" }}>
            {about.subtitle.fa}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          {about.timeline.map((item, i) => (
            <TimelineItem
              key={item.year}
              item={item}
              index={i}
              total={about.timeline.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
