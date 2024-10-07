import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { createUser, getUser } from "./dataService";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {},

      async authorize(credentials) {
        try {
          const userData = await getUser(credentials.email);
          if (userData.password !== credentials.password) {
            throw new Error("Check the username and password");
          }
          return userData;
        } catch (error) {
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_URL,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    authorized({ auth, request }) {
      return !!auth?.user;
    },

    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getUser(user.email);
        if (!existingGuest) {
          await createUser({ email: user.email });
        }

        return true;
      } catch {
        return "/login";
      }
    },
    async session({ user, session, token }) {
      strategy: "jwt";
      const userID = await getUser(session.user.email);
      session.user.userId = userID.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
