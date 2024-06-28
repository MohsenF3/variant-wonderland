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
