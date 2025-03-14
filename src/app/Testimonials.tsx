"use client";
import { motion, animate, useMotionValue } from "motion/react";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { useIV } from "./util/useIV";
import { stagger } from "motion";
import { PortableText } from "next-sanity";
import { urlFor } from "./db/sanity";
type Props = { ts: any };

export default function Testimonials({ ts }: Props) {
  // Measure of the slider
  const [sliderRef, measure] = useMeasure();

  // Value to animate
  const yPos = useMotionValue(0);

  useEffect(() => {
    const margin = 0;

    // 1/3 of the item size, set to (-) negative to move to the opposite direction
    const finalPos = -measure.height / 3 + margin;

    const itemAmount = 8;
    // Move the yPos from 0 (not moving) to 1/3 (final position)
    let controls = animate(yPos, [100, finalPos], {
      duration: itemAmount * 3, // Change the speed based on the amount of item
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [yPos, measure]);

  const [scope, uAnimate] = useIV(async () => {
    await uAnimate(
      ".de-cloud.l",
      {
        x: -300,
      },
      {
        duration: 0,
      }
    );
    await uAnimate(
      ".de-cloud.r",
      {
        x: 300,
      },
      {
        duration: 0,
      }
    );

    await uAnimate(
      ".stagger",
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        duration: 0,
      }
    );
    await uAnimate(
      ".testimonial",
      {
        x: 500,
        opacity: 0,
      },
      {
        duration: 0,
      }
    );

    uAnimate(
      ".stagger",
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        duration: 1,
        ease: "easeInOut",
        delay: stagger(0.5),
      }
    );
    uAnimate(
      ".testimonial",
      {
        x: 0,
        opacity: 1,
      },
      {
        duration: 1,
        ease: "easeInOut",
        delay: stagger(1),
      }
    );
    uAnimate(
      ".de-cloud.l",
      {
        x: 0,
      },
      {
        duration: 1.1,
      }
    );
    uAnimate(
      ".de-cloud.r",
      {
        x: 0,
      },
      {
        duration: 1.1,
      }
    );
  });
  return (
    <section id="testimonials" ref={scope}>
      <div className="confine">
        <img src="/de/header-cloud.png" alt="" className="de-cloud l" />
        <img src="/de/header-cloud.png" alt="" className="de-cloud r" />
        <div className="tlist">
          <motion.div style={{ y: yPos }} className="slider" ref={sliderRef}>
            {ts.tlist &&
              ts.tlist.map((t: any) => {
                return (
                  <div className="testimonial" key={t._key}>
                    <div className="clip cbl"></div>
                    <div className="clip cbr"></div>
                    <div className="details">
                      <div className="text">
                        <svg
                          width="37"
                          height="27"
                          viewBox="0 0 37 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="quote"
                        >
                          <path
                            d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                            fill="white"
                          />
                        </svg>

                        <div className="word">
                          <PortableText value={t.testimony} />
                        </div>
                      </div>
                      <div className="infos">
                        <div className="sh">{t.name}</div>
                        <p className="title">{t.title}</p>
                      </div>
                    </div>

                    <div className="pfp ">
                      <img
                        src={urlFor(t.pfp)?.auto("format").url()}
                        alt=""
                        className=""
                      />
                    </div>

                    <img
                      src="/de/testi-flower.png"
                      alt=""
                      className="de-flower"
                    />
                    <img
                      src="/de/featuredartist-splat.png"
                      alt=""
                      className="de-splat"
                    />
                  </div>
                );
              })}
            {/* <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>

              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>

              <img src="/de/testi-flower.png" alt="" className="de-flower" />
              <img
                src="/de/featuredartist-splat.png"
                alt=""
                className="de-splat"
              />
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>

              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>

              <img src="/de/testi-flower.png" alt="" className="de-flower" />
              <img
                src="/de/featuredartist-splat.png"
                alt=""
                className="de-splat"
              />
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>

              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>

              <img src="/de/testi-flower.png" alt="" className="de-flower" />
              <img
                src="/de/featuredartist-splat.png"
                alt=""
                className="de-splat"
              />
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>

              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>

              <img src="/de/testi-flower.png" alt="" className="de-flower" />
              <img
                src="/de/featuredartist-splat.png"
                alt=""
                className="de-splat"
              />
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>

              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>

              <img src="/de/testi-flower.png" alt="" className="de-flower" />
              <img
                src="/de/featuredartist-splat.png"
                alt=""
                className="de-splat"
              />
            </div> */}
            {/* <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div>
            <div className="testimonial">
              <div className="clip cbl"></div>
              <div className="clip cbr"></div>
              <div className="details">
                <div className="text">
                  <svg
                    width="37"
                    height="27"
                    viewBox="0 0 37 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote"
                  >
                    <path
                      d="M36.6562 0.46875C36.0938 3.25 35.5469 6.14062 35.0156 9.14062C34.5156 12.1406 34.0781 15.1094 33.7031 18.0469C33.3281 20.9844 33.0625 23.7656 32.9062 26.3906H20.4375L19.8281 25.3125C20.3906 22.0938 21 19.0469 21.6562 16.1719C22.3438 13.2656 23.0781 10.5 23.8594 7.875C24.6719 5.25 25.5469 2.78125 26.4844 0.46875H36.6562ZM17.0625 0.46875C16.4688 3.125 15.9062 6.01562 15.375 9.14062C14.875 12.2656 14.4375 15.3437 14.0625 18.375C13.6875 21.375 13.4062 24.0469 13.2188 26.3906H0.75L0.1875 25.3125C0.71875 22.0938 1.3125 19.0469 1.96875 16.1719C2.65625 13.2656 3.40625 10.5 4.21875 7.875C5.0625 5.25 5.95312 2.78125 6.89062 0.46875H17.0625Z"
                      fill="white"
                    />
                  </svg>

                  <p className="word">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="infos">
                  <div className="sh">PERSON NAME</div>
                  <p className="title">TITLE OF THE PERSON</p>
                </div>
              </div>
              <div className="pfp ">
                <img src="/gfx/placeholder.png" alt="" className="" />
              </div>
            </div> */}
          </motion.div>
        </div>
        <article>
          <div className="text-part">
            <img src="/de/white-moon.png" alt="" className="de-moon stagger" />
            <p className="sh stagger">{ts.sh}</p>
            <h2 className="h stagger">{ts.h}</h2>
            <div className="p stagger">
              <PortableText value={ts.p} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
