"use client";

import type { AirportCode } from "@/lib/types";
import type { AirportSwitcherText } from "@/lib/i18n/types";

interface AirportSwitcherProps {
  value: AirportCode;
  onChange: (value: AirportCode) => void;
  labels: AirportSwitcherText;
  locale?: "ko" | "en";
}

export function AirportSwitcher({ value, onChange, labels, locale = "ko" }: AirportSwitcherProps) {
  const options: Array<{ code: AirportCode; label: string; hint: string }> = [
    { code: "GMP", label: "GMP", hint: labels.gmpHint },
    { code: "PUS", label: "PUS", hint: labels.pusHint }
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
              "rounded-full px-4 py-2.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-surface)] sm:px-5",
              active
                ? "bg-[color:var(--accent)] text-white shadow-glow"
                : "text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-surface)] hover:text-[color:var(--text-primary)]"
            ].join(" ")}
          >
            <span className={["block text-sm font-semibold sm:text-[15px]", locale === "ko" ? "tracking-normal" : "tracking-[0.12em]"].join(" ")}>
              {option.label}
            </span>
            <span className={["mt-0.5 block text-[11px] sm:text-xs", locale === "ko" ? "normal-case tracking-normal" : "uppercase tracking-[0.08em]"].join(" ")}>
              {option.hint}
            </span>
          </button>
        );
      })}
    </div>
  );
}
