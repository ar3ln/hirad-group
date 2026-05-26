"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";

const { categories } = siteContent;

function CategoryCard({ item, index }: { item: typeof categories.items[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ borderRadius: "2px" }}
      data-cursor-hover
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.en}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Hover shine */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(200,150,44,0.08) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Icon */}
        <motion.div
          className="text-2xl mb-3"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>

        <p
          className="persian text-lg font-light mb-0.5"
          style={{ color: "var(--text-primary)" }}
        >
          {item.fa}
        </p>
        <p
          className="text-xs tracking-widest font-light mb-2"
          style={{ color: "var(--accent-light)", fontFamily: "var(--font-body)" }}
        >
          {item.en}
        </p>
        <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
          {item.desc.en}
        </p>

        {/* Bottom border reveal */}
        <motion.div
          className="mt-3 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ backgroundColor: "var(--accent-primary)" }}
        />
      </div>

      {/* Border on hover */}
      <div
        className="absolute inset-0 border border-transparent group-hover:border-opacity-30 transition-all duration-500"
        style={{ borderColor: "var(--accent-primary)" }}
      />
    </motion.div>
  );
}

export default function CategoriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.5em] mb-4"
            style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
          >
            {categories.eyebrow.en}
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {categories.title.en}
          </h2>
          <p
            className="persian text-2xl md:text-3xl font-light mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {categories.title.fa}
          </p>
          <p className="text-sm max-w-xl mx-auto mb-2" style={{ color: "var(--text-muted)" }}>
            {categories.subtitle.en}
          </p>
          <p className="persian text-sm max-w-xl mx-auto leading-loose" style={{ color: "var(--text-muted)" }}>
            {categories.subtitle.fa}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.items.map((item, i) => (
            <CategoryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
