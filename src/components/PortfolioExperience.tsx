"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";

export type SceneTone = "blue" | "cyan" | "violet" | "mint" | "coral";
type Scene = "intro" | "process" | "projects";
const EFFECTS_EVENT = "portfolio-effects-change";

function subscribeEffects(callback: () => void) {
  window.addEventListener(EFFECTS_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EFFECTS_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
function effectsSnapshot() {
  try { return localStorage.getItem("portfolio-reduce-effects") === "true"; }
  catch { return false; }
}

interface ExperienceContextValue {
  tone: SceneTone;
  reducedMotion: boolean;
  manualReduction: boolean;
  toggleEffects: () => void;
  setProcessTone: (tone: SceneTone) => void;
  setProjectsTone: (tone: SceneTone) => void;
  enterScene: (scene: Scene) => void;
}

const ExperienceContext = createContext<ExperienceContextValue>({
  tone: "blue" as SceneTone,
  reducedMotion: false,
  manualReduction: false,
  toggleEffects: () => {},
  setProcessTone: () => {},
  setProjectsTone: () => {},
  enterScene: () => {},
});

export default function PortfolioExperience({ children }: { children: ReactNode }) {
  const [scene, setScene] = useState<Scene>("intro");
  const [processTone, setProcessTone] = useState<SceneTone>("blue");
  const [projectsTone, setProjectsTone] = useState<SceneTone>("blue");
  const manualReduction = useSyncExternalStore(subscribeEffects, effectsSnapshot, () => false);
  const systemReduction = useReducedMotion();
  const reducedMotion = manualReduction || Boolean(systemReduction);
  const tone = scene === "process" ? processTone : scene === "projects" ? projectsTone : "blue";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setScene((entry.target as HTMLElement).dataset.scene as Scene);
      }
    }, { rootMargin: "-28% 0px -50% 0px", threshold: 0 });
    document.querySelectorAll("[data-scene]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function toggleEffects() {
    try { localStorage.setItem("portfolio-reduce-effects", String(!manualReduction)); }
    catch { return; }
    window.dispatchEvent(new Event(EFFECTS_EVENT));
  }

  return (
    <ExperienceContext.Provider value={{ tone, reducedMotion, manualReduction, toggleEffects, setProcessTone, setProjectsTone, enterScene: setScene }}>
      <MotionConfig reducedMotion={reducedMotion ? "always" : "user"} transition={{ duration: .25, ease: [.23, 1, .32, 1] }}>
        <div className="portfolio-experience" data-tone={tone} data-reduce-motion={reducedMotion}>
          {children}
        </div>
      </MotionConfig>
    </ExperienceContext.Provider>
  );
}

export function usePortfolioExperience() { return useContext(ExperienceContext); }
