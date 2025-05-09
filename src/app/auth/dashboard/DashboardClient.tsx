"use client";

import { signOut } from "next-auth/react";
import {
  InformationCircleIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Sobre",
    href: "/auth/edit/about-edit",
    icon: InformationCircleIcon,
  },
  {
    name: "Estatísticas",
    icon: ChartBarIcon,
    href: "/auth/edit/stats-edit",
  },
  {
    name: "Depoimentos",
    icon: ChatBubbleBottomCenterTextIcon,
    href: "/auth/edit/testimonial-edit",
  },
  {
    name: "Perguntas Frequentes",
    icon: QuestionMarkCircleIcon,
    href: "/auth/edit/faq-edit",
  },
];

export default function DashboardClient({ name }: { name: string }) {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "https://mariaacolhe.com" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">Bem-vindo{name}!</p>
      <p className="text-lg text-gray-600 mb-8">Escolha qual sessão deseja editar</p>

      <div className="w-[80%] max-w-sm flex flex-col gap-4">
        {NAV_MENU.map(({ name, icon: Icon, href }) => (
          <a
            key={name}
            href={href}
            className="flex items-center justify-start gap-3 px-4 py-3 bg-pink-100 border border-pink-300 rounded-xl hover:bg-pink-200 transition"

          >
            <Icon className="w-5 h-5 text-pink-600" />
            <span className="text-gray-800 font-medium">{name}</span>
          </a>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition"
      >
        Sair
      </button>
    </div>
  );
}
