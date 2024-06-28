import React from "react";
import Lenis from "lenis";

interface UseLenisProps {
  wrapperRef?: React.RefObject<HTMLElement>;
}

export const useLenis = ({ wrapperRef }: UseLenisProps = {}) => {
  React.useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    const raf = (time: number) => {
      if (lenis) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    };

    if (wrapperRef && wrapperRef.current) {
      lenis = new Lenis({
        wrapper: wrapperRef.current,
      });
    } else {
      lenis = new Lenis();
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [wrapperRef]);
};
