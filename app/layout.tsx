import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { getAuthenticatedAppForUser } from "@/lib/firebase/server/app";
import { FirebaseAuthProvider } from "@/lib/firebase/client/components/auth-provider";
import { LoaderComponent } from "@/components/loader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = await getAuthenticatedAppForUser();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <FirebaseAuthProvider
          initialUser={JSON.parse(JSON.stringify(currentUser))}
          LoaderComponent={<LoaderComponent />}
        >
          <div className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </div>
        </FirebaseAuthProvider>
      </body>
    </html>
  );
}
