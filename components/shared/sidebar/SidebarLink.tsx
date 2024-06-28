import { Variant } from "@/types/variants";
import Link from "next/link";
import React from "react";

export default function SidebarLink(props: Variant) {
  return (
    <Link
      href={`/text-variants#${props.name}`}
      className="px-2.5 py-1.5 text-sm font-medium transition-colors rounded hover:bg-gradient-to-br hover:from-foreground/20 hover:to-foreground/10"
    >
      <span>{props.name}</span>
    </Link>
  );
}
