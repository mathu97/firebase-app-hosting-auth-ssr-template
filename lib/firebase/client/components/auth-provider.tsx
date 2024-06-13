"use client";

import { User } from "firebase/auth";
import { useUserSession } from "../use-user";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

interface FirebaseAuthProviderProps {
  initialUser: User | null;
  LoaderComponent: React.ReactNode;
  children: React.ReactNode;
}
export function FirebaseAuthProvider({
  initialUser,
  LoaderComponent,
  children,
}: FirebaseAuthProviderProps) {
  const router = useRouter();
  const user = useUserSession(initialUser);
  const pathname = usePathname();

  useEffect(() => {
    if (!user && !pathname.startsWith("/auth/")) {
      console.log("Pushing login rotue");
      router.push("/auth/login");
    }
  }, []);

  if (!user && !pathname.startsWith("/auth/")) {
    console.log("Rendering loader");
    return LoaderComponent;
  }

  console.log("Rendering child");
  return <div>{children}</div>;
}
