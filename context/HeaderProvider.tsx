"use client";

import { useCycle } from "framer-motion";
import React from "react";

interface HeaderContextType {
  isOpen: boolean;
  toggleOpen: () => void;
}

const HeaderContext = React.createContext<HeaderContextType>({
  isOpen: false,
  toggleOpen: () => {},
});

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <HeaderContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => React.useContext(HeaderContext);

export { HeaderProvider };
