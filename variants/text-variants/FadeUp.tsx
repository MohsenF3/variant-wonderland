import { Variants, motion } from "framer-motion";

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
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2,
    },
  },
};

export function FadeUp() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={FADE_UP_VARIANTS_CONTAINER}
      className="text-xl md:text-2xl"
    >
      <motion.h1
        className="font-display text-center text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] mb-3"
        variants={FADE_UP_VARIANTS as Variants}
      >
        Fade Up
      </motion.h1>
      <motion.p
        className="text-center font-medium"
        variants={FADE_UP_VARIANTS as Variants}
      >
        Animation
      </motion.p>
    </motion.div>
  );
}
