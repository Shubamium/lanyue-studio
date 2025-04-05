"use client";
import React, { Suspense, useEffect, useState } from "react";
import "./artists.scss";
import ArtistList from "./ArtistList";
type Props = {};
import { FaPaintbrush, FaXTwitter } from "react-icons/fa6";
import getMember, { getAf, getCategory, getText } from "../db/artist";
import { GoBrowser } from "react-icons/go";
import { fetchData, getFileUrl, urlFor } from "../db/sanity";
import { FaExternalLinkAlt, FaInternetExplorer } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion";
import { PortableText } from "next-sanity";
import { video } from "motion/react-client";
import { AnimatePresence, motion } from "motion/react";

export default function Page({}: Props) {
  const [cat, setCat] = useState<any[]>([]);
  const [activeCat, setActiveCat] = useState<null | string>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [text, setText] = useState<any>([]);
  const [load, setLoad] = useState(false);

  const [af, setAf] = useState("");
  useEffect(() => {
    const loadData = async () => {
      setAf(await getAf());
      const text = await getText();
      setText(text);
      const category = await getCategory();
      setCat(category);
      setActiveCat(category[0].slug ?? null);
      console.log(category);
    };
    loadData();
  }, []);

  useEffect(() => {
    setMembers([]);
    const loadData = async () => {
      console.log(activeCat);
      if (activeCat) {
        const loaded = await getMember(activeCat);
        setMembers(loaded);
      }
    };
    loadData();
  }, [activeCat]);

  const [scope, animate] = useIV(async () => {
    setTimeout(() => {
      animate([
        [
          ".border.l",
          {
            x: -200,
            opacity: 0,
          },
          {
            duration: 0,
          },
        ],
        [
          ".border.r",
          {
            x: 200,
            opacity: 0,
          },
          {
            duration: 0,
          },
        ],
        [
          ".border.r",
          {
            x: 0,
            opacity: 1,
          },
          {
            duration: 0.5,
            ease: "easeInOut",
          },
        ],
        [
          ".border.l",
          {
            x: 0,
            opacity: 1,
          },
          {
            ease: "easeInOut",
            duration: 0.5,
          },
        ],
      ]);
      animateStagger(animate, stagger, 1, 0.3);
    }, 600);
  });

  // Fullscreen Image Displayer
  const [activeSrc, setActiveSrc] = useState<any>(null);

  const showFs = (isVid: boolean, src: string | undefined) => {
    setActiveSrc({ isVid, src });
  };

  return (
    <main id="page_artists">
      {af !== "" && (
        <a href={af} target="_blank" className="btn btn-over">
          ARTIST APPLICATION FORM <FaExternalLinkAlt />
        </a>
      )}
      <section id="artist-heading" ref={scope}>
        <img src="/de/framethick.svg" alt="" className="border l " />
        <img src="/de/framethick.svg" alt="" className="border r" />
        <div className="confine">
          <figure>
            <img
              src={urlFor(text.i)?.auto("format").url()}
              alt=""
              className="r stagger"
            />
            {/* <img src="/gfx/placeholder.png" alt="" className="l stagger" /> */}
            <img src="/de/blue-splat1.png" alt="" className="splat" />
          </figure>

          <article>
            <p className="sh stagger">{text.sh}</p>
            <h2 className="h stagger">{text.h}</h2>
            <div className="p stagger">
              <PortableText value={text.p} />
            </div>
          </article>
        </div>
      </section>
      <div id="artist-list">
        <section className="control">
          {cat &&
            cat.map((c: any) => {
              return (
                <button
                  className={`btn btn-main ${activeCat === c.slug ? "" : "outline"}`}
                  onClick={() => {
                    setActiveCat(c.slug);
                  }}
                  key={c.slug}
                >
                  {c.title}
                </button>
              );
            })}
          {/* <button
            className={`btn btn-main ${activeCat === "rigger" ? "" : "outline"}`}
            onClick={() => {
              setActiveCat("rigger");
            }}
          >
            RIGGER
          </button>
          <button
            className={`btn btn-main ${activeCat === "graphic_design" ? "" : "outline"}`}
            onClick={() => {
              setActiveCat("graphic_design");
            }}
          >
            GRAPHIC DESIGN
          </button> */}

          {/* Hidden for now might need to fix up the responsivity */}
          {/* <button
            className={`btn btn-main ${activeCat === "music" ? "" : "outline"}`}
            onClick={() => {
              setActiveCat("music");
            }}
          >
            MUSIC
          </button> */}
        </section>

        <section id="at-list">
          <AnimatePresence>
            {members &&
              members.map((memberData, index) => {
                return (
                  <MemberDisplayer
                    memberData={memberData}
                    index={index}
                    key={memberData._id}
                    showFs={showFs}
                  />
                );
              })}
          </AnimatePresence>
          {/* <div className="artist-container l">
            <img src="/de/splat-bg-artist.svg" alt="" className="de-splat t" />
            <img src="/de/splat-bg-artist.svg" alt="" className="de-splat b" />
            <div className="confine">
              <div className="artist-info">
                <div className="artist-data">
                  <p className="sh">ILLUSTRATOR TITLE</p>
                  <h2 className="h">ANHEL</h2>
                  <p className="p">
                    Huge Genshin Impact fan who spends every spare minute
                    drawing more Nilou fan art. Anhel excels in bringing
                    expressions to life with their bright compositions.
                  </p>
                </div>

                <div className="portfolio">
                  <img src="/gfx/placeholder.png" alt="" className="p-img" />
                  <img src="/gfx/placeholder3.png" alt="" className="p-img" />
                  <img src="/gfx/placeholder.png" alt="" className="p-img" />
                  <img src="/gfx/placeholder3.png" alt="" className="p-img" />
                </div>
              </div>
              <figure>
                <img src="/gfx/at2.png" alt="" className="at-img" />
                <div className="contacts">
                  <a href="#" target="_blank" className="btn btn-contact">
                    <span>
                      <FaXTwitter />
                    </span>
                  </a>
                  <a href="#" target="_blank" className="btn btn-contact">
                    <span>
                      <FaXTwitter />
                    </span>
                  </a>
                  <div className="line"></div>
                </div>
              </figure>
            </div>
          </div> */}
        </section>
      </div>

      <div
        id="fs-displayer"
        className={activeSrc ? "open" : "closed"}
        onClick={() => {
          setActiveSrc(null);
        }}
      >
        {activeSrc && (
          <div className="overlay">
            {activeSrc.isVid ? (
              <video
                src={activeSrc.src}
                className="main-display"
                autoPlay
                muted
                disablePictureInPicture
                disableRemotePlayback
                playsInline
              />
            ) : (
              <img src={activeSrc.src} alt="" className="main-display" />
            )}
          </div>
        )}
        {/* <video src="" alt="" className="main-display" /> */}
      </div>
      {/* <ArtistList /> */}
    </main>
  );
}

