# 06-Development

## Purpose
Development rules, coding standards, implementation guides, and feature-specific documentation.

**Task Tracking:** [todolist.md](../todolist.md) — Task backlog with checkboxes  
**Implementation Log:** [process.md](../process.md) — Completed features and decisions  
**Sprint Backlog:** [sprint-backlog.md](sprint-backlog.md) — Epic summary; task list in todolist.md

**Workflow Role:** `.cursor/rules/workflow.mdc` — When implementing tasks: subtasks → branch → implement → test (unit, integration, E2E, build, **Storybook**, browser) → mark completed + process summary → update docs → commit & push to GitHub.

**Storybook Rule:** `.cursor/rules/storybook.mdc` — All UI components must have Storybook stories covering all variants. Verify in Storybook before finishing component work.

Add development rules, coding standards, and implementation guides below as the project evolves.
