import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const ProjectsSlider = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-section",
          start: "2% top",
          end: isTablet ? "+=3000" : "+=5000",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          refreshPriority: 1, // Ensure this calculates last
        },
      });

      tl.to(".projects-section", {
        x: "-150vw",
        ease: "none",
        force3D: true,
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top top",
          end: "bottom 80%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "none",
          force3D: true,
        })
        .to(
          ".projects-text-scroll",
          {
            xPercent: -22,
            ease: "none",
            force3D: true,
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "none",
            force3D: true,
          },
          "<"
        );

      // Force refresh to ensure pinning works correctly on load
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 ${flavor.isSpecial ? "lg:w-[50vw] w-[90vw] lg:h-[85vh] md:w-[80vw] md:h-[65vh] h-[450px]" : "lg:w-[50vw] w-[90vw] lg:h-[70vh] md:w-[80vw] md:h-[50vh] h-[400px]"} flex-none ${flavor.rotation} flex items-center justify-center`}
          >
            {!flavor.isSpecial && (
              <img
                src={`/luohino/images/${flavor.color}-bg.svg`}
                alt=""
                className="absolute bottom-0 w-full h-auto"
                loading="eager"
              />
            )}

            <img
              src={
                flavor.isSpecial
                  ? flavor.name === "TalkTwirl"
                    ? "/luohino/images/Talktwirl.svg"
                    : flavor.name === "Pinsry"
                      ? "/luohino/images/Pinsry.svg"
                      : "/luohino/images/iphone15pro.png"
                  : `/luohino/images/${flavor.color}-drink.webp`
              }
              alt={flavor.name}
              className={`${flavor.isSpecial ? (flavor.name === "iPhone 15 Pro" ? "max-w-full max-h-full object-contain border border-white" : "w-full h-full object-contain") : "drinks object-contain"}`}
              loading="eager"
            />

            {!flavor.isSpecial && (
              <img
                src={`/luohino/images/${flavor.color}-elements.svg`}
                alt=""
                className="elements w-full h-auto"
                loading="eager"
              />
            )}

            {!flavor.isSpecial && <h1>{flavor.name}</h1>}

            <button
              onClick={(e) => {
                const btn = e.currentTarget;
                const originalText = btn.innerText;
                btn.innerText = "Coming Soon";
                setTimeout(() => {
                  btn.innerText = originalText;
                }, 2000);
              }}
              className="absolute bottom-5 right-5 bg-white text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-opacity-90 transition-all min-w-[120px]"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlider;
