# AGENTS.md

## Project Overview
This project is a new system for:
Gimpo / Gimhae International Departure Wait Time Guidance Service.

This project is separate from LCAS.

## Core Requirements
- Must support GMP and PUS airports
- Must support multilingual UI
- Must support dark mode and light mode
- Must support responsive layouts (mobile, tablet, desktop)
- Must clearly display operational status and wait times

---

## Tech Stack

### Frontend
- Next.js App Router
- TypeScript
- Tailwind CSS
- React Query

### Backend
- Java Spring Boot

### Database
- PostgreSQL

### Infra
- Docker
- Nginx

---

## Architecture Principles
- Separate frontend, backend, infra clearly
- Use config-driven airport differences
- Avoid hardcoding airport-specific logic in UI
- Keep domain logic separate from UI

---

## Design Rules ⭐

- Design is AI-assisted (no external design agency)
- Define design system before building pages
- Use consistent spacing, typography, and color tokens
- Support both light and dark mode
- Ensure high readability for public display
- Prioritize clarity over decoration

### Responsive Rules
- Mobile-first design
- Must support:
  - Mobile
  - Tablet
  - Desktop

### UI States
Must explicitly handle:
- loading
- empty
- error
- stale data
- maintenance

---

## Frontend Rules

- Use reusable components
- Keep UI and business logic separate
- Use hooks/services for domain logic
- Apply design tokens consistently
- Implement theme switching (dark/light)

---

## Backend Rules

- Use layered architecture
- Externalize environment config
- Keep API contracts stable
- Provide health endpoints

---

## Database Rules

- PostgreSQL only
- Same schema across all environments
- Use migrations

---

## Infra Rules

- Local / test / prod must be similar
- Use Docker-based environments
- Document env variables

---

## Testing Rules

- Use Playwright
- Test:
  - responsive UI
  - theme switching
  - airport switching
  - API failure cases

---

## Agent Roles

### Planner Agent
- Define requirements and flows

### Design Agent ⭐
- Create UI guidelines
- Define design system
- Create wireframes
- Define components

### Frontend Agent
- Implement UI
- Apply design system

### Backend Agent
- Implement API
- Manage domain logic

### Infra Agent
- Setup environments

### QA Agent
- Write E2E tests

---

## Output Expectations

When implementing:
1. changed files
2. why changes were made
3. risks and next steps