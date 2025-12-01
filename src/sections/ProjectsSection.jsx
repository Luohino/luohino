import ProjectsTitle from "../components/ProjectsTitle";
import ProjectsSlider from "../components/ProjectsSlider";

const ProjectsSection = () => {
    return (
        <section id="projects" className="projects-section min-h-screen">
            <div className="h-full flex lg:flex-row flex-col items-center relative">
                <div className="lg:w-[57%] flex-none lg:h-full md:mt-20 xl:mt-0 md:mb-10">
                    <ProjectsTitle />
                </div>
                <div className="lg:h-full w-full">
                    <ProjectsSlider />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
