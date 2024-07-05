import ProjectFigure from "./ProjectFigure"
import { ProjectArticleProps } from "../../../../models/types";

const ProjectArticleTwo: React.FC<ProjectArticleProps> = ({ figure, figcaption, textColor, paragraphClassname, paragraph1, paragraph2 }) =>  (
        <>
            <article className="flex flex-col px-[2.5rem] py-[2rem] lg:py-[6rem] lg:px-[6rem] gap-[3rem] md:gap-[8rem]">
                <ProjectFigure
                    figure={figure}
                    figcaption={figcaption}
                    textColor={textColor} />
                <div>
                    <p className={`${paragraphClassname} text-${textColor} mb-5`}>{paragraph1}</p>
                    <p className={`${paragraphClassname} text-${textColor}`}>{paragraph2}</p>
                </div>
            </article>
        </>

    )

export default ProjectArticleTwo