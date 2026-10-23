"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Plus, ChevronUp, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  gradientDark: string;
  gradientLight: string;
  accentColor: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "relevamiento-y-analisis",
    title: "Relevamiento y análisis",
    description:
      "Analizo los procesos y las necesidades de la organización para definir el alcance y los objetivos del proyecto.",
    accentColor: "#3B82F6",
    gradientDark:
      "radial-gradient(circle at 60% 40%, rgba(37, 99, 235, 0.55) 0%, rgba(30, 58, 138, 0.3) 45%, rgba(10, 11, 16, 0.98) 85%)",
    gradientLight:
      "radial-gradient(circle at 60% 40%, rgba(147, 197, 253, 0.85) 0%, rgba(191, 219, 254, 0.5) 45%, rgba(241, 245, 249, 0.98) 85%)",
  },
  {
    id: "diseno-y-planificacion",
    title: "Diseño y planificación",
    description:
      "Diseño los flujos de trabajo y la estructura funcional del sistema. Organizo las etapas de desarrollo y sus entregables.",
    accentColor: "#8B5CF6",
    gradientDark:
      "radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.55) 0%, rgba(76, 29, 149, 0.3) 45%, rgba(10, 11, 16, 0.98) 85%)",
    gradientLight:
      "radial-gradient(circle at 60% 40%, rgba(196, 181, 253, 0.85) 0%, rgba(221, 214, 254, 0.5) 45%, rgba(241, 245, 249, 0.98) 85%)",
  },
  {
    id: "definicion-tecnica",
    title: "Definición técnica",
    description:
      "Defino la arquitectura, las tecnologías y las integraciones, considerando los requisitos de rendimiento, seguridad y acceso a la información.",
    accentColor: "#06B6D4",
    gradientDark:
      "radial-gradient(circle at 60% 40%, rgba(6, 182, 212, 0.55) 0%, rgba(14, 116, 144, 0.3) 45%, rgba(10, 11, 16, 0.98) 85%)",
    gradientLight:
      "radial-gradient(circle at 60% 40%, rgba(103, 232, 249, 0.85) 0%, rgba(165, 243, 252, 0.5) 45%, rgba(241, 245, 249, 0.98) 85%)",
  },
  {
    id: "desarrollo-e-implementacion",
    title: "Desarrollo e implementación",
    description:
      "Desarrollo sitios web, aplicaciones para iOS y Android, sistemas de gestión y automatizaciones, desde la interfaz hasta la lógica de negocio y la base de datos.",
    accentColor: "#10B981",
    gradientDark:
      "radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.5) 0%, rgba(37, 99, 235, 0.35) 45%, rgba(10, 11, 16, 0.98) 85%)",
    gradientLight:
      "radial-gradient(circle at 60% 40%, rgba(110, 231, 183, 0.85) 0%, rgba(147, 197, 253, 0.5) 45%, rgba(241, 245, 249, 0.98) 85%)",
  },
  {
    id: "integracion-de-inteligencia-artificial",
    title: "Integración de inteligencia artificial",
    description:
      "Integro agentes y modelos de IA con los datos y servicios del sistema para procesar consultas, ejecutar tareas y automatizar flujos de trabajo.",
    accentColor: "#D946EF",
    gradientDark:
      "radial-gradient(circle at 60% 40%, rgba(217, 70, 239, 0.55) 0%, rgba(99, 102, 241, 0.35) 45%, rgba(10, 11, 16, 0.98) 85%)",
    gradientLight:
      "radial-gradient(circle at 60% 40%, rgba(240, 171, 252, 0.85) 0%, rgba(199, 210, 254, 0.5) 45%, rgba(241, 245, 249, 0.98) 85%)",
  },
  {
    id: "mantenimiento-y-soporte-tecnico",
    title: "Mantenimiento y soporte técnico",
    description:
      "Realizo actualizaciones, monitoreo de disponibilidad, controles de seguridad y copias de respaldo. Resuelvo incidencias, optimizo el rendimiento e implemento mejoras, con informes periódicos de las tareas realizadas y el estado del sistema.",
    accentColor: "#F59E0B",
    gradientDark:
      "radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.55) 0%, rgba(180, 83, 9, 0.3) 45%, rgba(10, 11, 16, 0.98) 85%)",
    gradientLight:
      "radial-gradient(circle at 60% 40%, rgba(253, 186, 116, 0.85) 0%, rgba(254, 215, 170, 0.5) 45%, rgba(241, 245, 249, 0.98) 85%)",
  },
];

