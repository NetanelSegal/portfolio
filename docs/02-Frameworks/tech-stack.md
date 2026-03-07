# Technology Stack — Dynamic Career Engine

Based on PRD requirements: headless career CMS, AI tailoring, ATS-optimized PDF export, PDF-to-Vault import, category-based routing, and tiered monetization.

---

## Frontend

| Need | Recommendation | Rationale |
|------|-----------------|------------|
| Framework | **Next.js 14+** (App Router) | SSR for SEO (critical per CSF), API routes, dashboard + portfolio in one app |
| UI | **Tailwind CSS + shadcn/ui** | Fast iteration, accessible components, matches Vercel best practices |
| Forms | **React Hook Form + Zod** | Type-safe validation for Vault CRUD, minimal re-renders |
| PDF rendering | **@react-pdf/renderer** | React-based PDF generation, ATS-friendly (no canvas), deterministic layout |

## Backend & Data

| Need | Recommendation | Rationale |
|------|-----------------|------------|
| Database | **PostgreSQL** (Vercel Postgres, Supabase, or Neon) | Arrays for `tags[]`, JSONB for `settings`, relational integrity |
| ORM | **Prisma** | Type-safe schema, migrations, easy JSON/array support |
| Auth | **NextAuth.js** or **Clerk** | Dashboard protection, optional OAuth for Pro/Elite |
| Media storage | **Vercel Blob** or **S3** | Images, optional future file uploads |

## AI & Document Processing

| Need | Recommendation | Rationale |
|------|-----------------|------------|
| LLM | **OpenAI GPT-4o**, **Anthropic Claude**, or **xAI Grok** | Structured outputs for JD parsing, cover letter, block overrides |
| JD parsing | **Structured output** (JSON schema) | Extract skills, tools, values reliably |
| PDF parsing (CV import) | **pdf-parse** + LLM extraction | Parse uploaded CV, map to blocks (critical CSF) |
| PDF generation | **@react-pdf/renderer** | Machine-readable, clean layout, ATS 95%+ target |

### xAI Grok API — Free Tier

xAI offers **$25 free promotional credits** on signup, plus **$150/month** through their data sharing program. No unlimited free tier, but credits are sufficient for early development and low-volume testing.

- **Best value model:** grok-3-mini ($0.30 input / $0.50 output per 1M tokens) with structured output support
- **Reference:** [xAI Models & Pricing](https://docs.x.ai/developers/models)

### AI Provider Comparison

| Provider | Free Tier | Cost (approx) | Structured Output |
|----------|-----------|---------------|-------------------|
| OpenAI | Pay-as-you-go | GPT-4o: ~$2.50/1M out | Yes |
| Anthropic | Limited credits | Claude: ~$3/1M out | Yes |
| xAI Grok | $25 credits + $150/mo data sharing | grok-3-mini: $0.50/1M out | Yes |

## Infrastructure

| Need | Recommendation | Rationale |
|------|-----------------|------------|
| Hosting | **Vercel** | Next.js native, edge functions, fast category pages |
| Analytics | **Vercel Analytics** or **PostHog** | View tracking for `/admin/stats` |
| Rate limiting | **Upstash Redis** (optional) | Pro/Elite AI usage caps |

---

## AI Constraints (from PRD §6.2)

The AI must be fed:

- **System Persona:** Professional editor, non-hallucinatory
- **Context:** The Job Description
- **Source:** The original Vault Block content
- **Constraint:** "Do not invent facts. Only optimize for ATS keywords and tone."
