"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteContent } from "@/data/content";

const { contact } = siteContent;

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Floating ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              top: `${10 + i * 18}%`,
              left: `${5 + i * 20}%`,
              backgroundColor: "var(--accent-primary)",
              opacity: 0.03,
              filter: "blur(20px)",
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.5em] mb-4"
            style={{ color: "var(--accent-primary)", fontFamily: "var(--font-body)" }}
          >
            {contact.eyebrow.en}
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {contact.title.en}
          </h2>
          <p className="persian text-2xl mt-2" style={{ color: "var(--text-secondary)" }}>
            {contact.title.fa}
          </p>
          <p className="text-sm mt-4 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            {contact.subtitle.en}
          </p>
          <p className="persian text-sm mt-2 max-w-md mx-auto leading-loose" style={{ color: "var(--text-muted)" }}>
            {contact.subtitle.fa}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {contact.info.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-5 group cursor-default"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center border flex-shrink-0 transition-all duration-300 group-hover:border-opacity-60"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <span className="text-xl">{info.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] mb-1" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                    {info.label.en} · <span className="persian">{info.label.fa}</span>
                  </p>
                  <p className="text-sm font-light" style={{ color: "var(--text-primary)" }}>
                    {info.value.en}
                  </p>
                  <p className="persian text-sm" style={{ color: "var(--text-secondary)" }}>
                    {info.value.fa}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              {["Instagram", "Telegram", "WhatsApp"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, color: "var(--accent-primary)" }}
                  className="text-xs tracking-widest transition-colors"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-6 p-12 border"
                style={{ borderColor: "var(--border-color)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl"
                >
                  ✨
                </motion.div>
                <p
                  className="text-2xl font-light"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  Thank You!
                </p>
                <p className="persian text-xl" style={{ color: "var(--text-secondary)" }}>
                  ممنون از پیام شما
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  We&apos;ll be in touch soon · به زودی با شما تماس می‌گیریم
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    className="block text-[10px] tracking-[0.3em] mb-2"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {contact.form.name.en} · <span className="persian">{contact.form.name.fa}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b py-3 text-sm outline-none transition-colors focus:border-opacity-80"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    className="block text-[10px] tracking-[0.3em] mb-2"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {contact.form.email.en} · <span className="persian">{contact.form.email.fa}</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b py-3 text-sm outline-none transition-colors"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    className="block text-[10px] tracking-[0.3em] mb-2"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {contact.form.message.en} · <span className="persian">{contact.form.message.fa}</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b py-3 text-sm outline-none transition-colors resize-none"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </motion.div>

                {/* Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px var(--glow-color)" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 text-sm tracking-widest font-medium transition-all"
                    style={{
                      background: "var(--gradient-accent)",
                      backgroundSize: "200% auto",
                      color: "var(--bg-primary)",
                      fontFamily: "var(--font-body)",
                      animation: "shimmer 3s linear infinite",
                    }}
                  >
                    {contact.form.submit.fa}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
