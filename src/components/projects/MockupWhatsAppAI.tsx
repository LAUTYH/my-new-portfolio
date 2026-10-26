"use client";

import React from "react";
import { Bot, CheckCheck, Sparkles, MessageSquare, Database, ArrowRight } from "lucide-react";

export default function MockupWhatsAppAI() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.09] bg-gradient-to-b from-slate-100/90 to-slate-200/60 dark:from-[#11131a] dark:to-[#0a0c10] p-4 sm:p-6 shadow-xl">
      {/* Etiqueta de Arquitectura / Meta Inspired Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200/80 dark:border-white/[0.06] text-xs font-mono">
        <div className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>WhatsApp Cloud API · Coexistence</span>
        </div>
        <span className="text-slate-500 dark:text-slate-400">PostgreSQL · Neon Sync</span>
      </div>

      {/* Dispositivo / Ventana de Chat de WhatsApp */}
      <div className="w-full max-w-md mx-auto rounded-xl bg-white dark:bg-[#161821] border border-slate-200/90 dark:border-white/[0.08] shadow-lg overflow-hidden">
        {/* Header de WhatsApp */}
        <div className="px-4 py-3 bg-emerald-700 dark:bg-[#1f2c34] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 dark:bg-emerald-500/20 flex items-center justify-center text-white">
              <Bot className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">Asistente de Reservas</p>
              <p className="text-[11px] text-emerald-100/80 dark:text-emerald-300/80">Agente IA · En línea</p>
            </div>
          </div>
          <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
        </div>

        {/* Burbujas de Conversación */}
        <div className="p-4 space-y-3 bg-[#efeae2] dark:bg-[#0b141a] text-xs sm:text-[13px] min-h-[220px]">
          {/* Mensaje de Usuario */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-xs px-3.5 py-2 bg-emerald-600 text-white shadow-xs">
              <p>Hola, ¿tienen disponibilidad para este jueves a las 16 hs?</p>
              <span className="block text-[10px] text-emerald-100 text-right mt-1">15:42</span>
            </div>
          </div>

          {/* Mensaje del Agente de IA */}
          <div className="flex justify-start">
            <div className="max-w-[88%] rounded-2xl rounded-tl-xs px-3.5 py-2.5 bg-white dark:bg-[#202c33] text-slate-800 dark:text-slate-100 shadow-xs border border-slate-200/50 dark:border-transparent">
              <p className="leading-relaxed">
                ¡Hola! Consulté el <strong>motor de disponibilidad</strong> en tiempo real: el jueves a las 16:00 hs está libre.
              </p>
              <div className="mt-2 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-[11px] text-emerald-800 dark:text-emerald-300">
                ✓ Turno bloqueado temporalmente (15 min)
              </div>
              <div className="flex items-center justify-between mt-1 text-[10px] text-slate-400">
                <span>Validado por sistema</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  Confirmado <CheckCheck className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flujo de Arquitectura Técnica (Meta / Google Style) */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-mono">
        <div className="p-2 rounded-lg bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06]">
          <MessageSquare className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-500" />
          <span className="text-slate-700 dark:text-slate-300">WhatsApp API</span>
        </div>
        <div className="p-2 rounded-lg bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06]">
          <Sparkles className="w-3.5 h-3.5 mx-auto mb-1 text-blue-500" />
          <span className="text-slate-700 dark:text-slate-300">OpenAI LLM</span>
        </div>
        <div className="p-2 rounded-lg bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06]">
          <ArrowRight className="w-3.5 h-3.5 mx-auto mb-1 text-indigo-500" />
          <span className="text-slate-700 dark:text-slate-300">Reglas & Cupos</span>
        </div>
        <div className="p-2 rounded-lg bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06]">
          <Database className="w-3.5 h-3.5 mx-auto mb-1 text-violet-500" />
          <span className="text-slate-700 dark:text-slate-300">PostgreSQL</span>
        </div>
      </div>

      {/* Sugerencia / Lugar de Imagen según requerimiento de usuario */}
      <div className="mt-4 pt-3 border-t border-dashed border-slate-300/80 dark:border-white/[0.1] text-center">
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
          📍 <strong>Lugar de Imagen / Mockup:</strong> Vista previa interactiva de conversación WhatsApp + telemetría de base de datos
        </span>
      </div>
    </div>
  );
}
