import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionConfig, motion } from "framer-motion";

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
            "relative translate-x-7 overflow-hidden whitespace-nowrap text-3xl font-black transition-transform duration-150",
            {
              "translate-x-10": pathname === path,
            }
          )}
        >
          <MotionConfig transition={TRANSITION}>
            <motion.span variants={currentLink} className="inline-block">
              {name}
            </motion.span>

            <motion.span
              variants={underLink}
              className="button-gradient absolute inset-0 inline-block bg-clip-text text-transparent"
            >
              {name}
            </motion.span>
          </MotionConfig>
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
        "absolute right-[calc(100%-27px)] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-transform duration-150",
        {
          "translate-x-1": pathname === path,
        }
      )}
    >
      <FaArrowRight className="size-5" />
    </span>
  );
}
