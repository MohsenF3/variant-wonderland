import { Variants, motion } from "framer-motion";

const FADE_DOWN_VARIANTS_CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const FADE_DOWN_VARIANTS = {
  hidden: { opacity: 0, y: -50 },
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

export function FadeDown() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={FADE_DOWN_VARIANTS_CONTAINER}
      className="text-xl md:text-2xl"
    >
      <motion.h1
        className="font-display text-center text-5xl mb-3 font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_DOWN_VARIANTS as Variants}
      >
        Fade Down
      </motion.h1>
      <motion.p
        className="text-center font-medium"
        variants={FADE_DOWN_VARIANTS as Variants}
      >
        Animation
      </motion.p>
    </motion.div>
  );
}
