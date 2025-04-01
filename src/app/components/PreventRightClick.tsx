"use client";
import React, { useEffect } from "react";

type Props = {};

export default function PreventRightClick({ children }: any) {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        // Prevents Ctrl+U (View Source)
        event.preventDefault();
      }
      if (
        event.ctrlKey &&
        event.shiftKey &&
        (event.key === "I" || event.key === "J")
      ) {
        // Prevents Ctrl+Shift+I/J (DevTools)
        event.preventDefault();
      }
      if (event.key === "F12") {
        // Prevents F12
        event.preventDefault();
      }
    });
  }, []);
  return (
    <div id={"prevent"} onContextMenu={(e) => e.preventDefault()}>
      {children}
    </div>
  );
}
