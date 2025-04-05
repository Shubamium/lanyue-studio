import React from "react";
import "./footer.scss";
import Link from "next/link";
import { BiSolidArrowToTop } from "react-icons/bi";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { fetchData } from "@/app/db/sanity";
type Props = {};

export default async function Footer({}: Props) {
  const general = await fetchData<any>(`
		*[_type == 'general' && preset == 'active']{
			footer,
			mail,
			x,
			discord
		}[0]
	`);
  console.log(general);
  return (
    <footer id="footer">
      <img src="/de/gold-branch.png" alt="" className="gold-branch l ni" />
      <img src="/de/gold-branch.png" alt="" className="gold-branch r ni" />
      <img src="/de/footer-splat-top.svg" alt="" className="splat-top" />
      <div className="footer-confine">
        <div className="left">
          <div className="mini-info">
            <h3>{general?.footer?.h}</h3>
            <p className="p">{general?.footer?.p}</p>
          </div>

          <div className="line"></div>
          <a href="#" className="scrolltop">
            SCROLL TO THE TOP <BiSolidArrowToTop />
          </a>
        </div>
        <div className="center">
          <img src="/gfx/logo-colored.png" alt="" className="logo" />
          <img src="/gfx/footer-logo-text.png" alt="" className="logo-text" />
          <img src="/de/stroke-moon.png" alt="" className="stroke-moon" />
          <p className="attribution">
            @2024 Lan’Yue Studio All rights Reserved
          </p>

          <div className="contacts">
            <a href={general.x} target="_blank" className="btn footer-contact">
              <span>
                <FaXTwitter />
              </span>
            </a>
            <a
              href={general.discord}
              target="_blank"
              className="btn footer-contact"
            >
              <span>
                <FaDiscord />
              </span>
            </a>
            <a
              href={`mailto:${general.mail}`}
              target="_blank"
              className="btn footer-contact"
            >
              <span>
                <CgMail />
              </span>
            </a>
          </div>
        </div>
        <div className="right">
          <h3>NAVIGATION</h3>
          <nav>
            <Link href={"/"} className="btn btn-navfot">
              HOME
            </Link>
            <Link href={"/commissions"} className="btn btn-navfot">
              COMMISSIONS
            </Link>
            <Link href={"/commissions/prices"} className="btn btn-navfot">
              PRICES
            </Link>
            <Link href={"/artists"} className="btn btn-navfot">
              ARTISTS
            </Link>
            <Link href={"/portfolio"} className="btn btn-navfot">
              PORTFOLIO
            </Link>
            <Link href={"/contact"} className="btn btn-navfot">
              CONTACT
            </Link>
            <Link href={"/terms"} className="btn btn-navfot">
              TERMS OF SERVICE
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
