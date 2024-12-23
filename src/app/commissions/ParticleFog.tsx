"use client";
import React, { useEffect, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
type Props = {};

import { loadSlim } from "@tsparticles/slim";

const opt = {
  background: {
    color: {
      value: "#0d47a1",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
function ParticleFog({}: Props) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="particle-fog">
      {init && (
        <Particles
          id="particle-part"
          options={{
            // background: {
            //   color: {
            //     value: "#0d47a1",
            //   },
            // },
            fpsLimit: 120,

            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  speed: 0.1,
                  distance: 250,
                },
              },
            },
            particles: {
              color: {
                value: "#ff4545",
              },
              life: {
                duration: {
                  value: 25,
                },
              },
              move: {
                direction: "left",
                enable: true,
                gravity: {
                  enable: true,
                  maxSpeed: 0,

                  acceleration: 0.001,
                },
                speed: 2,
                random: false,
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },

                // random: true,
              },
              number: {
                value: 500,
                density: {
                  enable: true,
                  height: 300,
                },
              },
              opacity: {
                value: {
                  max: 0.5,
                  min: 0.2,
                },
                animation: {
                  startValue: "min",
                  enable: true,
                  mode: "increase",
                  speed: 2,
                },
                // value: 1,
              },
              shape: {
                type: "image",
                options: {
                  image: [
                    {
                      src: "/de/fogs1.png",
                      width: 500,
                      height: 300,
                    },
                    {
                      src: "/de/fogs2.png",
                      width: 200,
                      height: 300,
                    },
                    {
                      src: "/de/fogs3.png",
                      width: 500,
                      height: 600,
                    },
                  ],
                },
              },
              size: {
                value: { min: 80, max: 100 },
                animation: {
                  enable: true,
                  startValue: "min",
                  count: 1,
                },
              },
            },
            style: {
              backdropFilter: "invert(50%)",
              position: "absolute",
              left: "0%",
              width: "100vw",
              height: "450px",
              bottom: "0px",
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}

export default React.memo(ParticleFog);
