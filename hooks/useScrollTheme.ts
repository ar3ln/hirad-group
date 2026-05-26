"use client";

import { useEffect, useRef } from "react";

export function useScrollTheme(
  sectionId: string,
  onEnter: () => void,
  onLeave: () => void
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        } else {
          onLeave();
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(section);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionId, onEnter, onLeave]);
}
