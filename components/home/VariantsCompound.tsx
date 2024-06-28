import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface PropsWithChildren {
  children: React.ReactNode;
}

interface HeadingProps {
  href: string;
  title: string;
  description: string;
}

function VariantsCompound({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      {children}
    </div>
  );
}

const Heading = ({ title, description, href }: HeadingProps) => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-5 md:sticky md:top-0 md:h-screen">
      <h2 className="mb-4 mt-2 text-5xl font-semibold leading-tight">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground">{description}</p>
      <Link
        href={href}
        className="button-gradient mt-5 w-fit rounded-full px-4 py-2 text-sm font-medium uppercase text-indigo-100"
      >
        More Animation
      </Link>
    </div>
  );
};

const Items = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative w-full">
      <div className="sticky top-0 z-10 hidden h-24 w-full md:block"></div>
      <div className="relative z-0 flex flex-col gap-6 md:gap-12">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement, {});
        })}
      </div>
      <div className="h-24 w-full md:h-48"></div>
    </div>
  );
};

function Item({ children }: PropsWithChildren) {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={targetRef}
      className="aspect-video bg-muted shadow-lg w-full shrink-0 overflow-hidden rounded-2xl border"
      style={{
        scale,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
}

VariantsCompound.Heading = Heading;
VariantsCompound.Items = Items;
VariantsCompound.Item = Item;

export default VariantsCompound;
