import { LandingAccordionItem } from "../components/ui/interactive-image-accordion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProjectDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">LUOHINO</h1>
                    <button
                        onClick={() => navigate("/")}
                        className="text-sm font-medium hover:underline"
                    >
                        ← Back to Home
                    </button>
                </div>
            </header>

            <LandingAccordionItem />
        </div>
    );
};

export default ProjectDetails;
