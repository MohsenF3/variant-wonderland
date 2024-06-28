"use client";

import { useLenis } from "@/hooks/useLenis";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useLenis();

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
