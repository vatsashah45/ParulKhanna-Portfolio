import "./globals.css";
import type { PropsWithChildren } from "react";
import NavBar from "@/components/navbar/NavBar";
import { ThemeProvider } from "@/components/navbar/ThemeProvider";

export const metadata = { title: "Parul | Portfolio", description: "…" };

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500
                       dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="scroll-smooth pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

