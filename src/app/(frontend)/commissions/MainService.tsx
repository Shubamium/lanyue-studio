"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
// import ParticleFog from "./ParticleFog";
import BorderLax from "./BorderLax";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion/react";
import { PortableText } from "next-sanity";
import { urlFor } from "../db/sanity";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

type Props = { ss: Commission["service"] };

const ParticleFog = dynamic(() => import("./ParticleFog"));

const animateService = async (animate: any, scope: any) => {
  await animate(
    scope.current,
    {
      opacity: 0,
    },
    {
      duration: 0,
    }
  );
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
    scope.current,
    {
      opacity: 1,
    },
    {
      duration: 0.1,
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
};

import { Commission, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export default function MainService({ ss }: Props) {
  const [scope, animate] = useIV(async () => {
    animateService(animate, scope);
  });
  console.log(ss);

  return (
    <section id="main-service" ref={scope} style={{ opacity: 0 }}>
      <video
        src="/v/fog.webm"
        className="smoke-bg ni"
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        loop
        muted
        autoPlay
      ></video>
      <BorderLax />
      <div className="confine header">
        <p className="sh">{ss?.sh}</p>
        <h2 className="h">{ss?.h}</h2>
      </div>
      <div className="steps">
        <div className="step"></div>

        <div className="confine">
          {ss?.steps &&
            ss?.steps.map((step, index) => {
              return (
                <div className="step" key={(step.id as string) + index}>
                  <h3>{step.title}</h3>
                  {/* <p>
                  Check out our artists and services! Review this page
                  thoroughly and make sure you understand our{" "}
                  <strong>TOS</strong> before proceeding.
                </p> */}
                  <RichText data={step.p as SerializedEditorState} />
                  <img src="/de/blue-flower.png" alt="" className="de-flower" />
                  <div className="clip cbr"></div>
                  <div className="clip ctr"></div>
                </div>
              );
            })}

          {/* <div className="step">
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
          </div> */}
        </div>
      </div>

      <CategoryList cat={ss?.cat} />

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

async function animateCategoryStagger(animate: any) {
  animateStagger(animate, stagger, 1, 0.3);
}
function CategoryList({ cat }: { cat: any }) {
  const [scope, animate] = useIV(async () => {
    animateCategoryStagger(animate);
  });

  return (
    <div className="confine categories" ref={scope}>
      {cat &&
        cat.map((c: any) => {
          return (
            <Categories
              art={c.art}
              slug={c.slug}
              description={c.p}
              name={c.title}
              list={c.subcat}
              key={c.id}
            />
          );
        })}
      {/* <Categories
        icon={<FaPaintBrush />}
        name="ILLUSTRATIONS"
        list={["Character Design", "MV Art & Scenes", "Merchandise Assets"]}
      />
      <Categories
        icon={<LuImages />}
        name="GRAPHICS"
        list={["Logo Design", "Branding", "Stream Assets & Overlays"]}
      /> */}
    </div>
  );
}
type CatProps = {
  art: any;
  name: string;
  description?: any;
  list?: string[];
  slug: any;
};
function Categories({ art, description, name, list, slug }: CatProps) {
  const router = useRouter();
  const im = art as Media;

  return (
    <div
      className="category "
      onClick={() => {
        router.push("/commissions/prices" + (slug ? `#${slug}` : ""));
      }}
    >
      <div className="left">
        <h2>{name}</h2>
        {slug && (
          <p className="view">
            View Prices <FaArrowRight />
          </p>
        )}
        <div className="desc">
          {description && (
            <RichText data={description as SerializedEditorState} />
          )}
        </div>
        {/* <img src={urlFor(art)?.height(600).url()} alt="" className="bg-img" /> */}
        <img
          src={im.sizes?.Medium?.url ?? im?.url ?? undefined}
          alt=""
          className="bg-img"
        />
      </div>
      <div className="list">
        {list &&
          list.map((i: any, index) => {
            return (
              <div className="item" key={i ?? index}>
                <p>{i} </p>
                <p>◈</p>
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
