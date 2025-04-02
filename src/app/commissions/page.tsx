import React from "react";
import "./commissions.scss";
import { FaArrowRight, FaLink, FaMask } from "react-icons/fa6";
import Link from "next/link";
import { fetchData, urlFor } from "../db/sanity";
import PriceList from "./PriceList";
import MainService from "./MainService";
import ListPricing from "./ListPricing";
import Timeline from "./Timeline";
import Script from "next/script";
import { PortableText } from "next-sanity";
import { FaExternalLinkAlt } from "react-icons/fa";
type Props = {};

export default async function Commissions({}: Props) {
  const comText = await fetchData<any>(`
			*[_type == 'commission_text' && preset == 'active']{
				service,
				timeline,
			}[0]
		`);

  // const pinned = comText.pinned_pricing;
  // const plist = comText.pricing_list;
  console.log(comText.service.cat);

  return (
    <main id="page_commissions">
      <Script
        type="text/javascript"
        src="https://unpkg.com/external-svg-loader@latest/svg-loader.min.js"
        async
      />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdDtjtKC3XnxCZvdV7Vk9bWxarPQXDt_aanWLQA0uCLU2Yivg/viewform"
        target="_blank"
        className="btn btn-over"
      >
        COMMISSIONS FORM <FaExternalLinkAlt />
      </a>
      {/* <script></script> */}
      <MainService ss={comText.service} />

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
