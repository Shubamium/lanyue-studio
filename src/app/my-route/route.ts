import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.findGlobal({
    slug: "home",
  });
  return Response.json({
    message: "V1.01 Aug 10 2025",
    data: data,
  });
};
