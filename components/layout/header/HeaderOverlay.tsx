import { motion } from "framer-motion";
import { useHeader } from "@/context/HeaderProvider";

export default function HeaderOverlay() {
  const { isOpen, toggleOpen } = useHeader();

  return (
    <motion.div
      onClick={() => toggleOpen()}
      className="fixed inset-0 -z-50 cursor-pointer bg-neutral-950/50 backdrop-blur"
      animate={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transition: { delay: 0.2 },
      }}
    />
  );
}
