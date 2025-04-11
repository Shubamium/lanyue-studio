import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "o5vhscyp",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (source) {
    return builder.image(source);
  } else {
    return null;
  }
}

export function getFileUrl(source: any) {
  if (source) {
    const data = source.asset._ref.split("-");
    const baseUrl = `https://cdn.sanity.io/files/o5vhscyp/production/${data[1]}.${data[2]}`;
    return baseUrl;
  }
  // console.log(data);
}

const config = {
  next: {
    revalidate: 5,
  },
};
export function fetchData<T>(grocQuery: string) {
  return client.fetch<T>(grocQuery, {}, { ...config });
}
