"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePortfolioExperience } from "./PortfolioExperience";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const { reducedMotion } = usePortfolioExperience();
  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({
      duration: .8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: true,
    });
    let frame: number;
    function raf(time: number) { lenis.raf(time); frame = requestAnimationFrame(raf); }
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, [reducedMotion]);
  return children;
}
