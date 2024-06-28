"use client";

import React from "react";
import { getUniqueKey } from "@/lib/utils";

import VariantTab from "./VariantTab";
import { Variants } from "@/types/variants";

export type TabLists = "code" | "view";

interface VariantTabsProps {
  variants: Variants;
}

export default function VariantTabs({ variants }: VariantTabsProps) {
  const [components, setComponents] = React.useState(variants);

  const refreshComponent = (id: number) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id
          ? {
              ...component,
              preview: React.cloneElement(
                component.preview as React.ReactElement,
                {
                  key: getUniqueKey(),
                }
              ),
            }
          : component
      )
    );
  };

  return (
    <div className="mb-10 px-4 xl:p-0  max-w-4xl mx-auto space-y-10">
      {components.map((component) => (
        <VariantTab
          key={component.id}
          refreshComponent={refreshComponent}
          {...component}
        />
      ))}
    </div>
  );
}
