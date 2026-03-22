import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const { handlers } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        // Placeholder authentication logic
        // In a real application, you would verify against the Prisma database
        const user = { id: "1", name: "Admin", email: "admin@kidzwear.com" };
        
        if (credentials?.username === "admin" && credentials?.password === "password") {
          return user;
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
});

export const { GET, POST } = handlers;
