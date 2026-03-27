import type { AppTranslations } from "@/lib/i18n/types";

export const en = {
  metadataTitle: "GMP / PUS Departure Wait Guidance",
  metadataDescription: "A responsive guidance screen for checking departure wait times at Gimpo and Gimhae International.",
  page: {
    kicker: "Departure Guidance",
    title: "Gimpo and Gimhae Wait-Time Dashboard",
    airportContextTitle: "Airport Context",
    airportContextBody: "Airport-specific labels and queue details stay in data so the shared layout can remain consistent.",
    quickStatusTitle: "Quick Status",
    quickStatusBody: "This is a static shell for now. It can connect to the backend later without changing the UI structure.",
    checkpointsTitle: "Checkpoints",
    layoutNotesTitle: "Layout Notes",
    layoutNotes: [
      "Mobile stacks controls above the hero card.",
      "Tablet keeps the hero centered with a visible support panel.",
      "Desktop uses a two-column layout with the hero as the focal point."
    ]
  },
  airportSwitcher: {
    ariaLabel: "Choose airport",
    gmpHint: "Gimpo",
    pusHint: "Gimhae"
  },
  languageSwitcher: {
    ariaLabel: "Choose language",
    koLabel: "KO",
    enLabel: "EN"
  },
  themeToggle: {
    switchToLight: "Switch to light",
    switchToDark: "Switch to dark"
  },
  waitTimeCard: {
    waitLabel: "Estimated wait",
    lastUpdatedLabel: "Last updated",
    operationalNoteLabel: "Operational note"
  },
  airports: {
    GMP: {
      code: "GMP",
      name: "Gimpo International",
      terminalLabel: "Domestic and short-haul departures",
      waitTime: "18 min",
      waitLabel: "Estimated wait",
      status: "Smooth flow",
      tone: "smooth",
      freshnessLabel: "Fresh now",
      updatedAt: "2026-03-27T08:45:00+09:00",
      summary: "Current movement is steady. Travelers should still allow extra time during peak commuter windows.",
      note: "Checkpoint A is moving faster than B during the morning period.",
      checkpoints: [
        { name: "Checkpoint A", wait: "12 min", note: "Fastest lane at the moment." },
        { name: "Checkpoint B", wait: "21 min", note: "Slightly slower due to higher volume." },
        { name: "Special assistance", wait: "5 min", note: "Low queue density." }
      ]
    },
    PUS: {
      code: "PUS",
      name: "Gimhae International",
      terminalLabel: "International departures focus",
      waitTime: "27 min",
      waitLabel: "Estimated wait",
      status: "Moderate crowding",
      tone: "moderate",
      freshnessLabel: "Updated 4 min ago",
      updatedAt: "2026-03-27T08:41:00+09:00",
      summary: "International departure traffic is moderate and moving consistently across the main checkpoints.",
      note: "Allow extra time for document checks before the security line.",
      checkpoints: [
        { name: "International line", wait: "24 min", note: "Primary queue for outbound travelers." },
        { name: "Fast track", wait: "9 min", note: "Limited capacity, but currently open." },
        { name: "Family service", wait: "15 min", note: "Balanced load with short bursts." }
      ]
    }
  }
} satisfies AppTranslations;
