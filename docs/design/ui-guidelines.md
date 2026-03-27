# UI Guidelines

## Purpose
This UI is a public-facing departure wait-time guidance screen for `GMP` and `PUS`. It must be readable at a glance, resilient across mobile to desktop, and equally clear in light and dark mode.

## Core Principles
- Put the current wait time first.
- Make operational status impossible to miss.
- Keep airport-specific differences config-driven, not visually hardcoded.
- Prefer large type, short labels, and strong contrast.
- Design for quick scanning by travelers who may be moving or standing at a distance.

## Information Hierarchy
1. Airport and terminal context.
1. Current wait time.
1. Status state.
1. Last updated time.
1. Supporting details such as checkpoints or notes.

## Layout Rules
- Use a stable top area for airport, language, and theme controls.
- Reserve the center for the wait-time hero content.
- Place secondary details below the fold on mobile and in a side rail on desktop.
- Keep visual density low; do not crowd status, time, and metadata into one block.

## Responsive Behavior
- Mobile: stacked sections, full-width cards, minimal chrome.
- Tablet: primary content remains centered with optional supporting panel.
- Desktop: wider grid with a dominant hero card and supporting details in columns.
- Prevent layout shifts when switching airport, language, or theme.

## State Visibility
The UI must explicitly account for:
- loading
- empty
- error
- stale data
- maintenance

### State Priorities
- Loading should show structured placeholders, not blank space.
- Empty should explain what is unavailable and what the user can still do.
- Error should identify the failure and offer retry or fallback guidance.
- Stale data should clearly show that the data is old and may be less reliable.
- Maintenance should replace normal content with a concise service notice.

## Theme Rules
- Light mode should favor bright surfaces and restrained borders.
- Dark mode should favor deep neutral backgrounds and muted surfaces.
- Both themes must preserve readable contrast for large numeric values and supporting text.
- Do not use theme as decoration; use it to preserve legibility in different environments.

## Copy Rules
- Keep airport names localized where possible.
- Use consistent terminology for wait time and operational status.
- Avoid long paragraphs; use short labels and concise helper text.
- Use one primary action per state.
