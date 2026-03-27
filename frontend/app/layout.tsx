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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var root=document.documentElement;var storedTheme=localStorage.getItem("theme");var theme=storedTheme==="light"||storedTheme==="dark"?storedTheme:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");root.dataset.theme=theme;root.style.colorScheme=theme;var storedLocale=localStorage.getItem("locale");root.lang=storedLocale==="en"||storedLocale==="ko"?storedLocale:"${defaultLocale}";}catch(e){}})();`
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
