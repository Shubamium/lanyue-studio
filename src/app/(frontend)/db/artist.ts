"use server";

import { getPayload, PaginatedDocs } from "payload";
import payloadConfig from "@/payload.config";
import { ArtistText, ArtistType, Member } from "@/payload-types";
const config = await payloadConfig;
const payload = await getPayload({
  config,
});

export default async function getMember(
  role: string
): Promise<PaginatedDocs<Member>> {
  // const memberList = await fetchData<any[]>(`
  // 		*[_type == 'members' && role -> slug.current == '${role}'] | order(order asc){
  // 			...
  // 		}
  // 	`);

  const memberList = await payload.find({
    collection: "members",
    where: {
      "role.slug": {
        equals: role,
      },
    },
    sort: ["order", "asc"],
  });
  return memberList;
}
export async function getText(): Promise<ArtistText> {
  // const text = await fetchData<any>(`
  // 		*[_type == 'artistText' && preset == 'active'][0] {
  // 			...
  // 		}
  // 	`);
  // return text;
  const text = await payload.findGlobal({
    slug: "artist-text",
  });
  return text;
}

type ExtractType<T> = T extends object ? T : never;

type ArtistTextOrder = ExtractType<ArtistType>;
export async function getCategory(): Promise<ArtistType[]> {
  // const text = await fetchData<any>(`
  // 		*[_type == 'artistText' && preset == 'active'][0] {
  // 			'order': order[] -> {
  // 				title,
  // 				'slug':  slug.current,
  // 			}
  // 		}
  // 	`);
  // return text.order ?? [];
  const text = await payload.findGlobal({
    slug: "artist-text",
  });

  return text.order as ArtistType[];
}

export async function getAf(): Promise<string> {
  // const gd = await fetchData<any>(
  //   `*[_type == 'general' && preset == 'active'][0]{
  // 				af
  // 	}`
  // );
  // return gd.af ?? "";
  const gd = await payload.findGlobal({
    slug: "general",
  });

  return gd.af ?? "";
}

export async function getFormLink(): Promise<any> {
  // const gd = await fetchData<any>(
  //   `*[_type == 'general' && preset == 'active'][0]{
  // 				af,
  // 				cf
  // 	}`
  // );
  // return {
  //   af: gd.af,
  //   cf: gd.cf,
  // };
  const gd = await payload.findGlobal({
    slug: "general",
  });
  return {
    af: gd.af,
    cf: gd.cf,
  };
}

export async function getMemberType(): Promise<ArtistType[]> {
  // const at = await fetchData<any>(
  //   `*[_type == 'artist_type']{
  // 	...}`
  // );
  // return at;
  const at = await payload.find({
    collection: "artist-type",
  });
  return at.docs;
}
