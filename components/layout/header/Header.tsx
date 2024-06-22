"use client";

import NavigationLinks from "./NavigationLinks";
import ThemeToggle from "./ThemeToggle";
import ToggleMenuButton from "./ToggleMenuButton/ToggleMenuButton";
import SubNav from "./SubNav/SubNav";
import Logo from "./Logo";
import { HeaderProvider } from "@/context/HeaderProvider";
import HeaderOverlay from "./HeaderOverlay";

export default function Header() {
  return (
    <HeaderProvider>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl">
        <div className="flex-between p-3 md:p-5">
          <NavigationLinks />

          <Logo />

          <div className="flex-align gap-3 flex-row-reverse">
            <ToggleMenuButton />

            <ThemeToggle />
          </div>
        </div>
        <SubNav />
      </header>

      <HeaderOverlay />
    </HeaderProvider>
  );
}
