"use client";

import { User } from "firebase/auth";
import { useUserSession } from "../use-user";
import { useRouter } from "next/navigation";

interface FirebaseAuthProviderProps {
  initialUser: User | null;
  children: React.ReactNode;
}
export function FirebaseAuthProvider({
  initialUser,
  children,
}: FirebaseAuthProviderProps) {
  const router = useRouter();
  const user = useUserSession(initialUser);
  if (!user) {
    router.push("/login");
  }

  return <div>{children}</div>;
}
