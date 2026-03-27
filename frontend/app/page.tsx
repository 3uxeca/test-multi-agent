"use client";

import { useEffect, useState } from "react";
import { AirportSwitcher } from "@/components/airport-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { WaitTimeCard } from "@/components/wait-time-card";
import { getAirportProfiles } from "@/lib/airport-data";
import { defaultLocale, getTranslations } from "@/lib/i18n";
import type { AirportCode, ThemeMode, Locale } from "@/lib/types";

const initialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const initialLocale = (): Locale => {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem("locale");
  if (stored === "ko" || stored === "en") return stored;
  return defaultLocale;
};

export default function HomePage() {
  const [airportCode, setAirportCode] = useState<AirportCode>("GMP");
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [locale, setLocale] = useState<Locale>(() => initialLocale());
  const t = getTranslations(locale);

  useEffect(() => {
    setTheme(initialTheme());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const airportProfiles = getAirportProfiles(locale);
  const airport = airportProfiles[airportCode];
  const hasCheckpoints = airport.checkpoints.length > 0;

  return (
    <main className="min-h-screen bg-[color:var(--bg-surface)] text-[color:var(--text-primary)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <header className="sticky top-4 z-20 rounded-[30px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-end gap-2">
              <LanguageSwitcher value={locale} onChange={setLocale} labels={t.languageSwitcher} />
              <ThemeToggle value={theme} onChange={setTheme} labels={t.themeToggle} />
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="max-w-4xl">
                <p className={[
                  "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
                  locale === "ko" ? "tracking-normal" : "uppercase tracking-[0.28em]"
                ].join(" ")}>
                  {t.page.kicker}
                </p>
                <h1 className="mt-3 font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.8rem]">
                  {t.page.title}
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <AirportSwitcher
                  value={airportCode}
                  onChange={setAirportCode}
                  labels={t.airportSwitcher}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </header>

        <section className="mt-6 grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.86fr)_minmax(320px,0.64fr)] xl:gap-5">
          <div className="flex flex-col gap-5">
            <WaitTimeCard airport={airport} locale={locale} labels={t.waitTimeCard} />

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-6 sm:p-7">
                <p className={[
                  "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
                  locale === "ko" ? "tracking-normal" : "uppercase tracking-[0.24em]"
                ].join(" ")}>
                  {t.page.airportContextTitle}
                </p>
                <p className="mt-4 font-display text-3xl font-semibold tracking-tight">{airport.code}</p>
                <p className="mt-3 text-base leading-7 text-[color:var(--text-secondary)] sm:text-[17px]">
                  {t.page.airportContextBody}
                </p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-6 sm:p-7">
                <p className={[
                  "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
                  locale === "ko" ? "tracking-normal" : "uppercase tracking-[0.24em]"
                ].join(" ")}>
                  {t.page.quickStatusTitle}
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--text-primary)]">{airport.status}</p>
                <p className="mt-3 text-base leading-7 text-[color:var(--text-secondary)] sm:text-[17px]">
                  {t.page.quickStatusBody}
                </p>
              </div>
            </section>
          </div>

          <aside className="grid content-start gap-3 xl:pl-1">
            <section className="rounded-[28px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-4 sm:p-5">
              <p className={[
                "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
                locale === "ko" ? "tracking-normal" : "uppercase tracking-[0.2em]"
              ].join(" ")}>
                {t.page.checkpointsTitle}
              </p>
              {hasCheckpoints ? (
                <div className="mt-3 grid gap-2.5">
                  {airport.checkpoints.map((checkpoint) => (
                    <div
                      key={checkpoint.name}
                      className="rounded-[20px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] p-3.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[1rem] font-semibold tracking-tight">{checkpoint.name}</p>
                          <p className="mt-1 text-[14px] leading-6 text-[color:var(--text-secondary)]">{checkpoint.note}</p>
                        </div>
                        <p className="shrink-0 text-[14px] font-semibold tracking-tight text-[color:var(--text-primary)]">{checkpoint.wait}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-3 rounded-[20px] border border-dashed border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] p-4">
                  <p className="text-[15px] font-semibold text-[color:var(--text-primary)]">{t.page.checkpointsEmptyTitle}</p>
                  <p className="mt-2 text-[14px] leading-6 text-[color:var(--text-secondary)]">{t.page.checkpointsEmptyBody}</p>
                </div>
              )}
            </section>

            <section className="rounded-[28px] border border-[color:var(--border-subtle)] bg-[color:var(--bg-card)] p-4 sm:p-5">
              <p className={[
                "text-sm font-semibold text-[color:var(--text-secondary)] sm:text-[15px]",
                locale === "ko" ? "tracking-normal" : "uppercase tracking-[0.2em]"
              ].join(" ")}>
                {t.page.layoutNotesTitle}
              </p>
              <ul className="mt-3 space-y-2.5 text-[14px] leading-6 text-[color:var(--text-secondary)]">
                {t.page.layoutNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
