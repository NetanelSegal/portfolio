# Design System — Dynamic Career Engine

**Status:** Complete — ready for implementation

---

## Overview

Design system for **Dynamic Career Engine** — an AI portfolio and resume app. One vault, infinite variants, AI-tailored for every role.

| Pillar | Choice |
|--------|--------|
| **Theme** | Dark (#0a0f1a bg, #49acf5 accent) |
| **Typography** | DM Sans headings, Source Sans 3 body |
| **Radius** | Soft 16–20px |
| **Elevation** | Shadow only (no borders), accent glow on hover |
| **Background** | Grain + organic blobs (5 floating, blurred) |
| **Icons** | Lucide outline, 24px |
| **Portfolio** | Project cards: Modern. Showcase: Grid. Layouts: Big headline, Statement list, Tight blocks. |

**Preview:** `design-system-creator/preview.html`

---

## 1. Foundations

### Color Palette — Dark

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | #0a0f1a | Page background |
| `--color-surface` | #0d121e | Cards, modals |
| `--color-accent` | #49acf5 | CTAs, links, highlights |
| `--color-text` | #f8fafc | Body text |
| `--color-text-muted` | #94a3b8 | Secondary text |
| `--color-border` | #1e293b | Borders, dividers |

### Typography

| Role | Font | Weights |
|------|------|---------|
| Headings | DM Sans | 400, 600, 700 |
| Body | Source Sans 3 | 400, 600, 700 |

### Spacing — 4px base

| Token | Value | Token | Value |
|-------|-------|-------|-------|
| --space-1 | 4px | --space-6 | 32px |
| --space-2 | 8px | --space-8 | 48px |
| --space-3 | 12px | --space-10 | 64px |
| --space-4 | 16px | --space-12 | 96px |
| --space-5 | 24px | | |

### Border Radius — Soft

| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 16px | Tags, badges |
| --radius-md | 18px | Inputs, tabs |
| --radius-lg | 20px | Cards, buttons |

### Elevation & Shadows

| Token | Usage |
|-------|-------|
| --shadow-1 | Cards, stats |
| --shadow-2 | Dropdowns, popovers |
| --shadow-3 | Modals |
| --shadow-accent | Hover on buttons, cards |
| --shadow-focus | Focus ring (inputs, buttons) |

**Borders:** Shadow only — no borders on cards/inputs. Dividers: 1px solid.

### Background & Effects

- **Grain:** SVG feTurbulence noise overlay
- **Organic blobs:** 5 floating, blurred, staggered animation (10–15s). Respects `prefers-reduced-motion`.
- **Header:** Glassmorphism (`backdrop-filter: blur(12px)`)
- **Hover:** Cards/buttons scale 1.02, accent shadow

### Iconography

**Lucide** — outline, 24px, stroke 2. Usage: `<i data-lucide="icon-name" width="24" height="24"></i>` + `lucide.createIcons();`

### Image Style

- **Sizes:** Thumbnail 400×400, Preview 1200×800, Full 2400×1600
- **Aspect ratios:** 16:9, 4:3, 1:1. `object-fit: cover` for fill.
- **Treatment:** None (raw, full color)

---

## 2. Components

| Component | Variants | Usage |
|-----------|----------|-------|
| **Button** | Primary, Secondary, Ghost | CTAs, actions |
| **Input** | Default | Text fields |
| **Alert** | Accent pill | AI suggestions, feedback |
| **Card** | Default | Vault blocks |
| **Tag** | Default, Accent | Skills, categories |
| **Tabs** | Pill-style | Filter by block type |
| **Chips** | Default, Accent | Category links (/dev, /design) |
| **Stats** | Dark strip | 95%+ ATS, &lt;20m Entry |
| **Avatar** | sm/default/lg | User, author |
| **Badge** | Dot on avatar | Online, active |
| **Dropdown** | Shadow-2 menu | Actions, filters |
| **Modal** | Backdrop blur, scale-in | Confirm, forms |

---

## 3. Portfolio

### Project Card — Modern (chosen)

| Class | Use |
|-------|-----|
| `project-card project-card--modern` | Main portfolio grid. Overlap + full-bleed, gradient overlay. |

**HTML:** `.project-card__media` (img) + `.project-card__body` (title, meta, desc, tags)

### Other Card Variants

| Class | Use |
|-------|-----|
| `project-card` (no modifier) | Default: image on top, body below |
| `project-card--compact` | Title, meta, tags only. Dense lists. |
| `project-card--featured` | Hero: image + body side-by-side |
| `project-card` (no media) | Text-only |

### Showcase

- **Grid:** `.showcase-grid` + `.showcase-grid--modern` for modern cards

### Layouts

| Layout | Class | Use |
|--------|-------|-----|
| Big headline | `.layout-modern` | Hero + compact grid below |
| Statement list | `.layout-statement-list` | Big titles + meta, editorial |
| Tight blocks | `.layout-tight-blocks` | Bold headline, 2-col compact grid |

Max-width 640–720px.

---

## 4. Patterns

| Pattern | Usage |
|---------|-------|
| **Form + Validation** | Input, label, error; `aria-invalid`, `aria-describedby` |
| **Empty State** | Icon + title + message + CTA |
| **Loading** | Skeleton for cards |
| **Navigation** | Header (logo + links), Sidebar, Breadcrumbs |
| **Decorative** | Organic blobs + grain |

---

## 5. Layouts

- **Personal site:** Grid — uniform cards, auto-fill
- **Dashboard:** Bento — asymmetric grid

---

## Files

| File | Purpose |
|------|---------|
| `design-system.md` | This file — full spec |
| `design-system-creator/preview.html` | Live preview of all design decisions |
| `design-system-creator/assets/style.css` | Component styles |
