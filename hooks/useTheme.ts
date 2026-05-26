"use client";

import { useState, useEffect, useCallback } from "react";

type Theme = "hirad" | "hirangy";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("hirad");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const switchToHirangy = useCallback(() => setTheme("hirangy"), []);
  const switchToHirad = useCallback(() => setTheme("hirad"), []);

  return { theme, switchToHirangy, switchToHirad };
}
