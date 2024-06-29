"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Link from "next/link";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  React.useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, hsl(var(--background)) 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      ref={containerRef}
      style={{
        backgroundImage,
      }}
      className="grid-center relative min-h-screen overflow-hidden px-4 py-24"
    >
      <motion.div
        style={{ y }}
        className="flex-align relative z-10 h-full flex-col"
      >
        <h1 className="max-w-4xl  text-center text-4xl font-semibold leading-tight  sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Explore the Magic of Framer Motion Variants
        </h1>
        <p className="my-6 max-w-md text-center text-base bg-gradient-to-br from-foreground  text-transparent to-foreground/50 bg-clip-text leading-relaxed md:max-w-2xl md:text-lg md:leading-relaxed font-medium">
          Discover a collection of free, ready-to-use Framer Motion variants.
          Get inspired and start building amazing animations today!
        </p>

        <HeroButton border={border} boxShadow={boxShadow} />
      </motion.div>
    </motion.section>
  );
}

interface HeroButtonProps {
  border: MotionValue;
  boxShadow: MotionValue;
}

function HeroButton({ border, boxShadow }: HeroButtonProps) {
  return (
    <motion.button
      style={{
        border,
        boxShadow,
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="group relative w-fit rounded-full bg-foreground/10 px-4 py-2 text-foreground transition-colors hover:bg-foreground/5 min-w-[24px] min-h-[24px]"
    >
      <Link href="/text-variants" className="flex-align w-full gap-1.5">
        Explore Demos
        <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
      </Link>
    </motion.button>
  );
}
