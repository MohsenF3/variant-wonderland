import TextVariants from "./TextVariants";
import PageVariants from "./PageVariants";
import SectionTitle from "../SectionTitle";

export default function Variants() {
  return (
    <section className="relative z-10 bg-background shadow-xl">
      <SectionTitle subTitle="All" title="Variants." />

      <div className="relative h-fit">
        <TextVariants />

        <PageVariants />
      </div>
    </section>
  );
}
