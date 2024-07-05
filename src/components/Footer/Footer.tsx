import { GetInTouchProps } from "../../models/types"
import { DevelopedByButton } from "../../imports";

const Footer: React.FC<GetInTouchProps> = ({ textColor = 'black' }) => {
    return (
        <>
            <footer className="pt-[2rem] relative">
                <div className={`w-full h-0.5 bg-${textColor} overflow-hidden`}></div>
                <div className={`flex flex-col lg:justify-center py-[2rem] px-[2.5rem] lg:pl-[6rem] 
                h-[300px] lg:pb-[6rem] gap-[3rem] lg:w-2/3 xl:w-1/2 leading-snug text-${textColor}`}>
                    <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[8rem] text-[1.125em] md:text-[1.438em]">
                        <div>
                            <p className="text-textGray">Ponerse en contacto</p>
                            <a href="/contacto">evamcaf@gmail.com</a>
                        </div>
                        <div>
                            <p className="text-textGray">Redes sociales</p>
                            <a href="https://www.instagram.com/evamcaf/" target="__blank" rel="noopener noreferrer">Instagram: evamcaf</a>
                        </div>
                    </div>
                </div>
                <DevelopedByButton pageTextColor={textColor} />
            </footer>
        </>
    )
}
export default Footer