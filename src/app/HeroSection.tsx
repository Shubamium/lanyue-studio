"use client";
import { motion, useInView, useScroll } from "motion/react";
import { useRef } from "react";
import { useParallax } from "./util/util";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
type Props = {};

export default function HeroSection({}: Props) {
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
            <p className="sh">YOUR PASSION IS OUR PURPOSE</p>
            <h2 className="hm">LET US MAKE YOUR DREAMS COME TRUE</h2>
          </div>
          <p className="p">
            <strong>Lan’Yue Studio</strong> is here for you. We pride ourselves
            on our <strong>ethics and quality standards</strong> – nothing but
            the best for our artists and clients. Whether your needs are big or
            small, we vow to provide you the{" "}
            <strong>highest level of service</strong> and make sure you are
            happy!
          </p>

          <div className="action">
            <Link href={"/commissions"} className="btn btn-main">
              {" "}
              COMMISSIONS
            </Link>
            <Link href={"/contact"} className="btn btn-main outline">
              INQUIRIES
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
          transition={{
            delay: 1.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="image-part inner-shadow-l"
        >
          <motion.img
            src="/gfx/hero_art-l.png"
            alt=""
            className="clip-border l main-img"
            style={{ objectPosition: l }}
          />
          <div className="overlay inner-shadow"></div>

          <div className="clip ctr"></div>
          <div className="clip cbr"></div>
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
          src="/gfx/hero_art-r.png"
          alt=""
          className=" main-img clip-border l "
        />
        <div className="overlay inner-shadow"></div>
        <div className="clip ctl"></div>
        <div className="clip cbl"></div>
        <img src="/de/grey-cloud.png" alt="" className="grey-cloud" />
      </motion.figure>
    </section>
  );
}
