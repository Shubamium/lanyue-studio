"use client";
import { motion, useInView, useScroll } from "motion/react";
import { useRef } from "react";
import { nt, useParallax } from "./util/util";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { urlFor } from "./db/sanity";
type Props = { hs: any };

export default function HeroSection({ hs }: Props) {
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

  const iv = useInView(targetRef);

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
            <p className="sh">{hs.sh}</p>
            <h2 className="hm">{hs.h}</h2>
          </div>
          <div className="p">
            <PortableText value={hs.p} />
            {/* <strong>Lan’Yue Studio</strong> is here for you. We pride ourselves
            on our <strong>ethics and quality standards</strong> – nothing but
            the best for our artists and clients. Whether your needs are big or
            small, we vow to provide you the{" "}
            <strong>highest level of service</strong> and make sure you are
            happy! */}
          </div>

          <div className="action">
            <Link
              href={hs.ba.path}
              target={nt(hs.ba.path)}
              className="btn btn-main"
            >
              {" "}
              {/* COMMISSIONS */}
              {hs.ba.text}
            </Link>
            <Link
              href={hs.bb.path}
              target={nt(hs.bb.path)}
              className="btn btn-main outline"
            >
              {/* INQUIRIES */}
              {hs.bb.text}
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
          data-tip={hs.left_art.artist}
          transition={{
            delay: 1.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="image-part inner-shadow-l"
        >
          <motion.img
            src={urlFor(hs.left_art.image)?.auto("format").url()}
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
          src={urlFor(hs.right_art.image)?.auto("format").url()}
          alt=""
          data-tip={hs.right_art.artist}
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
