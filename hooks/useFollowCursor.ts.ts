import React from "react";
import { useMotionValue, useSpring, frame, MotionValue } from "framer-motion";

const SPRING = { stiffness: 50, restDelta: 0.001 };

export const useFollowCursor = (ref: React.RefObject<HTMLElement>) => {
  const xPoint = useMotionValue(100);
  const yPoint = useMotionValue(100);
  const x = useSpring(xPoint, SPRING);
  const y = useSpring(yPoint, SPRING);

  React.useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element?.offsetLeft - element?.offsetWidth / 2);
        yPoint.set(clientY - element?.offsetTop - element?.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
};
