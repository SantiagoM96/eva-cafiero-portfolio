import { GetInTouchSection } from "../../../imports/index"
import { resumeData } from "../../../data/data"
import { useEffect, useState } from "react"
import ResumeArticle from "./ExperienceSection"
import MasInfo from "./MasInfo"
import Reveal from "../../../components/Reveal/Reveal";
import Loader from "../../../components/Loader/Loader";

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
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
                transition={{ duration: 1, delay: .1 }}>
                <section>
                    <ResumeArticle resumeData={resumeData} />
                    <MasInfo />
                    <GetInTouchSection />
                </section>
            </Reveal>
        </>

    )
}
export default Resume