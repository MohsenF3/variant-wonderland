import { motion } from "framer-motion";
import { subNav } from "./SubNav.variants";
import SubNavLinks from "../SubNavLinks/SubNavLinks";
import { useHeader } from "@/context/HeaderProvider";
import ThemeToggle from "../ThemeToggle";
import SocialButtons from "@/components/shared/SocialButtons";

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

      <motion.div
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 200 }}
        className="flex-between px-4 pt-5 sm:hidden"
      >
        <ThemeToggle />

        <SocialButtons />
      </motion.div>
    </motion.div>
  );
}
