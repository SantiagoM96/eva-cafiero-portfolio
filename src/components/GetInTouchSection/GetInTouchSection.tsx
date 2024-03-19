import { TextColor } from "../../models/types"

interface GetInTouchProps {
    textColor?: TextColor
}

const GetInTouchSection: React.FC<GetInTouchProps> = ({ textColor = '#000' }) => (
    <>
        <article className="py-[2rem]">
            <div className={`w-full h-0.5 bg-[${textColor}] overflow-hidden`}></div>
            <div className={`flex flex-col justify-center py-[4rem] px-[2.5rem] lg:pl-[6rem] lg:pb-[10rem] gap-[3rem] lg:w-2/3 xl:w-1/2 leading-snug text-[${textColor}]`}>
                <div className="flex flex-col lg:flex-row gap-[2rem] justify-between text-[1.125em] md:text-[1.438em]">
                    <div>
                        <p className='text-textGray'>Ponerse en contacto</p>
                        <a href="/contacto">evamcaf@gmail.com</a>
                    </div>
                    <div>
                        <p className='text-textGray'>Redes sociales</p>
                        <a href='https://www.instagram.com/evamcaf/' target="__blank" rel="noopener noreferrer">Instagram: evamcaf</a>
                    </div>
                </div>
            </div>
        </article>
    </>

)


export default GetInTouchSection