function MemberDisplayer({
  memberData,
  index,
  showFs,
}: {
  memberData: any;
  index: number;
  showFs: (isVideo: boolean, src: string | undefined) => void;
}) {
  const [scope, animate] = useIV(async () => {
    await animate(
      ".splash-bg",
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        duration: 0,
      }
    );
    await animate(
      ".artist-info",
      {
        y: 500,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );

    await animate(
      "figure",
      {
        y: 500,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    await animate(
      scope.current,
      {
        visibility: "visible",
      },
      {
        duration: 0,
      }
    );
    animate(
      "figure",
      {
        y: 0,
        opacity: 1,
      },
      {
        duration: 1,
        delay: 0.4,
      }
    );
    animate(
      ".artist-info",
      {
        y: 0,
        opacity: 1,
      },
      {
        duration: 1,
      }
    );

    animate(
      ".splash-bg",
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        duration: 2,
        ease: "easeInOut",
      }
    );
  });
  const info = (
    <div className="artist-info">
      <div className="artist-data">
        <p className="sh">{memberData.title}</p>
        <h2 className="h">{memberData.name}</h2>
        <p className="p">{memberData.bio}</p>
      </div>

      <div className="portfolio">
        {memberData.portfolio &&
          memberData.portfolio.map((p: any, index: number) => {
            console.log(p);
            return p._type === "art" ? (
              <img
                src={urlFor(p)?.url()}
                alt=""
                onTouchStart={() => {}}
                onClick={() => {
                  showFs(false, urlFor(p)?.url());
                }}
                key={memberData.id + "pf" + index}
                className="p-img"
              />
            ) : (
              <video
                src={getFileUrl(p) ?? undefined}
                className="p-img"
                autoPlay
                muted
                playsInline
                onClick={() => {
                  showFs(true, getFileUrl(p) ?? undefined);
                }}
                key={memberData.id + "pf" + index}
                loop
                disablePictureInPicture
                disableRemotePlayback
              ></video>
            );
          })}
      </div>
    </div>
  );
  const figure = (
    <figure>
      <img
        src={urlFor(memberData.pfp)?.auto("format").url()}
        alt=""
        className="at-img"
      />
      <div className="contacts">
        <div className="line s"></div>
        <a href={memberData.x} target="_blank" className="btn btn-contact">
          <span>
            <FaXTwitter />
          </span>
        </a>
        <a href={memberData.other} target="_blank" className="btn btn-contact">
          <span>
            <FaPaintbrush />
          </span>
        </a>
        <div className="line"></div>
      </div>
    </figure>
  );

  let top = index % 2 !== 0 ? figure : info;
  let bottom = index % 2 !== 0 ? info : figure;

  return (
    <motion.div
      className="artist-container"
      ref={scope}
      style={{ visibility: "hidden" }}
      exit={{
        // scale: 0,
        x: 100,
        opacity: 0,
      }}
    >
      <div className="splash-bg"></div>
      <img src="/de/splat-bg-artist.svg" alt="" className="de-splat t ni" />
      <img src="/de/splat-bg-artist.svg" alt="" className="de-splat b ni" />
      <div className="confine">
        {bottom} {top}
      </div>
    </motion.div>
  );
}
