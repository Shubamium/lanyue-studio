import React from "react";
import "./header.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <img src="/de/header-cloud.png" alt="" className="ni header-cloud l" />
      <img src="/de/header-cloud.png" alt="" className="ni header-cloud r" />
      <img src="/de/header-branch.png" alt="" className="ni header-branch l" />
      <img src="/de/header-branch.png" alt="" className="ni header-branch r" />
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
        <Link
          href={"/commissions"}
          className={`btn-headernav btn ${false ? "active" : ""}`}
        >
          Commissions
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
      </nav>
    </header>
  );
}
