import dotenv from 'dotenv';
dotenv.config();
/**
 * Server environment config.
 * Import only in server code (API routes, Server Components, server actions).
 * Never import in Client Components — use NEXT_PUBLIC_ vars there instead.
 */

const env = {
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
  // Auth (S0.3)
  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
  ALLOWED_EMAILS: process.env.ALLOWED_EMAILS ?? "",
} as const;

export { env };
