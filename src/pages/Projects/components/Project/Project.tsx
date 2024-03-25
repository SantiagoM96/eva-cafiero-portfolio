import { Footer, Loader, Reveal } from "../../../../imports/index"
import { projects } from "../../../../data/data"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ProjectCarousel from "../ProjectSlider/ProjectSlider"
import ProjectHead from "./ProjectHead"
import ProjectArticleOne from "./ProjectArticleOne"
import ProjectArticleTwo from "./ProjectArticleTwo"
import styles from "../../../../styles";

const Project = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const { id } = useParams<{ id: string }>();
    const selectedProject = projects.find((project) => project.id === id);

    if (!selectedProject || isLoading) {
        return <Loader />;
    }

    const classParagraph: string = selectedProject.id === '1' ? styles.paragraphStyles : styles.paragraphCompressStyles;

    const isVideoFile = (url: string) => {
        return url.toLowerCase().endsWith(".mp4");
    };

    const isVideo: boolean = isVideoFile(selectedProject.data.coverImage);

    return (
        <>
            <Reveal variants={{ hidden: { opacity: 0 }, visible: { opacity: 2 } }} transition={{ duration: 1, delay: .1 }}>

                <section className={`min-h-screen w-full ${selectedProject.textColor === '#fff' ? 'bg-[#000]' : 'bg-[#fff]'} pt-[90vh] md:pt-[100vh] flex flex-col justify-center`}>

                    {isVideo ? (
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className='w-full h-full bg-[#000] opacity-5 absolute top-0 left-0 z-40'></div>
                            <video className="relative object-cover h-full w-full" autoPlay muted loop>
                                <source src={selectedProject.data.coverImage} type="video/mp4" />
                            </video>
                        </div>
                    ) : (
                        <div className="absolute top-0 left-0 h-screen w-full"
                            style={{
                                background: `url("${selectedProject.data.coverImage}") 
                center ${selectedProject.id === '2' ? 'center' : 'top -3rem'} / cover no-repeat`,
                            }}>
                            <div className='w-full h-full bg-[#000] opacity-5 absolute top-0 left-0 z-40'></div>
                        </div>
                    )}

                    <ProjectHead
                        title={selectedProject.title}
                        location={selectedProject.location}
                        year={selectedProject.year}
                        textColor={selectedProject.textColor}
                    />

                    <ProjectArticleOne
                        textColor={selectedProject.textColor}
                        paragraphClassname={classParagraph}
                        paragraph1={selectedProject.data.paragraph1}
                        paragraph2={selectedProject.data.paragraph2}
                        figure={selectedProject.data.figure1} figcaption={selectedProject.data.figcaption1}
                        staticImage2={selectedProject.data.staticImage2} />

                    <div className={`h-[300px] md:h-screen w-full bg-center bg-contain md:bg-cover bg-no-repeat max-md:my-[1.75rem] my-[4rem]`}
                        style={{ backgroundImage: `url(${selectedProject.data.staticImage})` }}></div>

                    <ProjectArticleTwo
                        textColor={selectedProject.textColor}
                        paragraphClassname={classParagraph}
                        figure={selectedProject.data.figure2}
                        figcaption={selectedProject.data.figcaption2}
                        paragraph1={selectedProject.data.paragraph3}
                        paragraph2={selectedProject.data.paragraph4}
                    />

                    <ProjectCarousel sliderImages={selectedProject.data.sliderImages} />

                    <Footer textColor={selectedProject.textColor} />
                </section >
            </Reveal>
        </>

    )
}


export default Project