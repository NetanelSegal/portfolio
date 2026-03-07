# PRD: Dynamic Career Engine & AI-Portfolio

**Version:** 1.0  
**Status:** Draft / Ready for Implementation  
**Role:** Strategic Personal Brand Engine

---

## 1. Executive Summary

The Dynamic Career Engine is a "Headless CMS" for a professional's identity. Instead of maintaining static resume files, the user maintains a single, atomic database of every professional achievement. The system then dynamically renders filtered web views (Portfolios) and generates AI-tailored documents (PDF Resumes & Cover Letters) based on specific Job Descriptions (JD).

## 2. Core Philosophy: The Atomic Career

The system treats career data as Blocks. A block can be a job, a project, a skill, or a certification.

- **Decoupled Content:** Content is stored once, but rendered in infinite variations.
- **Contextual Intelligence:** AI doesn't rewrite history; it translates terminology to match the employer's language.

## 3. Sitemap & Page Hierarchy

### A. Internal Dashboard (The Engine Room)

- **The Vault** (`/admin/vault`): The central repository. CRUD operations for all career blocks.
- **Category Manager** (`/admin/categories`): Map tags to URLs (e.g., Tag #UX maps to netanel.com/design).
- **Application Workspace** (`/admin/apply`): The "Live" area where you paste a JD and run the AI tailoring engine.
- **Analytics** (`/admin/stats`): Tracking views on your dynamic links.

### B. Public Portfolio (The Storefront)

- **Root URL** (`/`): General overview or a redirect to the primary category.
- **Category Slugs** (`/[slug]`): Filtered views (e.g., /dev, /design, /mentor).
- **Project Detail View:** Deep dive into a specific block with full media assets.

## 4. Detailed Feature Specifications

### 4.1 The Vault (Database Input)

- **Block Types:** Experience, Project, Education, Skill, Certification.
- **Smart Tagging:** Every block accepts multiple tags.
- **Media Support:** Each block can host images, GitHub links, or YouTube embeds.
- **Visibility Toggle:** Hide/Show blocks globally without deleting them.

### 4.2 Category-Based Routing (Personal Brand)

- **Dynamic Filtering:** If a user visits /design, the system queries the DB for tags CONTAINS 'design'.
- **Custom SEO:** Each category has its own Meta Title/Description.

### 4.3 The AI Application Engine (The Killer Feature)

- **JD Parser:** Extract keywords (Skills, Tools, Values) from a pasted Job Description.
- **Contextual Override (AI):** Does not change the "Truth," only the "Packaging." Replaces synonyms to match the JD.
- **The Cover Letter Architect:** Generates a 3-paragraph letter (Hook + Evidence from 2 blocks + CTA).

### 4.4 The Export Engine

- **ATS-Optimized PDF:** Machine-readable, clean-layout PDF.
- **Bundle Export:** Downloads a .zip containing the tailored CV and the Cover Letter.

## 5. User Flow: From Zero to Application

1. **Phase 1 — Seed the Vault:** User uploads CV → AI parses and populates blocks → User adds tags.
2. **Phase 2 — Establish the Brand:** User creates category, selects tags → URL goes live.
3. **Phase 3 — The Sniper Application:** User pastes JD → AI suggests edits → User approves → Downloads tailored PDF.

## 6. Technical Requirements & Data Schema

### 6.1 Data Schema (High Level)

- **Blocks Table:** id, type, title, body, date_start, date_end, tags[], media_urls[].
- **Instances Table:** id, category_slug, settings{seo_title, seo_desc}.
- **Overrides Table (AI Layer):** instance_id, block_id, modified_body.

### 6.2 The AI Logic (Prompt Engineering)

The AI must be fed:

- **System Persona:** Professional editor, non-hallucinatory.
- **Context:** The Job Description.
- **Source:** The original Vault Block content.
- **Constraint:** "Do not invent facts. Only optimize for ATS keywords and tone."

## 7. Market Analysis & Monetization

| Tier | Target | Feature Set |
|------|--------|-------------|
| Free | Students | 1 Category, Basic PDF Export, No AI |
| Pro ($15/mo) | Job Seekers | Unlimited Categories, AI Tailoring (10/mo), Custom Domain |
| Elite ($30/mo) | Freelancers | Unlimited AI Tailoring, Analytics, Priority ATS Support |

## 8. Critical Success Factors (CSFs)

- **ATS Compatibility:** PDF output must score 95%+ on scanners like Jobscan.
- **Ease of Input:** Manual entry under 20 minutes. PDF-to-Vault Importer is the most important technical hurdle.
- **SEO Performance:** Category pages must load fast.
