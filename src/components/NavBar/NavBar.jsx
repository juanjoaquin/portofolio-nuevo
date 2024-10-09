import React, { useState } from "react";
import { Link } from "react-scroll";
import '../../App.css';

export const NavBar = ({ darkMode, setDarkMode }) => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleNavClick = () => {
        setNavOpen(false);
    };

    return (
        <nav className={`fixed w-full top-0 p-4 z-10 ${darkMode ? 'bg-gray-950' : 'bg-white'} `}>
            <div className="flex justify-between items-center md:hidden">
                <div className={`border rounded-full cursor-pointer z-20`}>
                    <span className={`m-3 text-2xl text-black${navOpen ? 'text-white' : 'text-black'}`} >J</span>
                </div>
                <span className={`material-symbols-outlined text-2xl z-20 text-black${navOpen ? 'text-white' : 'text-black'}`} onClick={toggleNav}>
                    {navOpen ? 'close' : 'menu'}
                </span>
            </div>

            {/* Nav de escritorio */}
            <div className="md:flex md:items-center md:justify-evenly hidden">
                <a href="/">
                    <div className={`border rounded-full border-b-1 cursor-pointer ${darkMode ? 'border-white' : 'border-black'}`}>
                        <span className={`m-3 text-2xl text-black ${darkMode ? 'text-white' : 'text-black'}`}>J</span>
                    </div>
                </a>
                <div className="flex gap-10 items-center font-libre text-lg">
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className={`cursor-pointer ${darkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-stone-400`}>Proyectos</Link>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick} className={`cursor-pointer ${darkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-stone-400`}>Sobre mí</Link>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className={`cursor-pointer ${darkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-stone-400`}>Contacto</Link>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded transition-all duration-500 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}  text-white`}
                    >
                        {darkMode ? <span class="material-symbols-outlined ">
                            light_mode
                        </span> : <span class="material-symbols-outlined text-black">
                            dark_mode
                        </span>}
                    </button>
                </div>
            </div>

            <div className={`bg-gray-900 w-full fixed top-0 left-0 right-0 z-10 transition-all duration-500 ease-in-out transform ${navOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                
                <ul className="min-h-screen flex flex-col justify-center items-center text-center space-y-4">
                    <li className="text-gray-200 font-montserrat opacity-40 text-sm">MENÚ</li>
                    <li className="font-libre font-bold text-3xl">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick} className="text-gray-200">Inicio</Link>
                    </li>
                    <li className="font-libre font-bold text-3xl">
                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick} className="text-gray-200">Proyectos</Link>
                    </li>
                    <li className="font-libre font-bold text-3xl">
                        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick} className="text-gray-200">Habilidades</Link>
                    </li>
                    <li className="font-libre font-bold text-3xl">
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick} className="text-gray-200">Contacto</Link>
                    </li>
                    <li className="font-libre font-bold text-3xl">
                        <Link to="socials" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNavClick} className="text-gray-200">Redes</Link>
                    </li>

                    
                </ul>
            </div>
        </nav>
    );
};