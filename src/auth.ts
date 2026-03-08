import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { env } from "../env";

const allowedEmails = env.ALLOWED_EMAILS.split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: env.AUTH_SECRET,
  providers: [
    GitHub({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    signIn({ user }) {
      if (!user?.email) return false;
      const email = user.email.toLowerCase();
      if (allowedEmails.length === 0) return false; // No allowlist configured
      return allowedEmails.includes(email);
    },
  },
});
