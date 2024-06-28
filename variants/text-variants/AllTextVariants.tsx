"use client";

import { FadeDown } from "./FadeDown";
import { FadeUp } from "./FadeUp";
import { GradualSpacing } from "./GradualSpacing";
import { LetterPullUp } from "./LetterPullUp";
import { MultiDirectionSlide } from "./MultiDirectionSlide";
import RotateText from "./RotateWords";
import { SeparateAnimation } from "./SeparateAnimation";

export const TEXT_VARIANTS = [
  {
    id: 1,
    name: "FadeDown",
    preview: <FadeDown />,
    code: `
import { motion } from "framer-motion";

const FADE_UP_VARIANTS_CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export function FadeUp() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={FADE_UP_VARIANTS_CONTAINER}
      className="text-xl md:text-2xl grid-center w-full h-full"
    >
      <motion.h1
        className="font-display text-center text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] mb-3"
        variants={FADE_UP_VARIANTS}
      >
        Fade Up
      </motion.h1>
      <motion.p className="text-center font-medium" variants={FADE_UP_VARIANTS}>
        Animation
      </motion.p>
    </motion.div>
  );
}`,
  },
  {
    id: 2,
    name: "FadeUp",
    preview: <FadeUp />,
    code: `
import { motion } from "framer-motion";

const FADE_UP_VARIANTS_CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export function FadeUp() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={FADE_UP_VARIANTS_CONTAINER}
      className="text-xl md:text-2xl grid-center w-full h-full"
    >
      <motion.h1
        className="font-display text-center text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] mb-3"
        variants={FADE_UP_VARIANTS}
      >
        Fade Up
      </motion.h1>
      <motion.p className="text-center font-medium" variants={FADE_UP_VARIANTS}>
        Animation
      </motion.p>
    </motion.div>
  );
}
`,
  },
  {
    id: 3,
    name: "MultiDirectionSlide",
    preview: <MultiDirectionSlide />,
    code: `
import { motion } from "framer-motion";

const MULTI_DIRECTION_SLIDE_VARIANTS = {
  hidden: { opacity: 0, x: "-25vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  right: { opacity: 0, x: "25vw" },
};

export function MultiDirectionSlide() {
  return (
    <div className="overflow-hidden grid-center w-full h-full">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={MULTI_DIRECTION_SLIDE_VARIANTS}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Multi Direction
      </motion.h1>

      <motion.h1
        initial="right"
        whileInView="visible"
        variants={MULTI_DIRECTION_SLIDE_VARIANTS}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Animation
      </motion.h1>
    </div>
  );
}
`,
  },
  {
    id: 4,
    name: "SeparateAnimation",
    preview: <SeparateAnimation />,
    code: `
import { motion } from "framer-motion";

const SEPARATE_VARIANTS = {
  hidden: { opacity: 0, y: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    y: custom * 15,
    transition: {
      duration: 1,
    },
  }),
};

export function SeparateAnimation() {
  return (
    <div className="grid-center w-full h-full">
      <motion.h1
        custom={-1}
        variants={SEPARATE_VARIANTS}
        initial="hidden"
        whileInView="visible"
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Separate
      </motion.h1>
      <motion.h1
        custom={1}
        variants={SEPARATE_VARIANTS}
        initial="hidden"
        whileInView="visible"
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Animation
      </motion.h1>
    </div>
  );
}
`,
  },
  {
    id: 5,
    name: "LetterPullUp",
    preview: <LetterPullUp />,
    code: `
import { motion } from "framer-motion";

const LETTER_PULL_UP = {
  initial: { y: 100, opacity: 0 },
  animate: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export function LetterPullUp() {
  const words = "Letter Pull Up";
  const letters = words.split("");

  return (
    <div className="flex items-center justify-center w-full h-full">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={LETTER_PULL_UP}
          initial="initial"
          animate="animate"
          custom={i}
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
`,
  },
  {
    id: 6,
    name: "GradualSpacing",
    preview: <GradualSpacing />,
    code: `    
import { getUniqueKey } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const GRADUAL_SPACING = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function GradualSpacing() {
  const text = "Gradual Spacing";
  return (
    <div className="flex items-center justify-center space-x-1 w-full h-full">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={getUniqueKey()}
            initial="hidden"
            animate="visible"
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
    `,
  },
  {
    id: 7,
    name: "RotateText",
    preview: <RotateText />,
    code: `    
import { getUniqueKey } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ROTATE_TEXT = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export default function RotateText() {
  const words = ["ROTATE", "BETWEEN", "TEXT"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={getUniqueKey()}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={ROTATE_TEXT}
        transition={{ duration: 0.5 }}
        className=" w-full h-full flex-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}
    `,
  },
];
