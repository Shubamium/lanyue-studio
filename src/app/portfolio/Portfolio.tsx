"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
import getPortfolio, {
  getCategoryList,
  getPortfolioText,
} from "../db/portfolio";
import { getFileUrl, urlFor } from "../db/sanity";
import { animateStagger, useIV } from "../util/useIV";
type Props = {};

import { AnimatePresence, motion } from "motion/react";
import { stagger } from "motion";
import { PortableText } from "next-sanity";

export default function Portfolio({}: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const params = useSearchParams();
  const startingCat = params.get("c");
  const ref = params.get("ref");

  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [category, setCategory] = useState<any[]>([]);
  const [portfolioList, setPortfolioList] = useState<any[]>([]);

  const [sidebar, setSidebar] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const [t, setT] = useState<any>(null);
  useEffect(() => {
    const loadCat = async () => {
      let text = await getPortfolioText();
      setT(text);
      let portCat = await getCategoryList();
      setCategory(portCat);

      console.log(portCat);
      if (!startingCat) {
        setActiveCat(portCat[0].slug);
      } else {
        setActiveCat(startingCat);
      }
    };
    loadCat();
    return () => {
      const tipshowEvent = new CustomEvent("tipshow", {
        detail: {
          tip: "",
        },
      });
      document.dispatchEvent(tipshowEvent);
    };
  }, []);
  useEffect(() => {
    const loadPort = async () => {
      if (activeCat) {
        let portfolio = await getPortfolio(activeCat);
        if (portfolio) {
          setPortfolioList(portfolio);
        }
      }
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: 0,
        });
      }
    };
    loadPort();
  }, [activeCat]);

  const chopped = [...portfolioList];
  const toRender = [];
  while (chopped.length > 0) {
    toRender.push(chopped.splice(0, 2));
  }

  const [scope, animate] = useIV(async () => {
    animateStagger(animate, stagger, 1, 0.2);
  });

  const route = useRouter();
  const renderVideo = (src: any) => {
    if (src.url) {
      return (
        <div className="main-pt">
          <iframe
            src={`${src.url}?autoplay=true&loop=true&muted=true&preload=true&responsive=true`}
            loading="lazy"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
            allowFullScreen
            onMouseEnter={() => {
              const tipshowEvent = new CustomEvent("tipshow", {
                detail: {
                  tip: src.artist,
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
          ></iframe>
        </div>
      );
    } else {
      return (
        <video
          src={src.url ? src.url : getFileUrl(src.file)}
          controls
          autoPlay
          loop
          playsInline
          data-tip={src.artist}
          muted
          onClick={() => {
            setSelectedImage(src);
          }}
          className="main-pt"
        />
      );
    }
  };
  return (
    <section id="portfolio-display" ref={scope}>
      <aside
        id="sidebar"
        className={`${sidebar ? "show" : "closed"} `}
        onClick={() => {
          setSidebar(!sidebar);
        }}
      >
        <button className="btn close-btn stagger">
          <FaArrowRight className="open" />
          <FaArrowLeft className="close" />
        </button>
        <img src="/de/frame-edge.png" alt="" className="frame-edge ni" />
        <img src="/de/corner-cloud.png" alt="" className="cloud-edge ni " />
        <div className="corner-top"></div>
        <div className="top">
          <img
            src="/de/folio-moon.png"
            alt=""
            className="de-moon ni hovering  stagger"
          />
          <div className="side-action">
            <img src="/gfx/logo-glow.png" alt="" className="logo ni stagger" />
            <Link
              href={`/${ref ?? ""}`}
              className="btn back-btn stagger"
              onClick={(e) => {
                // e.preventDefault();
                // const refer = document.referrer;
                // const baseUrl = window.location.origin;
                // console.warn(baseUrl, refer);
                // if (refer.startsWith(baseUrl)) {
                // route.back();
                // } else {
                //   router.back();
                // }
              }}
            >
              <FaArrowLeftLong /> BACK
            </Link>
          </div>
          <div className="heading stagger">
            <p className="sh">{t?.sh}</p>
            <h2 className="h">{t?.h}</h2>
            <div className="p">
              <PortableText value={t?.p} />
            </div>
          </div>
        </div>
        <div className="categories stagger">
          {category &&
            category.map((cat) => {
              return (
                <button
                  className={`btn btn-cat ${activeCat === cat.slug ? "selected" : ""} `}
                  onClick={() => {
                    setActiveCat(cat.slug);
                    const url = new URL(window.location.href);
                    url.searchParams.set("c", cat.slug);
                    window.history.pushState({}, "", url);
                  }}
                  key={cat.slug}
                >
                  {cat.name}
                </button>
              );
            })}
          {/* <button
            className={`btn btn-cat ${activeCat === "illustrations" ? "selected" : ""}`}
            onClick={() => {
              setActiveCat("illustrations");
            }}
          >
            ILLUSTRATIONS
          </button>
          <button
            className={`btn btn-cat ${activeCat === "graphics" ? "selected" : ""}`}
            onClick={() => {
              setActiveCat("graphics");
            }}
          >
            GRAPHICS
          </button> */}
        </div>
      </aside>
      <div className="portfolio-items">
        <div className="lists" ref={sliderRef}>
          <AnimatePresence mode="wait">
            {toRender &&
              toRender.map((row: any[], index) => {
                return (
                  <motion.div
                    initial={{
                      y: 200,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      x: -500,
                      opacity: 0,
                      transition: {
                        duration: 0.4,
                      },
                    }}
                    transition={{
                      delay: index * 0.5,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    className="row"
                    key={"pfrow" + activeCat + index}
                  >
                    <div
                      className="pitems inner-shadow-l"
                      // onMouseOverCapture={(e) => {
                      //   const tipshowEvent = new CustomEvent("tipshow", {
                      //     detail: {
                      //       tip: row[0].artist,
                      //     },
                      //   });
                      //   console.log("called");
                      //   document.dispatchEvent(tipshowEvent);
                      // }}
                      // onMouseOut={(e) => {
                      //   const tipshowEvent = new CustomEvent("tipshow", {
                      //     detail: {
                      //       tip: "",
                      //     },
                      //   });

                      //   document.dispatchEvent(tipshowEvent);
                      // }}
                      data-tip={row[0].artist}
                    >
                      {row[0]._type === "imaged" ? (
                        <img
                          src={urlFor(row[0].image)
                            ?.format("webp")
                            .height(900)

                            .url()}
                          alt=""
                          data-tip={row[0].artist}
                          className="main-pt"
                          onClick={() => {
                            setSelectedImage(row[0]);
                          }}
                          style={{
                            objectPosition: `0% ${row[0].y ?? 40}%`,
                          }}
                        />
                      ) : (
                        renderVideo(row[0])
                      )}
                    </div>
                    {row[1] && (
                      <div className="pitems inner-shadow-l">
                        {row[1]._type === "imaged" ? (
                          <img
                            src={urlFor(row[1].image)
                              ?.format("webp")
                              .height(900)

                              .url()}
                            alt=""
                            data-tip={row[1].artist}
                            onClick={() => {
                              setSelectedImage(row[1]);
                            }}
                            style={{
                              objectPosition: `0% ${row[1].y ?? 40}%`,
                            }}
                            className="main-pt"
                          />
                        ) : (
                          renderVideo(row[1])
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>
      <div className="controls">
        <button
          className="btn btn-main"
          onClick={() => {
            if (sliderRef.current) {
              sliderRef.current.scrollBy({
                left: -500,
                behavior: "smooth",
              });
            }
          }}
        >
          <FaArrowLeft />
        </button>
        <button
          className="btn btn-main"
          onClick={() => {
            if (sliderRef.current) {
              sliderRef.current.scrollBy({
                left: 500,
                behavior: "smooth",
              });
            }
          }}
        >
          <FaArrowRight />
        </button>
      </div>

      <div
        id="fs-gallery"
        onClick={() => {
          setSelectedImage(null);
        }}
        className={`${selectedImage ? "view" : "close"}`}
      >
        {selectedImage && (
          <div className="art-part">
            {selectedImage._type === "imaged" ? (
              <img
                src={urlFor(selectedImage.image)
                  ?.format("webp")
                  .height(1080)

                  .url()}
                alt=""
                className="main-pt"
              />
            ) : (
              <video
                src={
                  selectedImage.url
                    ? selectedImage.url
                    : getFileUrl(selectedImage.file)
                }
                controls
                autoPlay
                playsInline
                muted
                className="main-pt"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
