import { motion } from "framer-motion";
import { useHeader } from "@/context/HeaderProvider";

export default function HeaderOverlay() {
  const { isOpen, toggleOpen } = useHeader();

  return (
    <motion.div
      onClick={() => toggleOpen()}
      className="block md:hidden fixed inset-0 z-20 cursor-pointer bg-background/50 backdrop-blur"
      initial={false}
      animate={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transition: { delay: 0.2 },
      }}
    />
  );
}
