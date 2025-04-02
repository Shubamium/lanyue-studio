"use client";
import React, { useEffect, useState } from "react";
import "./header.scss";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { stagger, useAnimate } from "motion/react";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const [scope, animate] = useAnimate();

  const animateShow = async () => {
    await animate(
      ".btn-headernav",
      {
        x: 0,
      },
      {
        duration: 0.4,
        ease: "easeInOut",
        delay: stagger(0.1),
      }
    );
  };
  const animateHidden = async () => {
    await animate(".btn-headernav", {
      x: -1000,
    });
  };
  useEffect(() => {
    if (visible) {
      animateShow();
    } else {
      animateHidden();
    }
  }, [visible]);
  return (
    <>
      <header id="header">
        <img src="/de/header-cloud.png" alt="" className="ni header-cloud l" />
        <img src="/de/header-cloud.png" alt="" className="ni header-cloud r" />
        <img
          src="/de/header-branch.png"
          alt=""
          className="ni header-branch l"
        />
        <img
          src="/de/header-branch.png"
          alt=""
          className="ni header-branch r"
        />
        <div className="logo">
          <img src="/gfx/logo-word-small.png" alt="LANYUE STUDIO" />
        </div>
        <img src="/de/header-splat.png" alt="" className="ni header-splat" />
        <h1 style={{ display: "none" }}>LANYUE STUDIO</h1>
        <nav>
          <Link
            href={"/"}
            className={`btn-headernav btn ${false ? "active" : ""}`}
          >
            Home
          </Link>
          <div
            // href={"/commissions"}
            className={`btn-headernav btn ${false ? "active" : ""} hasdrop`}
          >
            Commissions
            <div className="drop-down">
              <Link href={"/commissions"} className="btn btn-drop">
                Services
              </Link>
              <Link href={"/commissions/prices"} className="btn btn-drop">
                Prices
              </Link>
            </div>
          </div>
          <Link
            href={"/artists"}
            className={`btn-headernav btn ${false ? "active" : ""}`}
          >
            Artists
          </Link>
          <Link
            href={"/portfolio"}
            className={`btn-headernav btn ${false ? "active" : ""}`}
          >
            Portfolio
          </Link>
          <Link
            href={"/contact"}
            className={`btn-headernav btn${false ? "active" : ""}`}
          >
            Contact
          </Link>
          <Link
            href={"/terms"}
            className={`btn-headernav btn${false ? "active" : ""}`}
          >
            Terms of Service
          </Link>
          <button
            className="btn btn-headernav btn-menu"
            onClick={() => {
              setVisible(true);
            }}
          >
            <BiMenu />
          </button>
        </nav>
      </header>
      <div
        id="fs-nav"
        ref={scope}
        className={`${visible ? "visible" : "hidden"}`}
        onClickCapture={() => {
          setVisible(false);
        }}
      >
        <Link
          href={"/"}
          className={`btn-headernav btn ${false ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/commissions"}
          className={`btn-headernav btn ${false ? "active" : ""}`}
        >
          Services
        </Link>
        <Link
          href={"/commissions/prices"}
          className={`btn-headernav btn ${false ? "active" : ""}`}
        >
          Prices
        </Link>
        <Link
          href={"/artists"}
          className={`btn-headernav btn ${false ? "active" : ""}`}
        >
          Artists
        </Link>
        <Link
          href={"/portfolio"}
          className={`btn-headernav btn ${false ? "active" : ""}`}
        >
          Portfolio
        </Link>
        <Link
          href={"/contact"}
          className={`btn-headernav btn${false ? "active" : ""}`}
        >
          Contact
        </Link>
        <Link
          href={"/terms"}
          className={`btn-headernav btn${false ? "active" : ""}`}
        >
          Terms of Service
        </Link>
        <Link
          href={"/"}
          className={`btn-headernav btn ${false ? "active" : ""}`}
        >
          <CgClose /> CLOSE
        </Link>
      </div>
    </>
  );
}
