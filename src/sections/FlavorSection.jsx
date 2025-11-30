import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section id="flavor" className="flavor-section min-h-screen">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none lg:h-full md:mt-20 xl:mt-0 md:mb-10">
          <FlavorTitle />
        </div>
        <div className="lg:h-full w-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
