"use client";

import { useLenis } from "@/hooks/useLenis";
import { useVisibilityChange } from "@/hooks/useVisibilityChange";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // hook for smooth scrolling
  useLenis();

  // hook for when user changed the tab
  useVisibilityChange();

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
