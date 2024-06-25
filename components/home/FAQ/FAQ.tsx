"use client";

import { FAQ_QUESTIONS } from "@/lib/placeholder-data";
import React from "react";
import FAQPanel from "./FAQPanel";
import SectionTitle from "@/components/SectionTitle";

export default function FAQ() {
  const [open, setOpen] = React.useState(FAQ_QUESTIONS[0].id);

  return (
    <section className="mt-[-100vh] h-[250vh] max-w-5xl mx-auto p-4">
      <div className="sticky top-3 flex-center flex-col min-h-screen ">
        <SectionTitle subTitle="Quick" title="Answers." />
        <div className="flex flex-col overflow-hidden shadow-xl lg:flex-row h-fit lg:h-[450px]">
          {FAQ_QUESTIONS.map((faq) => {
            return (
              <FAQPanel key={faq.id} open={open} setOpen={setOpen} {...faq} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
