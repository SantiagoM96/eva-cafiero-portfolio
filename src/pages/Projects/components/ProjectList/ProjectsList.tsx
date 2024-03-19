import ProjectItem from "./ProjectItem";
import { ProjectI } from "../../../../models/types";

interface ProjectsListProps {
    projects: ProjectI[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => (
    <>
        <article className="p-[2.5rem] lg:p-[6rem] gap-[2rem] xl:gap-0 flex flex-col items-center justify-center">
            {
                projects.map((project, i) =>
                    <ProjectItem key={i} project={project} />
                )
            }
        </article>
    </>
);

export default ProjectsList;
