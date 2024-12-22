"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
type Props = {};

export default function Portfolio({}: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  return (
    <section id="portfolio-display">
      <aside id="sidebar">
        <div className="side-action">
          <img src="/gfx/logo-glow.png" alt="" className="logo" />
          <Link href={"/"} className="btn back-btn">
            <FaArrowLeftLong /> HOME
          </Link>
        </div>
        <div className="heading">
          <p className="sh">SUBHEADING</p>
          <h2 className="h">PORTFOLIO</h2>
          <p className="p">
            Lan’Yue Studio partners with highly reputable artists chosen for
            their artistic skills, reliability, and commitment to client
            satisfaction.
          </p>
        </div>

        <div className="categories">
          <button className="btn btn-cat selected">LIVE 2D</button>
          <button className="btn btn-cat">ILLUSTRATIONS</button>
          <button className="btn btn-cat">GRAPHICS</button>
        </div>
      </aside>
      <div className="portfolio-items">
        <div className="lists" ref={sliderRef}>
          <div className="row">
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
          </div>
          <div className="row">
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
          </div>
          <div className="row">
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
          </div>
          <div className="row">
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
          </div>
          <div className="row">
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
          </div>
          <div className="row">
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
          </div>
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
    </section>
  );
}
