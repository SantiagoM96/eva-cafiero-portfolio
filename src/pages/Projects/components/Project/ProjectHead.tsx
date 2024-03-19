import styles from "../../../../styles"
import { ProjectHeadProps } from "../../../../models/types";

const ProjectHead: React.FC<ProjectHeadProps> = ({ title, location, year, textColor }) =>
(
    <>
        <article className="absolute z-[1000] px-[2.5rem] w-3/4 mobileLandscape:bottom-[20px] lg:p-0 bottom-[10%] lg:-bottom-[245px] lg:left-[6rem]">
            <h1 className={`${styles.titleStyles} text-[${textColor}] `}>
                {title}</h1>
            <div className={`flex flex-col lg:flex-row gap-[2rem] mobileLandscape:gap-[.5rem] 
            lg:gap-[10rem] text-[1.25em] mobileLandscape:text-[1.063em] md:text-[1.875em] 
            xl:text-[2em] text-[${textColor}] lg:w-4/5 py-[4rem] mobileLandscape:pt-3 mobileLandscape:pb-0`}>
                <div className="flex flex-col-reverse justify-center">
                    <p>{location}</p>
                    <span className="text-textGray font-medium">Lugar</span>
                </div>
                <div className="flex flex-col-reverse justify-center">
                    <p>{year}</p>
                    <span className="text-textGray font-medium">Año</span>
                </div>
            </div>
        </article>
    </>

)


export default ProjectHead