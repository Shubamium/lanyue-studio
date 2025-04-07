import { fetchData, urlFor } from "@/app/db/sanity";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaArrowRight } from "react-icons/fa6";
import PriceList from "../PriceList";
import ListPricing from "../ListPricing";
import "./prices.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import PriceHeading from "./PriceHeading";
import Prices from "./Prices";
type Props = {};

export default async function PagePrice({}: Props) {
  const comText = await fetchData<any>(`
				*[_type == 'commission_text' && preset == 'active']{
					pinned_pricing ->{
						...,
						'nslug':view -> slug.current,
						'slug':slug.current,
					},
					pricing_list[]->{
						...,
						'nslug':view -> slug.current,
						'slug':slug.current,
					},
					Prices,
					nl,
					nr,
				}[0]
			`);

  const gd = await fetchData<any>(
    `*[_type == 'general' && preset == 'active'][0]{
			cf
		}`
  );
  const pinned = comText.pinned_pricing;
  const plist = comText.pricing_list;
  const t = comText.Prices;

  const allList = [pinned, ...plist];

  const formatted: { [key: string]: any } = {};

  allList.forEach((d) => {
    formatted[d.slug] = d;
  });
  return (
    <main id="page_price">
      <Suspense>
        <Prices
          data={formatted}
          t={t}
          gd={gd}
          nl={comText.nl}
          nr={comText.nr}
        />
      </Suspense>
    </main>
  );
}
