import HomeCarousel from "./HomeCarousel"

const Home = () => (
    <>
        <section className="flex items-center h-screen w-full absolute top-0 bg-[#000]">
            <h1 className="lg:hover:font-magicalGameFont lg:hover:text-[10em] px-[2.5rem] mt-[5rem] lg:px-[6rem] absolute z-30 text-[2.5em] min-[320px]:text-[3em] md:text-[6em] lg:text-[8em] text-[#fff] leading-[2rem] min-[320px]:leading-[2.5rem] md:leading-[4rem] lg:leading-[5rem]">
                eva <br />
                <span className="lg:ml-[6rem] ml-[3rem]">m. cafiero</span>
            </h1>
            <HomeCarousel />
        </section >
    </>
)


export default Home