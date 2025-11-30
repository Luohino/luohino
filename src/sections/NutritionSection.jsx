import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import {
  ContainerScroll,
  CardsContainer,
  CardTransformed,
  ReviewStars,
} from "../components/ui/animated-cards-stack";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "James Mitchell",
    role: "Tech Startup Founder",
    rating: 5,
    review: "Working with Luohino was an absolute game-changer for our startup. The website they delivered exceeded all expectations - modern, fast, and perfectly captures our brand vision. Highly recommend!",
    avatarUrl: "/client1.png",
  },
  {
    id: "testimonial-2",
    name: "Sarah Anderson",
    role: "Marketing Director",
    rating: 5,
    review: "Luohino transformed our outdated website into a stunning, conversion-focused platform. Their attention to detail and creative approach resulted in a 40% increase in user engagement. Outstanding work!",
    avatarUrl: "/client2.png",
  },
  {
    id: "testimonial-3",
    name: "Robert Chen",
    role: "CEO, TechVision Inc",
    rating: 4.5,
    review: "Professional, creative, and incredibly skilled. Luohino delivered our e-commerce platform ahead of schedule with exceptional quality. The animations and user experience are top-notch!",
    avatarUrl: "/client3.png",
  },
  {
    id: "testimonial-4",
    name: "Emily Rodriguez",
    role: "Startup Co-Founder",
    rating: 5,
    review: "From concept to launch, Luohino made the entire process seamless. They understood our vision perfectly and created a beautiful, responsive website that our users love. Can't recommend enough!",
    avatarUrl: "/client4.png",
  },
  {
    id: "testimonial-5",
    name: "Michael Thompson",
    role: "Creative Director",
    rating: 5,
    review: "Luohino's design and development skills are exceptional. They created a portfolio website that perfectly showcases our agency's work with smooth animations and a premium feel. Absolutely brilliant!",
    avatarUrl: "/client5.png",
  },
];

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [lists, setLists] = useState(nutrientLists);

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  return (
    <section className="nutrition-section" data-speed="1">
      {/* Client Testimonials - Animated Cards Stack */}
      <ContainerScroll className="h-[140vh]" data-speed="1">
        <div className="sticky left-0 top-0 h-screen w-full flex flex-col">
          {/* Header at top */}
          <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 pt-10">
            <div className="relative inline-block">
              <div className="general-title relative flex flex-col justify-center items-center gap-3">
                <div className="overflow-hidden place-self-start">
                  <h1 className="nutrition-title text-black">What Clients Say</h1>
                </div>
                <div
                  style={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                  }}
                  className="nutrition-text-scroll place-self-start"
                >
                  <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                    <h2 className="text-milk-yellow">Testimonials</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards centered */}
          <div className="flex-1 flex items-center justify-center">
            <CardsContainer className="h-[450px] w-[90%] max-w-md md:max-w-lg">
              {TESTIMONIALS.map((testimonial, index) => (
                <CardTransformed
                  key={testimonial.id}
                  arrayLength={TESTIMONIALS.length}
                  index={index + 1}
                  variant="light"
                  className="bg-white border-white border-[0.3rem] backdrop-blur-md shadow-lg"
                >
                  <div className="flex flex-col items-center space-y-4 text-center h-full justify-between">
                    <ReviewStars
                      className="text-yellow-600"
                      rating={testimonial.rating}
                    />
                    <div className="flex-1 flex items-center">
                      <blockquote className="text-[#523122] font-paragraph text-base md:text-lg leading-relaxed px-4">
                        "{testimonial.review}"
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="!size-14 border-2 border-[#a26833]">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={`Portrait of ${testimonial.name}`}
                        />
                        <AvatarFallback className="bg-[#a26833] text-white font-bold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-[#523122] text-lg font-bold tracking-tight">
                          {testimonial.name}
                        </p>
                        <p className="text-[#865720] text-sm font-paragraph">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default NutritionSection;
