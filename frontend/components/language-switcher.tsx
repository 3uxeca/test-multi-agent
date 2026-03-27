"use client";

import type { Locale } from "@/lib/types";
import type { LanguageSwitcherText } from "@/lib/i18n/types";

interface LanguageSwitcherProps {
  value: Locale;
  onChange: (value: Locale) => void;
  labels: LanguageSwitcherText;
}

export function LanguageSwitcher({ value, onChange, labels }: LanguageSwitcherProps) {
  const options: Array<{ code: Locale; label: string }> = [
    { code: "ko", label: labels.koLabel },
    { code: "en", label: labels.enLabel }
  ];

  return (
    <div
      role="tablist"
      aria-label={labels.ariaLabel}
      className="inline-flex rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] p-1 shadow-sm"
    >
      {options.map((option) => {
        const active = option.code === value;

        return (
          <button
            key={option.code}
            type="button"
            onClick={() => onChange(option.code)}
            role="tab"
            aria-selected={active}
            className={[
              "min-w-12 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-surface)] sm:min-w-14 sm:px-3.5 sm:py-2",
              active
                ? "bg-[color:var(--accent)] text-white shadow-glow"
                : "text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-surface)] hover:text-[color:var(--text-primary)]"
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
