"use server";

import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import { PortfolioList, PortfolioText } from "@/payload-types";
const config = await payloadConfig;
const payload = await getPayload({
  config,
});

export default async function getPortfolio(
  category: string
): Promise<PortfolioList["mediaItems"]> {
  // const folio = await fetchData<any>(`
  // 	*[_type == 'portfolio' && lower(slug.current) == lower('${category}')]{
  // 	...
  // 	}[0]
  // `);
  // return folio && folio.images;
  const folio = await payload.find({
    collection: "portfolio-list",
    where: {
      slug: {
        equals: category.toLowerCase(),
      },
    },
  });

  return folio.docs[0]?.mediaItems ?? [];
}
export async function getCategoryList(): Promise<PortfolioText["order"]> {
  // const folio = await fetchData<any>(`
  // 	*[_type == 'portfolio_text' && preset == 'active'][0]{
  // 		'order': order[] -> {
  // 			name,
  // 			'slug':slug.current,
  // 	}

  // 	}
  // `);
  // return folio?.order ?? [];
  const folio = await payload.findGlobal({
    slug: "portfolio-text",
  });
  return folio.order ?? [];
}
export async function getPortfolioText(): Promise<PortfolioText> {
  // const folio = await fetchData<any[]>(`
  // 	*[_type == 'portfolio_text' && preset == 'active'][0]{
  // 			...
  // 	}
  // `);
  // console.log(folio);
  // return folio;
  const folio = await payload.findGlobal({
    slug: "portfolio-text",
  });
  return folio;
}
