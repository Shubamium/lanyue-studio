import React from "react";
import "./terms.scss";
import TermsList from "./TermsList";
type Props = {};

export default function TermsPage({}: Props) {
  return (
    <main id="page_terms">
      <section id="terms-banner">
        <img src="/de/vision-splat.png" alt="" className="splat l" />
        <img src="/de/featuredartist-splat.png" alt="" className="splat r" />
      </section>

      <section id="terms-list">
        <aside>
          <article>
            <img src="/de/tos-splat.png" alt="" className="de-splat" />
            <p className="sh">SUBHEADER</p>
            <h2 className="h">TERMS OF SERVICE</h2>
            <p className="p">
              By commissioning our services, you formally accept these terms and
              conditions.
            </p>
          </article>
        </aside>
        <TermsList />
      </section>
    </main>
  );
}
