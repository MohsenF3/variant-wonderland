"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavigationLinkProps {
  id: number;
  path: string;
  name: string;
}

export default function NavigationLink({
  id,
  name,
  path,
}: NavigationLinkProps) {
  const pathname = usePathname();

  return (
    <li className="group relative scale-100 rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <Link href={path}>
        <span className="relative font-medium z-10 text-foreground/90 transition-colors group-hover:text-foreground">
          {name}
        </span>

        {pathname === path && (
          <motion.span
            layoutId="background"
            className="absolute inset-0 z-0 rounded-lg bg-gradient-to-br from-foreground/20 to-foreground/10"
          />
        )}
      </Link>
    </li>
  );
}
