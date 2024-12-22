"use client";
import React, { useEffect, useState } from "react";
import "./artists.scss";
import ArtistList from "./ArtistList";
type Props = {};
import { FaPaintbrush, FaXTwitter } from "react-icons/fa6";
import getMember from "../db/artist";
import { GoBrowser } from "react-icons/go";
import { urlFor } from "../db/sanity";
import { FaInternetExplorer } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function Page({}: Props) {
  const [activeCat, setActiveCat] = useState("illustrator");
  const [members, setMembers] = useState<any[]>([]);
  useEffect(() => {
    // loadMembers()
    const loadMembers = async () => {
      const loaded = await getMember(activeCat);
      setMembers(loaded);
    };
    loadMembers();
  }, [activeCat]);
  return (
    <main id="page_artists">
      <section id="artist-heading">
        <div className="confine">
          <figure>
            <img src="/gfx/placeholder.png" alt="" className="r" />
            <img src="/gfx/placeholder.png" alt="" className="l" />
          </figure>

          <article>
            <p className="sh">ARTISTS</p>
            <h2 className="h">ABOUT US</h2>
            <p className="p">
              Live2D and Graphics services include a streaming license with the
              final product. Please see our Terms of Service for full details. 
            </p>
          </article>
        </div>
      </section>
      <div id="artist-list">
        <section className="control">
          <button
            className={`btn btn-main ${activeCat === "illustrator" ? "" : "outline"}`}
            onClick={() => {
              setActiveCat("illustrator");
            }}
          >
            ILLUSTRATOR
          </button>
          <button
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
          </button>
        </section>

        <section id="at-list">
          {members &&
            members.map((memberData, index) => {
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
                        return (
                          <img
                            src={urlFor(p)?.url()}
                            alt=""
                            key={memberData.id + "pf" + index}
                            className="p-img"
                          />
                        );
                      })}
                    {/* <img
									src="/gfx/placeholder3.png"
									alt=""
									className="p-img"
								/>
								<img
									src="/gfx/placeholder2.png"
									alt=""
									className="p-img"
								/>
								<img
									src="/gfx/placeholder3.png"
									alt=""
									className="p-img"
								/>
								<img
									src="/gfx/placeholder.png"
									alt=""
									className="p-img"
								/>
								<img
									src="/gfx/placeholder3.png"
									alt=""
									className="p-img"
								/> */}
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
                    <a
                      href={memberData.x}
                      target="_blank"
                      className="btn btn-contact"
                    >
                      <span>
                        <FaXTwitter />
                      </span>
                    </a>
                    <a
                      href={memberData.other}
                      target="_blank"
                      className="btn btn-contact"
                    >
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
                <div className="artist-container" key={memberData._id}>
                  <img
                    src="/de/splat-bg-artist.svg"
                    alt=""
                    className="de-splat t"
                  />
                  <img
                    src="/de/splat-bg-artist.svg"
                    alt=""
                    className="de-splat b"
                  />
                  <div className="confine">
                    {bottom} {top}
                  </div>
                </div>
              );
            })}
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
      {/* <ArtistList /> */}
    </main>
  );
}
