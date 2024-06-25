import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FC, useRef } from "react";

export interface ScrollAnimationMainProps {
  ref1: React.MutableRefObject<HTMLDivElement | null>;
  ref2: React.MutableRefObject<HTMLDivElement | null>;
  springY1: MotionValue<number>;
  springScale1: MotionValue<number>;
  springY2: MotionValue<number>;
  springScale2: MotionValue<number>;
  opacity: MotionValue<number>;
}

export const useScrollMainAnimation = (): ScrollAnimationMainProps => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });
  //primera imagen
  const ImageY1 = useTransform(scrollY, [0, 920], [0, -260]);
  const scale1 = useTransform(scrollY, [0, 920], [0.9, 1]);
  const springY1 = useSpring(ImageY1, { stiffness: 300, damping: 30 });
  const springScale1 = useSpring(scale1, { stiffness: 300, damping: 30 });
  //segunda imagen
  const ImageY2 = useTransform(scrollY, [0, 900], [0, 164.2]);
  const springY2 = useSpring(ImageY2, { stiffness: 300, damping: 30 });
  const scale2 = useTransform(scrollY, [0, 720], [0.9, 1]);
  const springScale2 = useSpring(scale2, { stiffness: 300, damping: 30 });

  const opacity = useTransform(scrollY, [0, 600], [0.8, 1]);

  return {
    ref1,
    ref2,
    springY1,
    springScale1,
    springY2,
    springScale2,
    opacity,
  };
};
