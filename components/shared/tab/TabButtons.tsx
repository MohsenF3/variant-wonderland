import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { VscDebugRestart } from "react-icons/vsc";
import { TabLists } from "./VariantTabs";

interface TabTriggerProps {
  activeTab: TabLists;
  value: TabLists;
  Icon: IconType;
  onActiveTab: (tab: TabLists) => void;
}

export function TabTriggerButton({
  activeTab,
  Icon,
  value,
  onActiveTab,
}: TabTriggerProps) {
  return (
    <button
      onClick={() => onActiveTab(value)}
      className={cn(
        "text-sm font-medium flex items-center gap-2 px-3 md:px-2.5 py-2 md:py-1.5 transition-all relative z-10 text-muted-foreground hover:text-foreground translate-colors delay-100",
        {
          "text-white hover:text-white": activeTab === value,
        }
      )}
    >
      <Icon className="relative z-10 size-4 text-lg md:text-sm" />
      <span className="relative z-10 hidden md:block uppercase">{value}</span>
    </button>
  );
}

interface RefreshButtonProps {
  id: number;
  refreshComponent: (id: number) => void;
}

export function RefreshButton({ id, refreshComponent }: RefreshButtonProps) {
  return (
    <button onClick={() => refreshComponent(id)}>
      <VscDebugRestart className="size-5" />
    </button>
  );
}
