# Task Backlog — Dynamic Career Engine

Single source of truth for pending tasks. Update checkboxes when tasks are completed; log completions in [process.md](process.md).

---

## Epic 1: Foundation (Sprint 0–1)

- [x] **S0.1** Set up Next.js, Prisma, PostgreSQL, Tailwind, shadcn, Storybook
- [x] **S0.2** Define Prisma schema: Blocks, Instances, Overrides (per PRD §6.1)
- [ ] **S0.3** Auth: protect `/admin/` routes
- [ ] **S0.4** Basic layout: dashboard shell + public portfolio shell

## Epic 2: The Vault (Sprint 2–3)

- [ ] **V1** CRUD for Blocks (Experience, Project, Education, Skill, Certification)
- [ ] **V2** Tag input (multi-select, autocomplete)
- [ ] **V3** Media: images, GitHub links, YouTube embeds
- [ ] **V4** Visibility toggle (hide/show without delete)
- [ ] **V5** List/filter blocks by type and tags

## Epic 3: Category Manager (Sprint 4)

- [ ] **C1** CRUD for Instances (category_slug, seo_title, seo_desc)
- [ ] **C2** Tag-to-category mapping (e.g. #UX → /design)
- [ ] **C3** Public route `/[slug]` with tag-based filtering
- [ ] **C4** Dynamic meta tags per category (SEO)

## Epic 4: PDF-to-Vault Importer (Sprint 5) — Critical CSF

- [ ] **I1** Upload PDF endpoint + storage
- [ ] **I2** Parse PDF text (pdf-parse)
- [ ] **I3** LLM extraction: map text to block types and fields
- [ ] **I4** Bulk create blocks with review/edit UI
- [ ] **I5** Target: seed Vault in under 20 minutes

## Epic 5: AI Application Engine (Sprint 6–7)

- [ ] **A1** JD Parser: paste JD → extract keywords (skills, tools, values) via structured output
- [ ] **A2** Override suggestions: compare blocks to JD, propose synonym edits
- [ ] **A3** Approve/reject overrides UI
- [ ] **A4** Overrides table: store instance_id, block_id, modified_body
- [ ] **A5** Cover Letter Architect: 3-paragraph generator (hook, evidence from 2 blocks, CTA)

## Epic 6: Export Engine (Sprint 8)

- [ ] **E1** ATS-optimized PDF layout (React-PDF, simple structure, no images in critical path)
- [ ] **E2** Apply overrides when rendering PDF
- [ ] **E3** Cover letter PDF
- [ ] **E4** Bundle export: .zip with CV + cover letter
- [ ] **E5** Validate with Jobscan (target 95%+)

## Epic 7: Analytics & Polish (Sprint 9)

- [ ] **AN1** Track portfolio/category views
- [ ] **AN2** `/admin/stats` dashboard
- [ ] **AN3** Performance: category pages load fast (Core Web Vitals)

## Epic 8: Monetization (Sprint 10+)

- [ ] **M1** Tier logic: Free (1 category, basic PDF, no AI) vs Pro vs Elite
- [ ] **M2** Stripe integration for Pro/Elite
- [ ] **M3** AI usage limits (Pro: 10/mo, Elite: unlimited)
- [ ] **M4** Custom domain (Elite)
