"use server";

import { fetchData } from "./sanity";

export default async function getPortfolio(category: string): Promise<any[]> {
  const folio = await fetchData<any>(` 
		*[_type == 'portfolio' && slug.current == '${category}']{
		...
		}[0]
	`);
  return folio && folio.images;
}
export async function getCategoryList(): Promise<any[]> {
  const folio = await fetchData<any[]>(` 
		*[_type == 'portfolio']{
			name,
			'slug':slug.current,

		}
	`);
  return folio;
}
export async function getPortfolioText(): Promise<any[]> {
  const folio = await fetchData<any[]>(` 
		*[_type == 'portfolio_text' && preset == 'active'][0]{
				...
		}
	`);
  console.log(folio);
  return folio;
}
