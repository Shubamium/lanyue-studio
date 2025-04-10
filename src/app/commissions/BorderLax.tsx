"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

type Props = {};

export default function BorderLax({}: Props) {
  const target = useRef(null);
  const scroll = useScroll({
    target: target,
    offset: ["start center", "end start"],
  });
  const x = useTransform(scroll.scrollYProgress, [0, 1], [-200, 200]);
  const xSpring = useSpring(x, {
    stiffness: 300,
    damping: 10,
  });
  const xl = useTransform(x, [-200, 200], [200, -200]);
  const xlSpring = useSpring(xl, {
    stiffness: 300,
    damping: 10,
  });
  return (
    <div ref={target}>
      <motion.img
        src="/de/frameborder-long.svg"
        alt=""
        style={{ x: xSpring, willChange: "transform" }}
        className="border l"
      />
      <motion.img
        style={{ x: xlSpring, willChange: "transform" }}
        src="/de/frameborder-long.svg"
        alt=""
        className="border r"
      />
    </div>
  );
}
