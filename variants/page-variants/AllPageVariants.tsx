"use client";

import PageVariantItem from "@/components/shared/PageVariantItem";
import InnerPerspective from "./InnerPerspectiveTransition/InnerPerspectiveTransition";
import StairsTransition from "./StairsTransition/StairsTransition";

export const PAGE_VARIANTS = [
  {
    id: 1,
    name: "InnerPerspective",
    preview: (
      <PageVariantItem
        layoutId="perspective-page"
        render={(name) => <InnerPerspective name={name} />}
      />
    ),
    code: `
import { getUniqueKey } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";

const perspective = {
  initial: {
    scale: 1,
    y: -30,
  },
  enter: {
    scale: 1,
    y: -30,
  },
  exit: {
    scale: 0.9,
    y: -550,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

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
`,
  },
  {
    id: 2,
    name: "Stairs",
    preview: (
      <PageVariantItem
        layoutId="Stairs-page"
        render={(name) => <StairsTransition name={name} />}
      />
    ),
    code: `
import { AnimatePresence, Variants, motion } from "framer-motion";
import { getUniqueKey } from "@/lib/utils";

const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.6,
      delay: 0.1 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.6,
      delay: 0.1 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

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
`,
  },
];
