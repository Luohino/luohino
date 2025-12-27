import ProjectTitle from "../components/ProjectTitle";
import ProjectSlider from "../components/ProjectSlider";

const ProjectSection = () => {
  return (
    <section id="project" className="project-section min-h-screen">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none lg:h-full md:mt-20 xl:mt-0 md:mb-10">
          <ProjectTitle />
        </div>
        <div className="lg:h-full w-full">
          <ProjectSlider />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
