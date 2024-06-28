import WithStickyCursor from "@/components/shared/WithStickyCursor";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import VariantTabs from "@/components/shared/tab/VariantTabs";
import { TEXT_VARIANTS } from "@/variants/text-variants/AllTextVariants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Variants Page",
  description: "A collection of free and handmade framer motion text variants",
};

const TextVariantsPage = () => {
  return (
    <main className="block md:grid md:grid-cols-[240px_calc(100%-240px)] ">
      <Sidebar variants={TEXT_VARIANTS} />

      <div className="relative col-span-1 pt-32">
        <VariantTabs variants={TEXT_VARIANTS} />
      </div>
    </main>
  );
};

export default WithStickyCursor(TextVariantsPage);
