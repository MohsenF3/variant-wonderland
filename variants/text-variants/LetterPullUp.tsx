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
    <div className="flex-center w-full h-full">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={LETTER_PULL_UP}
          initial="initial"
          whileInView="animate"
          custom={i}
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
