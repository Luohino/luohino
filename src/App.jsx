import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import ProjectSection from "./sections/ProjectSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const HomePage = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  // Fix for first-time load: refresh ScrollTrigger after all content loads
  useEffect(() => {
    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshScrollTrigger);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('load', refreshScrollTrigger);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <ProjectSection />
          <NutritionSection />

          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/luohino/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
