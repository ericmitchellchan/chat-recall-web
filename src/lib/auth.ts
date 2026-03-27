import type { AuthOptions } from "next-auth";
import { encode } from "next-auth/jwt";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

async function syncUser(profile: {
  email: string;
  name?: string;
  github_id?: string;
  google_id?: string;
  avatar_url?: string;
}): Promise<{ id: string; email: string; name?: string }> {
  const res = await fetch(`${API_URL}/auth/sync-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Internal-Key": process.env.NEXTAUTH_SECRET || "",
    },
    body: JSON.stringify(profile),
  });
  if (!res.ok) {
    throw new Error(`sync-user failed: ${res.status}`);
  }
  return res.json();
}

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        // TODO: Validate password via API when password auth is implemented
        // For now, credentials provider is a placeholder
        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const syncPayload: Record<string, string | undefined> = {
          email: user.email || "",
          name: user.name || undefined,
          avatar_url: user.image || undefined,
        };

        if (account?.provider === "github") {
          syncPayload.github_id = account.providerAccountId;
        } else if (account?.provider === "google") {
          syncPayload.google_id = account.providerAccountId;
        }

        const dbUser = await syncUser(
          syncPayload as Parameters<typeof syncUser>[0]
        );
        // Store the Postgres UUID for the JWT callback
        user.id = dbUser.id;
      } catch (err) {
        console.error("User sync failed:", err);
        // Allow sign-in even if sync fails — user can retry
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user?.id) {
        token.sub = user.id; // Postgres UUID
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      session.accessToken = await encode({
        token,
        secret: process.env.NEXTAUTH_SECRET || "",
      });
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },

  session: {
    strategy: "jwt",
  },
};
