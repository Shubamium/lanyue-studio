"use client";
import { stagger } from "motion";
import {
  motion,
  animate,
  useMotionValue,
  useAnimate,
  useInView,
} from "motion/react";
import React, { CSSProperties, useEffect } from "react";
import useMeasure from "react-use-measure";
import { getFileUrl, urlFor } from "./db/sanity";
import { PortableText } from "next-sanity";
import { useMediaQuery } from "react-responsive";

type Props = { fps: any };

// For future reference
// Slider works by getting the width of an object
// then transforming it along the x axis 1/3 of the width amount
// then reseting insntantly so that it appears looping
export default function FeaturedProjects({ fps }: Props) {
  const [scope, animate] = useAnimate();
  const iv = useInView(scope, {
    once: true,
  });

  // Measure of the slider
  const [sliderRef, measure] = useMeasure();

  // Value to animate
  const xpos = useMotionValue(0);

  const small = useMediaQuery({
    query: "(max-width:550px)",
  });
  useEffect(() => {
    const margin = -5;

    // 1/3 of the item size, set to (-) negative to move to the opposite direction
    const finalPos = -measure.width / 3 + margin;

    const itemAmount = fps.projects ? fps.projects.length : 3;
    // Move the xpos from 0 (not moving) to 1/3 (final position)
    let controls = animate(xpos, [0, finalPos], {
      duration: small ? itemAmount * 3 : itemAmount * 3 * 1.5, // Change the speed based on the amount of item
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xpos, measure, small]);

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
      <div
        className="banner inner-shadow"
        data-tip={fps.banner.artist}
        style={
          {
            background: `url('${urlFor(fps.banner.image)?.auto("format").url()}')`,
          } as CSSProperties
        }
      >
        <img src="/de/featuredartist-splat.png" alt="" className="de-splat" />
      </div>
      <div className="heading">
        <img src="/de/bg-logo.png" alt="" className="bg-cloud ni stagger" />
        <div className="text-part">
          <p className="sh stagger">{fps.sh}</p>
          <h2 className="h stagger">{fps.h}</h2>
          <p className="p stagger">
            <PortableText value={fps.paragraph} />
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

            {fps.projects &&
              [...fps.projects, ...fps.projects, ...fps.projects].map(
                (p: any, index: number) => {
                  // console.log(p._type);
                  if (p._type === "images") {
                    return (
                      <img
                        src={urlFor(p.artwork)?.auto("format").url()}
                        alt=""
                        data-tip={p.artist}
                        className={
                          "stagger " +
                          " " +
                          (p.size === "landscape" ? "landscape" : "norm")
                        }
                        key={p._key + index}
                      />
                    );
                  } else if (p._type === "video") {
                    return (
                      <video
                        src={getFileUrl(p.artwork) ?? ""}
                        key={p._key + index}
                        data-tip={p.artist}
                        className="stagger"
                        muted
                        autoPlay
                        controls
                        loop
                        playsInline
                        disablePictureInPicture
                        // disableRemotePlayback
                      ></video>
                    );
                  }
                }
              )}
            {/* <img src="/gfx/port1.png" alt="" className="stagger" />
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
            <img src="/gfx/port2.png" alt="" className="stagger" /> */}
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
