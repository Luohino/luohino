import { useRef, useEffect } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Pause all videos when section is not in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            vdRef.current.forEach((video) => {
              if (video) video.pause();
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top bottom",
          end: "200% top",
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      tl.to(".testimonials-section .first-title", {
        xPercent: 70,
      })
        .to(
          ".testimonials-section .sec-title",
          {
            xPercent: 25,
          },
          "<"
        );

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      pinTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">Follow</h1>
        <h1 className="text-light-brown sec-title">Me on</h1>

      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
          >
            <img
              src={card.img}
              alt={card.name}
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
