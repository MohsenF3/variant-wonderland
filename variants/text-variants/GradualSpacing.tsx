import { getUniqueKey } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const GRADUAL_SPACING = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function GradualSpacing() {
  const text = "Gradual Spacing";
  return (
    <div className="flex-center space-x-1 w-full h-full">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={getUniqueKey()}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={GRADUAL_SPACING}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