const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

// 1. Kinetic Stage Graphic: Relevamiento y análisis (Radar & Concentric Optical Focus)
function StageAnalysis() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Outer Pulse Wave */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-blue-400/40 dark:border-blue-400/30"
      />
      {/* Secondary Pulse Ring */}
      <motion.div
        animate={{ scale: [1.15, 0.95, 1.15], opacity: [0.35, 0.18, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 rounded-full border border-blue-300/40 dark:border-blue-500/20 border-dashed animate-spin-slow"
      />
      {/* Rotating Crosshair Sweeper */}
      <div className="absolute inset-10 rounded-full animate-spin-slow">
        <div className="w-full h-full relative">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60A5FA]" />
        </div>
      </div>
      {/* Floating Glass Orb Core */}
      <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white/20 dark:bg-white/[0.08] backdrop-blur-2xl border border-white/40 dark:border-white/[0.2] shadow-2xl flex items-center justify-center animate-float-slow">
        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-80 filter blur-sm animate-pulse-glow" />
        <div className="absolute inset-0 rounded-full bg-radial from-white/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// 2. Kinetic Stage Graphic: Diseño y planificación (Isometric Floating Wireframe Planes)
function StageDesign() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Ambient Halo */}
      <div className="absolute w-52 h-52 rounded-full bg-violet-500/25 filter blur-3xl animate-pulse-glow" />
      {/* Layer 1: Bottom Plane */}
      <div className="absolute w-44 h-28 sm:w-52 sm:h-32 rounded-2xl bg-white/10 dark:bg-white/[0.04] border border-violet-400/30 shadow-xl backdrop-blur-xl -rotate-12 translate-y-8 animate-float-slow-opposite" />
      {/* Layer 2: Middle Wireframe Plane */}
      <div className="absolute w-40 h-24 sm:w-48 sm:h-28 rounded-2xl bg-white/15 dark:bg-white/[0.06] border border-violet-400/50 shadow-2xl backdrop-blur-2xl rotate-6 animate-float-slow">
        <div className="p-3 flex flex-col gap-2 opacity-60">
          <div className="w-12 h-1.5 rounded-full bg-violet-400" />
          <div className="w-full h-1 rounded-full bg-violet-300/40" />
          <div className="w-3/4 h-1 rounded-full bg-violet-300/40" />
        </div>
      </div>
      {/* Layer 3: Top Floating Specular Lens */}
      <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-violet-600/40 via-purple-500/20 to-white/40 backdrop-blur-3xl border border-white/60 dark:border-white/30 shadow-2xl flex items-center justify-center -translate-y-4 animate-float-slow">
        <div className="w-10 h-10 rounded-xl bg-violet-500 shadow-[0_0_20px_#8B5CF6] opacity-80" />
      </div>
    </div>
  );
}

// 3. Kinetic Stage Graphic: Definición técnica (Architecture Graph & Polyhedral Core)
function StageArchitecture() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Outer Rotating Node Circuit */}
      <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-cyan-400/20 dark:border-cyan-400/20 animate-spin-slow">
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]" />
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]" />
      </div>
      {/* Reverse Circuit */}
      <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-cyan-300/30 dark:border-cyan-500/20 border-dashed animate-spin-slow-reverse" />
      {/* Prismatic Architecture Core */}
      <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-white/20 dark:bg-white/[0.08] backdrop-blur-2xl border border-white/50 dark:border-white/[0.2] shadow-2xl flex items-center justify-center rotate-45 animate-float-slow">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_30px_#06B6D4] opacity-85" />
      </div>
    </div>
  );
}

