# Wireframes

## Main Screen

### Shared Structure
- Top bar: airport selector, language selector, theme toggle.
- Hero area: wait time, status, and a short description.
- Detail area: checkpoint list, operational notes, and last updated time.
- Utility area: refresh, retry, and help cues when needed.

### Mobile
- Header stays compact and sticky.
- Hero card occupies most of the first viewport.
- Secondary details stack below the hero.
- Controls collapse into compact buttons or segmented selectors.

### Tablet
- Header remains visible with larger control targets.
- Hero card stays centered and wider.
- Supporting details appear below in two stacked sections or a 2-column split.

### Desktop
- Header spans the top with controls aligned to the right.
- Hero card occupies the main left or center area.
- Supporting panel shows checkpoints, notes, and state messaging.
- Layout should not feel empty on wide screens; use balanced columns and restrained whitespace.

## Primary State Wireframes

### Normal
- Airport and language are visible.
- Wait time is the visual focus.
- Status badge appears next to or below the numeric time.
- Last updated time is visible but secondary.

### Loading
- Replace content with skeleton placeholders that preserve layout.
- Keep header controls visible.

### Empty
- Show a short explanation that data is unavailable.
- Preserve controls so the user can switch airport, language, or retry.

### Error
- Explain what failed in plain language.
- Provide retry and fallback guidance.

### Stale Data
- Surface a visible freshness warning.
- Keep the last known value on screen with a clear stale label.

### Maintenance
- Replace the main content with a service notice.
- Keep airport and language controls accessible.

## Airport Comparison Notes
- GMP and PUS should share the same layout structure.
- Any difference between airports should appear as content, labels, or config-driven metadata rather than layout divergence.
- The screen must still feel consistent when switching airports.
