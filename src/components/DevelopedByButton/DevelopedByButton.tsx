import { TextColor } from "../../models/types"
import { Link } from "react-router-dom"

const DevelopedByButton = ({ pageTextColor = 'black' }: { pageTextColor?: TextColor }) => {
    const color: string = pageTextColor === 'black' ? 'text-black' : 'text-white';
    return (
        <>
            <div className="absolute customCursor right-1/2 transform translate-x-1/2 lg:translate-x-0 bottom-6 lg:bottom-14 lg:right-24 w-auto z-50">
                <Link
                    to="mailto:sanm96projects@gmail.com?subject=Consulta%20desde%20el%20portfolio%20de%20eva%20cafiero"
                    className={`animatedUnderline pb-[6px] relative font-medium text-sm lg:text-base customCursor ${color}`}>
                    Desarrollado por <strong className="text-[#66D7D1]">SantiagoM96</strong>
                </Link>
            </div>
        </>
    )
}

export default DevelopedByButton