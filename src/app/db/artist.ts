"use server";

import { fetchData } from "./sanity";

export default async function getMember(role: string): Promise<any[]> {
  const memberList = await fetchData<any[]>(`
			*[_type == 'members' && role -> slug.current == '${role}'] | order(order asc){
				...
			}
		`);
  return memberList;
}
export async function getText(): Promise<any[]> {
  const text = await fetchData<any>(`
			*[_type == 'artistText' && preset == 'active'][0] {
				...
			}
		`);
  return text;
}
export async function getCategory(): Promise<any[]> {
  const text = await fetchData<any>(`
			*[_type == 'artistText' && preset == 'active'][0] {
				'order': order[] -> {
					title,
					'slug':  slug.current,
				}
			}
		`);
  return text.order ?? [];
}

export async function getAf(): Promise<string> {
  const gd = await fetchData<any>(
    `*[_type == 'general' && preset == 'active'][0]{
					af
		}`
  );
  return gd.af ?? "";
}

export async function getFormLink(): Promise<any> {
  const gd = await fetchData<any>(
    `*[_type == 'general' && preset == 'active'][0]{
					af,
					cf
		}`
  );
  return {
    af: gd.af,
    cf: gd.cf,
  };
}
