# Authentication — Dynamic Career Engine

Per S0.3. Auth.js v5 (NextAuth) with GitHub OAuth. No User model or database.

## Approach

- **Provider:** Auth.js v5 (`next-auth@beta`)
- **Method:** GitHub OAuth only
- **Session:** JWT (no database)
- **Access control:** Email allowlist via `ALLOWED_EMAILS` env var (comma-separated)

## Protected Routes

- `/admin/*` — Admin layout checks `auth()`; redirects to `/api/auth/signin` if unauthenticated

## Flow

1. User visits `/admin` → layout calls `auth()`
2. No session → redirect to `/api/auth/signin`
3. User signs in with GitHub → `signIn` callback checks `user.email` against `ALLOWED_EMAILS`
4. Allowed → session created (JWT) → admin content rendered
5. Denied → sign-in fails (AccessDenied)

## Future (Epic 8: Monetization)

When adding multi-tenant tiers, migrate to Auth.js + Prisma adapter with User model for subscription state.
