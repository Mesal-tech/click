import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        {/* Replaced 'Welcome to Zentry' */}
        <p className="font-general text-sm uppercase md:text-[10px]">
          THE NOISE IS UNIVERSAL
        </p>

        <AnimatedTitle
          title="MEASURING THE WEIGHT OF <br /> <b>WASTED MOTION</b>"
          containerClass="mt-5 !text-black text-center"
        />


        <div className="about-subtext max-w-xl text-center">
          <p>
            YOU’RE NOT INTERACTING, YOU’RE <b>REACTING</b>.
          </p>
          <p className="text-gray-500">
            <b>Click: ECHOES</b> observes the <b>endless, automatic gestures</b> that define our online existence.
            Every scroll, like, and tap is a pulse in the algorithm’s bloodstream.
            We don’t chase engagement. We capture the <b>void between intentions</b>.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.png"
            alt="Abstract representation of overlapping digital noise and patterns."
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
