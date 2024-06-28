import React from "react";
import { TabLists } from "./VariantTabs";
import { Variant } from "@/types/variants";
import { RefreshButton } from "./TabButtons";
import { TabNavigator } from "./TabNavigator";
import TabPreview from "./TabPreview";

interface VariantTabProps extends Variant {
  refreshComponent: (id: number) => void;
}

export default function VariantTab(props: VariantTabProps) {
  const [activeTab, setActiveTab] = React.useState<TabLists>("view");

  return (
    <div className="space-y-5" id={props.name}>
      <div className="relative mb-3 flex items-center justify-between">
        <h4 className="line-clamp-1 break-all text-2xl font-medium">
          {props.name}
        </h4>
        <div className="flex items-center gap-4">
          <TabNavigator activeTab={activeTab} onActiveTab={setActiveTab} />

          <RefreshButton
            id={props.id}
            refreshComponent={props.refreshComponent}
          />
        </div>
      </div>

      <TabPreview
        activeTab={activeTab}
        preview={props.preview}
        code={props.code}
      />
    </div>
  );
}
