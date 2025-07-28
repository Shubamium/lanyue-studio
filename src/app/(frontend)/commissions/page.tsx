import React from "react";
import "./commissions.scss";
import { fetchData, urlFor } from "../db/sanity";
import MainService from "./MainService";
import Timeline from "./Timeline";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
type Props = {};

export default async function Commissions({}: Props) {
  // const comText = await fetchData<any>(`
  // 		*[_type == 'commission_text' && preset == 'active']{
  // 			service,
  // 			timeline,
  // 		}[0]
  // 	`);
  // const gd = await fetchData<any>(
  //   `*[_type == 'general' && preset == 'active'][0]{
  // 		cf

  // 	}`
  // );
  const config = await payloadConfig;
  const payload = await getPayload({
    config,
  });

  const comTextP = await payload.findGlobal({
    slug: "commission",
  });
  const gd = await payload.findGlobal({
    slug: "general",
  });

  return (
    <main id="page_commissions">
      <a href={gd?.cf ?? ""} target="_blank" className="btn btn-over ">
        COMMISSIONS FORM <FaExternalLinkAlt />
      </a>
      <MainService ss={comTextP.service} />

      <div className="vid-container">
        <iframe
          className="video-trailer"
          src="https://iframe.mediadelivery.net/embed/408645/c530b0ea-32f1-4890-90bf-ceb41e113893?autoplay=true&loop=true"
          allowFullScreen
        ></iframe>
        <Link href={"/commissions/prices"} className="btn btn-main outline">
          View Prices <FaArrowRight />
        </Link>
      </div>

      <Timeline t={comTextP.timeline} />
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
