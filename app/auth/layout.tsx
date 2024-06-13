import { getAuthenticatedAppForUser } from "@/lib/firebase/server/app";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = await getAuthenticatedAppForUser();

  console.log(`current auth from auth layout: ${currentUser}`);

  if (currentUser) {
    return redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {children}
    </main>
  );
}
