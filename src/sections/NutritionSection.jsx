import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "James Mitchell",
    role: "Tech Startup Founder",
    rating: 5,
    review: "Working with Luohino was an absolute game-changer for our startup. The website they delivered exceeded all expectations - modern, fast, and perfectly captures our brand vision. Highly recommend!",
    avatarUrl: "/luohino/client1.png",
  },
  {
    id: "testimonial-2",
    name: "Sarah Anderson",
    role: "Marketing Director",
    rating: 5,
    review: "Luohino transformed our outdated website into a stunning, conversion-focused platform. Their attention to detail and creative approach resulted in a 40% increase in user engagement. Outstanding work!",
    avatarUrl: "/luohino/client2.png",
  },
  {
    id: "testimonial-3",
    name: "Robert Chen",
    role: "CEO, TechVision Inc",
    rating: 4.5,
    review: "Professional, creative, and incredibly skilled. Luohino delivered our e-commerce platform ahead of schedule with exceptional quality. The animations and user experience are top-notch!",
    avatarUrl: "/luohino/client3.png",
  },
  {
    id: "testimonial-4",
    name: "Emily Rodriguez",
    role: "Startup Co-Founder",
    rating: 5,
    review: "From concept to launch, Luohino made the entire process seamless. They understood our vision perfectly and created a beautiful, responsive website that our users love. Can't recommend enough!",
    avatarUrl: "/luohino/client4.png",
  },
  {
    id: "testimonial-5",
    name: "Michael Thompson",
    role: "Creative Director",
    rating: 5,
    review: "Luohino's design and development skills are exceptional. They created a portfolio website that perfectly showcases our agency's work with smooth animations and a premium feel. Absolutely brilliant!",
    avatarUrl: "/luohino/client5.png",
  },
];

const ReviewStars = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const fractionalPart = rating - filledStars;
  const emptyStars = 5 - filledStars - (fractionalPart > 0 ? 1 : 0);

  return (
    <div className="flex items-center gap-2 text-yellow-600">
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <svg
            key={`filled-${index}`}
            className="size-4 text-inherit"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <svg
            key={`empty-${index}`}
            className="size-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const NutritionSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    // Create stacked card animation with GSAP
    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;

      gsap.set(card, {
        zIndex: cards.length - index,
        y: index * 20,
        rotation: (index - 2) * 2,
      });

      if (!isLastCard) {
        gsap.to(card, {
          y: -window.innerHeight * 1.5,
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${index * 200} top`,
            end: `top+=${(index + 1) * 200} top`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    });
  }, { dependencies: [], scope: sectionRef });

  return (
    <section ref={sectionRef} className="nutrition-section py-20 md:py-32 min-h-[100vh] md:min-h-[160vh]">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col justify-between md:px-10 px-5 mb-16">
          <div className="relative inline-block">
            <div className="general-title relative flex flex-col justify-center items-center gap-3">
              <div className="overflow-hidden place-self-start">
                <h1 className="nutrition-title text-black">What Clients Say</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative h-[450px] w-full max-w-md mx-auto" style={{ perspective: "1000px" }}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-white border-white border-[0.3rem] rounded-2xl p-6 shadow-lg"
              style={{
                backfaceVisibility: "hidden",
                willChange: "transform",
              }}
            >
              <div className="flex flex-col items-center space-y-4 text-center h-full justify-between">
                <ReviewStars rating={testimonial.rating} />
                <div className="flex-1 flex items-center">
                  <blockquote className="text-[#523122] font-paragraph text-base md:text-lg leading-relaxed px-4">
                    "{testimonial.review}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="!size-14 !min-w-14 !min-h-14 border-2 border-[#a26833] flex-shrink-0">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={`Portrait of ${testimonial.name}`}
                      className="object-cover w-full h-full"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
