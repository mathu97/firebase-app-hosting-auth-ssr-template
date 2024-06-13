"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/firebase/client/auth";
import Image from "next/image";

export function Console() {
  return (
    <div className="grid gap-20">
      <div className="font-medium text-2xl text-center">
        Successfully Logged In!
      </div>
      <Image
        src="/sparky3d.gif"
        alt="Firebasel Sparky hugging a heart"
        width={300}
        height={50}
        priority
      />
      <Button
        onClick={() => {
          logout();
        }}
      >
        Log Out
      </Button>
    </div>
  );
}
