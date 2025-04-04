"use client";
import React from "react";
import PriceList from "./PriceList";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { urlFor } from "../db/sanity";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion/react";
import { PortableText } from "next-sanity";

type Props = {
  p: any;
};

export default function ListPricing({ p }: Props) {
  const [scope, animate] = useIV(async () => {
    animate([
      [
        ".branch",
        {
          clipPath: "inset(0% 100% 0% 0%)",
        },
        {
          duration: 0,
        },
      ],
      [
        ".branch",
        {
          clipPath: "inset(0% 0% 0% 0%) ",
        },
        {
          duration: 1,
        },
      ],
    ]);
    animateStagger(animate, stagger, 1, 0.6);
  });

  return (
    <div className="list-pricing l" ref={scope}>
      <img src="/de/branch-white.png" alt="" className="branch ni" />

      <div className="confine">
        {/* Content */}
        <div className="details">
          <div className="confine price-heading" id={p.slug}>
            <h2 className="h stagger">{p.name}</h2>
            <div className="p stagger">
              <PortableText value={p.description} />
            </div>
          </div>
          {p.categories &&
            p.categories.map((p: any, index: number) => {
              return (
                <PriceList name="plist" info={p} key={"price-list" + index} />
              );
            })}
        </div>

        {/* Image */}
        <figure className="stagger">
          <div className="side-decor">
            <img src="/de/flower-gold.png" alt="" />
            <div className="line"></div>
          </div>
          <div className="art inner-shadow">
            <img
              src={urlFor(p.image)?.auto("format").height(900).url()}
              className="main-img"
            />
            <div className="clip ctr"></div>
            <div className="clip ctl"></div>
            <div className="clip cbl"></div>
            <div className="clip cbr"></div>
          </div>

          <div className="action">
            {p.nslug && (
              <Link
                href={`/portfolio?c=${p.nslug}`}
                className="btn btn-examples"
              >
                <span>
                  VIEW EXAMPLES <FaArrowRight />
                </span>
              </Link>
            )}
          </div>
        </figure>
      </div>
    </div>
  );
}
