"use client";
import { signOut, useSession } from "next-auth/react";

export function UserMenu() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="avatar placeholder cursor-pointer">
        <div className="bg-neutral text-neutral-content rounded-full w-10">
          <span>{session.user?.name?.charAt(0).toUpperCase()}</span>
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Perfil</a></li>
        <li><a>Configurações</a></li>
        <li><button onClick={() => signOut()}>Sair</button></li>
      </ul>
    </div>
  );
}
