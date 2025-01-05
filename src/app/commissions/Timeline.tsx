"use client";
import React from "react";
import { animateStagger, useIV } from "../util/useIV";
import { stagger } from "motion";
import { PortableText } from "next-sanity";

type Props = { t: any };

export default function Timeline({ t }: Props) {
  const [scope, animate] = useIV(async () => {
    await animate(
      ".cloud.l",
      {
        x: -200,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    animateStagger(animate, stagger, 1, 0.5);

    await animate(
      ".cloud.r",
      {
        x: 200,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    animate(
      ".cloud.l",
      {
        x: 0,
        opacity: 1,
      },
      {
        duration: 1,
      }
    );
    animate(
      ".cloud.r",
      {
        x: 0,
        opacity: 1,
      },
      {
        duration: 1,
      }
    );
  });
  return (
    <section id="timeline" ref={scope}>
      <div id="timeline-heading">
        <img src="/de/header-cloud.png" alt="" className="cloud l" />
        <img src="/de/header-cloud.png" alt="" className="cloud r" />
        <div className="confine">
          <figure className="">
            <img src="/de/blue-splat1.png" alt="" className="splat " />
            <img src="/gfx/hero_art-l.png" alt="" className=" stagger" />
            <div className="clip cbr"></div>
            <div className="clip cbl"></div>
            <div className="clip ctl"></div>
            <div className="clip ctr"></div>
          </figure>

          <article>
            <img src="/de/white-moon.png" alt="" className="de-moon stagger" />
            <p className="sh stagger">{t.sh}</p>
            <h2 className="h stagger">{t.h}</h2>
            <div className="p stagger">
              <PortableText value={t.p} />
            </div>
          </article>
        </div>
      </div>
      <StepsTimeline tm={t.steps} />
    </section>
  );
}

function StepsTimeline({ tm }: { tm: any[] }) {
  return (
    <div id="steps-timeline">
      {tm &&
        tm.map((tms) => {
          return <StepEl t={tms.title} st={tms.si} key={tms._key} />;
        })}
      {/* <StepEl /> */}
      {/* <StepEl /> */}
    </div>
  );
}

function StepEl({ t, st }: { t: string; st: any[] }) {
  const [scope, animated] = useIV(async () => {
    await animated(
      scope.current,
      {
        x: 500,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    await animated(
      ".branch",
      {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    await animated(
      ".title",
      {
        x: -400,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    await animated(
      ".border",
      {
        scale: 2,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );

    await animated(
      ".details .detail",
      {
        x: 400,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );
    animated(
      ".details .detail",
      {
        x: 0,
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.7, {
          startDelay: 2,
        }),
      }
    );
    animated(
      ".border",
      {
        scale: 1,
        opacity: 1,
      },
      {
        duration: 1,
        delay: 2,
      }
    );

    animated(
      ".title",
      {
        x: 0,
        opacity: 1,
      },
      {
        duration: 1.1,
        ease: "easeInOut",
        delay: 1,
      }
    );
    animated(
      ".branch",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
      },
      {
        duration: 1.2,
      }
    );
    animated(
      scope.current,
      {
        x: 0,
        opacity: 1,
      },
      {
        duration: 2,
      }
    );
  });
  return (
    <div className="step" ref={scope}>
      <img src="/de/blue-branch.png" alt="" className="branch" />
      <div className="confine">
        <div className="title">
          <h2 className="h">{t}</h2>
        </div>
        <div className="details">
          <div className="border"></div>
          {st &&
            st.map((step: any) => {
              return (
                <div className="detail" key={step._key}>
                  <h3 className="h">{step.title}</h3>
                  <div className="p">
                    <PortableText value={step.p} />
                  </div>
                </div>
              );
            })}
          {/* <div className="detail">
            <h3 className="h">Project Updates</h3>
            <p className="p">
              Live2D and Graphics services include a streaming license with the
              final product. Please see our Terms of Service for full details. 
            </p>
          </div>
          <div className="detail">
            <h3 className="h">Project Updates</h3>
            <p className="p">
              Live2D and Graphics services include a streaming license with the
              final product. Please see our Terms of Service for full details. 
            </p>
          </div>
          <div className="detail">
            <h3 className="h">Project Updates</h3>
            <p className="p">
              Live2D and Graphics services include a streaming license with the
              final product. Please see our Terms of Service for full details. 
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
