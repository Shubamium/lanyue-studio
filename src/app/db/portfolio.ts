"use server";

import { fetchData } from "./sanity";

export default async function getPortfolio(category: string): Promise<any[]> {
  const folio = await fetchData<any>(` 
		*[_type == 'portfolio' && slug.current == '${category}']{
		...
		}[0]
	`);
  console.log(folio);
  return folio && folio.images;
}
