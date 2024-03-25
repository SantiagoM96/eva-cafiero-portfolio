import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { SliderImages } from '../../../../models/types';
import CustomLeftArrow from './CustomLeftArrow';
import CustomRightArrow from './CustomRightArrow';
import { MouseEventHandler } from 'react';

const ProjectSlider = ({ sliderImages }: { sliderImages: SliderImages[] }) => {

    const renderLeftNav = (onClick: MouseEventHandler<HTMLElement>, disabled: boolean) => {
        if (disabled) {
            return null;
        }
        return <CustomLeftArrow onClick={onClick} />;
    };

    const renderRightNav = (onClick: MouseEventHandler<HTMLElement>, disabled: boolean) => {
        if (disabled) {
            return null;
        }
        return <CustomRightArrow onClick={onClick} />;
    };

    const galleryImages = sliderImages.map((image) => ({
        original: image.original,
        originalAlt: image.originalAltText,
    }));

    return (
        <>
            <div className='flex justify-center items-center h-[300px] md:min-h-screen w-full customCursor relative mb-[2rem]'>
                <ImageGallery
                    items={galleryImages}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    showNav={true}
                    showBullets={true}
                    autoPlay={true}
                    slideInterval={7000}
                    slideDuration={1000}
                    renderLeftNav={(onClick, disabled) => renderLeftNav(onClick, disabled)}
                    renderRightNav={(onClick, disabled) => renderRightNav(onClick, disabled)}
                    lazyLoad
                />
            </div>
        </>
    );
};

export default ProjectSlider;
