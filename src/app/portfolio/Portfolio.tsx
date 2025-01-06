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
import { useIV } from "../util/useIV";
type Props = {};

import { AnimatePresence, motion } from "motion/react";
import { stagger } from "motion";
import { PortableText } from "next-sanity";
export default function Portfolio({}: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const params = useSearchParams();
  const startingCat = params.get("c");

  const [activeCat, setActiveCat] = useState(startingCat ?? null);
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
      }
    };
    loadCat();
  }, []);
  useEffect(() => {
    const loadPort = async () => {
      if (activeCat) {
        let portfolio = await getPortfolio(activeCat);
        if (portfolio) {
          setPortfolioList(portfolio);
        }
      }
    };

    loadPort();
  }, [activeCat]);

  const chopped = [...portfolioList];
  const toRender = [];
  while (chopped.length > 0) {
    toRender.push(chopped.splice(0, 2));
  }

  // const [scope, animate] = useIV(async () => {
  //   // animate();
  // });

  const router = useRouter();
  return (
    <section id="portfolio-display">
      <aside
        id="sidebar"
        className={`${sidebar ? "show" : "closed"} `}
        onClick={() => {
          setSidebar(!sidebar);
        }}
      >
        <button className="btn close-btn">
          <FaArrowRight className="open" />
          <FaArrowLeft className="close" />
        </button>
        <img src="/de/frame-edge.png" alt="" className="frame-edge ni" />
        <img src="/de/corner-cloud.png" alt="" className="cloud-edge ni" />
        <div className="corner-top"></div>
        <div className="top">
          <img src="/de/folio-moon.png" alt="" className="de-moon ni" />
          <div className="side-action">
            <img src="/gfx/logo-glow.png" alt="" className="logo ni" />
            <Link
              href={"/"}
              className="btn back-btn"
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}
            >
              <FaArrowLeftLong /> BACK
            </Link>
          </div>
          <div className="heading">
            <p className="sh">{t?.sh}</p>
            <h2 className="h">{t?.h}</h2>
            <div className="p">
              <PortableText value={t?.p} />
            </div>
          </div>
        </div>
        <div className="categories">
          {category &&
            category.map((cat) => {
              return (
                <button
                  className={`btn btn-cat ${activeCat === cat.slug ? "selected" : ""}`}
                  onClick={() => {
                    setActiveCat(cat.slug);
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
                console.log(row);
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
                    <div className="pitems inner-shadow-l">
                      {row[0]._type === "imaged" ? (
                        <img
                          src={urlFor(row[0].image)
                            ?.auto("format")
                            .maxHeight(700)
                            .url()}
                          alt=""
                          data-tip={row[0].artist}
                          className="main-pt"
                          onClick={() => {
                            setSelectedImage(row[0]);
                          }}
                        />
                      ) : (
                        <video
                          src={getFileUrl(row[0].file) ?? undefined}
                          controls
                          autoPlay
                          loop
                          data-tip={row[0].artist}
                          muted
                          onClick={() => {
                            setSelectedImage(row[0]);
                          }}
                          className="main-pt"
                        />
                      )}
                    </div>
                    {row[1] && (
                      <div className="pitems inner-shadow-l">
                        {row[1]._type === "imaged" ? (
                          <img
                            src={urlFor(row[1].image)
                              ?.auto("format")
                              .maxHeight(700)
                              .url()}
                            alt=""
                            data-tip={row[1].artist}
                            onClick={() => {
                              setSelectedImage(row[0]);
                            }}
                            className="main-pt"
                          />
                        ) : (
                          <video
                            src={getFileUrl(row[1].file) ?? undefined}
                            className="main-pt"
                            controls
                            autoPlay
                            data-tip={row[1].artist}
                            loop
                            muted
                            onClick={() => {
                              setSelectedImage(row[0]);
                            }}
                          />
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
          </AnimatePresence>
          {/* <div className="row">
            <div className="pitems inner-shadow-l">
              <img src="/gfx/placeholder.png" alt="" className="main-pt" />

          <div className="row">
            <div className="pitems inner-shadow-l">
              <img src="/gfx/placeholder.png" alt="" className="main-pt" />
            </div>
            <div className="pitems inner-shadow-l">
              <img src="/gfx/placeholder.png" alt="" className="main-pt" />
            </div>
          </div> */}
          {/* <div className="row">
					<div className="pitems inner-shadow-l">
						<img src="/gfx/placeholder.png" alt="" className="main-pt" />
					</div>
					<div className="pitems inner-shadow-l">
						<img src="/gfx/placeholder.png" alt="" className="main-pt" />
					</div>
				</div>
				<div className="row">
					<div className="pitems inner-shadow-l">
						<img src="/gfx/placeholder.png" alt="" className="main-pt" />
					</div>
					<div className="pitems inner-shadow-l">
						<img src="/gfx/placeholder.png" alt="" className="main-pt" />
					</div>
				</div> */}
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
                  ?.auto("format")
                  .maxHeight(700)
                  .url()}
                alt=""
                className="main-pt"
              />
            ) : (
              <video
                src={getFileUrl(selectedImage.file) ?? undefined}
                controls
                autoPlay
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
