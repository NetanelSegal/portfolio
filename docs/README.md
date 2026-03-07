# Documentation — Dynamic Career Engine & AI-Portfolio

**Central navigation map for the AI Portfolio Resume project.**

---

## Folder Structure & Purposes

### 01-Discovery
Research, market analysis, user interviews, and problem validation before product definition. Use when exploring user needs or validating assumptions.

### 02-Frameworks
Technical and methodological frameworks: Atomic Career model, ATS standards, AI prompt constraints. Contains the rules that govern data structure and AI behavior (e.g., "Do not invent facts. Only optimize for ATS keywords and tone.").

### 03-PRDs
Product Requirements Documents. **Canonical source** for product vision, feature specifications, user flows, and acceptance criteria. Main document: [03-PRDs/PRD.md](03-PRDs/PRD.md).

### 04-Architecture
Database schema (Blocks, Instances, Overrides tables), data flow, API design, and system components. **Single source of truth** for how data moves through the system. Contains DB schema, API contracts, and integration points.

### 05-Design
UI/UX design decisions, wireframes, component specs, and visual guidelines. Covers the internal dashboard (Vault, Category Manager, Application Workspace, Analytics) and public portfolio layout.

### 06-Development
Development rules, coding standards, implementation guides, and feature-specific documentation. Defines how to implement features, environment setup, and coding conventions.

### 07-Tests
Test strategy, unit/integration/E2E tests, and ATS validation criteria. Critical for ensuring PDF output scores 95%+ on scanners like Jobscan.

### 08-Feedback
User feedback, bug reports, feature requests, and iteration notes. Use when iterating based on real user input.

### 09-Analytics
Metrics, KPIs, tracking specifications, and performance dashboards. Covers portfolio view tracking and performance benchmarks.

### 99-Archive
Deprecated documents, superseded designs, and historical decisions. **Reference only**—do not use for active development.

---

## Tracking Files

| File | Purpose |
|------|---------|
| **[todolist.md](todolist.md)** | Task backlog: pending tasks, sprint items, checkboxes. Single source of truth for what needs to be done. |
| **[process.md](process.md)** | Implementation log: completed features, decisions made, sprint summaries. Tracks what has been built. |

---

## When to Access Each Folder

| Task | Required Reading |
|------|------------------|
| Writing a new backend feature | `06-Development`, `04-Architecture` |
| Implementing a product feature | `03-PRDs`, `02-Frameworks` |
| Designing or changing UI | `05-Design` |
| Modifying data schema or AI logic | `04-Architecture`, `02-Frameworks` |
| Exporting PDFs or cover letters | `02-Frameworks`, `07-Tests` |
| Adding analytics or tracking | `09-Analytics`, `04-Architecture` |
| Responding to user feedback | `08-Feedback`, `03-PRDs` |

---

## Project Entry Point

→ **[../AGENTS.md](../AGENTS.md)** — Main AI entry point (Cursor `AGENTS.md`) in project root
