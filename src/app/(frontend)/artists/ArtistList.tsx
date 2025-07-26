import React from "react";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

export default function ArtistList({}: Props) {
  return (
    <div id="artist-list">
      <section className="control">
        <button className="btn btn-main">ILLUSTRATOR</button>
        <button className="btn btn-main outline">RIGGER</button>
        <button className="btn btn-main outline">GRAPHIC DESIGN</button>
      </section>

      <section id="at-list">
        <div className="artist-container">
          <img src="/de/splat-bg-artist.svg" alt="" className="de-splat t" />
          <img src="/de/splat-bg-artist.svg" alt="" className="de-splat b" />
          <div className="confine">
            <figure>
              <img src="/gfx/at1.png" alt="" className="at-img" />
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
            <div className="artist-info">
              <div className="artist-data">
                <p className="sh">ILLUSTRATOR TITLE</p>
                <h2 className="h">ANHEL</h2>
                <p className="p">
                  Huge Genshin Impact fan who spends every spare minute drawing
                  more Nilou fan art. Anhel excels in bringing expressions to
                  life with their bright compositions.
                </p>
              </div>

              <div className="portfolio">
                <img src="/gfx/placeholder.png" alt="" className="p-img" />
                <img src="/gfx/placeholder3.png" alt="" className="p-img" />
                <img src="/gfx/placeholder2.png" alt="" className="p-img" />
                <img src="/gfx/placeholder3.png" alt="" className="p-img" />
                <img src="/gfx/placeholder.png" alt="" className="p-img" />
                <img src="/gfx/placeholder3.png" alt="" className="p-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="artist-container l">
          <img src="/de/splat-bg-artist.svg" alt="" className="de-splat t" />
          <img src="/de/splat-bg-artist.svg" alt="" className="de-splat b" />
          <div className="confine">
            <div className="artist-info">
              <div className="artist-data">
                <p className="sh">ILLUSTRATOR TITLE</p>
                <h2 className="h">ANHEL</h2>
                <p className="p">
                  Huge Genshin Impact fan who spends every spare minute drawing
                  more Nilou fan art. Anhel excels in bringing expressions to
                  life with their bright compositions.
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
        </div>
      </section>
    </div>
  );
}
