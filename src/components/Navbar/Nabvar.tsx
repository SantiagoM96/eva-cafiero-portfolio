import { NavLink, useLocation, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavlinkItem } from "../../models/types";
import { navLinks } from "../../data/data";
import styles from "../../styles";
import logo from "../../assets/logo.gif";

const Navbar = () => {
    const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

    const location = useLocation();
    const obtenerIdProyecto = () => {
        const partesURL = location.pathname.split("/");
        return partesURL[2];
    };

    const idProyectoActual = obtenerIdProyecto();
    const isProject1: boolean = idProyectoActual === "1";
    const isHome = location.pathname === "/";

    const toggleNavBar = () => setNavIsOpen(prev => !prev);

    const fontColor = (isHome && !navIsOpen) || (isProject1 && !navIsOpen) ? "text-[#fff]" : "text-[#000]";

    return (
        <>
            <header className={styles.headerStyles}>
                <Link to="/" rel="noopener noreferrer" className={`w-1/5 z-50 lg:static ${navIsOpen ? 'fixed' : ''}`}>
                    <img src={logo} alt="Logo Gif" className="max-h-[60px] max-w-[60px] mobileLandscape:max-w-[40px] mobileLandscape:max-h-[40px] lg:max-h-[80px] lg:max-w-[80px]" />
                </Link>
                <nav className="lg:w-4/5">
                    <ul className={`${styles.ulStyles} ${navIsOpen ? 'translate-x-0' : 'translate-x-[100%]'} lg:translate-x-0`}>
                        {navLinks.map(({ to, title }: NavlinkItem, index: number) => (
                            <li key={index} className={`${styles.linkStyles} w-28 text-center lg:text-[#000]`} onClick={toggleNavBar}>
                                <NavLink className={`${fontColor}`} to={to}>{title}*</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button onClick={toggleNavBar} className={`${navIsOpen ? 'fixed' : ''} z-50 right-[2.5rem] customCursor bg-transparent outline-none border-none lg:hidden`}>
                    {navIsOpen ? <FaTimes className="text-xl" /> : <FaBars className={`${fontColor} text-xl mobileLandscape:text-base transition-color duration-[400ms] delay-[150ms] easy-in-out `} />}
                </button>
            </header>
        </>

    );
};

export default Navbar;
