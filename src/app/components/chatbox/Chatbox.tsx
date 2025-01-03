"use client";
import React, { useEffect } from "react";

type Props = {};

export default function Chatbox({}: Props) {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "a8883da8-793e-43e1-92d9-29bc2d12f0f0";
    (function () {
      let d = document;
      let s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);
  return <div style={{ display: "none" }}>Chatbox Initialized</div>;
}
