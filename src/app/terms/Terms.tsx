"use client";
import React from "react";
import "./terms.scss";
import TermsList from "./TermsList";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion";
import { PortableText } from "next-sanity";
import { urlFor } from "../db/sanity";
type Props = { t: any };

export default function Terms({ t }: Props) {
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
      <section
        id="terms-banner"
        style={{
          backgroundImage: `url('${urlFor(t.banner.image)?.auto("format").url()}')`,
        }}
        data-tip={t.banner.artist}
      >
        <img src="/de/vision-splat.png" alt="" className="splat l" />
        <img src="/de/featuredartist-splat.png" alt="" className="splat r" />
      </section>

      <section id="terms-list">
        <aside>
          <article>
            <img src="/de/tos-splat.png" alt="" className="de-splat" />
            <p className="sh stagger">{t.sh}</p>
            <h2 className="h stagger">{t.h}</h2>
            <div className="p stagger">
              <PortableText value={t.p} />
            </div>

            <img src="/de/flower-tos.png" alt="" className="de-flower" />
          </article>
        </aside>
        <TermsList tl={t.tl} />
      </section>
    </main>
  );
}
