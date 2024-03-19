import React, { MouseEventHandler } from 'react';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CustomLeftArrowProps {
    onClick: MouseEventHandler<HTMLElement>;
}

const CustomLeftArrow: React.FC<CustomLeftArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 flex text-[#000] w-[2rem] h-[2rem] bg-[#fff] items-center justify-center rounded-full z-[10000]"
    >
        <FontAwesomeIcon icon={faChevronLeft} />
    </div>
);

export default CustomLeftArrow;