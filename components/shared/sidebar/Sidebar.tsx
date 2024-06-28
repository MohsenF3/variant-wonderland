"use client";

import React from "react";
import Searchbox from "./Searchbox";
import SidebarLinks from "./SidebarLinks";
import { useDebounce } from "@/hooks/useDebounce";
import { Variants } from "@/types/variants";

interface SidebarProps {
  variants: Variants;
}

export default function Sidebar({ variants }: SidebarProps) {
  const [query, setQuery] = React.useState<string>("");
  const debouncedQuery = useDebounce(query, 100);

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const filteredVariants = React.useMemo(
    () =>
      variants.filter((variant) =>
        variant.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      ),
    [debouncedQuery]
  );

  return (
    <nav className="overflow-y-scroll shadow-xl no-scrollbar sticky top-0 col-span-1 hidden h-screen flex-col pt-32 gap-1 px-3 py-6 md:flex bg-foreground-gradient">
      <Searchbox query={query} onQueryChange={handleQueryChange} />

      <SidebarLinks filteredVariants={filteredVariants} />
    </nav>
  );
}
