import React, { Suspense } from "react";
import Contact from "./Contact";
import { fetchData } from "../db/sanity";

type Props = {};

export default async function ContactPage({}: Props) {
  const context = await fetchData<any>(`
		*[_type == 'contact' && preset == 'active'][0]{
		...
		}
	`);
  const general = await fetchData<any>(`
		*[_type == 'general' && preset == 'active'][0]{
			mail,
			x,
			discord,
		}
	`);
  return (
    <>
      <Suspense>
        <Contact c={{ ...context, ...general }} />
      </Suspense>
    </>
  );
}
