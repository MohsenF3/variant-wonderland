import React from "react";
import { motion } from "framer-motion";
import { CopyBlock, github, dracula } from "react-code-blocks";
import { useTheme } from "next-themes";
import { useLenis } from "@/hooks/useLenis";
import { cn } from "@/lib/utils";
import { Variant } from "@/types/variants";
import { TabLists } from "./VariantTabs";

type TabPreviewProps = Pick<Variant, "preview" | "code"> & {
  activeTab: TabLists;
};

export default function TabPreview({
  activeTab,
  code,
  preview,
}: TabPreviewProps) {
  const { resolvedTheme } = useTheme();
  const wrapperRef = React.useRef(null);
  useLenis({ wrapperRef });

  return (
    <motion.div
      ref={wrapperRef}
      layout
      className={cn(
        "w-full h-72 border rounded-lg overflow-y-scroll no-scrollbar",
        {
          "h-[30rem]": activeTab === "code",
        }
      )}
    >
      {activeTab === "view" ? (
        preview
      ) : (
        <CopyBlock
          text={code}
          language="jsx"
          theme={resolvedTheme === "dark" ? dracula : github}
          codeBlock
        />
      )}
    </motion.div>
  );
}