// 4. Kinetic Stage Graphic: Desarrollo e implementación (Dual Web/Mobile Orbital System)
function StageDevelopment() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Ambient Emerald Bloom */}
      <div className="absolute w-56 h-56 rounded-full bg-emerald-500/20 filter blur-3xl animate-pulse-glow" />
      {/* Orbital Ring 1 */}
      <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-emerald-400/30 animate-spin-slow">
        <div className="absolute top-2 left-6 w-7 h-7 rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
        </div>
      </div>
      {/* Orbital Ring 2 (Opposing) */}
      <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-blue-400/30 animate-spin-slow-reverse">
        <div className="absolute bottom-2 right-4 w-6 h-6 rounded-lg bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
          <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60A5FA]" />
        </div>
      </div>
      {/* Central Engineering Glass Reactor */}
      <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/25 dark:bg-white/[0.09] backdrop-blur-3xl border border-white/50 dark:border-white/[0.2] shadow-2xl flex items-center justify-center animate-float-slow">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-blue-500 opacity-80 filter blur-xs animate-pulse-glow" />
      </div>
    </div>
  );
}

// 5. Kinetic Stage Graphic: Integración de IA (Neural Synaptic Iris & Chromatic Core)
function StageAI() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Deep Fuchsia Ambient Aura */}
      <div className="absolute w-60 h-60 rounded-full bg-fuchsia-500/25 filter blur-3xl animate-pulse-glow" />
      {/* Outer Synaptic Radians */}
      <div className="absolute inset-4 rounded-full border border-fuchsia-400/25 dark:border-fuchsia-400/20 animate-spin-slow">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <span
            key={deg}
            style={{ transform: `rotate(${deg}deg) translateY(-110px)` }}
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#E879F9]"
          />
        ))}
      </div>
      {/* Multi-petal Blooming Iris */}
      <div className="absolute w-44 h-44 rounded-full border-2 border-fuchsia-400/40 animate-spin-slow-reverse border-dashed" />
      {/* Neural Core */}
      <div className="relative z-10 w-32 h-32 sm:w-38 sm:h-38 rounded-full bg-white/25 dark:bg-white/[0.08] backdrop-blur-3xl border border-white/60 dark:border-white/[0.25] shadow-2xl flex items-center justify-center animate-float-slow">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-indigo-500 shadow-[0_0_35px_#D946EF] opacity-90 animate-pulse-glow" />
      </div>
    </div>
  );
}

// 6. Kinetic Stage Graphic: Mantenimiento y soporte (Concentric Telemetry & Stability Heartbeat)
function StageMaintenance() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Amber Warmth */}
      <div className="absolute w-56 h-56 rounded-full bg-amber-500/20 filter blur-3xl animate-pulse-glow" />
      {/* Outer Telemetry Ring with Degree Ticks */}
      <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-amber-400/30 dark:border-amber-400/20 animate-spin-slow">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#FBBF24]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34D399]" />
      </div>
      {/* Middle Stability Ring */}
      <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-amber-300/40 border-dotted animate-spin-slow-reverse" />
      {/* Central Shield Sensor */}
      <div className="relative z-10 w-28 h-28 sm:w-34 sm:h-34 rounded-3xl bg-white/20 dark:bg-white/[0.08] backdrop-blur-3xl border border-white/50 dark:border-white/[0.2] shadow-2xl flex items-center justify-center rotate-12 animate-float-slow">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-400 to-emerald-400 shadow-[0_0_25px_#F59E0B] opacity-85" />
      </div>
    </div>
  );
}

