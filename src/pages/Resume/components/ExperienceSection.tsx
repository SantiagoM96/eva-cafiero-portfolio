import { ResumeData } from "../../../models/types";
import ExperienceList from "./ExperienceList";

const ResumeArticle = ({ resumeData }: { resumeData: ResumeData }) => (
    <>
        <article className="flex flex-col min-h-screen w-full p-[2.5rem] gap-[4rem] lg:p-[6rem]">
            {resumeData.map((section, index) => (
                <div key={index} className="flex flex-col w-full">
                    <h4 className="text-[2em] lg:text-[2.5em] font-bold uppercase">{section.title}</h4>
                    <ExperienceList items={section.items} />
                </div>
            ))}
        </article>
    </>
);
export default ResumeArticle;
