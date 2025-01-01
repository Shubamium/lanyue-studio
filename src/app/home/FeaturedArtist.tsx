"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import React, { useEffect } from "react";

type Props = {};

export default function FeaturedArtist({}: Props) {
  const [scope, animate] = useAnimate();
  const iv = useInView(scope, {
    once: true,
  });

  const animateArtist = async () => {
    await animate([
      [
        ".stagger",
        {
          clipPath: "inset(0% 100% 0% 0%)",
        },
        {
          duration: 0,
        },
      ],
    ]);
    animate(
      ".stagger",
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        duration: 2,
        ease: "easeInOut",
        delay: stagger(0.1),
      }
    );
  };
  useEffect(() => {
    if (iv) {
      animateArtist();
    }
  }, [iv]);

  return (
    <section id="featured-artist" ref={scope}>
      <img src="/de/grey-cloud.png" alt="" className="cloud l " />
      <img src="/de/grey-cloud.png" alt="" className="cloud r" />
      <figure className="stagger">
        <div className="art-part">
          <div className="left">
            <img src="/gfx/placeholder.png" alt="" className="" />
            <img
              src="/de/featuredartist-splat.png"
              alt=""
              className="splat l"
            />
            <img
              src="/de/featuredartist-splat.png"
              alt=""
              className="splat r"
            />
          </div>

          <div className="right"></div>
        </div>
      </figure>
      <article className="stagger">
        <div className="r"></div>
        <div className="content">
          <p className="sh">FEATURED ARTIST</p>
          <h2 className="h">ARTEZAHN</h2>
          <p className="p">
            Artezahn is Lan’Yue Studio’s first partner and a dearly beloved
            friend. Known for their stunning Nilou (from Genshin Impact) fan
            arts, we are excited to begin accepting Live2D model art commissions
            with them!
          </p>

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
