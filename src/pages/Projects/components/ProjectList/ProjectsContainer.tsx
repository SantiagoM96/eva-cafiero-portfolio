import { useState, useEffect } from "react"
import { projects } from "../../../../data/data";
import { GetInTouchSection } from "../../../../imports/index"
import ProjectsList from "./ProjectsList";
import Reveal from "../../../../components/Reveal/Reveal";
import Loader from "../../../../components/Loader/Loader";

const ProjectsContainer = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <>
            <Reveal variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 2 }
            }}
                transition={{ duration: 1, delay: .1 }}
            >
                <section>
                    {projects && <ProjectsList projects={projects} />}
                    <GetInTouchSection />
                </section>
            </Reveal>
        </>
    )
}

export default ProjectsContainer