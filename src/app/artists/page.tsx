import React, { Suspense } from "react";
import Artist from "./Artist";

type Props = {};

export default function page({}: Props) {
  return (
    <Suspense>
      <Artist />
    </Suspense>
  );
}
