# Product Requirements

## 1. Product Summary
Gimpo / Gimhae International Departure Wait Time Guidance Service provides travelers with a clear, live view of airport departure congestion so they can decide when to arrive and how to navigate the airport.

## 2. Product Goals
- Show current departure wait-time guidance with minimal effort.
- Support both `GMP` and `PUS` with airport-specific data and labels.
- Support multilingual UI for domestic and international travelers.
- Make operational status visible at a glance.
- Work reliably on mobile, tablet, and desktop, with dark and light themes.

## 3. Non-Goals
- No trip planning, ticketing, or booking features.
- No airport navigation map in MVP.
- No personalized account, login, or saved preferences in MVP.
- No complex analytics dashboard for end users.

## 4. Primary Users
- Departing passengers checking how early to arrive.
- Airport visitors comparing congestion before leaving home.
- Staff and operations users monitoring the current service state.

## 5. Core Information Model
- Airport: `GMP` or `PUS`.
- Language: user-selected locale.
- Wait time: estimated or observed departure wait.
- Operational status: normal, busy, disrupted, or maintenance.
- Freshness: last updated time and data age.

## 6. User Flows

### 6.1 First Visit
1. User opens the service.
2. Service shows the default airport and current wait-time card.
3. User sees operational status, last updated time, and language control.

### 6.2 Switch Airport
1. User selects `GMP` or `PUS`.
2. Main content updates to the selected airport.
3. Supporting details refresh, including checkpoints or terminal-specific notes if available.

### 6.3 Switch Language
1. User selects a language.
2. All visible text updates immediately.
3. Airport and status data remain unchanged.

### 6.4 Check Current Guidance
1. User reviews the main wait-time card.
2. User checks status color and explanatory text.
3. User reads the freshness indicator before acting on the information.

### 6.5 Error or Stale State
1. If data cannot be loaded, user sees an error state with retry guidance.
2. If data is old, user sees a stale-data warning and the last successful update.
3. If airport operations are under maintenance, user sees a dedicated maintenance state.

## 7. Functional Requirements
- The service must show a primary wait-time indicator for the selected airport.
- The service must show operational status alongside the wait time.
- The service must show last updated time and data freshness.
- The service must allow airport switching between `GMP` and `PUS`.
- The service must allow language switching without page reload.
- The service must support loading, empty, error, stale, and maintenance states.
- The UI must remain readable in both light and dark modes.
- The UI must adapt cleanly across mobile, tablet, and desktop widths.

## 8. MVP Scope

### In Scope
- Main wait-time dashboard for `GMP` and `PUS`.
- Airport switcher.
- Language switcher.
- Status indicator.
- Last updated timestamp.
- Responsive layout.
- Light and dark theme support.
- Basic checkpoint or terminal detail list if data is available.

### Out of Scope
- User accounts.
- Push notifications.
- Historical trends.
- Predictive forecasting beyond current guidance.
- Airport wayfinding maps.
- Administrative configuration screens.

## 9. GMP vs PUS Differences

### 9.1 Shared Requirements
- Same product structure, same design system, same component set.
- Same status model and freshness rules.
- Same multilingual and theme behavior.

### 9.2 Airport-Specific Differences
- `GMP` and `PUS` may expose different terminal or checkpoint names.
- `GMP` and `PUS` may have different peak congestion patterns and time-of-day behavior.
- `PUS` may require more explicit international departure labeling depending on available data.
- The UI must not hardcode airport-specific copy into shared components.

### 9.3 Configuration Rules
- Airport differences must come from configuration or content data, not view logic.
- Shared UI components should receive airport-specific labels and values as props.
- If an airport lacks a data field, the UI must degrade gracefully without breaking layout.

## 10. Acceptance Criteria
- A user can load the service and immediately understand current departure wait guidance.
- A user can switch between `GMP` and `PUS` and see the page update correctly.
- A user can switch language and theme without losing the selected airport.
- The UI clearly communicates normal, busy, stale, error, and maintenance states.
- The product plan is detailed enough for design and implementation to proceed independently.
