"use client";

import type { ThemeMode } from "@/lib/types";
import type { ThemeToggleText } from "@/lib/i18n/types";

interface ThemeToggleProps {
  value: ThemeMode;
  onChange: (value: ThemeMode) => void;
  labels: ThemeToggleText;
}

export function ThemeToggle({ value, onChange, labels }: ThemeToggleProps) {
  const nextValue: ThemeMode = value === "dark" ? "light" : "dark";
  const nextLabel = value === "dark" ? labels.switchToLight : labels.switchToDark;

  return (
    <button
      type="button"
      onClick={() => onChange(nextValue)}
      aria-label={nextLabel}
      title={nextLabel}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-surface)]"
    >
      {value === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4.25" />
          <path d="M12 2.5v2.25M12 19.25v2.25M21.5 12h-2.25M4.75 12H2.5M18.72 5.28l-1.59 1.59M6.87 17.13l-1.59 1.59M18.72 18.72l-1.59-1.59M6.87 6.87L5.28 5.28" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
          <path d="M20.2 14.39A8.5 8.5 0 0 1 9.61 3.8a.75.75 0 0 0-.92-.92A9.75 9.75 0 1 0 21.12 15.3a.75.75 0 0 0-.92-.91Z" />
        </svg>
      )}
    </button>
  );
}
