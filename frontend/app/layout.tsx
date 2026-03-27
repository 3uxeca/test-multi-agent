import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale, getTranslations } from "@/lib/i18n";
import "./globals.css";

const t = getTranslations(defaultLocale);

export const metadata: Metadata = {
  title: t.metadataTitle,
  description: t.metadataDescription
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
