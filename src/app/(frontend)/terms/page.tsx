import React, { Suspense } from "react";
import Terms from "./Terms";
import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import Loading from "../Loading";

type Props = {};

export default async function TermsPage({}: Props) {
  // const terms = await fetchData(`
  // 	*[_type == 'terms' && preset == 'active'][0]{
  // 		...
  // 	}
  // `);

  const config = await payloadConfig;
  const payload = await getPayload({
    config: config,
  });

  const terms = await payload.findGlobal({
    slug: "terms",
  });
  return (
    <Suspense fallback={<Loading />}>
      <Terms t={terms} />
    </Suspense>
  );
}
