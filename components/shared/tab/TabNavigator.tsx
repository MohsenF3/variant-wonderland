import { cn } from "@/lib/utils";
import { TabTriggerButton } from "./TabButtons";
import { TabLists } from "./VariantTabs";
import { motion } from "framer-motion";
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

interface TabNavigatorProps {
  activeTab: TabLists;
  onActiveTab: (tab: TabLists) => void;
}

export const TabNavigator = ({ activeTab, onActiveTab }: TabNavigatorProps) => {
  return (
    <div className="relative flex items-center overflow-hidden border ">
      <TabTriggerButton
        Icon={IoEyeOutline}
        activeTab={activeTab}
        onActiveTab={() => onActiveTab("view")}
        value="view"
      />

      <TabTriggerButton
        Icon={FaCode}
        activeTab={activeTab}
        onActiveTab={() => onActiveTab("code")}
        value="code"
      />

      <div
        className={cn("absolute inset-0 z-0 flex justify-start", {
          "justify-end": activeTab === "code",
        })}
      >
        <motion.span
          layout
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 250,
          }}
          className="h-full w-1/2 button-gradient"
        />
      </div>
    </div>
  );
};
