import { motion } from "framer-motion";

const SEPARATE_VARIANTS = {
  hidden: { opacity: 0, y: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    y: custom * 15,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 2,
    },
  }),
};

export function SeparateAnimation() {
  return (
    <div>
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
