import { homeImages } from '../../../data/data';
import { useState, useEffect } from 'react';

export const HomeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const nextSlide = () => {
            const isLastSlide: boolean = currentIndex === homeImages.length - 1;
            const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        };

        const intervalId = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]);

    return (
        <>
            <div className='w-full h-screen relative group overflow-hidden'>
                {homeImages.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url("${image.original}")`,
                        }}
                        className={`w-full h-screen bg-center bg-cover absolute top-0 left-0 z-20 ease-in-out transition-all duration-[2500ms] ${index === currentIndex ? 'opacity-1' : 'opacity-0'}`}
                    ></div>
                ))
                }
                <div className='w-full h-screen bg-black opacity-20 absolute top-0 left-0 z-20'></div>
            </div >
        </>
    )
}

export default HomeCarousel
