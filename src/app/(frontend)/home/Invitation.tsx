"use client";

import { useAnimate, useInView } from "motion/react";
import React, { CSSProperties, useEffect, useState } from "react";
import { animateStagger } from "../util/useIV";
import { stagger } from "motion";
import Link from "next/link";
import { nt } from "../util/util";
import { Home, Media } from "@/payload-types";

type Props = { is: Home["invitation"] };

export function Invitation({ is }: Props) {
  const [scope, animate] = useAnimate();
  const iv = useInView(scope, {
    once: true,
  });

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

  const il = {
    ia: is?.ia as Media,
    ib: is?.ib as Media,
    background: is?.bg as Media,
    ic: is?.ic as Media,
    imd: is?.imd as Media,
  };
  return (
    <section id="invitation" ref={scope}>
      <div
        className="bg stagger"
        style={
          {
            // "--bg": `url('${urlFor/(is.bg)?.height(800).url()}')`,
            "--bg": `url('${il.background?.sizes?.Medium?.url ?? il.background?.url ?? undefined}')`,
          } as CSSProperties
        }
      >
        a
      </div>
      <img src="/de/blue-branch.png" alt="" className="blue-branch l stagger" />
      <img src="/de/blue-branch.png" alt="" className="blue-branch r stagger" />
      <div className="confine">
        <article>
          <h2 className="h stagger">
            {is?.hb}
            <span>{is?.hn}</span>
          </h2>
          <div className="action">
            {" "}
            <Link
              href={is?.ba?.path ?? ""}
              target={nt(is?.ba?.path ?? "")}
              className="btn btn-main stagger"
            >
              {/* {" "} */}
              {/* CONTACT FORM{" "} */}
              {is?.ba?.text}
            </Link>
            <Link
              href={is?.bb?.path ?? ""}
              target={nt(is?.bb?.path)}
              className="btn btn-main outline stagger"
            >
              {is?.bb?.text}
            </Link>
          </div>
        </article>
        <figure className="figure">
          {/* <img src="/gfx/home-glasses.png" alt="" className="home-glasses" /> */}
          <div className="diamonds">
            <div className="diamond">
              <img
                // src={urlFor(is.ia.image)?.format("webp").height(400).url()}
                // data-tip={is.ia.artist}
                data-tip={il.ia?.artist}
                src={il.ia?.sizes?.Small?.url ?? il.ia?.url ?? undefined}
                alt=""
              />
            </div>
            <div className="diamond">
              <img
                data-tip={il.ib?.artist}
                src={il.ib?.sizes?.Small?.url ?? il.ib?.url ?? undefined}
                alt=""
              />
            </div>
            <div className="diamond">
              <img
                src={il.ic?.sizes?.Small?.url ?? il.ic?.url ?? undefined}
                data-tip={il.ic?.artist}
                alt=""
              />
            </div>
            <div className="diamond">
              <img
                src={il.imd?.sizes?.Small?.url ?? il.imd?.url ?? undefined}
                data-tip={il.imd?.artist}
                alt=""
              />
            </div>
          </div>
          <img src="/de/blue-splat1.png" alt="" className="de-splat" />
        </figure>
      </div>
    </section>
  );
}

export default React.memo(Invitation);
