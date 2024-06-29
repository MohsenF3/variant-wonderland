import { useWindowSize } from "@/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import {
  descriptionVariants,
  panelVariants,
  panelVariantsSm,
} from "./FAQPanel.variants";

interface FAQPanelProps {
  question: string;
  answer: string;
  id: number;
  open: number;
  onOpen: (id: number) => void;
}

export default function FAQPanel(props: FAQPanelProps) {
  const { width } = useWindowSize();
  const isOpen = props.open === props.id;

  return (
    <>
      <button
        className="group relative flex flex-row-reverse items-center justify-end gap-4 border-b-[1px] border-slate-200 p-3 transition-colors lg:flex-col lg:border-r-[1px]"
        onClick={() => props.onOpen(props.id)}
      >
        <h2
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden rotate-180 text-xl font-medium lg:block"
        >
          {props.question}
        </h2>
        <h2 className="block text-xl font-medium lg:hidden">
          {props.question}
        </h2>
      </button>

      <AnimatePresence>
        {!!isOpen && (
          <motion.div
            key={`panel-${props.id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="group relative h-full w-full overflow-hidden"
          >
            {/* background image */}
            <div
              className="absolute inset-0 saturate-100 transition-all duration-300 group-hover:scale-110 group-hover:blur-sm md:saturate-0 md:group-hover:saturate-100"
              style={{
                backgroundImage: `url(/framer-logo.svg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />

            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="p-4"
            >
              <h3 className="mb-5 text-2xl font-semibold">{props.question}</h3>
              <p>{props.answer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
