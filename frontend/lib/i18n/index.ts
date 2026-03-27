import { en } from "@/lib/i18n/en";
import { ko } from "@/lib/i18n/ko";
import type { AppTranslations, Locale } from "@/lib/i18n/types";

export const defaultLocale: Locale = "ko";

const translations: Record<Locale, AppTranslations> = {
  ko,
  en
};

export function getTranslations(locale: Locale): AppTranslations {
  return translations[locale] ?? ko;
}
