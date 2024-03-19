import React from 'react';
import ProjectFigure from "./ProjectFigure";
import { ProjectArticleProps } from "../../../../models/types";

const ProjectArticleOne: React.FC<ProjectArticleProps> = ({ textColor, paragraphClassname, paragraph1, paragraph2, figure, figcaption, staticImage2 }) =>
(
    <>
        <article className="flex flex-col w-full lg:mt-[3rem] py-[2rem] lg:pt-[8rem] lg:pb-[6rem] gap-[3rem] md:gap-[8rem] ">
            <p className={`${paragraphClassname} text-[${textColor}] px-[2.5rem] lg:px-[6rem]`}>{paragraph1}</p>
            {staticImage2 && (
                <div className="h-[300px] md:h-screen w-full bg-center bg-contain md:bg-cover bg-no-repeat -md:my-[1.75rem] my-[4rem]" style={{ backgroundImage: `url(${staticImage2})` }}></div>
            )}
            <ProjectFigure styles="px-[2.5rem] lg:px-[6rem]" figure={figure} figcaption={figcaption} textColor={textColor} />
            <p className={`${paragraphClassname} text-[${textColor}] px-[2.5rem] lg:px-[6rem]`}>{paragraph2}</p>
        </article>
    </>
);


export default ProjectArticleOne; 