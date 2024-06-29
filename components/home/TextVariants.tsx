"use client";

import { MultiDirectionSlide } from "@/variants/text-variants/MultiDirectionSlide";
import VariantsCompound from "./VariantsCompound";
import { SeparateAnimation } from "@/variants/text-variants/SeparateAnimation";
import { LetterPullUp } from "@/variants/text-variants/LetterPullUp";
import { GradualSpacing } from "@/variants/text-variants/GradualSpacing";

export default function TextVariants() {
  return (
    <VariantsCompound>
      <VariantsCompound.Heading
        href="/text-variants"
        title="Text Variants"
        description="Text variants refer to a set of predefined animation styles that can be applied to text elements. By using text variants, you can easily create complex animations without having to write custom animation code."
      />

      <VariantsCompound.Items>
        <VariantsCompound.Item>
          <MultiDirectionSlide />
        </VariantsCompound.Item>

        <VariantsCompound.Item>
          <LetterPullUp />
        </VariantsCompound.Item>

        <VariantsCompound.Item>
          <GradualSpacing />
        </VariantsCompound.Item>

        <VariantsCompound.Item>
          <SeparateAnimation />
        </VariantsCompound.Item>
      </VariantsCompound.Items>
    </VariantsCompound>
  );
}
