import React, { Suspense } from "react";
import Contact from "./Contact";
import { fetchData } from "../db/sanity";
import { getFormLink } from "../db/artist";

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
  const form = await getFormLink();

  return (
    <>
      <Suspense>
        <Contact c={{ ...context, ...general, fm: form }} />
      </Suspense>
    </>
  );
}
