"use client";

import React from "react";
import { Smartphone, Monitor, WifiOff, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export default function MockupFitnessPlatform() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.09] bg-gradient-to-b from-slate-100/90 to-slate-200/60 dark:from-[#11131a] dark:to-[#0a0c10] p-4 sm:p-6 shadow-xl">
      {/* Banner de Estado Dual: Mobile + Web */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200/80 dark:border-white/[0.06] text-xs font-mono">
        <div className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
          <Smartphone className="w-4 h-4" />
          <span>React Native Expo</span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-violet-600 dark:text-violet-400 font-medium">
          <Monitor className="w-4 h-4" />
          <span>Panel Web Vite · Supabase RLS</span>
        </div>
      </div>

      {/* Grid de Dispositivos (Mobile Phone + Web Panel) */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        
        {/* Mockup Móvil (iOS / Android) */}
        <div className="sm:col-span-5 rounded-2xl bg-white dark:bg-[#181a24] border-2 border-slate-300 dark:border-slate-700/80 p-3 shadow-lg">
          {/* Dynamic Island / Notch */}
          <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Badge Offline-First */}
          <div className="mb-2.5 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-700 dark:text-amber-300 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 font-mono">
              <WifiOff className="w-3 h-3" /> Offline Ready
            </span>
            <span className="text-[9px] font-semibold">Cola SQLite</span>
          </div>

          {/* Tarjeta de Rutina Diaria */}
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.05]">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-slate-900 dark:text-white">Sentadilla Profunda</span>
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">4 x 10 · 80kg</span>
              </div>
              <div className="flex gap-1.5 mt-1.5">
                {[1, 2, 3].map((s) => (
                  <span key={s} className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-[9px] font-mono flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> S{s}
                  </span>
                ))}
                <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/[0.08] text-slate-500 text-[9px] font-mono">
                  S4 (Pend.)
                </span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.05] flex justify-between items-center text-[11px]">
              <span className="text-slate-600 dark:text-slate-300">Estado de Membresía</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">Al Día</span>
            </div>
          </div>
        </div>

        {/* Mockup Panel Web Administrativo */}
        <div className="sm:col-span-7 rounded-xl bg-white dark:bg-[#161821] border border-slate-200/90 dark:border-white/[0.08] p-3 shadow-md">
          {/* Header de Ventana Web */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-white/[0.06] text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-[10px] text-slate-400">admin-dashboard.app</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] text-blue-500 font-mono">
              <ShieldCheck className="w-3 h-3" /> RLS Activo
            </span>
          </div>

          {/* Mini Tabla Administrativa */}
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-violet-500" />
                <span className="font-medium text-slate-800 dark:text-slate-200">Asignación de Rutinas</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Separación Plan / Ejecución</span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-white/[0.03]">
              <span className="text-slate-700 dark:text-slate-300">Control de Pagos & Membresías</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[10px] font-mono">Automático</span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-white/[0.03]">
              <span className="text-slate-700 dark:text-slate-300">Sincronización Supabase Cloud</span>
              <span className="text-blue-500 text-[10px] font-mono">Edge Functions</span>
            </div>
          </div>
        </div>

      </div>

      {/* Sugerencia / Lugar de Imagen según requerimiento del usuario */}
      <div className="mt-4 pt-3 border-t border-dashed border-slate-300/80 dark:border-white/[0.1] text-center">
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
          📍 <strong>Lugar de Imagen / Mockup:</strong> Vista dual de Smartphone (React Native Expo) + Panel Web Administrativo (Tailwind/Vite)
        </span>
      </div>
    </div>
  );
}
