"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure HIRAD theme on mount
    document.documentElement.setAttribute("data-theme", "hirad");
  }, []);

  return <>{children}</>;
}
