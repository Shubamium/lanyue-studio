"use client";
import React, { useState } from "react";
import "./contact.scss";
import {
  FaArrowLeft,
  FaPaperPlane,
  FaSpinner,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import ParticleFog from "../commissions/ParticleFog";
import { SendMail } from "../util/mail";
type Props = {};

export default function Contacts({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [message, setMessage] = useState("");
  const [messageNotice, setMessageNotice] = useState("");

  const [loading, setLoading] = useState(false);
  return (
    <main id="page_contact">
      <div className={`loader ${loading ? "loading" : "loaded"}`}>
        <FaSpinner />
        <p className="p">{messageNotice}</p>
      </div>
      <section id="contact">
        <img src="/de/header-cloud.png" alt="" className="de-cloud" />
        <article>
          <div className="heading">
            <img src="/de/white-moon.png" alt="" className="de-moon" />
            <p className="sh">SUBHEADING</p>
            <h2 className="h">READY TO BEGIN YOUR PROJECT?</h2>
          </div>
          <p className="p">
            If you have any questions, comments, or suggestions, please feel
            free to contact us using the form below or via email at:
          </p>
          <a href="mailto:contact@lanyue.studio" className="email">
            {"➜ "}contact@lanyue.studio
          </a>

          <div className="infos">
            <div className="info">
              <h2>CONTACT HOURS</h2>
              <p>9AM - 5PM PST</p>
            </div>
            <div className="info">
              <h2>DISCORD DM</h2>
              <p>lanyuestudio</p>
            </div>
          </div>

          <div className="contacts">
            <a href="#" target="_blank" className="btn btn-contact">
              <span>
                <FaXTwitter />
              </span>
            </a>
            <a href="#" target="_blank" className="btn btn-contact">
              <span>
                <FaXTwitter />
              </span>
            </a>
            <a href="#" target="_blank" className="btn btn-contact">
              <span>
                <FaXTwitter />
              </span>
            </a>
          </div>
          <p className="alt-text">
            Thank you for your interest in our Lan'Yue Studio!
          </p>

          <Link href={"/commissions"} className="btn btn-main outline">
            {" "}
            <FaArrowLeft /> VIEW SERVICES
          </Link>
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
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your name!"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">E-MAIL</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email!"
            />
          </div>
          <div className="form-field">
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
          <div className="form-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Write your inquiries here!"
            />
          </div>

          <div className="form-action">
            <p className="p">
              We'll respond to your inquiries as soon as possible. By
              commissioning our services, you formally accept the{" "}
              <Link href={"/terms"}>terms and conditions</Link>.
            </p>

            <button className="btn btn-main outline" type="submit">
              SUBMIT <FaPaperPlane />
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
