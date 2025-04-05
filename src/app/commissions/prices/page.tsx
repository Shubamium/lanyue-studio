import { fetchData, urlFor } from "@/app/db/sanity";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import PriceList from "../PriceList";
import ListPricing from "../ListPricing";
import "./prices.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import PriceHeading from "./PriceHeading";
type Props = {};

export default async function Prices({}: Props) {
  const comText = await fetchData<any>(`
				*[_type == 'commission_text' && preset == 'active']{
					pinned_pricing ->{
						...,
						'nslug':view -> slug.current,
						'slug':slug.current,
					},
					pricing_list[]->{
						...,
						'nslug':view -> slug.current,
						'slug':slug.current,
					},
					Prices,
					nl,
						nr,
				}[0]
			`);

  const gd = await fetchData<any>(
    `*[_type == 'general' && preset == 'active'][0]{
			cf
		}`
  );
  const pinned = comText.pinned_pricing;
  const plist = comText.pricing_list;
  const t = comText.Prices;
  return (
    <main id={"page_price"}>
      <PriceHeading t={t} />
      <section id="price-lists">
        <a href={gd.cf} target="_blank" className="btn btn-over alt">
          COMMISSIONS FORM <FaExternalLinkAlt />
        </a>
        <img src="/de/frame-edge.png" alt="" className="edge l ni " />
        <img src="/de/frame-edge.png" alt="" className="edge r ni" />
        <img src="/de/branch-white.png" alt="" className="branch-top ni" />

        {pinned && (
          <div className="top-pricing">
            <div className="confine price-heading top" id={pinned.slug}>
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
    </main>
  );
}
