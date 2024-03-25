import React, { MouseEventHandler } from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CustomRightArrowProps {
    onClick: MouseEventHandler<HTMLElement>;
}

const CustomRightArrow: React.FC<CustomRightArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute top-1/2 right-2 lg:hover:scale-125 transition-transform duration-300 ease-in-out transform -translate-y-1/2 flex text-[#000] w-[2rem] h-[2rem]
         bg-[#fff] items-center justify-center rounded-full z-[10000]"
    >
        <FontAwesomeIcon icon={faChevronRight} />
    </div>
);

export default CustomRightArrow;