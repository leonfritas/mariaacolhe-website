"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const senha = formData.get("password") as string;

    const res = await signIn("credentials", {
      email,
      senha,
      redirect: false
    });

    if (res?.error) {
      setError(
        res.error === "CredentialsSignin"
          ? "Email ou senha inválidos"
          : "Erro ao fazer login"
      );
    } else {
      router.push("/auth/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="w-[80%] max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg sm:w-[80%]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">Acesse sua conta</h1>
          <p className="text-gray-600">Entre para continuar sua jornada de transformação</p>
        </div>

        {error && (
          <div className="p-4 text-red-700 bg-red-100 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                required
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <input
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                required
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 shadow-lg"
            >
              Entrar
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>Não tem uma conta? <a href="/auth/register" className="text-purple-600 hover:underline">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
}