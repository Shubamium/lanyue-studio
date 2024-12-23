"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { useParallax } from "../util/util";

type Props = {};

export default function BorderLax({}: Props) {
  const target = useRef(null);
  const scroll = useScroll({
    target: target,
    offset: ["start center", "end start"],
  });
  const x = useTransform(scroll.scrollYProgress, [0, 1], [-200, 200]);
  const xl = useTransform(x, [-200, 200], [200, -200]);
  return (
    <div ref={target}>
      <motion.img
        src="/de/frameborder-long.svg"
        alt=""
        style={{ x }}
        className="border l"
      />
      <motion.img
        style={{ x: xl }}
        src="/de/frameborder-long.svg"
        alt=""
        className="border r"
      />
    </div>
  );
}
