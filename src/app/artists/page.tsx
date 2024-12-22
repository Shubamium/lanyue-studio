import React from "react";
import "./artists.scss";
import ArtistList from "./ArtistList";
type Props = {};

export default function Page({}: Props) {
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
      <ArtistList />
    </main>
  );
}
