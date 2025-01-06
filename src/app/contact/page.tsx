import React, { Suspense } from "react";
import Contact from "./Contact";
import { fetchData } from "../db/sanity";

type Props = {};

export default async function ContactPage({}: Props) {
  const context = await fetchData(`
		*[_type == 'contact' && preset == 'active'][0]{
		...
		}
	`);
  return (
    <>
      <Suspense>
        <Contact c={context} />
      </Suspense>
    </>
  );
}
