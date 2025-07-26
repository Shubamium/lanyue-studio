import { useAnimate, useInView } from "motion/react";
import { useCallback, useEffect } from "react";

export function useIV(animationFunction: () => Promise<void>) {
  const animate = useAnimate();
  const iv = useInView(animate[0], {
    once: true,
  });

  const memoizedAnimationFunction = useCallback(animationFunction, []);
  useEffect(() => {
    if (iv) {
      memoizedAnimationFunction();
    }
  }, [iv]);
  return animate;
}

export async function animateStagger(
  animate: any,
  stagger: any,
  dur?: number,
  delay?: number
) {
  await animate([
    [
      ".stagger",
      {
        clipPath: "inset(0% 100% 0% 0%)",
        opacity: 0,
      },
      {
        duration: 0,
      },
    ],
    [
      ".stagger",
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        duration: dur ?? 1,
        delay: stagger(delay ?? 0.6),
      },
    ],
  ]);
}
