"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/firebase/client/auth";

export function Console() {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </Button>
  );
}
