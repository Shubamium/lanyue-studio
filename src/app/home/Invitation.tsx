"use client";

import { useAnimate, useInView } from "motion/react";
import React, { useEffect, useState } from "react";
import { animateStagger } from "../util/useIV";
import { stagger } from "motion";

type Props = {};

export default function Invitation({}: Props) {
  const [scope, animate] = useAnimate();
  const iv = useInView(scope);

  const animateInvitation = async () => {
    animateStagger(animate, stagger, 2, 0.5);
    await animate([
      [
        ".figure",
        {
          x: 400,
          opacity: 0,
        },
        {
          duration: 0,
        },
      ],
      [
        ".figure",
        {
          x: 0,
          opacity: 1,
        },
        {
          duration: 1.2,
          ease: "easeInOut",
        },
      ],
    ]);
  };
  useEffect(() => {
    if (iv) {
      animateInvitation();
    }
  }, [iv]);
  return (
    <section id="invitation" ref={scope}>
      <div className="bg stagger">a</div>
      <img src="/de/blue-branch.png" alt="" className="blue-branch l stagger" />
      <img src="/de/blue-branch.png" alt="" className="blue-branch r stagger" />
      <div className="confine">
        <article>
          <h2 className="h stagger">
            SECONDARY CALL TO ACTION <span>OF SOME CONTACT TEXT</span>
          </h2>
          <button className="btn btn-main stagger"> CONTACT TEXT</button>
        </article>
        <figure className="figure">
          <img src="/gfx/home-glasses.png" alt="" className="home-glasses" />
          <img src="/de/blue-splat1.png" alt="" className="de-splat" />
        </figure>
      </div>
    </section>
  );
}
