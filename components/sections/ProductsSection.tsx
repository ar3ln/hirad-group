"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { siteContent } from "@/data/content";

const { products } = siteContent;

function ProductCard({ item, index }: { item: typeof products.items[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-72 md:w-80 cursor-pointer group"
      data-cursor-hover
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]" style={{ borderRadius: "2px" }}>
        <motion.img
          src={item.image}
          alt={item.name.en}
          className="w-full h-full object-cover"
          loading="lazy"
          animate={{ scale: isHovered ? 1.07 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)",
          }}
        />

        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-widest"
          style={{
            backgroundColor: item.brand === "HIRAD" ? "rgba(200,150,44,0.9)" : "rgba(42,191,191,0.9)",
            color: item.brand === "HIRAD" ? "#0A0A0A" : "#0D2B2B",
            fontFamily: "var(--font-body)",
          }}
        >
          {item.tag.en} · {item.tag.fa}
        </div>

        {/* Brand badge */}
        <div
          className="absolute top-4 right-4 px-2 py-1 text-[9px] tracking-widest border"
          style={{
            borderColor: "rgba(255,255,255,0.3)",
            color: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          {item.brand}
        </div>

        {/* Quick order button */}
        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 py-2.5 text-xs tracking-widest text-center"
              style={{
                backgroundColor: "rgba(200,150,44,0.95)",
                color: "#0A0A0A",
                fontFamily: "var(--font-body)",
                backdropFilter: "blur(8px)",
              }}
            >
              سفارش / Order
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="mt-4 px-1">
        <p className="persian text-base font-light" style={{ color: "var(--text-primary)" }}>
          {item.name.fa}
        </p>
        <p className="text-xs tracking-wider mt-0.5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
          {item.name.en}
        </p>
        <p className="text-[11px] mt-2" style={{ color: "var(--text-muted)" }}>
          {item.desc.en} · <span className="persian">{item.desc.fa}</span>
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="persian text-lg font-light" style={{ color: "var(--accent-primary)" }}>
            {item.price} تومان
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 flex items-center justify-center border rounded-full transition-colors"
            style={{ borderColor: "var(--border-color)", color: "var(--accent-primary)" }}
          >
            +
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<"ALL" | "HIRAD" | "HIRANGY">("ALL");

  const filtered = products.items.filter(
    (p) => activeFilter === "ALL" || p.brand === activeFilter
  );

  return (
    <section
      id="products"
      className="section-padding overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="px-6 lg:px-0 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.5em] mb-4" style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}>
                {products.eyebrow.en}
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {products.title.en}
              </h2>
              <p className="persian text-2xl mt-1" style={{ color: "var(--text-secondary)" }}>
                {products.title.fa}
              </p>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
              {(["ALL", "HIRAD", "HIRANGY"] as const).map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 text-xs tracking-widest transition-all"
                  style={{
                    backgroundColor: activeFilter === filter ? "var(--accent-primary)" : "transparent",
                    color: activeFilter === filter ? "var(--bg-primary)" : "var(--text-muted)",
                    border: "1px solid",
                    borderColor: activeFilter === filter ? "var(--accent-primary)" : "var(--border-color)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 px-6 lg:px-0 overflow-x-auto pb-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <ProductCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex items-center gap-4 mt-8 px-6 lg:px-0"
        >
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            →
          </motion.div>
          <span className="text-xs tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
            SCROLL TO EXPLORE · <span className="persian">اسکرول کنید</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
