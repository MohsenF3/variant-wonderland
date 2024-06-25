import { getUniqueKey } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";
import {
  opacity,
  perspective,
  slide,
} from "./InnerPerspectiveTransition.variants";

interface InnerPerspectiveProps {
  name: string;
}

export default function InnerPerspective({ name }: InnerPerspectiveProps) {
  const anim = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <AnimatePresence mode="wait">
      <div className="relative h-full overflow-hidden" key={getUniqueKey()}>
        <motion.div
          className="absolute left-0 top-0 z-10 h-full w-full bg-foreground"
          {...anim(slide)}
        />

        <motion.div
          className="grid-center h-full bg-foreground"
          style={{
            color: "hsl(var(--background))",
          }}
          {...anim(perspective)}
        >
          <motion.div {...anim(opacity)} className="text-5xl font-bold">
            {name}
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
