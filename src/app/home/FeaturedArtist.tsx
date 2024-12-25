"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import React, { useEffect } from "react";

type Props = {};

export default function FeaturedArtist({}: Props) {
  const [scope, animate] = useAnimate();
  const iv = useInView(scope);

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
          <h2 className="h">SOME TITLE HERE</h2>
          <p className="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
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
