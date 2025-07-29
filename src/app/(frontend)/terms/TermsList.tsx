"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useIV } from "../util/useIV";
import { stagger } from "motion/react";
import { RichText } from "@payloadcms/richtext-lexical/react";

type Props = { tl: any };

export default function TermsList({ tl }: Props) {
  const [scope, animate] = useIV(async () => {
    await animate([
      [
        ".terms",
        {
          x: 500,
          opacity: 0,
        },
        {
          duration: 0,
        },
      ],
      [
        ".terms",
        {
          x: 0,
          opacity: 1,
        },
        {
          duration: 0.9,
          ease: "easeInOut",
          delay: stagger(0.4, {
            startDelay: 1.5,
          }),
        },
      ],
    ]);
  });
  return (
    <div className="list" ref={scope}>
      {tl.map((l: any) => {
        return (
          <TermsDropdown title={l.title} key={l._key}>
            <RichText data={l.text} />
          </TermsDropdown>
        );
      })}
    </div>
  );
}

type props = {
  children: React.ReactNode;
  title: string;
};
export function TermsDropdown({ children, title }: props) {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className={`terms ${visible ? "visible" : "closed"}`}
      onClick={() => {
        setVisible((visible) => !visible);
      }}
    >
      <div className="top-part">
        <h2>{title}</h2>
        <IoMdArrowDropdown />
      </div>
      <div className="content">
        {/* <Children/> */}
        {children}
      </div>
    </div>
  );
}
