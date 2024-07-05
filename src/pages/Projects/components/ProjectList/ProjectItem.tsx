import { Link } from "react-router-dom";
import { ProjectI } from "../../../../models/types";

const ProjectItem: React.FC<{ project: ProjectI }> = ({ project }) => (
    <>
        <figure className="flex flex-col-reverse xl:flex-row justify-center w-full gap-[1rem]">
            <figcaption className="xl:w-1/3 flex flex-col gap-[0.125rem] md:gap-[1rem] xl:pr-2">
                <h4 className="xl:mt-6 text-[1.25em] md:text-[1.5em] lg:text-[2.5em] font-semibold leading-[1.5rem] lg:leading-[3rem]">
                    {project.title}
                </h4>
                <span className="text-textGray text-[0.875em] md:text-[1.25em]">
                    {project.location} / {project.year}
                </span>
                <Link to={`${project.id}`}>
                    <button className="bg-black text-white w-[70px] h-[25px] text-[0.625em] sm:text-[1em] sm:w-[120px] sm:h-[40px] rounded-[5px] mt-2 lg:m-0">Ver +</button>
                </Link>
            </figcaption>
            <div className="xl:w-2/3 flex items-center justify-end">
                <img
                    src={`${project.listImage}`}
                    alt={`Imagen principal del proyecto: ${project.title}`}
                    className="w-[100%] h-[100%] object-cover max-h-[500px]"
                />
            </div>
        </figure>
    </>
)

export default ProjectItem