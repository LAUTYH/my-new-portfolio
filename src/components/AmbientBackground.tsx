"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function AmbientBackground() {
  const { theme, mounted } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax subtle offset based on scroll
  const scrollOffset = scrollY * 0.15;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      style={{
        backgroundColor: !mounted
          ? "#0E1015"
          : theme === "dark"
          ? "#0E1015"
          : "#F8F9FA",
        transition: "background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* 
        ==================================================
        DARK MODE AMBIENT LIGHTS (Estilo Gemini Dark)
        Neutral obsidian base + diffuse Cobalt/Indigo/Violet
        "Es leve" - Opacities 0.10 - 0.16 with 110px blur
        ==================================================
      */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          mounted && theme === "light" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate3d(0, ${-scrollOffset}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Dark Light 1: Electric Cobalt Orb */}
        <div
          className="absolute rounded-full filter blur-[110px] sm:blur-[140px] animate-ambient-shift-1"
          style={{
            width: "52vw",
            height: "52vw",
            minWidth: "340px",
            minHeight: "340px",
            maxWidth: "750px",
            maxHeight: "750px",
            left: "10%",
            top: "15%",
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(37, 99, 235, 0.06) 55%, transparent 75%)",
          }}
        />

        {/* Dark Light 2: Deep Indigo Aura */}
        <div
          className="absolute rounded-full filter blur-[120px] sm:blur-[150px] animate-ambient-shift-2"
          style={{
            width: "55vw",
            height: "55vw",
            minWidth: "360px",
            minHeight: "360px",
            maxWidth: "800px",
            maxHeight: "800px",
            right: "8%",
            top: "22%",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.16) 0%, rgba(79, 70, 229, 0.05) 55%, transparent 75%)",
          }}
        />

        {/* Dark Light 3: Galactic Violet Drift */}
        <div
          className="absolute rounded-full filter blur-[120px] sm:blur-[160px] animate-ambient-shift-3"
          style={{
            width: "48vw",
            height: "48vw",
            minWidth: "320px",
            minHeight: "320px",
            maxWidth: "700px",
            maxHeight: "700px",
            left: "30%",
            top: "45%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 75%)",
          }}
        />

        {/* Dark Light 4: Subtle Cyan Center Glow */}
        <div
          className="absolute rounded-full filter blur-[100px] sm:blur-[130px] animate-ambient-shift-4"
          style={{
            width: "42vw",
            height: "42vw",
            minWidth: "280px",
            minHeight: "280px",
            maxWidth: "600px",
            maxHeight: "600px",
            left: "45%",
            top: "18%",
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.10) 0%, rgba(14, 165, 233, 0.03) 60%, transparent 75%)",
          }}
        />
      </div>

      {/* 
        ==================================================
        LIGHT MODE AMBIENT LIGHTS (Estilo Gemini Light)
        Neutral Pearl base + diffuse Peach/Sky Cyan/Lavender
        "Es leve" - Delicate pastel luminescence from screenshots
        ==================================================
      */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          mounted && theme === "light" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(0, ${-scrollOffset}px, 0)`,
          willChange: "transform",
        }}
      >
        {/* Light Light 1: Warm Gemini Peach/Apricot Orb (Top Right / Center) */}
        <div
          className="absolute rounded-full filter blur-[100px] sm:blur-[140px] animate-ambient-shift-2"
          style={{
            width: "54vw",
            height: "54vw",
            minWidth: "350px",
            minHeight: "350px",
            maxWidth: "780px",
            maxHeight: "780px",
            right: "5%",
            top: "10%",
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.22) 0%, rgba(253, 186, 116, 0.12) 45%, rgba(254, 215, 170, 0.04) 70%, transparent 80%)",
          }}
        />

        {/* Light Light 2: Soft Sky Cyan / Mint Orb (Left / Center) */}
        <div
          className="absolute rounded-full filter blur-[110px] sm:blur-[150px] animate-ambient-shift-1"
          style={{
            width: "56vw",
            height: "56vw",
            minWidth: "360px",
            minHeight: "360px",
            maxWidth: "800px",
            maxHeight: "800px",
            left: "5%",
            top: "16%",
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.24) 0%, rgba(125, 211, 252, 0.12) 48%, rgba(186, 230, 253, 0.04) 70%, transparent 80%)",
          }}
        />

        {/* Light Light 3: Delicate Lavender / Lilac Drift (Lower Center) */}
        <div
          className="absolute rounded-full filter blur-[110px] sm:blur-[160px] animate-ambient-shift-3"
          style={{
            width: "50vw",
            height: "50vw",
            minWidth: "320px",
            minHeight: "320px",
            maxWidth: "720px",
            maxHeight: "720px",
            left: "28%",
            top: "42%",
            background:
              "radial-gradient(circle, rgba(192, 132, 252, 0.18) 0%, rgba(216, 180, 254, 0.10) 45%, rgba(233, 213, 255, 0.03) 68%, transparent 80%)",
          }}
        />

        {/* Light Light 4: Gentle Pastel Sunbeam (Top Left subtle warm accent) */}
        <div
          className="absolute rounded-full filter blur-[90px] sm:blur-[130px] animate-ambient-shift-4"
          style={{
            width: "44vw",
            height: "44vw",
            minWidth: "280px",
            minHeight: "280px",
            maxWidth: "620px",
            maxHeight: "620px",
            left: "40%",
            top: "8%",
            background:
              "radial-gradient(circle, rgba(254, 240, 138, 0.16) 0%, rgba(253, 224, 71, 0.06) 45%, transparent 75%)",
          }}
        />
      </div>

      {/* Subtle Micro-Noise Texture to eliminate color banding on High-DPI screens */}
      <div
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
