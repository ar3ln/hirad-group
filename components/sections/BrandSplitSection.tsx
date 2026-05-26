"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteContent } from "@/data/content";

const { brands } = siteContent;

export default function BrandSplitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<"hirad" | "hirangy" | null>(null);

  return (
    <section id="brands" className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.5em] mb-4" style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}>
            {brands.eyebrow.en}
          </p>
          <h2
            className="text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            دو برند، یک استاندارد عالی
          </h2>
          <p className="text-xl md:text-2xl mt-2 font-light" style={{ color: "var(--text-muted)" }}>
            Two Brands, One Standard of Excellence
          </p>
        </motion.div>

        {/* Split Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* HIRAD Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            onHoverStart={() => setHovered("hirad")}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden p-8 lg:p-12 cursor-pointer group"
            style={{
              background: "linear-gradient(135deg, #141414 0%, #1E1A0A 100%)",
              border: "1px solid",
              borderColor: hovered === "hirad" ? "rgba(200,150,44,0.5)" : "rgba(200,150,44,0.15)",
              transition: "border-color 0.5s ease",
              borderRadius: "4px",
            }}
            data-cursor-hover
          >
            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top right, rgba(200,150,44,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Logo mark */}
            <motion.div
              animate={{ rotate: hovered === "hirad" ? 5 : 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-16 h-16 border flex items-center justify-center"
                style={{ borderColor: "rgba(200,150,44,0.4)" }}>
                <span className="text-2xl font-light shimmer-text"
                  style={{ fontFamily: "var(--font-display)" }}>H</span>
              </div>
            </motion.div>

            <div className="mb-2">
              <h3 className="text-5xl lg:text-6xl font-light tracking-wider shimmer-text"
                style={{ fontFamily: "var(--font-display)" }}>
                {brands.hirad.name}
              </h3>
              <p className="persian text-lg mt-1" style={{ color: "var(--text-secondary)" }}>
                {brands.hirad.tagline.fa}
              </p>
              <p className="text-xs tracking-widest mt-0.5" style={{ color: "var(--text-muted)" }}>
                {brands.hirad.tagline.en}
              </p>
            </div>

            <div className="my-6 h-px" style={{ backgroundColor: "rgba(200,150,44,0.2)" }} />

            <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
              {brands.hirad.desc.en}
            </p>
            <p className="persian text-sm leading-loose" style={{ color: "var(--text-muted)" }}>
              {brands.hirad.desc.fa}
            </p>

            {/* Features */}
            <ul className="mt-8 space-y-3">
              {brands.hirad.features.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-primary)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{feat.en}</span>
                  <span className="persian text-xs mr-auto" style={{ color: "var(--text-muted)" }}>{feat.fa}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 px-6 py-3 text-xs tracking-widest border transition-all"
              style={{
                borderColor: "var(--accent-primary)",
                color: "var(--accent-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              {brands.hirad.cta.fa}
            </motion.button>
          </motion.div>

          {/* HIRANGY Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            onHoverStart={() => setHovered("hirangy")}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden p-8 lg:p-12 cursor-pointer group"
            style={{
              background: "linear-gradient(135deg, #E6F5F5 0%, #C8EDED 100%)",
              border: "1px solid",
              borderColor: hovered === "hirangy" ? "rgba(42,191,191,0.6)" : "rgba(42,191,191,0.3)",
              transition: "border-color 0.5s ease",
              borderRadius: "4px",
            }}
            data-cursor-hover
          >
            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at bottom left, rgba(42,191,191,0.15) 0%, transparent 70%)",
              }}
            />

            {/* Logo mark */}
            <motion.div
              animate={{ rotate: hovered === "hirangy" ? -5 : 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-16 h-16 border flex items-center justify-center"
                style={{ borderColor: "rgba(42,191,191,0.5)", backgroundColor: "rgba(42,191,191,0.08)" }}>
                <span className="text-2xl font-light"
                  style={{ color: "#2ABFBF", fontFamily: "var(--font-display)" }}>H</span>
              </div>
            </motion.div>

            <div className="mb-2">
              <h3 className="text-5xl lg:text-6xl font-light tracking-wider"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(90deg, #1A9090, #4DD9D9, #1A9090)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s linear infinite",
                }}>
                {brands.hirangy.name}
              </h3>
              <p className="persian text-lg mt-1" style={{ color: "#1A5050" }}>
                {brands.hirangy.tagline.fa}
              </p>
              <p className="text-xs tracking-widest mt-0.5" style={{ color: "#4A7878" }}>
                {brands.hirangy.tagline.en}
              </p>
            </div>

            <div className="my-6 h-px" style={{ backgroundColor: "rgba(42,191,191,0.3)" }} />

            <p className="text-sm leading-relaxed mb-2" style={{ color: "#1A5050" }}>
              {brands.hirangy.desc.en}
            </p>
            <p className="persian text-sm leading-loose" style={{ color: "#4A7878" }}>
              {brands.hirangy.desc.fa}
            </p>

            {/* Features */}
            <ul className="mt-8 space-y-3">
              {brands.hirangy.features.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#2ABFBF" }} />
                  <span className="text-xs" style={{ color: "#4A7878" }}>{feat.en}</span>
                  <span className="persian text-xs mr-auto" style={{ color: "#4A7878" }}>{feat.fa}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "rgba(42,191,191,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 px-6 py-3 text-xs tracking-widest border transition-all"
              style={{
                borderColor: "#2ABFBF",
                color: "#1A9090",
                fontFamily: "var(--font-body)",
              }}
            >
              {brands.hirangy.cta.fa}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
