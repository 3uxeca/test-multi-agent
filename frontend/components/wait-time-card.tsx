"use client";

import type { AirportProfile, Locale } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";
import type { WaitTimeCardText } from "@/lib/i18n/types";

interface WaitTimeCardProps {
  airport: AirportProfile;
  locale: Locale;
  labels: WaitTimeCardText;
}

export function WaitTimeCard({ airport, locale, labels }: WaitTimeCardProps) {
  const isKorean = locale === "ko";
  const dataState = airport.dataState ?? "default";
  const isStateScreen = dataState === "loading" || dataState === "empty" || dataState === "error" || dataState === "maintenance";
  const staleCopy = labels.mainStates.stale;

  if (isStateScreen) {
    const stateCopy = labels.mainStates[dataState];

    return (
      <section className="overflow-hidden rounded-[34px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-6 shadow-glow md:p-8 lg:p-10">
        <div className="flex min-h-[420px] flex-col justify-between gap-8 rounded-[30px] bg-[color:var(--bg-surface)] p-6 md:p-8">
          <div>
            <p className={[
              "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
              isKorean ? "tracking-normal" : "uppercase tracking-[0.16em]"
            ].join(" ")}>
              {airport.terminalLabel}
            </p>
            <h2 className="mt-4 max-w-3xl text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[color:var(--text-primary)] md:text-[3.3rem]">
              {stateCopy.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[color:var(--text-secondary)] md:text-[17px]">
              {stateCopy.body}
            </p>
          </div>
          <div className="rounded-[22px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-5 md:p-6">
            <p className={[
              "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
              isKorean ? "tracking-normal" : "uppercase tracking-[0.14em]"
            ].join(" ")}>
              {labels.lastUpdatedLabel}
            </p>
            <p className="mt-3 text-[16px] font-semibold leading-7 text-[color:var(--text-primary)] md:text-[17px]">
              {new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
                dateStyle: "medium",
                timeStyle: "short"
              }).format(new Date(airport.updatedAt))}
            </p>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{airport.freshnessLabel}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-[34px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-6 shadow-glow md:p-8 lg:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl">
            <p className={[
              "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
              isKorean ? "tracking-normal" : "uppercase tracking-[0.18em]"
            ].join(" ")}>
              {airport.terminalLabel}
            </p>
            <h2 className="mt-3 text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[color:var(--text-primary)] md:text-[3rem] lg:text-[3.35rem]">
              {airport.name}
            </h2>
          </div>
          <StatusBadge tone={airport.tone} label={airport.status} />
        </div>

        <div className="rounded-[30px] bg-[color:var(--bg-surface)] p-6 md:p-7 lg:p-8">
          {dataState === "stale" ? (
            <div className="mb-5 rounded-[20px] border border-[color:var(--status-info-border)] bg-[color:var(--status-info-bg)] px-4 py-3">
              <p className="text-[14px] font-semibold leading-6 text-[color:var(--status-info-text)]">{staleCopy.title}</p>
              <p className="mt-1 text-[14px] leading-6 text-[color:var(--status-info-text)]/80">{staleCopy.body}</p>
            </div>
          ) : null}
          <p className={[
            "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
            isKorean ? "tracking-normal" : "uppercase tracking-[0.16em]"
          ].join(" ")}>
            {labels.waitLabel}
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-3">
            <span className="text-[5.3rem] font-semibold leading-none tracking-[-0.06em] text-[color:var(--text-primary)] sm:text-[6.4rem] lg:text-[7.6rem]">
              {airport.waitTime}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[color:var(--text-secondary)] md:text-[17px]">
            {airport.summary}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[22px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] p-5 md:p-6">
            <p className={[
              "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
              isKorean ? "tracking-normal" : "uppercase tracking-[0.14em]"
            ].join(" ")}>
              {labels.lastUpdatedLabel}
            </p>
            <p className="mt-3 text-[16px] font-semibold leading-7 text-[color:var(--text-primary)] md:text-[17px]">
              {new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
                dateStyle: "medium",
                timeStyle: "short"
              }).format(new Date(airport.updatedAt))}
            </p>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{airport.freshnessLabel}</p>
          </div>
          <div className="rounded-[22px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] p-5 md:p-6">
            <p className={[
              "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
              isKorean ? "tracking-normal" : "uppercase tracking-[0.14em]"
            ].join(" ")}>
              {labels.operationalNoteLabel}
            </p>
            <p className="mt-3 text-[16px] font-semibold leading-8 text-[color:var(--text-primary)]">{airport.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
