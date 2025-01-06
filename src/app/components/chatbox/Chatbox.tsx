"use client";
import React, { useEffect } from "react";

type Props = {};

export default function Chatbox({}: Props) {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "d513b56d-0c2d-4275-be1c-fc1a6ed8259e";
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
