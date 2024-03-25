import { useState, useEffect } from "react";
import ArticleOne from "./ArticleOne";
import Reveal from "../../../components/Reveal/Reveal";
import Loader from "../../../components/Loader/Loader";
import { Footer } from "../../../imports/index";

const Bio = () => {
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
            <Reveal
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 2 }
                }}
                transition={{ duration: 1, delay: .1 }}
            >
                <section>
                    <ArticleOne />
                    <Footer />
                </section>
            </Reveal>
        </>
    );
};

export default Bio;
