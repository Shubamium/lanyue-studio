"use client";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { useParallax } from "./util/util";
type Props = {};

export default function HeroSection({}: Props) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });
  const l = useParallax(scrollYProgress, 80);
  const r = useParallax(scrollYProgress, 350);

  return (
    <section id="hero-section" ref={targetRef}>
      <article className="title-group">
        <div className="top-part">
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
        </div>

        <div className="image-part inner-shadow-l">
          <motion.img
            src="/gfx/hero_art-l.png"
            alt=""
            className="clip-border l "
            style={{ objectPosition: l }}
          />
          <div className="clip ctr"></div>
          <div className="clip cbr"></div>
        </div>
      </article>
      <figure className="inner-shadow">
        <motion.img
          style={{ objectPosition: r }}
          src="/gfx/hero_art-r.png"
          alt=""
          className=" main-img clip-border l "
        />
        <div className="clip ctl"></div>
        <div className="clip cbl"></div>
        <img src="/de/grey-cloud.png" alt="" className="grey-cloud" />
      </figure>
    </section>
  );
}
