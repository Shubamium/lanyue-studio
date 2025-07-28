"use client";
import React, { useState } from "react";
import PriceHeading from "./PriceHeading";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { urlFor } from "@/app/(frontend)/db/sanity";
import PriceList from "../PriceList";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

type Props = {};

export default function Prices({ data, t, gd, nl, nr }: any) {
  const param = useSearchParams();
  const [activeCat, setActiveCat] = useState<any>(
    data ? data[param.get("c")?.toLowerCase() || Object.keys(data)[0]] : null
  );

  console.log(data);
  return (
    <>
      {/* Gotta change it to url not # */}
      <PriceHeading t={t} />
      <div className="price-nav">
        {data &&
          Object.keys(data).map((k: any, i: number) => {
            const b = data[k];
            return (
              <a
                // href={}
                // onLCi
                key={b.slug + i}
                className={`btn btn-main ${activeCat && activeCat.slug.toLowerCase() === b.slug.toLowerCase() ? " " : "outline "} btn-pricenav `}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCat(b);
                  // const location = window.location;
                  const updatedUrl = new URL(window.location.href);
                  updatedUrl.searchParams.set("c", b.slug);

                  window.history.pushState({}, "", updatedUrl);
                  // console.log(b);
                }}
              >
                {b.name.toUpperCase()}
              </a>
            );
          })}
      </div>
      <section id="price-lists">
        <a href={gd.cf} target="_blank" className="btn btn-over alt">
          COMMISSIONS FORM <FaExternalLinkAlt />
        </a>
        <img src="/de/frame-edge.png" alt="" className="edge l ni " />
        <img src="/de/frame-edge.png" alt="" className="edge r ni" />
        <img src="/de/branch-white.png" alt="" className="branch-top ni" />

        <AnimatePresence mode="popLayout">
          {activeCat && (
            <motion.div
              key={activeCat.slug ?? "top-pricing"}
              initial={{
                // x: 1000,
                clipPath: "inset(0% 100% 0% 0%)",
                opacity: 0,
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                // x: 0,
                opacity: 1,
              }}
              exit={{
                // x: 1000,
                clipPath: "inset(0% 0% 0% 100%)",
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <MainPricing data={activeCat} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* {plist &&
          plist.map((p: any) => {
            return <ListPricing p={p} key={p._id}></ListPricing>;
          })} */}

        <div className="price-footer">
          <div className="confine">
            <h2>NOTES:</h2>
            <div className="text">
              <div className="left">
                <RichText data={nl} />
              </div>
              <div className="right">
                <RichText data={nr} />
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
    </>
  );
}
export function MainPricing({ data }: any) {
  const im = data.image as Media;
  return (
    data && (
      <motion.div
        className="top-pricing"
        // key={data.slug ?? "top-pricing"}
      >
        <div className="confine price-heading top" id={data.slug}>
          <div className="sizing">
            <h2 className="h">{data.name}</h2>
            <div className="p">
              <PortableText value={data.description} />
            </div>

            <Link
              href={`/portfolio?c=${data.slug}&ref=commissions/prices?c=${data.slug}`}
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
            // backgroundImage: `url(${urlFor(data.image)?.format("webp").height(1400).url()})`,
            backgroundImage: `url(${im.sizes?.Large?.url ?? im?.url ?? undefineddefineddefined})`,
          }}
        >
          <img src="/de/com-splat.png" alt="" className="splat" />
        </div>

        <div className="confine group">
          {data &&
            data.categories.map((d: any, index: number) => {
              return (
                <PriceList
                  name="listing"
                  info={d}
                  key={"data-price-" + index}
                />
              );
            })}
          {/* <PriceList name="left" info={data.categories[0]}></PriceList> */}
          {/* <PriceList name="right" info={data.categories[1]}></PriceList> */}
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
      </motion.div>
    )
  );
}
