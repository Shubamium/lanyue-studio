"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";

import Link from "next/link";
import React, { CSSProperties, useEffect, useRef } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { urlFor } from "../db/sanity";
import { nt } from "../util/util";
import { Home, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = { vs: Home["vision"] };

export default function Vision({ vs }: Props) {
  const [scope, animate] = useAnimate();
  const vision_iv = useInView(scope, {
    once: true,
  });

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

  const bg = vs?.background as Media;
  return (
    <section
      id="vision"
      style={
        {
          // "--bg": `url('${urlFor(vs.background)?.format("webp").height(900).url()}')`,
          "--bg": `url('${bg?.sizes?.Medium?.url ?? bg?.url ?? undefined}')`,
        } as CSSProperties
      }
      ref={scope}
    >
      <img src="/de/vision-splat.png" alt="" className="de-splat l" />
      <img src="/de/vision-splat.png" alt="" className="de-splat r" />
      <article>
        <div className="left">
          <img src="/gfx/icon-white.png" alt="" className="icon stagger" />
          <h2 className="h s stagger">
            {vs?.heading}
            {/* <strong>DREAMS COME TRUE!</strong> */}
          </h2>
          <div className="p stagger">
            <RichText data={vs?.paragraph as SerializedEditorState}></RichText>
            {/* <PortableText value={vs.paragraph} /> */}
            {/* Our vision is to create <strong>consistency</strong> that clients
            can expect across the board and eliminate any stress that comes with
            the business side of art. */}
          </div>
          <Link
            href={vs?.button?.path ?? ""}
            target={nt(vs?.button?.path ?? undefined)}
            className="btn btn-main outline btn-commision stagger"
          >
            {/* COMMISSIONS */}
            {vs?.button?.text}
          </Link>
        </div>
      </article>
    </section>
  );
}
