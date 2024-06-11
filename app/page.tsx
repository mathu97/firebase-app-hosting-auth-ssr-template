"use client";

import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase";
import { Auth, getAuth } from "firebase/auth";

import { LoginForm } from "@/components/login/login-form";

let auth: Auth;

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("firebase-sw.js", {
        type: "module",
      });
    }
    const firebaseApp = initializeApp(firebaseConfig);
    if (auth === null) {
      auth = getAuth(firebaseApp);
    }

    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("user signed in.");
      } else {
        console.log("no current user.");
      }
    });
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  );
}
