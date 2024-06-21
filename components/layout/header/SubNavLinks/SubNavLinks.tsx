import { motion } from "framer-motion";
import { NAVIGATION_LINKS } from "@/lib/placeholder-data";
import SubNavLink from "../SubNavLink/SubNavLink";
import { subNavLinks } from "./SubNavLinks.variants";

export default function SubNavLinks() {
  return (
    <motion.ul variants={subNavLinks} className="flex flex-col gap-4">
      {NAVIGATION_LINKS.map((link) => (
        <SubNavLink key={link.id} {...link} />
      ))}
    </motion.ul>
  );
}
