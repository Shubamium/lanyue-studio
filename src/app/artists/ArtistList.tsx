import React from "react";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

export default function ArtistList({}: Props) {
  return (
    <div id="artist-list">
      <section id="control">
        <button id="btn btn-main">ILLUSTRATOR</button>
        <button id="btn btn-main outline">RIGGER</button>
        <button id="btn btn-main outline">GRAPHIC DESIGN</button>
      </section>

      <section id="at-list">
        <div id="artist-container">
          <img src="/de/splat-bg-artist.svg" alt="" id="de-splat t" />
          <img src="/de/splat-bg-artist.svg" alt="" id="de-splat b" />
          <div id="confine">
            <figure>
              <img src="/gfx/at1.png" alt="" id="at-img" />
              <div id="contacts">
                <a href="#" target="_blank" id="btn btn-contact">
                  <span>
                    <FaXTwitter />
                  </span>
                </a>
                <a href="#" target="_blank" id="btn btn-contact">
                  <span>
                    <FaXTwitter />
                  </span>
                </a>
                <div id="line"></div>
              </div>
            </figure>
            <div id="artist-info">
              <div id="artist-data">
                <p id="sh">ILLUSTRATOR TITLE</p>
                <h2 id="h">ANHEL</h2>
                <p id="p">
                  Huge Genshin Impact fan who spends every spare minute drawing
                  more Nilou fan art. Anhel excels in bringing expressions to
                  life with their bright compositions.
                </p>
              </div>

              <div id="portfolio">
                <img src="/gfx/placeholder.png" alt="" id="p-img" />
                <img src="/gfx/placeholder3.png" alt="" id="p-img" />
                <img src="/gfx/placeholder2.png" alt="" id="p-img" />
                <img src="/gfx/placeholder3.png" alt="" id="p-img" />
                <img src="/gfx/placeholder.png" alt="" id="p-img" />
                <img src="/gfx/placeholder3.png" alt="" id="p-img" />
              </div>
            </div>
          </div>
        </div>
        <div id="artist-container l">
          <img src="/de/splat-bg-artist.svg" alt="" id="de-splat t" />
          <img src="/de/splat-bg-artist.svg" alt="" id="de-splat b" />
          <div id="confine">
            <div id="artist-info">
              <div id="artist-data">
                <p id="sh">ILLUSTRATOR TITLE</p>
                <h2 id="h">ANHEL</h2>
                <p id="p">
                  Huge Genshin Impact fan who spends every spare minute drawing
                  more Nilou fan art. Anhel excels in bringing expressions to
                  life with their bright compositions.
                </p>
              </div>

              <div id="portfolio">
                <img src="/gfx/placeholder.png" alt="" id="p-img" />
                <img src="/gfx/placeholder3.png" alt="" id="p-img" />
                <img src="/gfx/placeholder.png" alt="" id="p-img" />
                <img src="/gfx/placeholder3.png" alt="" id="p-img" />
              </div>
            </div>
            <figure>
              <img src="/gfx/at2.png" alt="" id="at-img" />
              <div id="contacts">
                <a href="#" target="_blank" id="btn btn-contact">
                  <span>
                    <FaXTwitter />
                  </span>
                </a>
                <a href="#" target="_blank" id="btn btn-contact">
                  <span>
                    <FaXTwitter />
                  </span>
                </a>
                <div id="line"></div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
