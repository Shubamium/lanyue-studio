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
import { Home, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = { fps: Home["featuredProjects"] };

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

    const itemAmount = fps?.projects ? fps.projects.length : 3;
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

  const il = {
    banner: fps?.banner as Media,
  };
  return (
    <section id="featured-projects" ref={scope}>
      <div
        className="banner inner-shadow"
        data-tip={il.banner?.artist}
        style={
          {
            // backgroundImage: `url('${urlFor(fps.banner.image)?.format("webp").crop("center").height(1920).url()}')`,
            backgroundImage: `url('${il.banner?.sizes?.Large?.url ?? il.banner?.url ?? undefined}')`,
          } as CSSProperties
        }
      >
        <img src="/de/featuredartist-splat.png" alt="" className="de-splat" />
      </div>
      <div className="heading">
        <img src="/de/bg-logo.png" alt="" className="bg-cloud ni stagger" />
        <div className="text-part">
          <p className="sh stagger">{fps?.sh}</p>
          <h2 className="h stagger">{fps?.h}</h2>
          <div className="p stagger">
            <RichText data={fps?.paragraph as SerializedEditorState} />
          </div>
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

          <motion.div
            ref={sliderRef}
            className="slider"
            style={{ x: xpos, willChange: "transform" }}
          >
            {/* Make duplicate three times */}

            {fps?.projects?.map((p, index: number) => {
              // console.log(p._type);
              if (p.type === "Image") {
                const img = p?.artwork as Media;
                return (
                  <img
                    // src={urlFor(p.artwork)
                    //   ?.format("webp")
                    //   .height(650)
                    //   .url()}
                    src={img.sizes?.Large?.url ?? img.url ?? undefined}
                    alt=""
                    data-tip={img.artist}
                    loading="lazy"
                    className={
                      "stagger " +
                      " " +
                      (p.size === "landscape" ? "landscape" : "norm")
                    }
                    key={new String(p.id) + "-1-" + index}
                  />
                );
                // }
                // else if (false) {
                //   return (
                //     <video
                //       src={getFileUrl(p.artwork) ?? ""}
                //       key={(p?.id as string) + index}
                //       data-tip={img.artist}
                //       className="stagger"
                //       muted
                //       autoPlay
                //       controls
                //       loop
                //       preload="none"
                //       playsInline
                //       disablePictureInPicture
                //       // disableRemotePlayback
                //     ></video>
                //   );
              } else if (p.type === "Video (Embed)") {
                return (
                  <div
                    className="main-pt"
                    onMouseEnter={() => {
                      const tipshowEvent = new CustomEvent("tipshow", {
                        detail: {
                          tip: p.Video?.artist,
                        },
                      });
                      document.dispatchEvent(tipshowEvent);
                    }}
                    onMouseLeave={() => {
                      const tipshowEvent = new CustomEvent("tipshow", {
                        detail: {
                          tip: "",
                        },
                      });
                      document.dispatchEvent(tipshowEvent);
                    }}
                    key={new String(p.id) + "-1-" + index}
                  >
                    <iframe
                      src={`${p.Video?.url}?autoplay=true&loop=true&muted=true&preload=true&responsive=true`}
                      loading="lazy"
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              }
            })}
            {fps?.projects?.map((p, index: number) => {
              // console.log(p._type);
              if (p.type === "Image") {
                const img = p?.artwork as Media;
                return (
                  <img
                    // src={urlFor(p.artwork)
                    //   ?.format("webp")
                    //   .height(650)
                    //   .url()}
                    src={img.sizes?.Large?.url ?? img.url ?? undefined}
                    alt=""
                    data-tip={img.artist}
                    loading="lazy"
                    className={
                      "stagger " +
                      " " +
                      (p.size === "landscape" ? "landscape" : "norm")
                    }
                    key={new String(p.id) + "-2-" + index}
                  />
                );
                // }
                // else if (false) {
                //   return (
                //     <video
                //       src={getFileUrl(p.artwork) ?? ""}
                //       key={(p?.id as string) + index}
                //       data-tip={img.artist}
                //       className="stagger"
                //       muted
                //       autoPlay
                //       controls
                //       loop
                //       preload="none"
                //       playsInline
                //       disablePictureInPicture
                //       // disableRemotePlayback
                //     ></video>
                //   );
              } else if (p.type === "Video (Embed)") {
                return (
                  <div
                    className="main-pt"
                    onMouseEnter={() => {
                      const tipshowEvent = new CustomEvent("tipshow", {
                        detail: {
                          tip: p.Video?.artist,
                        },
                      });
                      document.dispatchEvent(tipshowEvent);
                    }}
                    onMouseLeave={() => {
                      const tipshowEvent = new CustomEvent("tipshow", {
                        detail: {
                          tip: "",
                        },
                      });
                      document.dispatchEvent(tipshowEvent);
                    }}
                    key={new String(p.id) + "-2-" + index}
                  >
                    <iframe
                      src={`${p.Video?.url}?autoplay=true&loop=true&muted=true&preload=true&responsive=true`}
                      loading="lazy"
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              }
            })}
            {fps?.projects?.map((p, index: number) => {
              // console.log(p._type);
              if (p.type === "Image") {
                const img = p?.artwork as Media;
                return (
                  <img
                    // src={urlFor(p.artwork)
                    //   ?.format("webp")
                    //   .height(650)
                    //   .url()}
                    src={img.sizes?.Large?.url ?? img.url ?? undefined}
                    alt=""
                    data-tip={img.artist}
                    loading="lazy"
                    className={
                      "stagger " +
                      " " +
                      (p.size === "landscape" ? "landscape" : "norm")
                    }
                    key={new String(p.id) + "-3-" + index}
                  />
                );
                // }
                // else if (false) {
                //   return (
                //     <video
                //       src={getFileUrl(p.artwork) ?? ""}
                //       key={(p?.id as string) + index}
                //       data-tip={img.artist}
                //       className="stagger"
                //       muted
                //       autoPlay
                //       controls
                //       loop
                //       preload="none"
                //       playsInline
                //       disablePictureInPicture
                //       // disableRemotePlayback
                //     ></video>
                //   );
              } else if (p.type === "Video (Embed)") {
                return (
                  <div
                    className="main-pt"
                    onMouseEnter={() => {
                      const tipshowEvent = new CustomEvent("tipshow", {
                        detail: {
                          tip: p.Video?.artist,
                        },
                      });
                      document.dispatchEvent(tipshowEvent);
                    }}
                    onMouseLeave={() => {
                      const tipshowEvent = new CustomEvent("tipshow", {
                        detail: {
                          tip: "",
                        },
                      });
                      document.dispatchEvent(tipshowEvent);
                    }}
                    key={new String(p.id) + "-3-" + index}
                  >
                    <iframe
                      src={`${p.Video?.url}?autoplay=true&loop=true&muted=true&preload=true&responsive=true`}
                      loading="lazy"
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              }
            })}
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
