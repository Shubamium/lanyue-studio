import React from "react";
import "./footer.scss";
import Link from "next/link";
import { BiSolidArrowToTop } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <img src="/de/footer-splat-top.svg" alt="" className="splat-top" />
      <div className="footer-confine">
        <div className="left">
          <div className="mini-info">
            <h3>SMALL INFO TEXT</h3>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
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
          <p className="attribution">
            @2024 Lan’Yue Studio ALL RIGHTS RESERVED
          </p>

          <div className="contacts">
            <a href="#" target="_blank" className="btn footer-contact">
              <span>
                <FaXTwitter />
              </span>
            </a>
            <a href="#" target="_blank" className="btn footer-contact">
              <span>
                <FaXTwitter />
              </span>
            </a>
            <a href="#" target="_blank" className="btn footer-contact">
              <span>
                <FaXTwitter />
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
            <Link href={"/"} className="btn btn-navfot">
              COMMISSIONS
            </Link>
            <Link href={"/"} className="btn btn-navfot">
              ARTISTS
            </Link>
            <Link href={"/"} className="btn btn-navfot">
              PORTFOLIO
            </Link>
            <Link href={"/"} className="btn btn-navfot">
              CONTACT
            </Link>
            <Link href={"/"} className="btn btn-navfot">
              TERMS OF SERVICE
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
