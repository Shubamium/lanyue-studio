"use client";
import { animateStagger, useIV } from "@/app/(frontend)/util/useIV";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { stagger } from "motion";

import React, { useEffect } from "react";

type Props = { t: any };

export default function PriceHeading({ t }: Props) {
  const [scope, animate] = useIV(async () => {});

  useEffect(() => {
    // if () {
    animateStagger(animate, stagger);
    // }
  }, []);

  const headerImage = t.img as Media;
  return (
    <div id="prices-heading" ref={scope}>
      <img src="/de/header-cloud.png" alt="" className="cloud l" />
      <img src="/de/header-cloud.png" alt="" className="cloud r" />
      <div className="confine">
        <figure data-tip={t.img.artist}>
          <img src="/de/blue-splat1.png" alt="" className="splat " />
          <img
            // src={urlFor(t.img.image)?.format("webp").height(400).url()}
            src={
              headerImage?.sizes?.Small?.url ?? headerImage?.url ?? undefined
            }
            alt=""
            className=" stagger"
          />
          <div className="clip cbr"></div>
          <div className="clip cbl"></div>
          <div className="clip ctl"></div>
          <div className="clip ctr"></div>
        </figure>

        <article>
          <img
            src="/de/white-moon.png"
            alt=""
            className="de-moon stagger hovering"
          />
          <p className="sh stagger">{t.sh} </p>
          <h2 className="h stagger">{t.h}</h2>
          <div className="p stagger">
            <RichText data={t.p} />
          </div>
        </article>
      </div>
    </div>
  );
}
