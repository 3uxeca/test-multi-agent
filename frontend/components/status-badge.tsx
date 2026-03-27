"use client";

import type { StatusTone } from "@/lib/types";

interface StatusBadgeProps {
  tone: StatusTone;
  label: string;
}

const toneStyles: Record<StatusTone, string> = {
  smooth: "border-emerald-500/30 bg-emerald-500/12 text-emerald-200",
  moderate: "border-amber-500/30 bg-amber-500/12 text-amber-200",
  crowded: "border-rose-500/30 bg-rose-500/12 text-rose-200",
  info: "border-sky-500/30 bg-sky-500/12 text-sky-200"
};

export function StatusBadge({ tone, label }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-4 py-2.5 text-base font-semibold leading-none tracking-tight md:px-5 md:text-lg ${toneStyles[tone]}`}>
      {label}
    </span>
  );
}
