"use client";

import React from "react";

interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] hover:bg-white dark:hover:bg-white/[0.1] transition-colors duration-150 shadow-2xs select-none">
      {label}
    </span>
  );
}
