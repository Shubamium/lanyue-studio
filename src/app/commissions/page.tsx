import React from "react";
import "./commissions.scss";
import { FaArrowRight, FaMask } from "react-icons/fa6";
import Link from "next/link";
import { fetchData, urlFor } from "../db/sanity";
import PriceList from "./PriceList";
import MainService from "./MainService";
import ListPricing from "./ListPricing";
import Timeline from "./Timeline";
import Script from "next/script";
import { PortableText } from "next-sanity";
type Props = {};

export default async function Commissions({}: Props) {
  const comText = await fetchData<any>(`
			*[_type == 'commission_text' && preset == 'active']{
				pinned_pricing ->{
					...,
					'slug':view -> slug.current,
				},
				pricing_list[]->{
					...,
					'slug':view -> slug.current,
				},
				service,
				nl,
				nr,
				timeline,
			}[0]
		`);

  const pinned = comText.pinned_pricing;
  const plist = comText.pricing_list;
  console.log(comText);

  return (
    <main id="page_commissions">
      <Script
        type="text/javascript"
        src="https://unpkg.com/external-svg-loader@latest/svg-loader.min.js"
        async
      />
      {/* <script></script> */}
      <MainService ss={comText.service} />
      <section id="price-lists">
        <img src="/de/frame-edge.png" alt="" className="edge l ni " />
        <img src="/de/frame-edge.png" alt="" className="edge r ni" />
        <img src="/de/branch-white.png" alt="" className="branch-top ni" />

        {pinned && (
          <div className="top-pricing">
            <div className="confine price-heading top">
              <div className="sizing">
                <h2 className="h">{pinned.name}</h2>
                <div className="p">
                  <PortableText value={pinned.description} />
                </div>

                <Link
                  href={`/portfolio?c=${pinned.slug}`}
                  className="btn btn-examples"
                >
                  <span>
                    VIEW EXAMPLES <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="banner"
              style={{
                backgroundImage: `url(${urlFor(pinned.image)?.auto("format").maxHeight(1920).url()})`,
              }}
            >
              <img src="/de/com-splat.png" alt="" className="splat" />
            </div>

            <div className="confine group">
              <PriceList name="left" info={pinned.categories[0]}></PriceList>
              <PriceList name="right" info={pinned.categories[1]}></PriceList>
              {/* <div className="right price-list">
                <h3 className="h">VTUBER MODEL ART</h3>
                <div className="main-prices">
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                </div>
                <div className="add-ons">
                  <div className="ao-title">
                    <div className="icon">
                      <BiPlus />
                    </div>
                    <h4>ADD-ONS</h4>
                  </div>

                  <div className="ao-list">
                    <div className="ao">
                      <p className="name"> Character Design</p>
                      <p className="amount"> $500+</p>
                    </div>
                    <div className="ao">
                      <p className="name"> Character Design</p>
                      <p className="amount"> $500+</p>
                    </div>
                    <div className="ao">
                      <p className="name"> Character Design</p>
                      <p className="amount"> $500+</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )}

        {plist &&
          plist.map((p: any) => {
            return <ListPricing p={p} key={p._id}></ListPricing>;
          })}

        <div className="price-footer">
          <div className="confine">
            <h2>NOTES:</h2>
            <div className="text">
              <div className="left">
                <PortableText value={comText.nl} />
              </div>
              <div className="right">
                <PortableText value={comText.nr} />
              </div>
              {/* <p className="p">
                Live2D and Graphics services include a streaming license with
                the final product. Please see our{" "}
                <Link href="/terms" className="btn">
                  Terms of Service
                </Link>{" "}
                for full details. 
              </p>
              <p className="p">
                Live2D Rigging are to be used with VTube Studio. We currently do
                not create rigs for other face capture programs.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <Timeline t={comText.timeline} />
    </main>
  );
}
{
  /* <div className="list-pricing l">
          <div className="confine">
            <div className="details">
              <div className="confine price-heading">
                <h2 className="h">Illustrations</h2>
                <p className="p">
                  Lan'Yue Studio is inspired by the rare and unique blue moon.
                  Our goal is to curate the one-of-a-kind beauty you deserve
                  for.
                </p>
              </div>
              <div className="price-list">
                <h3 className="h">VTUBER MODEL ART</h3>
                <div className="main-prices">
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                  <div className="price">
                    <h4 className="name">Half Body Model Art</h4>
                    <p className="amount">$600+</p>
                  </div>
                </div>
                <div className="add-ons">
                  <div className="ao-title">
                    <div className="icon">
                      <BiPlus />
                    </div>
                    <h4>ADD-ONS</h4>
                  </div>

                  <div className="ao-list">
                    <div className="ao">
                      <p className="name"> Character Design</p>
                      <p className="amount"> $500+</p>
                    </div>
                    <div className="ao">
                      <p className="name"> Character Design</p>
                      <p className="amount"> $500+</p>
                    </div>
                    <div className="ao">
                      <p className="name"> Character Design</p>
                      <p className="amount"> $500+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure>
              <div className="side-decor">
                <img src="/de/flower-gold.png" alt="" />
                <div className="line"></div>
              </div>
              <div className="art inner-shadow">
                <img src="/gfx/placeholder3.png" alt="" className="main-img" />
                <div className="clip ctr"></div>
                <div className="clip ctl"></div>
                <div className="clip cbl"></div>
                <div className="clip cbr"></div>
              </div>

              <div className="action">
                <button className="btn btn-examples">
                  <span>
                    VIEW EXAMPLES <FaArrowRight />
                  </span>
                </button>
              </div>
            </figure>
          </div>
        </div> */
}
