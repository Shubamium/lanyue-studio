"use client";
import React, { useEffect, useRef, useState } from "react";
import "./tooltip.scss";
import { useMotionValue, motion, useSpring } from "motion/react";
import { FaPaintbrush } from "react-icons/fa6";
type Props = {};

export function Tooltip({}: Props) {
  const xmouse = useMotionValue(0);
  const ymouse = useMotionValue(0);

  const [a, setA] = useState("");
  const manual = useRef(false);
  const x = useSpring(xmouse, {
    stiffness: 100,
    damping: 20,
  });

  const y = useSpring(ymouse, {
    stiffness: 100,
    damping: 20,
  });
  useEffect(() => {
    // const allEl = document.querySelectorAll("[data-tip]");

    // for (let i = 0; i < allEl.length; i++) {
    //   allEl[i].addEventListener("mousemove", () => {
    //     const text = allEl[i].getAttribute("data-tip") ?? "";
    //     setA(text);
    //   });
    // }
    // console.log(manual, a);
    const mouseDetect = (e: any) => {
      if (manual.current || a !== "") {
        x.set(e.clientX);
        y.set(e.clientY);
      }

      if (manual.current) return;
      const target = e.target as Element;
      if (e.target && target.matches && target.matches("[data-tip]")) {
        console.log("Hovered over:", e.target, target.getAttribute("data-tip"));
        const tip = target.getAttribute("data-tip");
        setA(tip ?? "");
      } else {
        setA("");
      }
    };
    document.addEventListener("mousemove", mouseDetect);

    const manualFunc = (e: any) => {
      console.log("event triggered", e.detail.tip);
      manual.current = e.detail.tip === "" ? false : true;
      setA(e.detail.tip);
    };
    // For manual showing
    document.addEventListener("tipshow", manualFunc);

    return () => {
      document.removeEventListener("tipshow", manualFunc);
      document.removeEventListener("mousemove", mouseDetect);
    };
  }, [a]);

  return (
    <motion.div
      className={`tip ${a === "" ? "hidden" : ""}`}
      id={"tip"}
      style={{
        x,
        y,
      }}
    >
      <p>
        {" "}
        <FaPaintbrush /> {a}
      </p>
    </motion.div>
  );
}

export default React.memo(Tooltip);
