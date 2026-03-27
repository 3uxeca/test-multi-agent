export type AirportCode = "GMP" | "PUS";
export type ThemeMode = "light" | "dark";
export type StatusTone = "smooth" | "moderate" | "crowded" | "info";
export type Locale = "ko" | "en";

export interface CheckpointInfo {
  name: string;
  wait: string;
  note: string;
}

export interface AirportProfile {
  code: AirportCode;
  name: string;
  terminalLabel: string;
  waitTime: string;
  waitLabel: string;
  status: string;
  tone: StatusTone;
  freshnessLabel: string;
  updatedAt: string;
  summary: string;
  note: string;
  checkpoints: CheckpointInfo[];
}
