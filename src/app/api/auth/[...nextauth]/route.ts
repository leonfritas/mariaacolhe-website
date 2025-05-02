// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../../../../service/user-service";

// Defina os tipos para o usuário retornado pelo seu serviço
interface UserData {
  id: string;
  email: string;
  nome: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.senha) {
            throw new Error("Email e senha são obrigatórios");
          }

          const res = await loginUser({
            email: credentials.email,
            senha: credentials.senha,
          });

          const user = res.data as UserData;
          if (!user) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.nome, // Use 'name' para manter compatibilidade com NextAuth
          };
        } catch (error) {
          console.error("Erro na autenticação:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60, // 30 minutos (em segundos)
    updateAge: 0,
  },
  jwt: {
    maxAge: 1 * 60, // 30 minutos (em segundos)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };