"use client";
import { motion, animate, useMotionValue } from "motion/react";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";

type Props = {};

// For future reference
// Slider works by getting the width of an object
// then transforming it along the x axis 1/3 of the width amount
// then reseting insntantly so that it appears looping
export default function FeaturedProjects({}: Props) {
  // Measure of the slider
  const [sliderRef, measure] = useMeasure();

  // Value to animate
  const xpos = useMotionValue(0);

  useEffect(() => {
    const margin = 163;

    // 1/3 of the item size, set to (-) negative to move to the opposite direction
    const finalPos = -measure.width + margin;

    const itemAmount = 6;
    // Move the xpos from 0 (not moving) to 1/3 (final position)
    let controls = animate(xpos, [0, finalPos], {
      duration: itemAmount * 4, // Change the speed based on the amount of item
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xpos, measure]);
  return (
    <section id="featured-projects">
      <div className="banner inner-shadow">
        <img src="/de/featuredartist-splat.png" alt="" className="de-splat" />
      </div>
      <div className="heading">
        <img src="/de/bg-logo.png" alt="" className="bg-cloud ni" />
        <div className="text-part">
          <p className="sh">FEATURED PROJECTS</p>
          <h2 className="h">PORTFOLIO MAIN TEXT</h2>
          <p className="p">
            Lan'Yue Studio is inspired by the rare and unique blue moon. Our
            goal is to curate the one-of-a-kind beauty you deserve for any
            project you can imagine, from illustrations to Live2D models and
            graphic design.
          </p>
        </div>
      </div>

      <div className="scroller-container">
        <div className="scroller">
          {/* <div className="slider">
			<img src="/gfx/port1.png" alt="" />
			<img src="/gfx/port2.png" alt="" />
			<img src="/gfx/port1.png" alt="" />
			<img src="/gfx/port2.png" alt="" />
			<img src="/gfx/port1.png" alt="" />
			<img src="/gfx/port2.png" alt="" />
		</div> */}

          <motion.div ref={sliderRef} className="slider" style={{ x: xpos }}>
            {/* Make duplicate three times */}
            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />
            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />
            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />

            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />
            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />
            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />

            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />
            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />
            <img src="/gfx/port1.png" alt="" />
            <img src="/gfx/port2.png" alt="" />
          </motion.div>
        </div>

        <div className="container-splat ni">
          <img src="/de/scroller-splat.png" alt="" className="splat l" />
          <img src="/de/scroller-splat.png" alt="" className="splat r" />
        </div>
      </div>
    </section>
  );
}
