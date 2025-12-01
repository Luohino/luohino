import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
        invalidateOnRefresh: true,
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
        invalidateOnRefresh: true,
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });

    // Cleanup function to revert all SplitText instances
    return () => {
      firstMsgSplit.revert();
      secMsgSplit.revert();
      paragraphSplit.revert();
    };
  });

  return (
    <section id="message" className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">App developer</h1>
            <h1 className="first-message">Flutter developer</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-white md:pb-3 pb-1 md:px-8 px-3">
                <h2 className="text-black md:text-6xl text-2xl font-bold">Full stack</h2>
              </div>
            </div>

            <h1 className="second-message">Web developer</h1>
            <h1 className="second-message">Reverse engineer</h1>
            <h1 className="second-message">Software engineer</h1>
            <h1 className="second-message">AI&ML engineer</h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Hey there! I'm Luohino (or Aniket if you prefer), a 15-year-old developer from Bihar, India. I'm not just a coder - I'm a digital creator, problem solver, and tech enthusiast who loves turning ideas into reality through code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
