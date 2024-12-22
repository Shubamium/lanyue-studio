import React from "react";
import "./commissions.scss";
import { FaArrowRight, FaMask } from "react-icons/fa6";
import { GiPuppet } from "react-icons/gi";
import { SiCanvas, SiPuppeteer } from "react-icons/si";
import { MdMasks } from "react-icons/md";
import { TbMasksTheater } from "react-icons/tb";
import { BiBrush, BiPlus } from "react-icons/bi";
import { FaPaintBrush } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import Link from "next/link";
import { fetchData, urlFor } from "../db/sanity";
import PriceList from "./PriceList";
type Props = {};

export default async function Commissions({}: Props) {
  const general = await fetchData<any>(`
			*[_type == 'general' && preset == 'active']{
				pinned_pricing ->{
					...,
					'slug':view -> slug.current,
				},
				pricing_list[]->{
					...,
					'slug':view -> slug.current,
				}
			}[0]
		`);

  const pinned = general.pinned_pricing;
  const plist = general.pricing_list;
  console.log(pinned);

  return (
    <main id="page_commissions">
      <section id="main-service">
        <video
          src="/v/fog.webm"
          className="smoke-bg ni"
          disablePictureInPicture
          disableRemotePlayback
          loop
          muted
          autoPlay
        ></video>

        <div className="confine header">
          <p className="sh">SERVICES</p>
          <h2 className="h">COMMISSIONS MAIN TEXT</h2>
        </div>
        <div className="steps">
          <div className="confine">
            <div className="step">
              <h3>STEP 1</h3>
              <p>
                Check out our artists and services! Review this page thoroughly
                and make sure you understand our <strong>TOS</strong> before
                proceeding.
              </p>

              <div className="clip cbr"></div>
              <div className="clip ctr"></div>
            </div>
            <div className="step">
              <h3>STEP 2</h3>
              <p>
                <strong>Contact us!</strong>
              </p>
              <ul>
                <li>
                  Join the Discord Server for updates and quick access to the
                  community.
                </li>
                <li>Send us an email or DM through social media or Discord.</li>
              </ul>
              <div className="clip cbr"></div>
              <div className="clip ctr"></div>
            </div>
            <div className="step">
              <h3>STEP 3</h3>
              <p>A manager will follow up with you shortly {":)"}</p>
              <div className="clip cbr"></div>
              <div className="clip ctr"></div>
            </div>
          </div>
        </div>
        <div className="confine categories">
          <div className="category">
            <div className="icon">
              <GiPuppet />
            </div>

            <h2 className="h">Main Category</h2>
            <p>
              Lan'Yue Studio is inspired by the rare and unique blue moon. Our
              goal is to curate the one-of-a-kind beauty you deserve for any
              project you can imagine, from illustrations to Live2D models and
              graphic design.
            </p>

            <div className="list">
              <div className="item">
                <p>Cat 1</p>
              </div>
              <div className="item">
                <p>Cat 2</p>
              </div>
              <div className="item">
                <p>Cat 3</p>
              </div>
            </div>
          </div>
          <div className="category">
            <div className="icon">
              <FaPaintBrush />
            </div>

            <h2 className="h">Main Category</h2>
            <p>
              Lan'Yue Studio is inspired by the rare and unique blue moon. Our
              goal is to curate the one-of-a-kind beauty you deserve for any
              project you can imagine, from illustrations to Live2D models and
              graphic design.
            </p>

            <div className="list">
              <div className="item">
                <p>Cat 1</p>
              </div>
              <div className="item">
                <p>Cat 2</p>
              </div>
              <div className="item">
                <p>Cat 3</p>
              </div>
            </div>
          </div>
          <div className="category">
            <div className="icon">
              <TbMasksTheater />
            </div>

            <h2 className="h">Main Category</h2>
            <p>
              Lan'Yue Studio is inspired by the rare and unique blue moon. Our
              goal is to curate the one-of-a-kind beauty you deserve for any
              project you can imagine, from illustrations to Live2D models and
              graphic design.
            </p>

            <div className="list">
              <div className="item">
                <p>Cat 1</p>
              </div>
              <div className="item">
                <p>Cat 2</p>
              </div>
              <div className="item">
                <p>Cat 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="confine terms-cta">
          <p className="p">
            For licensing policies and fees, please see our{" "}
            <Link href={"/terms"} className="btn">
              Terms of service <FaArrowRight />
            </Link>{" "}
          </p>
        </div>
      </section>

      <section id="price-lists">
        {pinned && (
          <div className="top-pricing">
            <div className="confine price-heading">
              <div className="sizing">
                <h2 className="h">{pinned.name}</h2>
                <p className="p">{pinned.description}</p>

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
                backgroundImage: `url(${urlFor(pinned.image)?.auto("format").maxHeight(1080).url()})`,
              }}
            ></div>

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
            return (
              <div className="list-pricing l" key={p._id}>
                <div className="confine">
                  {/* Content */}
                  <div className="details">
                    <div className="confine price-heading">
                      <h2 className="h">{p.name}</h2>
                      <p className="p">{p.description}</p>
                    </div>
                    {p.categories &&
                      p.categories.map((p: any) => {
                        return <PriceList name="plist" info={p} />;
                      })}
                  </div>

                  {/* Image */}
                  <figure>
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
                      <Link
                        href={`/portfolio?c=${p.slug}`}
                        className="btn btn-examples"
                      >
                        <span>
                          VIEW EXAMPLES <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            );
          })}
        {/* <div className="list-pricing l">
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
        </div> */}

        <div className="price-footer">
          <div className="confine">
            <h2>NOTES:</h2>
            <div className="text">
              <p className="p">
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
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline">
        <div id="timeline-heading">
          <div className="confine">
            <figure className="inner-shadow">
              <img src="/gfx/hero_art-l.png" alt="" />
              <div className="clip cbr"></div>
              <div className="clip cbl"></div>
              <div className="clip ctl"></div>
              <div className="clip ctr"></div>
            </figure>

            <article>
              <p className="sh">SERVICES</p>
              <h2 className="h">COMMISSIONS TIMELINE</h2>
              <p className="p">
                Placeholder services include a streaming license with the final
                product. Please see our Terms of Service for full details. 
              </p>
            </article>
          </div>
        </div>
        <div id="steps-timeline">
          <div className="step">
            <div className="confine">
              <div className="title">
                <h2 className="h">STEP 1</h2>
              </div>
              <div className="details">
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="confine">
              <div className="title">
                <h2 className="h">STEP 2</h2>
              </div>
              <div className="details">
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="confine">
              <div className="title">
                <h2 className="h">STEP 3</h2>
              </div>
              <div className="details">
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
                <div className="detail">
                  <h3 className="h">Project Updates</h3>
                  <p className="p">
                    Live2D and Graphics services include a streaming license
                    with the final product. Please see our Terms of Service for
                    full details. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
