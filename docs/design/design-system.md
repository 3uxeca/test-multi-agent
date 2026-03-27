# Design System

## Intent
The design system supports a public airport guidance screen with fast readability, strong hierarchy, and predictable behavior in both light and dark mode.

## Color Tokens

### Light Mode
- `bg-surface`: warm white
- `bg-card`: off-white
- `text-primary`: near-black
- `text-secondary`: muted gray
- `border-subtle`: light neutral

### Dark Mode
- `bg-surface`: deep charcoal
- `bg-card`: slightly raised charcoal
- `text-primary`: near-white
- `text-secondary`: muted slate
- `border-subtle`: low-contrast neutral

### Status Colors
- `status-good`: green for normal flow
- `status-caution`: amber for elevated wait time
- `status-bad`: red for disruption or crowding
- `status-neutral`: blue or slate for informational states

## Typography
- Use a highly readable sans-serif system with strong numeral clarity.
- Keep the wait-time value visually dominant.
- Use short labels in medium weight.
- Avoid dense paragraph text in the main view.

## Spacing
- Base spacing scale: `4`, `8`, `12`, `16`, `24`, `32`.
- Use larger outer padding on desktop and tighter density on mobile.
- Keep vertical rhythm consistent across cards and state panels.

## Radius and Borders
- Use medium-radius cards and controls for a calm, functional feel.
- Use borders sparingly in light mode and even more sparingly in dark mode.
- Prefer surface separation through spacing and tonal contrast when possible.

## Elevation
- Use minimal shadow.
- Rely on subtle surface contrast rather than heavy depth effects.
- The main wait-time card may receive the strongest elevation signal.

## Breakpoints
- `mobile`: up to small handset widths.
- `tablet`: medium widths with room for secondary content.
- `desktop`: wide layouts with a central hero and supporting rail.

## Theme Switching Rules
- Theme state must not alter layout structure.
- Component colors should come from tokens rather than local hardcoded values.
- Status treatment must remain readable in both themes.

## Accessibility Baseline
- Maintain WCAG-conscious contrast for text and status indicators.
- Do not use color alone for meaning.
- Preserve legible font sizes at distance and on small screens.
