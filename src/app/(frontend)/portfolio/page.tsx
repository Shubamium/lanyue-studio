import React, { Suspense } from "react";

import "./portfolio.scss";

import Portfolio from "./Portfolio";
type Props = {};
import Loading from "@/app/(frontend)/Loading";
export default function PortfolioPage({}: Props) {
  return (
    <main id="page_portfolio">
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
    </main>
  );
}
