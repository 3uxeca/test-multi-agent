# Components

## Design Tokens as Component Inputs
Every component should consume the same base tokens for color, spacing, radius, typography, and state.
Component styling must not encode airport-specific behavior.

## WaitTimeCard
Primary hero component for the current wait time.

### Content
- title
- value
- unit
- status
- lastUpdated
- note

### States
- default
- loading
- empty
- error
- stale
- maintenance

### Notes
- Value must be visually dominant.
- Status should be visible without requiring color interpretation.
- Works as a compact card on mobile and a larger hero panel on desktop.

## StatusBadge
Compact indicator for operational status.

### Variants
- smooth
- moderate
- crowded
- info

### Behavior
- Always pair badge text with a tone or icon.
- Support both dense and spacious layouts.

## AirportSelector
Airport switcher for GMP and PUS.

### Behavior
- Must clearly show the active airport.
- Should support compact display on mobile and richer display on desktop.
- Selection changes should preserve page state where possible.

## LanguageSelector
Language switching control.

### Behavior
- Must show the currently active language.
- Keep labels short so the control stays usable in narrow viewports.

## ThemeToggle
Light and dark mode switch.

### Behavior
- Must be obvious and accessible in both themes.
- Should not compete with the main wait-time content.

## RefreshStatus
Small utility component for freshness and last updated metadata.

### Content
- lastUpdated
- freshnessLabel
- refreshHint

### States
- fresh
- stale
- syncing

## ErrorNotice
Used when the data source or display state fails.

### Content
- title
- message
- retryAction
- fallbackHint

## MaintenanceNotice
Used when the service is intentionally unavailable.

### Content
- title
- message
- expectedReturn
- alternativeGuidance

## CheckpointList
Supporting list for checkpoint or step-based context.

### Behavior
- Keep entries short.
- Collapse gracefully on mobile.
- Preserve readability with generous spacing and simple separators.
