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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input name="email" type="email" className="w-full p-2 border rounded" required />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-2">Senha</label>
        <input name="password" type="password" className="w-full p-2 border rounded" required />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Entrar
      </button>
    </form>
  );
}
