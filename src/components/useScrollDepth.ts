"use client";

import { useEffect, type RefObject } from "react";
import { usePortfolioExperience } from "./PortfolioExperience";

type DepthScene = { target: HTMLElement; output: HTMLElement; transform: (progress: number) => string };
const scenes = new Set<DepthScene>();
let frame = 0;

function updateDepth() {
  frame = 0;
  // Read every scene before writing any transform, avoiding layout thrashing.
  const updates = Array.from(scenes, (scene) => {
    const rect = scene.target.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
    return { output: scene.output, transform: scene.transform(progress) };
  });
  for (const update of updates) update.output.style.transform = update.transform;
}
function scheduleDepth() { if (!frame) frame = requestAnimationFrame(updateDepth); }

function subscribeDepth(scene: DepthScene) {
  if (!scenes.size) {
    window.addEventListener("scroll", scheduleDepth, { passive: true });
    window.addEventListener("resize", scheduleDepth);
  }
  scenes.add(scene);
  scheduleDepth();
  return () => {
    scenes.delete(scene);
    if (!scenes.size) {
      window.removeEventListener("scroll", scheduleDepth);
      window.removeEventListener("resize", scheduleDepth);
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
}

export function imageDepth(progress: number) {
  const distance = (progress - .5) * 2;
  const y = distance < 0 ? -distance * 18 : -distance * 16;
  const x = distance < 0 ? -distance * 7 : -distance * 5;
  const rotationY = distance < 0 ? distance * 5 : distance * 4;
  const scale = 1 + (distance < 0 ? distance * .03 : distance * .02);
  return `perspective(1000px) translate3d(0, ${y.toFixed(3)}px, 0) rotateX(${x.toFixed(3)}deg) rotateY(${rotationY.toFixed(3)}deg) scale(${scale.toFixed(4)})`;
}
export function processDepth(progress: number) {
  const distance = (progress - .5) * 2;
  const y = distance < 0 ? -distance * 18 : -distance * 16;
  const x = distance < 0 ? -distance * 9 : -distance * 6;
  const rotationY = distance < 0 ? distance * 7 : distance * 5;
  return `perspective(1100px) translate3d(0, ${y.toFixed(3)}px, 0) rotateX(${x.toFixed(3)}deg) rotateY(${rotationY.toFixed(3)}deg)`;
}

/** Scroll owns only the illustration transform; React owns content and navigation. */
export function useScrollDepth<T extends HTMLElement, U extends HTMLElement>(target: RefObject<T | null>, output: RefObject<U | null>, transform: (progress: number) => string) {
  const { reducedMotion } = usePortfolioExperience();
  useEffect(() => {
    const source = target.current;
    const layer = output.current;
    if (!source || !layer) return;
    if (reducedMotion) { layer.style.setProperty("transform", "none"); return; }
    return subscribeDepth({ target: source, output: layer, transform });
  }, [target, output, transform, reducedMotion]);
}
