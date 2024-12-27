"use client";
import { stagger, useAnimate, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

type Props = {};

export default function Welcome({}: Props) {
  const head = useRef(null);
  const iv = useInView(head, {
    once: true,
  });
  const [scope, animate] = useAnimate();

  const animateHeadText = async () => {
    await animate(
      "#intro-text h2",
      {
        clipPath: "inset(0% 100% 0% 0%)",
        scale: 0.9,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    animate(
      "#intro-text h2",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        opacity: 1,
      },
      {
        duration: 1,
        ease: "easeIn",
      }
    );
  };

  const animateContent = async () => {
    await animate(
      [
        [
          "#about .art-l",
          {
            x: -500,
            opacity: 0,
          },
        ],
        [
          "#about .art-r",
          {
            x: 500,
            opacity: 0,
          },
        ],
        [
          ".center",
          {
            scale: 2,
            clipPath: "inset(0 0 100% 0)",
          },
        ],
        [
          ".center .stagger",
          {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
          },
        ],
      ],
      {
        duration: 0,
      }
    );

    animate(
      "#about .art-l, #about .art-r",
      {
        opacity: 1,
        x: 0,
      },
      { duration: 2, delay: 0.5 }
    );
    animate(
      ".center",
      {
        clipPath: "inset(0 0 0% 0)",
        scale: 1,
      },
      { duration: 1, delay: 1.3, ease: "easeInOut" }
    );
    animate(
      ".center .stagger",
      {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
      },
      {
        duration: 0.7,
        delay: stagger(0.3, { startDelay: 2 }),
        ease: "easeInOut",
      }
    );
  };
  const animationController = async () => {
    animateHeadText();
    animateContent();
  };

  useEffect(() => {
    if (iv) {
      animationController();
    }
  }, [iv]);

  return (
    <section id="welcome" ref={scope}>
      <div className="iv" ref={head}>
        <div id="intro-text">
          <h2>
            WELCOME, <span>HONORED PATRONS.</span>
          </h2>
        </div>
        <div id="about">
          <div className="artside art-l">
            <img src="/gfx/placeholder.png" alt="" />
            <div className="clip ctr"></div>
            <div className="clip cbr"></div>
          </div>
          <article className="center">
            <img
              src="/de/welcome-center.png"
              alt=""
              className="de-center-splat stagger"
            />
            <div className="top-art">
              <img src="/gfx/placeholder2.png" alt="" className="stagger" />
              <img src="/gfx/placeholder2.png" alt="" className="stagger" />
            </div>
            <div className="about-text">
              <h3 className="sh stagger">ABOUT LAN'YUE STUDIO</h3>
              <div className="text">
                <div className="left">
                  <p className="p stagger">
                    <strong>Lan'Yue Studio</strong> is inspired by the rare and
                    unique blue moon. Our goal is to curate the{" "}
                    <strong>one-of-a-kind beauty </strong>
                    you deserve for any project you can imagine, from
                    illustrations to Live2D models and graphic design.
                  </p>
                </div>
                <div className="right stagger">
                  <p className="p">
                    Lan’Yue is committed to satisfying every client with the
                    best that the art world has to offer. Our artists are
                    <strong>masters of their craft</strong> and you will be well
                    taken care of from start to finish.
                  </p>
                  <p>
                    We aim to set a <strong>higher quality</strong> and service
                    standard in this industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </article>
          <div
            className="artside art-r"
            style={{
              opacity: 0,
            }}
          >
            <img src="/gfx/placeholder.png" alt="" />
            <div className="clip ctl"></div>
            <div className="clip cbl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
