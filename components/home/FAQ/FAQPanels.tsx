'use client'

import { FAQ_QUESTIONS } from "@/lib/placeholder-data";
import FAQPanel from "./FAQPanel";
import React from "react";

export default function FAQPanels() {
  const [open, setOpen] = React.useState(FAQ_QUESTIONS[0].id);

  return (
    <div className="flex flex-col overflow-hidden shadow-xl lg:flex-row h-fit lg:h-[450px]">
      {FAQ_QUESTIONS.map((faq) => (
        <FAQPanel key={faq.id} open={open} onOpen={setOpen} {...faq} />
      ))}
    </div>
  );
}
