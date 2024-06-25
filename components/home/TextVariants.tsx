"use client";

import { MultiDirectionSlide } from "@/variants/text-variants/MultyDirectionSlide";
import VariantsCompound from "./VariantsCompound";
import { SeparateAnimation } from "@/variants/text-variants/SeparateAnimation";
import { FadeDown } from "@/variants/text-variants/FadeDown";
import { FadeUp } from "@/variants/text-variants/FadeUp";

export default function TextVariants() {
  return (
    <VariantsCompound>
      <VariantsCompound.Heading
        href="/text-variants"
        title="Text Variants"
        description="Text variants refer to a set of predefined animation styles that can be applied to text elements. By using text variants, you can easily create complex animations without having to write custom animation code."
      />

      <VariantsCompound.Items>
        <VariantsCompound.Item className="grid-center">
          <MultiDirectionSlide />
        </VariantsCompound.Item>

        <VariantsCompound.Item className="grid-center">
          <SeparateAnimation />
        </VariantsCompound.Item>

        <VariantsCompound.Item className="grid-center">
          <FadeDown />
        </VariantsCompound.Item>

        <VariantsCompound.Item className="grid-center">
          <FadeUp />
        </VariantsCompound.Item>
      </VariantsCompound.Items>
    </VariantsCompound>
  );
}
