"use client";

import InnerPerspective from "@/variants/page-variants/InnerPerspectiveTransition/InnerPerspectiveTransition";
import PageVariantItem from "../shared/PageVariantItem";
import VariantsCompound from "./VariantsCompound";
import StairsTransition from "@/variants/page-variants/StairsTransition/StairsTransition";

export default function PageVariants() {
  return (
    <VariantsCompound>
      <VariantsCompound.Heading
        href="/page-variants"
        title="Page Variants"
        description="Page variants in Framer Motion are a way to define multiple animation states for a component. They are essentially an object of string keys and Framer animations. You can define as many variants as you want, and each variant can have its own set of animation properties."
      />

      <VariantsCompound.Items>
        <VariantsCompound.Item>
          <PageVariantItem
            layoutId="perspective"
            render={(name) => <InnerPerspective name={name} />}
          />
        </VariantsCompound.Item>

        <VariantsCompound.Item>
          <PageVariantItem
            layoutId="stairs"
            render={(name) => <StairsTransition name={name} />}
          />
        </VariantsCompound.Item>
      </VariantsCompound.Items>
    </VariantsCompound>
  );
}
