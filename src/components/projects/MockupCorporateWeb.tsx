"use client";

import React from "react";
import { ExternalLink, Lock, FileDown, ShieldCheck, Sparkles, LayoutGrid } from "lucide-react";

interface MockupCorporateWebProps {
  type: "corporate-jabonera" | "corporate-rosquin";
  title: string;
  url: string;
}

export default function MockupCorporateWeb({ type, title, url }: MockupCorporateWebProps) {
  const isJabonera = type === "corporate-jabonera";

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.09] bg-gradient-to-b from-slate-100/90 to-slate-200/60 dark:from-[#11131a] dark:to-[#0a0c10] p-4 sm:p-6 shadow-xl">
      {/* Ventana de Navegador macOS Safari */}
      <div className="w-full rounded-xl bg-white dark:bg-[#161821] border border-slate-200/90 dark:border-white/[0.08] shadow-lg overflow-hidden">
        {/* Barra de Título y URL */}
        <div className="px-4 py-2.5 bg-slate-100/90 dark:bg-white/[0.04] border-b border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between gap-3">
          {/* Botones de Ventana Apple (Semáforo) */}
          <div className="flex items-center gap-1.5 flex-none">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>

          {/* Barra de Dirección URL Segura */}
          <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-lg bg-white dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span className="truncate">{url.replace("https://", "")}</span>
          </div>

          {/* Botón de Enlace Externo Real */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar sitio oficial de ${title} en pestaña nueva`}
            className="flex-none p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Contenido Visual Simulado del Sitio */}
        <div className="p-4 sm:p-5 space-y-4">
          {isJabonera ? (
            /* Cooperativa Jabonera Preview */
            <>
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  WordPress · CPT & ACF Dinámico
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                  Catálogo Administrable de Productos
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Estructura personalizada con taxonomías dinámicas y carrusel de desarrollo propio.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mb-1" />
                  <p className="font-semibold text-slate-900 dark:text-white">Seguridad & Caché</p>
                  <p className="text-[11px] text-slate-500">Wordfence + LiteSpeed</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05]">
                  <LayoutGrid className="w-4 h-4 text-blue-500 mb-1" />
                  <p className="font-semibold text-slate-900 dark:text-white">Mantenimiento</p>
                  <p className="text-[11px] text-slate-500">Backups & Monitoreo</p>
                </div>
              </div>
            </>
          ) : (
            /* El Rosquín Preview */
            <>
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-amber-500/20">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-700 dark:text-amber-300">
                  Next.js · Framer Motion & GSAP
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                  Líneas de Productos & Fichas Nutricionales
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Navegación cinemática fluida, desplazamiento suave con Lenis y transiciones entre páginas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05]">
                  <FileDown className="w-4 h-4 text-rose-500 mb-1" />
                  <p className="font-semibold text-slate-900 dark:text-white">Material Comercial</p>
                  <p className="text-[11px] text-slate-500">Descarga de Catálogo PDF</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05]">
                  <Sparkles className="w-4 h-4 text-amber-500 mb-1" />
                  <p className="font-semibold text-slate-900 dark:text-white">Consultas & Antispam</p>
                  <p className="text-[11px] text-slate-500">Turnstile + Resend API</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sugerencia / Lugar de Imagen según requerimiento del usuario */}
      <div className="mt-4 pt-3 border-t border-dashed border-slate-300/80 dark:border-white/[0.1] text-center">
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
          📍 <strong>Lugar de Imagen / Mockup:</strong> Vista previa de ventana Safari con enlace en vivo y métricas de producción
        </span>
      </div>
    </div>
  );
}
