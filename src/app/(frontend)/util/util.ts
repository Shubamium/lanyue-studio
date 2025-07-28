import { MotionValue, useTransform } from "motion/react";

export function useParallax(value: MotionValue<number>, distance: number) {
  let y = useTransform(value, [0, 1], [-distance, distance]);
  return useTransform(y, (value) => `0px ${value}px`);
}

// Open in new tab if starts with '/'
export function nt(url: string | null | undefined) {
  if (!url) return "";
  if (url[0] !== "/") {
    return "_blank";
  } else {
    undefined;
  }
}
