"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";

import React, { useEffect } from "react";
import { urlFor } from "../db/sanity";
import { animateStagger, useIV } from "../util/useIV";
import { Home, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = { fas: Home["featuredArtist"] };

export default function FeaturedArtist({ fas }: Props) {
  // const [scope, animate] = useAnimate();
  // const iv = useInView(scope, {
  //   once: true,
  // });

  // const animateArtist = async () => {
  //   await animate([
  //     [
  //       ".stagger",
  //       {
  //         clipPath: "inset(0% 100% 0% 0%)",
  //         opacity: 0,
  //       },
  //       {
  //         duration: 0,
  //       },
  //     ],
  //   ]);
  //   animate(
  //     ".stagger",
  //     {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       opacity: 1,
  //     },
  //     {
  //       duration: 2,
  //       ease: "easeInOut",
  //       delay: stagger(0.1),
  //     }
  //   );
  // };
  // useEffect(() => {
  //   if (iv) {
  //     animateArtist();
  //   }
  // }, [iv]);

  const [scope, animate] = useIV(async () => {
    animateStagger(animate, stagger, 2, 0);
  });

  const il = {
    art: fas?.art as Media,
  };
  return (
    <section id="featured-artist" ref={scope}>
      <img src="/de/grey-cloud.png" alt="" className="cloud l " />
      <img src="/de/grey-cloud.png" alt="" className="cloud r" />
      <figure className="stagger">
        <div className="art-part">
          <div className="left" data-tip={il.art?.artist}>
            <img
              // src={urlFor(il.art?.)?.format("webp").height(1080).url()}
              src={il.art?.sizes?.Medium?.url ?? il.art?.url ?? undefined}
              alt=""
              loading="lazy"
              className=""
            />
            <img
              src="/de/featuredartist-splat.png"
              loading="lazy"
              alt=""
              className="splat l ni"
            />
            <img
              src="/de/featuredartist-splat.png"
              loading="lazy"
              alt=""
              className="splat r ni"
            />
          </div>

          <div className="right"></div>
        </div>
      </figure>
      <article className="stagger">
        <div className="r"></div>
        <div className="content">
          <p className="sh">{fas?.sh}</p>
          <h2 className="h">{fas?.heading}</h2>
          <div className="p">
            {/* Artezahn is Lan’Yue Studio’s first partner and a dearly beloved */}
            {/* friend. Known for their stunning Nilou (from Genshin Impact) fan
            arts, we are excited to begin accepting Live2D model art commissions
            with them! */}
            <RichText data={fas?.paragraph as SerializedEditorState} />
          </div>

          <img
            src="/de/white-corner-flower.png"
            alt=""
            className="whiteflower"
          />
        </div>
      </article>
    </section>
  );
}
