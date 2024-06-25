"use client";

import { useHeader } from "@/context/HeaderProvider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

enum Theme_Modes {
  Light = "light",
  Dark = "dark",
  System = "system ",
}

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 text-foreground/70";

export default function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const { toggleOpen } = useHeader();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChangeTheme = (mode: Theme_Modes) => {
    setTheme(mode);

    // close the subNav when change Theme
    toggleOpen();
  };

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={cn(TOGGLE_CLASSES, {
          "text-white": theme === Theme_Modes.Light,
        })}
        onClick={() => handleChangeTheme(Theme_Modes.Light)}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>

      <button
        className={cn(TOGGLE_CLASSES, {
          "text-white": theme === Theme_Modes.Dark,
        })}
        onClick={() => handleChangeTheme(Theme_Modes.Dark)}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={cn("absolute inset-0 z-0 flex justify-start", {
          "justify-end": theme === Theme_Modes.Dark,
        })}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full button-gradient"
        />
      </div>
    </div>
  );
}
