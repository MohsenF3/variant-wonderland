import { AnimatePresence, Variants, motion } from "framer-motion";
import { getUniqueKey } from "@/lib/utils";
import { expand, opacity } from "./StairsTransition.variants";

interface StairsTransitionProps {
  name: string;
}

const NUMBER_OF_COLUMNS = 5;

export default function StairsTransition({ name }: StairsTransitionProps) {
  const anim = (variants: Variants, custom: null | number = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  return (
    <AnimatePresence mode="wait">
      <div className="relative w-full h-full grid-center">
        <motion.div
          {...anim(opacity)}
          className="absolute left-0 top-0 pointer-events-none z-10 w-full h-full "
        />

        <div className="absolute left-0 top-0 pointer-events-none z-20 w-full h-full flex">
          {[...Array(NUMBER_OF_COLUMNS)].map((_, i) => {
            return (
              <motion.div
                className="relative w-full h-full bg-foreground "
                key={getUniqueKey()}
                {...anim(expand, NUMBER_OF_COLUMNS - i)}
              />
            );
          })}
        </div>

        <span
          className="text-5xl font-bold"
          style={{ transform: "translateY(-30px)" }}
        >
          {name}
        </span>
      </div>
    </AnimatePresence>
  );
}
