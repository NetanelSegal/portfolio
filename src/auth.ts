import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const allowedEmails = (process.env.ALLOWED_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    signIn({ user }) {
      if (!user?.email) return false;
      const email = user.email.toLowerCase();
      if (allowedEmails.length === 0) return false; // No allowlist configured
      return allowedEmails.includes(email);
    },
  },
});