export default function WorkProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const goToNext = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
  }, []);

  // Apple HIG Full Keyboard Access
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveStep(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveStep(PROCESS_STEPS.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const currentStep = PROCESS_STEPS[activeStep];
  const activeGradient = isDark ? currentStep.gradientDark : currentStep.gradientLight;

  return (
    <section
      ref={containerRef}
      aria-label="Cómo Trabajo."
      className="relative z-10 w-full py-16 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto"
    >
      {/* Título Oficial: Cómo Trabajo. */}
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: APPLE_EASE }}
        className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans text-center mb-10 sm:mb-16"
      >
        Cómo Trabajo.
      </motion.h2>

      {/* Contenedor Showcase Estilo Apple Explorer con Liquid Glass */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: APPLE_EASE }}
        className="relative rounded-3xl sm:rounded-[32px] bg-slate-100/95 dark:bg-[#0c0d12] border border-slate-200/80 dark:border-white/[0.08] shadow-2xl p-5 sm:p-8 md:p-10 backdrop-blur-2xl"
      >
        {/* Detalle Superior Modal Apple (Botón decorativo X) */}
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20">
          <div
            aria-hidden="true"
            className="w-8 h-8 rounded-full bg-slate-200/70 dark:bg-white/[0.08] flex items-center justify-center text-slate-500 dark:text-white/60 transition-transform hover:scale-105"
          >
            <X className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Navegación y Lista Vertical (Chevrons + Píldoras / Tarjeta Activa) */}
          <div className="lg:col-span-5 flex items-start gap-3 sm:gap-4 order-2 lg:order-1">
            
            {/* Botones de navegación Chevron Up / Down (44x44pt mínimo Apple HIG) */}
            <div
              className="flex flex-col gap-2 shrink-0 pt-1"
              role="group"
              aria-label="Navegación entre pasos"
            >
              <motion.button
                type="button"
                onClick={goToPrev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Anterior"
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white dark:bg-[#1a1b22] hover:bg-slate-50 dark:hover:bg-[#252732] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ChevronUp className="w-4 h-4" />
              </motion.button>
              <motion.button
                type="button"
                onClick={goToNext}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Siguiente"
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white dark:bg-[#1a1b22] hover:bg-slate-50 dark:hover:bg-[#252732] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Lista Vertical de Píldoras y Tarjeta Activa */}
            <div
              className="flex-1 flex flex-col gap-2.5 sm:gap-3"
              role="tablist"
              aria-label="Cómo Trabajo pasos"
            >
              {PROCESS_STEPS.map((step, idx) => {
                const isSelected = idx === activeStep;

                if (isSelected) {
                  // Tarjeta Activa estilo Apple con Border Beam de 21st.dev
                  return (
                    <motion.div
                      key={step.id}
                      id={`panel-${step.id}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${step.id}`}
                      layout
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      className="relative p-5 sm:p-6 rounded-[22px] bg-white dark:bg-[#1c1d24] border-2 border-blue-500 dark:border-blue-400 shadow-xl dark:shadow-[0_0_30px_rgba(59,130,246,0.22)] overflow-hidden"
                    >
                      {/* 21st.dev Border Shimmer Ambient Beam */}
                      <div className="absolute inset-0 pointer-events-none rounded-[20px] bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/5 opacity-60" />

                      <p className="relative z-10 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-normal">
                        <strong className="font-bold text-slate-900 dark:text-white mr-1.5">
                          {step.title}.
                        </strong>
                        {step.description}
                      </p>
                    </motion.div>
                  );
                }

                // Píldora Cerrada estilo Apple: (+) Título con rotación elástica en hover
                return (
                  <motion.button
                    key={step.id}
                    id={`tab-${step.id}`}
                    role="tab"
                    aria-selected={false}
                    aria-controls={`panel-${step.id}`}
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ x: 3, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group min-h-[44px] w-full px-4 py-2.5 rounded-full flex items-center gap-3 bg-white/70 dark:bg-[#16171d]/90 hover:bg-white dark:hover:bg-[#20212a] border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.16] transition-colors duration-150 cursor-pointer text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <motion.span
                      whileHover={{ rotate: 90, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      className="w-5 h-5 rounded-full border border-slate-400/60 dark:border-white/30 flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
                    >
                      <Plus className="w-3 h-3 stroke-[2.5]" />
                    </motion.span>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

          </div>

          {/* Escenario Visual de Gradientes Kinéticos (7 cols en desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl sm:rounded-[26px] overflow-hidden border border-slate-200/60 dark:border-white/[0.06] bg-slate-200/40 dark:bg-[#07080b] shadow-inner transition-colors duration-500 flex items-center justify-center">
              
              {/* Degradado Ambiental Dinámico según el paso activo */}
              <motion.div
                key={`gradient-${activeStep}-${theme}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: APPLE_EASE }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: activeGradient,
                }}
              />

              {/* Composición Kinética Específica por Fase (AnimatePresence) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`stage-${currentStep.id}-${theme}`}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
                  transition={{ duration: 0.5, ease: APPLE_EASE }}
                  className="relative z-10 w-full h-full flex items-center justify-center p-6"
                >
                  {activeStep === 0 && <StageAnalysis />}
                  {activeStep === 1 && <StageDesign />}
                  {activeStep === 2 && <StageArchitecture />}
                  {activeStep === 3 && <StageDevelopment />}
                  {activeStep === 4 && <StageAI />}
                  {activeStep === 5 && <StageMaintenance />}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
