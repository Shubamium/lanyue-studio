"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ParticleFog from "./ParticleFog";
import { TbMasksTheater } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";
import { GiPuppet } from "react-icons/gi";
import BorderLax from "./BorderLax";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion/react";
import { LuImages, LuRectangleEllipsis } from "react-icons/lu";

type Props = {};

export default function MainService({}: Props) {
  const [scope, animate] = useIV(async () => {
    await animate(
      ".header",
      {
        x: -100,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );

    await animate(
      ".steps",
      {
        opacity: 0,
        scaleY: 0,
      },
      {
        duration: 0,
      }
    );
    await animate(
      ".step",
      {
        x: 200,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    await animate(
      ".header",
      {
        x: 0,
        opacity: 1,
      },
      {
        ease: "easeInOut",
        duration: 0.5,
      }
    );

    await animate(
      ".steps",
      {
        opacity: 1,
        scaleY: 1,
      },
      {
        ease: "easeInOut",
        duration: 1.1,
      }
    );

    animate(
      ".step",
      {
        opacity: 1,
        x: 0,
      },
      {
        duration: 0.8,
        ease: "easeInOut",
        delay: stagger(0.2),
      }
    );
  });
  return (
    <section id="main-service" ref={scope}>
      <video
        src="/v/fog.webm"
        className="smoke-bg ni"
        disablePictureInPicture
        disableRemotePlayback
        loop
        muted
        autoPlay
      ></video>
      <BorderLax />
      <div className="confine header">
        <p className="sh">SERVICES</p>
        <h2 className="h">HOW IT WORKS</h2>
      </div>
      <div className="steps">
        <div className="confine">
          <div className="step">
            <h3>STEP 1</h3>
            <p>
              Check out our artists and services! Review this page thoroughly
              and make sure you understand our <strong>TOS</strong> before
              proceeding.
            </p>

            <img src="/de/blue-flower.png" alt="" className="de-flower" />
            <div className="clip cbr"></div>
            <div className="clip ctr"></div>
          </div>
          <div className="step">
            <h3>STEP 2</h3>
            <p>
              <strong>Contact us!</strong>
            </p>
            <ul>
              <li>
                Join the Discord Server for updates and quick access to the
                community.
              </li>
              <li>Send us an email or DM through social media or Discord.</li>
            </ul>
            <img src="/de/blue-flower.png" alt="" className="de-flower" />
            <div className="clip cbr"></div>
            <div className="clip ctr"></div>
          </div>
          <div className="step">
            <h3>STEP 3</h3>
            <p>
              A manager will follow up with you shortly! Please feel free to ask
              further questions with any contact method you prefer
            </p>
            <img src="/de/blue-flower.png" alt="" className="de-flower" />

            <div className="clip cbr"></div>
            <div className="clip ctr"></div>
          </div>
        </div>
      </div>

      <CategoryList />

      <div className="confine terms-cta">
        <p className="p">
          For licensing policies and fees, please see our{" "}
          <Link href={"/terms"} className="btn">
            Terms of service <FaArrowRight />
          </Link>{" "}
        </p>
      </div>
      <div className="particle-container">
        <ParticleFog />
      </div>
    </section>
  );
}

function CategoryList() {
  const [scope, animate] = useIV(async () => {
    animateStagger(animate, stagger, 1, 0.3);
  });

  return (
    <div className="confine categories" ref={scope}>
      <Categories
        icon={<GiPuppet />}
        name="LIVE 2D"
        list={["Vtuber Model Art", "VTuber Model Rigging", "Bundles"]}
      />
      <Categories
        icon={<FaPaintBrush />}
        name="ILLUSTRATIONS"
        list={["Character Design", "MV Art & Scenes", "Merchandise Assets"]}
      />
      <Categories
        icon={<LuImages />}
        name="GRAPHICS"
        list={["Logo Design", "Branding", "Stream Assets & Overlays"]}
      />
    </div>
  );
}
type CatProps = {
  icon: React.ReactNode;
  name: string;
  // description:string,
  list: string[];
};
function Categories({ icon, name, list }: CatProps) {
  return (
    <div className="category stagger">
      <div className="icon">{icon}</div>

      <h2 className="h">{name}</h2>
      {/* <p>
        Lan'Yue Studio is inspired by the rare and unique blue moon. Our goal is
        to curate the one-of-a-kind beauty you deserve for any project you can
        imagine, from illustrations to Live2D models and graphic design.
      </p> */}

      <div className="list">
        {list &&
          list.map((i) => {
            return (
              <div className="item" key={i}>
                <p>{i}</p>
              </div>
            );
          })}
        {/* <div className="item">
          <p>Cat 2</p>
        </div>
        <div className="item">
          <p>Cat 3</p>
        </div> */}
      </div>
    </div>
  );
}
