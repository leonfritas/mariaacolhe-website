import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return <DashboardClient name={session.user?.name || ""} />;
}
