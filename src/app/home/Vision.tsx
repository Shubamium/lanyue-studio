"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

type Props = {};

export default function Vision({}: Props) {
  const [scope, animate] = useAnimate();
  const vision_iv = useInView(scope);

  const animateVision = async () => {
    // Initial State
    console.log("animateing");
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
          duration: 1,
          delay: stagger(0.6),
        },
      ],
    ]);

    // animate(
    //   ".stagger",
    //   {
    //     clipPath: "inset(0% 0% 0% 0%)",
    //   },
    //   {
    //     duration: 1.3,
    //     delay: stagger(0.3),
    //   }
    // );
  };
  useEffect(() => {
    if (vision_iv) {
      animateVision();
    }
  }, [vision_iv]);
  return (
    <section id="vision" ref={scope}>
      <img src="/de/vision-splat.png" alt="" className="de-splat l" />
      <img src="/de/vision-splat.png" alt="" className="de-splat r" />
      <article>
        <div className="left">
          <img src="/gfx/icon-white.png" alt="" className="icon stagger" />
          <h2 className="h s stagger">
            LET US MAKE YOUR <strong>DREAMS COME TRUE!</strong>
          </h2>
          <p className="p stagger">
            Our vision is to create <strong>consistency</strong> that clients
            can expect across the board and eliminate any stress that comes with
            the business side of art.
          </p>
          <button className="btn btn-main outline btn-commision stagger">
            BUTTON TEXT HERE
          </button>
        </div>
      </article>
    </section>
  );
}
