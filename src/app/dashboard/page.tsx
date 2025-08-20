import { Navbar } from "@/components/navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin", RedirectType.replace);
  }

  return (
    <div>
      <Navbar />
    </div>
  );
}
