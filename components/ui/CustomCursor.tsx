"use client";

import { motion, useSpring } from "framer-motion";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const { position, isHovering, isVisible } = useCustomCursor();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const x = useSpring(position.x, springConfig);
  const y = useSpring(position.y, springConfig);

  const slowSpring = { damping: 20, stiffness: 150, mass: 0.8 };
  const trailX = useSpring(position.x, slowSpring);
  const trailY = useSpring(position.y, slowSpring);

  if (!isMounted) return null;

  return (
    <>
      {/* Outer ring - trail */}
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering
              ? "rgba(200, 150, 44, 0.8)"
              : "rgba(200, 150, 44, 0.4)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            borderRadius: "50%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 6 : 4,
            height: isHovering ? 6 : 4,
            backgroundColor: isHovering ? "#E8B84B" : "#C8962C",
          }}
          transition={{ duration: 0.2 }}
          style={{ borderRadius: "50%" }}
        />
      </motion.div>
    </>
  );
}
