import React, { Suspense } from "react";

import "./portfolio.scss";

import Portfolio from "./Portfolio";
type Props = {};

export default function PortfolioPage({}: Props) {
  return (
    <main id="page_portfolio">
      <Suspense>
        <Portfolio />
      </Suspense>
    </main>
  );
}
