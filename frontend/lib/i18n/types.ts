import type { AirportCode, AirportProfile, Locale } from "@/lib/types";

export interface AirportSwitcherText {
  ariaLabel: string;
  gmpHint: string;
  pusHint: string;
}

export interface ThemeToggleText {
  switchToLight: string;
  switchToDark: string;
}

export interface LanguageSwitcherText {
  ariaLabel: string;
  koLabel: string;
  enLabel: string;
}

export interface WaitTimeCardText {
  waitLabel: string;
  lastUpdatedLabel: string;
  operationalNoteLabel: string;
  mainStates: MainStatesText;
}

export interface MainStateCopy {
  title: string;
  body: string;
}

export interface MainStatesText {
  loading: MainStateCopy;
  empty: MainStateCopy;
  error: MainStateCopy;
  stale: MainStateCopy;
  maintenance: MainStateCopy;
}

export interface PageText {
  kicker: string;
  title: string;
  airportContextTitle: string;
  airportContextBody: string;
  quickStatusTitle: string;
  quickStatusBody: string;
  checkpointsTitle: string;
  checkpointsEmptyTitle: string;
  checkpointsEmptyBody: string;
  layoutNotesTitle: string;
  layoutNotes: string[];
  mainStates: MainStatesText;
}

export interface AppTranslations {
  metadataTitle: string;
  metadataDescription: string;
  page: PageText;
  airportSwitcher: AirportSwitcherText;
  languageSwitcher: LanguageSwitcherText;
  themeToggle: ThemeToggleText;
  waitTimeCard: WaitTimeCardText;
  airports: Record<AirportCode, AirportProfile>;
}

export type { Locale };
