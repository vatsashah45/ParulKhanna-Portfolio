// src/app/layout.tsx
import './globals.css';
import type { PropsWithChildren } from 'react';
import { Providers } from '@/components/navbar/Providers';
import NavBar from '@/components/navbar/NavBar';

export const metadata = {
  title: 'Parul | Portfolio',
  description: 'Influencer portfolio built with Next.js 15',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen text-gray-800 dark:text-gray-100 selection:bg-brand/30
             bg-gradient-to-br from-white to-indigo-100 dark:from-gray-900 dark:to-indigo-950 transition-colors"
      >
        <Providers>
          <NavBar />
          <main className="scroll-smooth pt-16">
            <div className="mt-20 md:mt-28 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
