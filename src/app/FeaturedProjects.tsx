"use client";
import { stagger } from "motion";
import {
  motion,
  animate,
  useMotionValue,
  useAnimate,
  useInView,
} from "motion/react";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";

type Props = {};

// For future reference
// Slider works by getting the width of an object
// then transforming it along the x axis 1/3 of the width amount
// then reseting insntantly so that it appears looping
export default function FeaturedProjects({}: Props) {
  const [scope, animate] = useAnimate();
  const iv = useInView(scope, {
    once: true,
  });

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

  const animateProject = async () => {
    animate([
      [
        ".banner",
        {
          clipPath: "inset(100% 0% 100% 0%)",
          opacity: 0,
        },
        {
          duration: 0,
        },
      ],
      [
        ".banner",
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        },
        {
          duration: 2,
          ease: "easeInOut",
        },
      ],
    ]);

    animate([
      [
        ".stagger",
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          duration: 0,
        },
      ],
      [
        ".stagger",
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
        },
        {
          duration: 1.1,
          delay: stagger(0.2),
        },
      ],
    ]);
  };
  useEffect(() => {
    if (iv) {
      animateProject();
    }
  }, [iv]);
  return (
    <section id="featured-projects" ref={scope}>
      <div className="banner inner-shadow">
        <img src="/de/featuredartist-splat.png" alt="" className="de-splat" />
      </div>
      <div className="heading">
        <img src="/de/bg-logo.png" alt="" className="bg-cloud ni stagger" />
        <div className="text-part">
          <p className="sh stagger">FEATURED PROJECTS</p>
          <h2 className="h stagger">PORTFOLIO WORKS</h2>
          <p className="p stagger">
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
            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />
            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />
            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />

            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />
            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />
            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />

            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />
            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />
            <img src="/gfx/port1.png" alt="" className="stagger" />
            <img src="/gfx/port2.png" alt="" className="stagger" />
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
