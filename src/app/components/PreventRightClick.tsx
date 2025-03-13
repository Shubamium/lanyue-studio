"use client";
import React from "react";

type Props = {};

export default function PreventRightClick({ children }: any) {
  return (
    <div id={"prevent"} onContextMenu={(e) => e.preventDefault()}>
      {children}
    </div>
  );
}
