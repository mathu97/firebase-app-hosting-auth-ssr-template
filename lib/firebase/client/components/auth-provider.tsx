"use client";

import { User } from "firebase/auth";
import { useUserSession } from "../use-user";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, ComponentType } from "react";

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

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  const pathname = usePathname();
  if (!user && pathname !== "/login") {
    return LoaderComponent;
  }

  return <div>{children}</div>;
}
