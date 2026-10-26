"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { usePortfolioExperience } from "./PortfolioExperience";

export default function AmbientBackground() {
  const { tone, reducedMotion } = usePortfolioExperience();
  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], ["translate3d(0, 2%, 0) scale(1.08)", "translate3d(0, -3%, 0) scale(1.08)"]);
  return (
    <div className="ambient-background" aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.div
          key={tone}
          className="ambient-palette"
          data-palette={tone}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : .7, ease: "easeInOut" }}
          style={{ transform: reducedMotion ? "none" : transform }}
        />
      </AnimatePresence>
      <div className="ambient-grain" />
    </div>
  );
}
