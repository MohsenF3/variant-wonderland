import WithStickyCursor from "@/components/shared/WithStickyCursor";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import VariantTabs from "@/components/shared/tab/VariantTabs";
import { PAGE_VARIANTS } from "@/variants/page-variants/AllPageVariants";

const PageVariantsPage = () => {
  return (
    <main className="block md:grid md:grid-cols-[240px_calc(100%-240px)] ">
      <Sidebar variants={PAGE_VARIANTS} />

      <div className="relative col-span-1 pt-32">
        <VariantTabs variants={PAGE_VARIANTS} />
      </div>
    </main>
  );
};

export default WithStickyCursor(PageVariantsPage);
