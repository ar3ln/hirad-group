"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { siteContent } from "@/data/content";

const { nav } = siteContent;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setIsScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled
          ? "rgba(10,10,10,0.85)"
          : "transparent",
        borderBottom: isScrolled
          ? "1px solid rgba(200,150,44,0.15)"
          : "1px solid transparent",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.02 }}
          className="flex flex-col leading-none"
        >
          <span
            className="text-xl font-light tracking-[0.3em] shimmer-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {nav.brand.en}
          </span>
          <span
            className="text-xs persian"
            style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
          >
            {nav.brand.fa}
          </span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {nav.links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
            >
              <a
                href={link.href}
                className="group flex flex-col items-center gap-0.5 text-sm tracking-wider transition-colors duration-300"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="font-light" style={{ fontFamily: "var(--font-body)" }}>
                  {link.en}
                </span>
                <span className="text-[10px] persian opacity-60 group-hover:opacity-100 transition-opacity">
                  {link.fa}
                </span>
                <span
                  className="block h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="gradient-border relative px-6 py-2.5 text-sm tracking-widest font-medium transition-all duration-300"
            style={{
              color: "var(--accent-primary)",
              border: "1px solid var(--border-color)",
              borderRadius: "2px",
              fontFamily: "var(--font-body)",
            }}
          >
            <span className="persian text-xs mr-1">{nav.cta.fa}</span>
            <span className="text-xs opacity-60"> / </span>
            <span className="text-xs">{nav.cta.en}</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            className="block w-6 h-px"
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-4 h-px"
            style={{ backgroundColor: "var(--text-secondary)" }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            className="block w-6 h-px"
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="lg:hidden overflow-hidden"
        style={{ backgroundColor: "rgba(10,10,10,0.97)" }}
      >
        <ul className="px-6 py-6 flex flex-col gap-4">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex justify-between items-center py-2 border-b"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="font-light tracking-wider text-sm">{link.en}</span>
                <span className="persian text-sm" style={{ color: "var(--accent-primary)" }}>
                  {link.fa}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
