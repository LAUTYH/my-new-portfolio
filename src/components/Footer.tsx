"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom,2.5rem))] px-6 text-center border-t border-slate-200/60 dark:border-white/[0.06]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-slate-600 dark:text-slate-400"
      >
        <Link
          href="/"
          className="font-extrabold text-sm text-slate-900 dark:text-slate-200 tracking-tight font-sans hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          LTYH
        </Link>
        <p className="font-normal tracking-normal text-slate-600 dark:text-slate-400">
          © 2026 Lautaro Olmos · Full Stack AI Developer. Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
