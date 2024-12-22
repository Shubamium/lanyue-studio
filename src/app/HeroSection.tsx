"use client";
import { motion, useScroll } from "motion/react";
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

  return (
    <section id="hero-section" ref={targetRef}>
      <article id="title-group">
        <div id="top-part">
          <div id="head">
            <p id="sh">SUBHEADING TEXT</p>
            <h2 id="hm">MAIN CALL TO ACTION TEXT</h2>
          </div>
          <p id="p">
            <strong>Lan'Yue Studio</strong> is inspired by the rare and unique
            blue moon. Our goal is to curate the one-of-a-kind beauty you
            deserve for any project you can imagine, from{" "}
            <strong>illustrations</strong> to <strong>Live2D models</strong> and{" "}
            <strong>graphic design</strong>.
          </p>

          <div id="action">
            <button id="btn btn-main">COMMISSIONS TEXT</button>
            <button id="btn btn-main outline">ARTIST TEXT</button>
          </div>
        </div>

        <div id="image-part inner-shadow-l">
          <motion.img
            src="/gfx/hero_art-l.png"
            alt=""
            className="clip-border l "
            style={{ objectPosition: l }}
          />
          <div id="clip ctr"></div>
          <div id="clip cbr"></div>
        </div>
      </article>
      <figure id="inner-shadow">
        <motion.img
          style={{ objectPosition: r }}
          src="/gfx/hero_art-r.png"
          alt=""
          className="clip-border l "
        />
        <div id="clip ctl"></div>
        <div id="clip cbl"></div>
      </figure>
    </section>
  );
}
