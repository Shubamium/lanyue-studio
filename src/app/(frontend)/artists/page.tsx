import React, { Suspense } from "react";
import Artist from "./Artist";
import Loading from "../Loading";

type Props = {};

export default function page({}: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <Artist />
    </Suspense>
  );
}
