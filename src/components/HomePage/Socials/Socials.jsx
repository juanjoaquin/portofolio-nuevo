import React from "react";
import linkedin from '../../../../public/assets/svgs/linkedin-svgrepo-com.svg'
import github from '../../../../public/assets/svgs/github-142-svgrepo-com.svg'
import { Link } from "react-router-dom";



export const Socials = ({darkMode}) => {

    return(
        <section id="socials">

        <div className="pt-4 m-4 text-start md:mx-auto max-w-screen-md lg:max-w-screen-lg md:p-4">
            
        <div className="flex items-center mb-2 gap-2">
                <h1 className="font-roboto text-3xl font-bold tracking-wide ">Redes & Github</h1>

            </div>
                <div className="flex items-center gap-3">
                    
            <h1 className="font-montserrat text-base font-semibold tracking-wider opacity-40">SOCIALS</h1>
            <hr className="w-full border-gray-400"/>
                </div>
            <h3 className="font-montserrat text-gray-600  font-medium pt-2 text-lg">Mis redes que utilizó para publicar mis últimos proyectos.</h3>
            
            <div className="flex items-center pt-3 gap-4  w-auto flex-wrap">
                <Link to="https://www.linkedin.com/in/juan-manuel-joaquin/"><img className="w-12 mb-2 cursor-pointer" src={linkedin} alt="" /></Link>
                <Link to="https://github.com/juanjoaquin"><img className={`w-10 mb-2 cursor-pointer rounded-lg ${darkMode ? 'bg-gray-500' : 'bg-white'}`} src={github} alt="" /></Link>
                <Link to="#"><span className="cursor-pointer font-bold italic">Compu <br />Trabajo</span></Link>
            </div>

        </div>
        </section>
        
    )
}