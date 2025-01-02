"use client";
import React from "react";
import "./terms.scss";
import TermsList from "./TermsList";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion";
type Props = {};

export default function TermsPage({}: Props) {
  const [scope, animate] = useIV(async () => {
    await animate(
      "#terms-banner",
      {
        clipPath: "inset(100% 0% 100% 0%)",
      },
      {
        duration: 0,
      }
    );

    animate(
      "#terms-banner",
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        duration: 2,
        ease: "easeInOut",
      }
    );

    animateStagger(animate, stagger);
  });
  return (
    <main id="page_terms" ref={scope}>
      <section id="terms-banner">
        <img src="/de/vision-splat.png" alt="" className="splat l" />
        <img src="/de/featuredartist-splat.png" alt="" className="splat r" />
      </section>

      <section id="terms-list">
        <aside>
          <article>
            <img src="/de/tos-splat.png" alt="" className="de-splat" />
            <p className="sh stagger">TOS</p>
            <h2 className="h stagger">TERMS OF SERVICE</h2>
            <p className="p stagger">
              By commissioning our services, you formally accept these terms and
              conditions.
            </p>

            <img src="/de/flower-tos.png" alt="" className="de-flower" />
          </article>
        </aside>
        <TermsList />
      </section>
    </main>
  );
}
