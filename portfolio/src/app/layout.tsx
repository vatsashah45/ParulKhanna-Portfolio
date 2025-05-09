import "./globals.css";
import type { PropsWithChildren } from "react";
import NavBar from "@/components/navbar/NavBar";
import { ThemeProvider } from "@/components/navbar/ThemeProvider";

export const metadata = { title: "Parul | Portfolio", description: "…" };

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-gray-100 selection:bg-brand/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="scroll-smooth pt-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
