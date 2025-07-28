"use client";
import { motion, useInView, useScroll } from "motion/react";
import { useRef } from "react";
import { nt, useParallax } from "./util/util";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
type Props = { hs: Home["heroSection"] };
import React from "react";
import { Home, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
export function HeroSection({ hs }: Props) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end start"],
  });

  const medium = useMediaQuery({
    query: "(max-width:1440px)",
  });
  const l = useParallax(scrollYProgress, medium ? 30 : 200);
  const r = useParallax(scrollYProgress, medium ? 50 : 400);

  const iv = useInView(targetRef, {
    once: true,
  });
  console.log(hs);

  const il = {
    leftArt: hs.leftArt as Media,
    rightArt: hs.rightArt as Media,
  };

  return (
    <section id="hero-section" ref={targetRef}>
      <article className="title-group">
        <motion.div
          className="top-part"
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={
            iv
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            delay: 0,
            duration: 2,
            ease: "backInOut",
          }}
        >
          <div className="head">
            <p className="sh">{hs?.sh}</p>
            <h2 className="hm">{hs?.h}</h2>
          </div>
          <div className="p">
            <RichText data={hs?.p as SerializedEditorState} />

            {/* <strong>Lan’Yue Studio</strong> is here for you. We pride ourselves
            on our <strong>ethics and quality standards</strong> – nothing but
            the best for our artists and clients. Whether your needs are big or
            small, we vow to provide you the{" "}
            <strong>highest level of service</strong> and make sure you are
            happy! */}
          </div>

          <div className="action">
            <Link
              href={hs?.ba?.path ?? ""}
              target={nt(hs?.ba?.path)}
              className="btn btn-main"
            >
              {" "}
              {/* COMMISSIONS */}
              {hs?.ba?.text}
            </Link>
            <Link
              href={hs?.bb?.path ?? ""}
              target={nt(hs?.bb?.path)}
              className="btn btn-main outline"
            >
              {/* INQUIRIES */}
              {hs?.bb?.text}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={
            iv
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          data-tip={il?.leftArt?.artist}
          transition={{
            delay: 1.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="image-part inner-shadow-l"
        >
          <motion.img
            // src={urlFor(hs?.left_art?.image)?.format("webp").height(600).url()}
            src={il.leftArt.sizes?.Medium?.url ?? il.leftArt.url ?? undefined}
            alt=""
            className="clip-border l main-img"
            style={{ objectPosition: l }}
          />
          <div className="overlay inner-shadow ni"></div>

          <div className="clip ctr ni"></div>
          <div className="clip cbr ni"></div>
        </motion.div>
      </article>
      <motion.figure
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={
          iv
            ? {
                x: 0,
                opacity: 1,
              }
            : {}
        }
        transition={{
          delay: 1,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.img
          style={{ objectPosition: r }}
          // src={urlFor(hs.right_art.image)?.format("webp").height(1500).url()}
          src={il.rightArt?.sizes?.Max?.url ?? il.rightArt?.url ?? undefined}
          alt={""}
          data-tip={il.rightArt?.artist}
          className=" main-img clip-border l "
        />
        <div className="overlay inner-shadow ni"></div>
        <div className="clip ctl ni"></div>
        <div className="clip cbl ni"></div>
        <img src="/de/grey-cloud.png" alt="" className="grey-cloud ni" />
      </motion.figure>
    </section>
  );
}

export default React.memo(HeroSection);
