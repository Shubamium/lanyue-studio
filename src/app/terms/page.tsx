import React from "react";
import Terms from "./Terms";
import { fetchData } from "../db/sanity";

type Props = {};

export default async function TermsPage({}: Props) {
  const terms = await fetchData(`
		*[_type == 'terms' && preset == 'active'][0]{
			...
		}
	`);
  return (
    <>
      <Terms t={terms} />
    </>
  );
}
