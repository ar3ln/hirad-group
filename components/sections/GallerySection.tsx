"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";

const { gallery } = siteContent;

const MASONRY_SIZES = [
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

const STAGGER_DELAYS = [0, 0.18, 0.07, 0.25, 0.12, 0.3, 0.05, 0.22];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="section-padding"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.5em] mb-4"
            style={{
              color: "var(--accent-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {gallery.eyebrow.en}
          </p>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            {gallery.title.en}
          </h2>

          <p
            className="persian text-2xl mt-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {gallery.title.fa}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          style={{ gridAutoRows: "200px" }}
        >
          {gallery.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : undefined
              }
              transition={{
                duration: 0.6,
                delay: STAGGER_DELAYS[i % STAGGER_DELAYS.length],
              }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative overflow-hidden group cursor-pointer ${
                MASONRY_SIZES[i % MASONRY_SIZES.length]
              }`}
              style={{ borderRadius: "6px" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
              >
                <span className="text-xs tracking-widest text-white">
                  VIEW
                </span>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: "var(--accent-primary)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}