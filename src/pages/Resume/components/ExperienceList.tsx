import { ExperienceItem } from "../../../models/types";

interface ExperienceListProps {
    items: ExperienceItem[];
}

const ExperienceList = ({ items }: ExperienceListProps) => (
    <>
        <div className="flex flex-col">
            {items.map((item, itemIndex) => (
                <div key={itemIndex} className="xl:pt-[4rem] w-full flex flex-col xl:flex-row">
                    <p className="italic lg:w-1/3 font-semibold text-[1.5em] pt-[2rem] pb-[1rem] xl:py-[2rem] xl:pl-[6rem]">{item.subtitle}</p>
                    <ul className="flex flex-col justify-center xl:pt-[2.5rem] gap-[1rem] ">
                        {item.list.map((subItem, subItemIndex) => (
                            <li key={subItemIndex} className="text-[1em] lg:text-[1.25em]">
                                <p>
                                    - {subItem.spanBold && <span className="font-bold">{subItem.spanBold} </span>}
                                    {subItem.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </>

);

export default ExperienceList;