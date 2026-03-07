# Data Schema — Dynamic Career Engine

Per PRD §6.1. Implement with Prisma.

## Blocks Table

| Field | Type | Description |
|-------|------|--------------|
| id | string (cuid/uuid) | Primary key |
| type | enum | Experience, Project, Education, Skill, Certification |
| title | string | Block title |
| body | text | Main content |
| date_start | date? | Start date (optional for some types) |
| date_end | date? | End date (optional) |
| tags | string[] | Array of tags for filtering |
| media_urls | string[] | Images, GitHub links, YouTube embeds |
| visible | boolean | Visibility toggle (hide/show without delete) |
| createdAt | datetime | |
| updatedAt | datetime | |

## Instances Table

| Field | Type | Description |
|-------|------|--------------|
| id | string (cuid/uuid) | Primary key |
| category_slug | string (unique) | URL slug (e.g. design, dev, mentor) |
| settings | json | { seo_title, seo_desc } |
| tag_ids | string[]? | Tags mapped to this category (optional; can filter by slug convention) |
| createdAt | datetime | |
| updatedAt | datetime | |

## Overrides Table (AI Layer)

| Field | Type | Description |
|-------|------|--------------|
| id | string (cuid/uuid) | Primary key |
| instance_id | string (FK) | Application/instance (e.g. "google-2024") |
| block_id | string (FK) | Block being overridden |
| modified_body | text | AI-tailored content |
| createdAt | datetime | |
| updatedAt | datetime | |

**Unique constraint:** (instance_id, block_id) — one override per block per application.
