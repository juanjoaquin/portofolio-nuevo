import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../../../App.css"
import laravelsvg from '../../../../public/assets/svgs/laravel-svgrepo-com.svg'
import js from '../../../../public/assets/svgs/js-svgrepo-com.svg'
import nextjs from '../../../../public/assets/svgs/nextjs-fill-svgrepo-com.svg'
import nodejs from '../../../../public/assets/svgs/node-js-svgrepo-com.svg'
import php from '../../../../public/assets/svgs/php-svgrepo-com.svg'
import react from '../../../../public/assets/svgs/react-svgrepo-com.svg'
import typescript from '../../../../public/assets/svgs/typescript-icon-svgrepo-com.svg'
import mysql from '../../../../public/assets/svgs/mysql-logo-svgrepo-com.svg'
import figma from '../../../../public/assets/svgs/figma-svgrepo-com.svg'
import photoshop from '../../../../public/assets/svgs/photoshop-cc-logo-svgrepo-com.svg'

export const Skills = ({darkMode}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");

        }
    }, [isInView]);

    const elements = ["Tech", "Design"]
    const [message, setMessage] = useState(elements[0])

    const [isAnimating, setIsAnimating] = useState(false);

    const handleClickMessage = () => {
        if (message !== "Tech") {
            setIsAnimating(true);
            setTimeout(() => {
                setMessage("Tech");
                setIsAnimating(false);
            }, 200);
        }
    }

    const handleSecondClickMessage = () => {
        if (message !== "Design") {
            setIsAnimating(true);
            setTimeout(() => {
                setMessage("Design");
                setIsAnimating(false);
            }, 200);
        }
    }


    return (
        <section id="skills">
        <div ref={ref}>
            <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, x: -100 }, // Sale desde la izquierda
          visible: { opacity: 1, x: 0 },   // Termina en su posición original
        }}
        transition={{ duration: 0.7, ease: "easeIn" }} 
      >
            <div className="pt-4 m-4 text-start ">
                <div className="flex items-center gap-3 md:mx-auto max-w-screen-md lg:max-w-screen-lg">
                <h1 className="font-montserrat text-base font-semibold tracking-wider opacity-40 ">Skills & tolls</h1>
                <hr className="w-full border-gray-400"/>
                </div>
                <div className="md:mx-auto max-w-screen-md lg:max-w-screen-lg">
                <h1 className="font-roboto tracking-wide text-3xl pt-3 font-bold">Habilidades</h1>
                <h3 className="font-montserrat text-grey-text pt-3 font-medium text-lg lg:max-w-2xl">Estos son los lenguajes y frameworks que útilizo cotidianamente para el desarrollo de mis aplicaciones. </h3>

                </div>


                <div className=" flex justify-center pt-6 ">
                    <div className="flex flex-wrap bg-gray-200 py-4 px-3 rounded-2xl">
                        <a
                            className={`px-10 py-3 font-bold rounded-l-2xl cursor-pointer ${message === "Tech" ? 'bg-indigo-600 text-white' : 'bg-indigo-200 text-black '}`}
                            onClick={handleClickMessage}
                        >
                            Tech
                        </a>
                        <a
                            className={`px-8 py-3 font-bold rounded-r-2xl cursor-pointer ${message === "Design" ? 'bg-indigo-600 text-white' : 'bg-indigo-200 text-black'}`}
                            onClick={handleSecondClickMessage}
                        >
                            Diseño
                        </a>
                    </div>
                </div>

                <div className={`flex flex-wrap items-center justify-center pt-4 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {message === "Tech" ? (
                        <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-4 lg:gap-4  lg:max-w-screen-lg lg:mx-auto">
                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className="w-20 mb-2" src={laravelsvg} alt="laravel" />
                                <span className="font-bold">Laravel</span>
                            </div>

                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className="w-20 mb-2" src={js} alt="javascript" />
                                <span className="font-bold">JavaScript</span>
                            </div>

                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className={` ${darkMode ? 'bg-white' : 'bg-white rounded-3xl'} w-20 mb-2` } src={nextjs} alt="next" />
                                <span className="font-bold">NextJs</span>
                            </div>

                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className="w-20 mb-2" src={nodejs} alt="nodejs" />
                                <span className="font-bold">NodeJs</span>
                            </div>

                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className="w-20 mb-2" src={php} alt="php" />
                                <span className="font-bold">Php</span>
                            </div>

                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className="w-20 mb-2" src={react} alt="reactjs" />
                                <span className="font-bold">ReactJs</span>
                            </div>

                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className="w-20 mb-2" src={typescript} alt="typescript" />
                                <span className="font-bold">TypeScript</span>
                            </div>

                            <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                <img className="w-20 mb-2" src={mysql} alt="mysql" />
                                <span className="font-bold">MySQL</span>
                            </div>

                        </div>) : message === "Design" ? (
                            <div className="flex flex-wrap items-center justify-center pt-4">

                                <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                    <img className="w-20 mb-2" src={figma} alt="" />
                                    <span className="font-bold">Figma</span>
                                </div>

                                <div className="p-3 px-8 m-2 border-solid border-2 border-zinc-200 rounded-lg text-center shadow-lg">
                                    <img className="w-20 mb-2" src={photoshop} alt="" />
                                    <span className="font-bold">Photoshop</span>
                                </div>

                            </div>
                        ) : null}

                </div>


            </div>
            </motion.div>
        </div>
        </section>
    );

}