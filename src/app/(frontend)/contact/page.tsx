import React, { Suspense } from "react";
import Contact from "./Contact";
import { getFormLink } from "../db/artist";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import Loading from "../Loading";

type Props = {};

export default async function ContactPage({}: Props) {
  // const context = await fetchData<any>(`
  // 	*[_type == 'contact' && preset == 'active'][0]{
  // 	...
  // 	}
  // `);
  // const general = await fetchData<any>(`
  // 	*[_type == 'general' && preset == 'active'][0]{
  // 		mail,
  // 		x,
  // 		discord,
  // 	}
  // `);
  const config = await payloadConfig;
  const payload = await getPayload({
    config,
  });
  const contact = await payload.findGlobal({
    slug: "contact",
  });
  const general = await payload.findGlobal({
    slug: "general",
  });
  const form = await getFormLink();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Contact c={contact} g={general} f={form} />
      </Suspense>
    </>
  );
}
