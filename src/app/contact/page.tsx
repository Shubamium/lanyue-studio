import React from "react";
import "./contact.scss";
import { FaArrowLeft, FaPaperPlane, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
type Props = {};

export default function Contacts({}: Props) {
  return (
    <main id="page_contact">
      <section id="contact">
        <article>
          <div className="heading">
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
        <form className="message-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name!" />
          </div>
          <div className="form-field">
            <label htmlFor="email">E-MAIL</label>
            <input type="email" name="email" placeholder="Enter your email!" />
          </div>
          <div className="form-field">
            <label htmlFor="handle">DISCORD OR TWITTER</label>
            <input
              type="text"
              name="handle"
              placeholder="Your preferred contact method"
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea name="message" placeholder="Write your inquiries here!" />
          </div>

          <div className="form-action">
            <p className="p">
              We'll respond to your inquiries as soon as possible. By
              commissioning our services, you formally accept the{" "}
              <Link href={"/terms"}>terms and conditions</Link>.
            </p>

            <button className="btn btn-main outline">
              SUBMIT <FaPaperPlane />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}