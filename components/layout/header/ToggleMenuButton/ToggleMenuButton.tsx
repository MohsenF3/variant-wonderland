import { MotionConfig, motion } from "framer-motion";
import { toggleMenu } from "./ToggleMenuButton.variants";
import { useHeader } from "@/context/HeaderProvider";

export default function ToggleMenuButton() {
  const { isOpen, toggleOpen } = useHeader();

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={toggleOpen}
        className="relative w-7 h-16 rounded-full bg-white/0 md:hidden block"
      >
        <motion.span
          variants={toggleMenu.top}
          className="absolute h-1 w-full bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={toggleMenu.middle}
          className="absolute h-1 w-full bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={toggleMenu.bottom}
          className="absolute h-1 w-[60%] bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 1px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
