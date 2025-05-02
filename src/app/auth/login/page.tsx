// app/auth/login/page.tsx
import { LoginForm } from "../../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">Acesse sua conta</h1>
        <LoginForm />
      </div>
    </div>
  );
}
