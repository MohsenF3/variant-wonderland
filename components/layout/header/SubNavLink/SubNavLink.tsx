import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { currentLink, subNavLink, underLink } from "./SubNavLink.variants";
import { cn } from "@/lib/utils";
import { useHeader } from "@/context/HeaderProvider";

import { FaArrowRight } from "react-icons/fa";

interface SubNavLinkProps {
  id: number;
  path: string;
  name: string;
}

const DURATION = 1;
const TRANSITION = {
  type: "spring",
  duration: DURATION,
};

export default function SubNavLink({ id, name, path }: SubNavLinkProps) {
  const pathname = usePathname();
  const { toggleOpen } = useHeader();

  return (
    <motion.li onClick={toggleOpen} variants={subNavLink} className="relative">
      <Link href={path}>
        <motion.div
          initial="initial"
          whileHover="hovered"
          className={cn(
            "relative translate-x-7 transition-transform duration-150 overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl",
            {
              "translate-x-10": pathname === path,
            }
          )}
        >
          <motion.span
            variants={currentLink}
            transition={TRANSITION}
            style={{
              y: pathname === path ? "-200%" : 0,
              opacity: pathname === path ? 0 : 1,
            }}
            className="inline-block"
          >
            {name}
          </motion.span>

          <motion.span
            variants={underLink}
            transition={TRANSITION}
            style={{
              y: pathname === path ? 0 : "200%",
            }}
            className="inline-block absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600"
          >
            {name}
          </motion.span>
        </motion.div>
      </Link>

      <ArrowRight path={path} pathname={pathname} />
    </motion.li>
  );
}

interface ArrowRightProps {
  pathname: string;
  path: string;
}

function ArrowRight({ pathname, path }: ArrowRightProps) {
  return (
    <span
      className={cn(
        "absolute top-[50%] transition-transform duration-150  right-[calc(100%-27px)] -translate-x-[50%] -translate-y-[50%]",
        {
          "translate-x-1": pathname === path,
        }
      )}
    >
      <FaArrowRight className="size-5" />
    </span>
  );
}
