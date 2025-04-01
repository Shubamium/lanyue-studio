"use client";
import React, { useState } from "react";
import "./contact.scss";
import {
  FaArrowLeft,
  FaDiscord,
  FaPaperPlane,
  FaSpinner,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import ParticleFog from "../commissions/ParticleFog";
import { SendMail } from "../util/mail";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion";
import { CgEditMarkup, CgMail } from "react-icons/cg";
import { PortableText } from "next-sanity";
import { nt } from "../util/util";
import { GrFormEdit } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
type Props = { c: any };

export default function Contact({ c }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [message, setMessage] = useState("");
  const [messageNotice, setMessageNotice] = useState("");

  const [loading, setLoading] = useState(false);

  const [scope, animate] = useIV(async () => {
    animateStagger(animate, stagger, 0.5, 0.3);
  });

  return (
    <main id="page_contact" ref={scope}>
      <div className={`loader ${loading ? "loading" : "loaded"}`}>
        <FaSpinner />
        <p className="p">{messageNotice}</p>
      </div>
      <section id="contact">
        <img src="/de/header-cloud.png" alt="" className="de-cloud" />
        <article>
          <div className="heading">
            <img src="/de/white-moon.png" alt="" className="de-moon stagger" />
            <p className="sh stagger">{c.sh}</p>
            <h2 className="h stagger">{c.h}</h2>
          </div>
          <div className="p stagger">
            <PortableText value={c.p} />
          </div>
          <a href={`mailto:${c.em}`} className="email stagger">
            {"➜ "}
            {c.em}
          </a>

          <div className="infos">
            {c.il &&
              c.il.map((i: any) => {
                return (
                  <div className="info stagger" key={i._key}>
                    <h2>{i.title}</h2>
                    <p>{i.info}</p>
                  </div>
                );
              })}
            {/* <div className="info stagger">
              <h2>DISCORD DM</h2>
              <p>lanyuestudio</p>
            </div>
            <div className="info stagger">
              <h2>DISCORD DM</h2>
              <p>lanyuestudio</p>
            </div>
            <div className="info stagger">
              <h2>DISCORD DM</h2>
              <p>lanyuestudio</p>
            </div>
            <div className="info stagger">
              <h2>DISCORD DM</h2>
              <p>lanyuestudio</p>
            </div> */}
          </div>

          <div className="contacts stagger">
            <a href={c.x} target="_blank" className="btn btn-contact">
              <span>
                <FaXTwitter />
              </span>
            </a>
            <a href={c.discord} target="_blank" className="btn btn-contact">
              <span>
                <FaDiscord />
              </span>
            </a>
            <a href={`mailto:${c.mail}`} className="btn btn-contact">
              <span>
                <CgMail />
              </span>
            </a>
          </div>
          <p className="alt-text stagger">{c.m}</p>

          <div className="otherl">
            <Link
              href={c.hb.path}
              target={nt(c.hb.path)}
              className="btn btn-main outline stagger"
            >
              {" "}
              <FaArrowLeft />
              <span>{c.hb.text}</span>
            </Link>
            <Link
              href={"https://forms.gle/EN2dPBykT8kWQ1Lk9"}
              target={"_blank"}
              className="btn btn-main outline stagger"
              style={{
                marginTop: "1em",
              }}
            >
              <BiEdit />
              <span>ARTIST APPLICATION FORM</span>
            </Link>
          </div>
        </article>
        <form
          className="message-form"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            setMessageNotice("Sending your message . . .");
            setLoading(true);
            await SendMail({
              username: name,
              email,
              handle,
              message,
            });
            setMessageNotice("Message Submitted");

            setLoading(false);
          }}
        >
          <div className="form-field stagger">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-field stagger">
            <label htmlFor="email">E-MAIL</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-field stagger">
            <label htmlFor="handle">DISCORD OR TWITTER</label>
            <input
              type="text"
              name="handle"
              required
              value={handle}
              onChange={(e) => {
                setHandle(e.target.value);
              }}
              placeholder="Your preferred contact method"
            />
          </div>
          <div className="form-field stagger">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Write your message here"
            />
          </div>

          <div className="form-action stagger">
            <div className="p">
              {/* We'll respond to your inquiries as soon as possible. By */}
              {/* commissioning our services, you formally accept the{" "} */}
              {/* <Link href={"/terms"}>terms and conditions</Link>. */}
              <PortableText value={c.st} />
            </div>

            <button className="btn btn-main outline" type="submit">
              {c.sb}
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </section>
      <div className="particle-container">
        <ParticleFog />
      </div>
    </main>
  );
}
