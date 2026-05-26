"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";

const { footer, nav } = siteContent;

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden py-16 px-6 lg:px-12"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--accent-primary)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-3xl font-light shimmer-text mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {nav.brand.en}
            </h3>
            <p className="persian text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              {nav.brand.fa}
            </p>
            <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-muted)" }}>
              {footer.desc.en}
            </p>
            <p className="persian text-xs leading-loose" style={{ color: "var(--text-muted)" }}>
              {footer.desc.fa}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[10px] tracking-[0.4em] mb-6" style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}>
              NAVIGATION
            </p>
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between group transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="text-xs tracking-widest group-hover:text-[var(--text-primary)] transition-colors">
                      {link.en}
                    </span>
                    <span className="persian text-xs group-hover:text-[var(--accent-primary)] transition-colors">
                      {link.fa}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[10px] tracking-[0.4em] mb-6" style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}>
              OUR BRANDS
            </p>
            <div className="flex flex-col gap-4">
              <div
                className="p-4 border"
                style={{ borderColor: "var(--border-color)" }}
              >
                <p className="text-xl font-light shimmer-text" style={{ fontFamily: "var(--font-display)" }}>HIRAD</p>
                <p className="persian text-xs mt-1" style={{ color: "var(--text-muted)" }}>لوکس بی‌همتا</p>
              </div>
              <div
                className="p-4 border"
                style={{ borderColor: "rgba(42,191,191,0.2)", background: "rgba(42,191,191,0.02)" }}
              >
                <p className="text-xl font-light" style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(90deg, #1A9090, #4DD9D9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>HIRANGY</p>
                <p className="persian text-xs mt-1" style={{ color: "var(--text-muted)" }}>مدرن و در دسترس</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-[10px] tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
            {footer.copyright.en}
          </p>
          <p className="persian text-xs" style={{ color: "var(--text-muted)" }}>
            {footer.copyright.fa}
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] tracking-widest transition-colors hover:text-[var(--accent-primary)]"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
