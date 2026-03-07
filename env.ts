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
  // Add as needed: NEXTAUTH_SECRET, OPENAI_API_KEY, etc.
} as const;

export { env };
