"use client";

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
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme = "dark" } = useTheme();

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          resolvedTheme === Theme_Modes.Light ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setTheme(Theme_Modes.Light);
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          resolvedTheme === Theme_Modes.Dark ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setTheme(Theme_Modes.Dark);
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          resolvedTheme === Theme_Modes.Dark ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
}
