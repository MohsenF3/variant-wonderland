import { motion } from "framer-motion";
import { subNav } from "./SubNav.variants";
import SubNavLinks from "../SubNavLinks/SubNavLinks";
import { useHeader } from "@/context/HeaderProvider";

export default function SubNav() {
  const { isOpen } = useHeader();

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={subNav}
      className="block overflow-hidden md:hidden"
    >
      <div className="flex-align px-4 pb-4">
        <SubNavLinks />
      </div>
    </motion.div>
  );
}
