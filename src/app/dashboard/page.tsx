import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DashboardProfile from "@/components/dashboard-profile";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }
  
  return (
    <div className="min-h-screen bg-background p-4 flex flex-row gap-10">
      <h1 className="text-2xl font-bold py-5">Welcome <span className="text-blue-600 text-3xl">{session.user.name}</span></h1>
      <div className="mt-4">
        <DashboardProfile />
      </div>
    </div>
  );
}
