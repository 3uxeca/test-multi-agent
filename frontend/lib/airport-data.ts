import { defaultLocale, getTranslations } from "@/lib/i18n";
import type { AirportCode, AirportProfile, Locale } from "@/lib/types";

export function getAirportProfiles(locale: Locale = defaultLocale): Record<AirportCode, AirportProfile> {
  return getTranslations(locale).airports;
}

export const airportProfiles = getAirportProfiles();
