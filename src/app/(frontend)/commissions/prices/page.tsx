import React, { Suspense } from "react";
import "./prices.scss";
import Prices from "./Prices";
type Props = {};
import config from "@payload-config";
import { getPayload } from "payload";
import { PriceList } from "@/payload-types";
export default async function PagePrice({}: Props) {
  // const comText = await fetchData<any>(`
  // 			*[_type == 'commission_text' && preset == 'active']{
  // 				pinned_pricing ->{
  // 					...,
  // 					'nslug':view -> slug.current,
  // 					'slug':slug.current,
  // 				},
  // 				pricing_list[]->{
  // 					...,
  // 					'nslug':view -> slug.current,
  // 					'slug':slug.current,
  // 				},
  // 				Prices,
  // 				nl,
  // 				nr,
  // 			}[0]
  // 		`);
  const payloadConfig = await config;
  const payload = await getPayload({
    config: payloadConfig,
  });

  const comText = await payload.findGlobal({
    slug: "commission",
  });
  // const gd = await fetchData<any>(
  //   `*[_type == 'general' && preset == 'active'][0]{
  // 		cf
  // 	}`
  // );
  const gd = await payload.findGlobal({
    slug: "general",
  });
  // const pinned = comText.pinned_pricing;
  const plist = comText.pricing?.pricing_list ?? [];
  const t = comText.pricing?.Prices;

  // const allList = [pinned, ...plist];
  const allList = [...plist];

  const formatted: { [key: string]: any } = {};

  allList.forEach((d) => {
    if (typeof d !== "string") {
      const key = d.slug?.toLowerCase() ?? "";
      formatted[key] = d;
    }
  });
  return (
    <main id="page_price">
      <Suspense>
        <Prices
          data={formatted}
          t={t}
          gd={gd}
          nl={comText.pricing?.nl}
          nr={comText.pricing?.nr}
        />
      </Suspense>
    </main>
  );
}
