"use client";
import { motion, useInView, useScroll } from "motion/react";
import { useRef } from "react";
import { useParallax } from "./util/util";
type Props = {};

export default function HeroSection({}: Props) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end start"],
  });
  const l = useParallax(scrollYProgress, 80);
  const r = useParallax(scrollYProgress, 350);

  const iv = useInView(targetRef, {});

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
            <p className="sh">SUBHEADING TEXT</p>
            <h2 className="hm">MAIN CALL TO ACTION TEXT</h2>
          </div>
          <p className="p">
            <strong>Lan'Yue Studio</strong> is inspired by the rare and unique
            blue moon. Our goal is to curate the one-of-a-kind beauty you
            deserve for any project you can imagine, from{" "}
            <strong>illustrations</strong> to <strong>Live2D models</strong> and{" "}
            <strong>graphic design</strong>.
          </p>

          <div className="action">
            <button className="btn btn-main">COMMISSIONS TEXT</button>
            <button className="btn btn-main outline">ARTIST TEXT</button>
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
