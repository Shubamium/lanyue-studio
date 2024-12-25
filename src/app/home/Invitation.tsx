"use client";

import { useAnimate, useInView } from "motion/react";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Invitation({}: Props) {
  const [scope, animate] = useAnimate();
  const iv = useInView(scope);

  const animateInvitation = async () => {
    return;
  };
  useEffect(() => {
    if (iv) {
      animateInvitation();
    }
  }, [iv]);
  return (
    <section id="invitation">
      <div className="bg">a</div>
      <img src="/de/blue-branch.png" alt="" className="blue-branch l" />
      <img src="/de/blue-branch.png" alt="" className="blue-branch r" />
      <div className="confine">
        <article>
          <h2 className="h">
            SECONDARY CALL TO ACTION <span>OF SOME CONTACT TEXT</span>
          </h2>
          <button className="btn btn-main"> CONTACT TEXT</button>
        </article>
        <figure>
          <img src="/gfx/home-glasses.png" alt="" className="home-glasses" />
          <img src="/de/blue-splat1.png" alt="" className="de-splat" />
        </figure>
      </div>
    </section>
  );
}
