import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".vd-pin-section",
            start: "-15% top",
            end: "200% top",
            scrub: 1.5,
            pin: true,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });

        tl.to(".video-box", {
          clipPath: "circle(100% at 50% 50%)",
          ease: "power1.inOut",
        });

        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video src="/luohino/videos/pin-video.mp4" playsInline muted loop autoPlay />

        <div className="abs-center md:scale-100 scale-200">
          <img src="/luohino/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img
              src="/luohino/images/play.svg"
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
