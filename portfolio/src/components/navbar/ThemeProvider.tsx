// src/components/navbar/ThemeProvider.tsx
"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

// Re‑export next‑themes so our layout can wrap the whole app
export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />;
}
