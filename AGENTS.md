# AI Portfolio Resume — Dynamic Career Engine

**Project:** Dynamic Career Engine & AI-Portfolio  
**Role:** Strategic Personal Brand Engine  
**Status:** Draft / Ready for Implementation

---

## Table of Contents & AI Navigation Map

This file is the **primary entry point** for AI assistants (Cursor `AGENTS.md`). Use it to navigate the documentation and enforce consistency.

### Documentation Structure

| Folder | Purpose | When to Access |
|--------|---------|----------------|
| **01-Discovery** | Research, market analysis, user interviews, problem validation | When exploring user needs, validating assumptions, or understanding market context |
| **02-Frameworks** | Core philosophy (Atomic Career), ATS standards, AI constraints | When defining data models, AI prompts, or export logic |
| **03-PRDs** | Product requirements, feature specs, user flows | **Always** before implementing features—contains canonical product vision |
| **04-Architecture** | DB schema, data flow, API design | Before writing backend features, APIs, or data models |
| **05-Design** | UI/UX, wireframes, component specs | Before implementing UI or changing layouts |
| **06-Development** | Dev rules, coding standards, implementation guides | Before writing or refactoring code |
| **07-Tests** | Test strategy, test cases, ATS validation | When writing tests or validating PDF output |
| **08-Feedback** | User feedback, bugs, feature requests | When iterating based on user input |
| **09-Analytics** | Metrics, tracking, dashboards | When implementing analytics or reporting |
| **99-Archive** | Deprecated docs, historical decisions | Reference only—do not use for active development |

---

## Strict AI Access Rules

1. **Before writing a new backend feature:** Read development rules in `docs/06-Development` and check API architecture in `docs/04-Architecture`.
2. **Before implementing any product feature:** Read the PRD in `docs/03-PRDs/PRD.md` and ensure alignment with the Atomic Career philosophy in `docs/02-Frameworks`.
3. **Before designing or changing UI:** Check `docs/05-Design` for component specs and layout guidelines.
4. **Before modifying data schema or AI logic:** Consult `docs/04-Architecture` for schema and `docs/02-Frameworks` for AI constraints.
5. **Before exporting PDFs or cover letters:** Verify ATS requirements in `docs/02-Frameworks` and `docs/07-Tests`.
6. **When in doubt:** Start with `docs/README.md` for the full navigation map.
7. **Before starting work:** Check `docs/todolist.md` for next task; update `docs/process.md` when a feature is completed.
8. **When implementing a task:** Follow the **Workflow** role (`.cursor/rules/workflow.mdc`): subtasks (use subagents for parallel subtasks) → branch → implement → test (all types + build + browser) → mark completed + process summary → update docs → commit & push to GitHub.
9. **When reading env vars in server code:** Use [env.ts](env.ts) — never `process.env` directly. Add new vars to env.ts and .env.example. See `.cursor/rules/env-config.mdc`.

---

## Quick Reference: Core Concepts (from PRD)

- **Atomic Career:** Career data stored as Blocks (Experience, Project, Education, Skill, Certification). Content stored once, rendered in infinite variations.
- **AI Logic:** Does not change the truth—only optimizes packaging (synonyms, tone) to match Job Descriptions.
- **Key Tables:** Blocks, Instances (categories), Overrides (AI layer).
- **Critical Success Factors:** ATS 95%+ compatibility, <20 min manual entry, fast SEO for category pages.

---

## Central Docs

→ **[docs/README.md](docs/README.md)** — Full navigation map and folder purposes
