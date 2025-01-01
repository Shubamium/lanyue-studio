import React from "react";
import "./footer.scss";
import Link from "next/link";
import { BiSolidArrowToTop } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <img src="/de/gold-branch.png" alt="" className="gold-branch l ni" />
      <img src="/de/gold-branch.png" alt="" className="gold-branch r ni" />
      <img src="/de/footer-splat-top.svg" alt="" className="splat-top" />
      <div className="footer-confine">
        <div className="left">
          <div className="mini-info">
            <h3>ABOUT US</h3>
            <p className="p">
              Lan’Yue Studio is an art studio setting the industry standard for
              ethical commission services. All of our resources go towards
              ensuring that our artists are taken care of legally, financially,
              and developmentally.
            </p>
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
            <a
              href="https://x.com/LanYue_Studio"
              target="_blank"
              className="btn footer-contact"
            >
              <span>
                <FaXTwitter />
              </span>
            </a>
            <a
              href="mailto:contact@lanyue.studio"
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
