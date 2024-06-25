import { motion } from "framer-motion";

const MULTI_DIRECTION_SLIDE_VARIANTS = {
  hidden: { opacity: 0, x: "-25vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  right: { opacity: 0, x: "25vw" },
};

export function MultiDirectionSlide() {
  return (
    <div className="overflow-hidden">
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
