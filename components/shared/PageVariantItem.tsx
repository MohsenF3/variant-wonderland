import { PAGE_VARIANTS_TABS } from "@/lib/placeholder-data";
import { motion } from "framer-motion";
import React from "react";

interface PageVariantItemProps {
  layoutId: string;
  render: (name: string) => React.ReactNode;
}

export default function PageVariantItem(props: PageVariantItemProps) {
  const [tabIndex, setTabIndex] = React.useState(PAGE_VARIANTS_TABS[0].id);

  return (
    <div className="h-full w-full overflow-hidden border">
      <div className="flex items-center justify-between border-b relative z-10">
        {PAGE_VARIANTS_TABS.map((tab) => (
          <Button
            key={tab.id}
            tabIndex={tabIndex}
            onTabChange={setTabIndex}
            layoutId={props.layoutId}
            {...tab}
          />
        ))}
      </div>

      {props.render(PAGE_VARIANTS_TABS[tabIndex - 1].name)}
    </div>
  );
}

interface ButtonProps {
  id: number;
  title: string;
  tabIndex: number;
  onTabChange: (id: number) => void;
  layoutId: string;
}

function Button({ id, title, tabIndex, onTabChange, layoutId }: ButtonProps) {
  return (
    <button className="relative w-full p-3 " onClick={() => onTabChange(id)}>
      <span className="font-medium">{title}</span>

      {/* floating background */}
      {id === tabIndex ? (
        <motion.div
          layoutId={`item-background-${layoutId}`}
          className="button-gradient absolute inset-0 -z-10"
        />
      ) : null}
    </button>
  );
}
