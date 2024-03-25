import { useState, useEffect } from "react"
import ContactForm from "./ContactForm";
import { DevelopedByButton } from "../../../imports";
import Reveal from "../../../components/Reveal/Reveal";
import Loader from "../../../components/Loader/Loader";

const Contact = () => {
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
                transition={{ duration: 1, delay: .1 }}
            >
                <section className="flex flex-col items-center justify-center h-[80vh] px-[2.5rem] lg:px-[6rem]">
                    <div className="w-full h-full bg-[#EEEEEE] hidden lg:flex oval-form lg:relative"></div>
                    <ContactForm />
                    <DevelopedByButton />
                </section>
            </Reveal>
        </>

    );
}

export default Contact