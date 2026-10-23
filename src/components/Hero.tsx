"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// Apple Easing Curves
const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "lauolmos@outlook.es";

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="relative flex-1 min-h-[85vh] w-full flex flex-col justify-between overflow-hidden text-slate-800 dark:text-slate-100">
      
      {/* 1. Top Header / Status Bar (Apple HIG Safe Area compliant) */}
      <motion.header
        initial={{ opacity: 0, y: -16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: APPLE_EASE }}
        className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-[max(1.5rem,env(safe-area-inset-top,1.5rem))] sm:pt-8 flex items-center justify-between"
      >
        {/* Wordmark LTYH en Plus Jakarta Sans ExtraBold (800) */}
        <Link
          href="/"
          aria-label="LTYH — Inicio"
          className="group relative text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans transition-colors cursor-pointer select-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-2 py-1 -ml-2"
        >
          <span className="relative z-10 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            LTYH
          </span>
          <span className="absolute inset-0 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/10 dark:group-hover:bg-white/[0.06] transition-colors -z-0" />
        </Link>

        {/* Header Navigation & Dual-Theme Controls (Apple HIG 44x44pt hit targets) */}
        <nav aria-label="Enlaces directos y tema" className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher Button */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            aria-label={
              mounted
                ? theme === "dark"
                  ? "Cambiar a modo claro"
                  : "Cambiar a modo oscuro"
                : "Cambiar tema"
            }
            title={
              mounted
                ? theme === "dark"
                  ? "Activar modo claro"
                  : "Activar modo oscuro"
                : "Tema"
            }
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-blue-400 bg-white/70 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] rounded-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-colors duration-200 cursor-pointer backdrop-blur-md shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
              )
            ) : (
              <span className="w-4 h-4 block" />
            )}
          </motion.button>

          {/* GitHub Link */}
          <motion.a
            href="https://github.com/LAUTYH"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Perfil de GitHub @LAUTYH (abre en ventana nueva)"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white/70 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] rounded-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-colors duration-200 cursor-pointer backdrop-blur-md shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <GithubIcon className="w-4 h-4" />
          </motion.a>

          {/* LinkedIn Link */}
          <motion.a
            href="https://www.linkedin.com/in/lautaroolmos/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Perfil de LinkedIn de Lautaro Olmos (abre en ventana nueva)"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-white/70 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] rounded-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-colors duration-200 cursor-pointer backdrop-blur-md shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <LinkedinIcon className="w-4 h-4" />
          </motion.a>

          {/* Quick Contact Link */}
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Enviar correo directo a lauolmos@outlook.es"
            className="hidden sm:inline-flex min-h-[44px] items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white/70 dark:bg-white/[0.05] hover:bg-white dark:hover:bg-white/[0.1] border border-slate-200/80 dark:border-white/[0.1] rounded-full shadow-xs transition-colors duration-200 cursor-pointer backdrop-blur-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Mail className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>Contacto</span>
          </motion.a>
        </nav>
      </motion.header>

      {/* 2. Hero Main Content (Apple HIG Visual Hierarchy & Orchestrated Entrance) */}
      <main className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-28 flex flex-col items-center text-center my-auto">
        {/* Título Principal (H1): Lautaro Olmos en Plus Jakarta Sans ExtraBold (800) */}
        <motion.h1
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: APPLE_EASE }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 font-sans"
        >
          Lautaro Olmos
        </motion.h1>

        {/* Subtítulo: Full Stack AI Developer · en Plus Jakarta Sans SemiBold (600) */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.35, ease: APPLE_EASE }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6 sm:mb-8 tracking-tight font-sans"
        >
          Full Stack AI Developer{" "}
          <span className="text-blue-500 dark:text-blue-400 font-bold">·</span>
        </motion.p>

        {/* Frase corta: Plus Jakarta Sans Regular (400) con máxima legibilidad */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.45, ease: APPLE_EASE }}
          className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mb-10 sm:mb-14 text-balance"
        >
          Desarrollo sistemas de punta a punta:{" "}
          <span className="text-slate-900 dark:text-white font-medium">Web</span>,{" "}
          <span className="text-slate-900 dark:text-white font-medium">Apps Mobile (iOS/Android)</span>{" "}
          y{" "}
          <span className="font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
            automatización con AI
          </span>
          .
        </motion.p>

        {/* Botonera de Acciones con Jerarquía Apple HIG y micro-física */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.55, ease: APPLE_EASE }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 w-full"
        >
          {/* ACCIÓN PRIMARIA: Contacto por Email con botón de copia integrado */}
          <motion.div
            whileHover={{ y: -2 }}
            className="relative inline-flex items-center w-full sm:w-auto shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl"
          >
            <a
              href={`mailto:${email}`}
              aria-label="Enviar correo electrónico a lauolmos@outlook.es"
              className="inline-flex min-h-[46px] items-center justify-center gap-2.5 pl-5 pr-3 py-3 rounded-l-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-150 cursor-pointer active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Mail className="w-4 h-4 text-blue-400 dark:text-blue-600" />
              <span className="font-mono text-xs sm:text-sm tracking-tight">{email}</span>
            </a>
            <motion.button
              onClick={handleCopyEmail}
              type="button"
              whileTap={{ scale: 0.9 }}
              aria-label="Copiar correo electrónico al portapapeles"
              title="Copiar email"
              className="min-h-[46px] min-w-[46px] inline-flex items-center justify-center px-3.5 py-3 rounded-r-xl bg-slate-900 dark:bg-white text-slate-300 dark:text-slate-700 hover:text-white dark:hover:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 border-l border-slate-700/80 dark:border-slate-200 transition-colors duration-150 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 animate-in zoom-in-50" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </motion.button>
            {copiedEmail && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                className="absolute -top-11 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-[11px] font-mono shadow-2xl whitespace-nowrap border border-slate-700 dark:border-slate-700 pointer-events-none"
              >
                ¡Email copiado al portapapeles!
              </motion.div>
            )}
          </motion.div>

          {/* ACCIÓN SECUNDARIA: GitHub Link */}
          <motion.a
            href="https://github.com/LAUTYH"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Perfil de GitHub @LAUTYH (abre en ventana nueva)"
            className="group inline-flex min-h-[46px] items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] text-slate-700 dark:text-slate-200 font-medium text-sm border border-slate-200/90 dark:border-white/[0.12] shadow-xs hover:border-slate-300 dark:hover:border-white/[0.2] transition-colors duration-200 cursor-pointer backdrop-blur-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 w-full sm:w-auto"
          >
            <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
            <span>GitHub (@LAUTYH)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
          </motion.a>

          {/* ACCIÓN SECUNDARIA: LinkedIn Link */}
          <motion.a
            href="https://www.linkedin.com/in/lautaroolmos/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Perfil de LinkedIn de Lautaro Olmos (abre en ventana nueva)"
            className="group inline-flex min-h-[46px] items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] text-slate-700 dark:text-slate-200 font-medium text-sm border border-slate-200/90 dark:border-white/[0.12] shadow-xs hover:border-slate-300 dark:hover:border-white/[0.2] transition-colors duration-200 cursor-pointer backdrop-blur-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 w-full sm:w-auto"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
          </motion.a>
        </motion.div>
      </main>
    </section>
  );
}
