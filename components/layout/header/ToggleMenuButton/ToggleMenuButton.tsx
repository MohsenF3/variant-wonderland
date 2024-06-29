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
        aria-label="toggle menu button"
        className="relative block h-16 w-7 rounded-full bg-foreground/0 md:hidden"
      >
        <motion.span
          variants={toggleMenu.top}
          className="absolute h-1 w-full bg-foreground"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={toggleMenu.middle}
          className="absolute h-1 w-full bg-foreground"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={toggleMenu.bottom}
          className="absolute h-1 w-[60%] bg-foreground"
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
