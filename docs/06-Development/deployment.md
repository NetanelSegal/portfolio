# Deployment — Vercel

Deployment setup for the Dynamic Career Engine. Hosting: **Vercel** (per [tech-stack.md](../02-Frameworks/tech-stack.md)).

---

## Live URLs

- **Production:** https://ai-portfolio-resume.vercel.app
- **Vercel Dashboard:** https://vercel.com/netanel-segals-projects/ai-portfolio-resume

---

## Git + GitHub Setup

### Initial Setup (one-time)

1. Create a new repository on GitHub: https://github.com/new  
   - Name: `ai-portfolio-resume` (or your preferred name)
2. Add remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio-resume.git
   git branch -M main
   git push -u origin main
   ```
3. If the remote already exists with a different URL:
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/ai-portfolio-resume.git
   git push -u origin main
   ```

### Workflow (per `.cursor/rules/workflow.mdc`)

| Step | Command / Rule |
|------|----------------|
| Create task branch | `git checkout -b task/<ID>-<slug>` (e.g. `task/S0.2-prisma-schema`) |
| Commit | `feat(<ID>): <short description>` |
| Push | `git push -u origin <branch-name>` |
| Base branch | `main` |

---

## Vercel Deployment

### Option 1: Dashboard (recommended for GitHub integration)

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**
2. **Import** your GitHub repository
3. Vercel auto-detects Next.js. Keep defaults:
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
4. Add environment variables if needed (see below)
5. Click **Deploy**

### Option 2: Vercel CLI

```bash
npm i -g vercel   # or use npx vercel
vercel login
vercel            # preview deployment
vercel --prod     # production deployment
```

### Auto-Deploy

- **Preview:** Each PR gets a unique URL
- **Production:** Pushes to `main` trigger production deploys (when GitHub is connected)

---

## Environment Variables

| Variable | When to add | Notes |
|----------|--------------|-------|
| `DATABASE_URL` | When S0.2 (Prisma schema) is implemented and app uses DB | Required for DB queries. Skip for UI-only deploys. |

### Adding env vars

1. Vercel Dashboard → Project → **Settings** → **Environment Variables**
2. Add `DATABASE_URL` for Production, Preview, Development as needed

### Database options (for future S0.2+)

- **Vercel Postgres** — Add via Vercel dashboard (Storage tab)
- **Neon** — https://neon.tech — copy connection string
- **Supabase** — https://supabase.com — copy connection string

---

## Build Verification

Before deploying, ensure build succeeds locally:

```bash
npm run build
```
