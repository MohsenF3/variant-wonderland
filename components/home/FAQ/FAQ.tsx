import SectionTitle from "@/components/shared/SectionTitle";
import FAQPanels from "./FAQPanels";

export default function FAQ() {
  return (
    <section className="mt-[-100vh] h-[250vh] max-w-5xl mx-auto p-4">
      <div className="sticky top-3 flex-center flex-col min-h-screen ">
        <SectionTitle subTitle="Quick" title="Answers." />

        <FAQPanels />
      </div>
    </section>
  );
}
