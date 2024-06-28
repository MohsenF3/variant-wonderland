"use client";

import React from "react";
import { motion } from "framer-motion";
import { useFollowCursor } from "@/hooks/useFollowCursor.ts";

export default function StickyCursor() {
  const pointerRef = React.useRef(null);
  const { x, y } = useFollowCursor(pointerRef);

  return (
    <motion.div
      ref={pointerRef}
      className="fixed size-[100px] -z-10 rounded-full blur-3xl"
      style={{
        x,
        y,
        background: "radial-gradient(circle closest-side, #7775D6, #E935C1)",
      }}
    />
  );
}
