"use client";
import React, { useEffect, useState } from "react";
import "./tooltip.scss";
import { useMotionValue, motion, useSpring } from "motion/react";
type Props = {};

export default function Tooltip({}: Props) {
  const xmouse = useMotionValue(0);
  const ymouse = useMotionValue(0);

  const [a, setA] = useState("");
  const x = useSpring(xmouse, {
    stiffness: 300,
    damping: 150,
    duration: 0.1,
  });

  const y = useSpring(ymouse, {
    stiffness: 300,
    damping: 150,
    duration: 0.1,
  });
  useEffect(() => {
    // const allEl = document.querySelectorAll("[data-tip]");

    // for (let i = 0; i < allEl.length; i++) {
    //   allEl[i].addEventListener("mousemove", () => {
    //     const text = allEl[i].getAttribute("data-tip") ?? "";
    //     setA(text);
    //   });
    // }
    window.addEventListener("mousemove", (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element;

      if (e.target && target.matches("[data-tip]")) {
        console.log("Hovered over:", e.target, target.getAttribute("data-tip"));
        // Add your hover logic here
        const tip = target.getAttribute("data-tip");
        setA(tip ?? "");
      } else {
        setA("");
      }
    });

    return () => {};
  }, []);

  return (
    <motion.div
      className={`tip ${a === "" ? "hidden" : ""}`}
      id={"tip"}
      style={{
        x,
        y,
      }}
    >
      <p>{a}</p>
    </motion.div>
  );
}
