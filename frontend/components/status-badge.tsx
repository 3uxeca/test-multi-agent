"use client";

import type { StatusTone } from "@/lib/types";

interface StatusBadgeProps {
  tone: StatusTone;
  label: string;
}

const toneStyles: Record<StatusTone, string> = {
  smooth: "var(--status-smooth-border)|var(--status-smooth-bg)|var(--status-smooth-text)",
  moderate: "var(--status-moderate-border)|var(--status-moderate-bg)|var(--status-moderate-text)",
  crowded: "var(--status-crowded-border)|var(--status-crowded-bg)|var(--status-crowded-text)",
  info: "var(--status-info-border)|var(--status-info-bg)|var(--status-info-text)"
};

export function StatusBadge({ tone, label }: StatusBadgeProps) {
  const [borderColor, backgroundColor, color] = toneStyles[tone].split("|");

  return (
    <span
      className="inline-flex items-center rounded-full border px-4 py-2.5 text-base font-semibold leading-none tracking-tight md:px-5 md:text-lg"
      style={{ borderColor, backgroundColor, color }}
    >
      {label}
    </span>
  );
}
