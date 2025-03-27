import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../../../App.css"
import projectOneImage from '../../../../public/images/noc/code.png'
import projectTwoImage from '../../../../public/images/gestor-empleados/portada2.png'
import projectThreeImage from '../../../../public/images/restaurant/portada.png'
import projectFourdImage from "../../../../public/images/laravel-profesor/indicecode.png"
import projectFiveImage from '../../../../public/images/node-tickets/codecode.png'
import projectSixImage from '../../../../public/images/next-restapi/portada.png'

import projectSevenImage from '../../../../public/images/devstagram/portada.png'
import projectEightImage from '../../../../public/images/laravel-breeze-permisos/contenido.png'
import projectNineImage from '../../../../public/images/codeimage.png'
import projectTenImage from '../../../../public/images/project-crud-laravel/codeimage.png'
import projectElevenImage from '../../../../public/images/laundry-app/portada-3-linkedin.jpg'
import projectTwelveImage from '../../../../public/images/cinema/image-1-linkedin.jpg'
import projectThirteenImage from '../../../../public/images/futbol-5/linkedin-futbol5.jpg'
import projectFourteenImage from '../../../../public/images/wallet/imagen-1-portfolio.jpg'



import { Link } from "react-router-dom";





export const Projects = () => {



    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });
    const slideControls = useAnimation();

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true });
    const threeControls = useAnimation();

    //- Nuevos controls

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { once: true });
    const fourthControls = useAnimation();

    const ref5 = useRef(null);
    const isInView5 = useInView(ref5, { once: true });
    const fiveControls = useAnimation();

    const ref6 = useRef(null);
    const isInView6 = useInView(ref6, { once: true });
    const sixControls = useAnimation();

    const ref7 = useRef(null);
    const isInView7 = useInView(ref7, { once: true });
    const sevenControls = useAnimation();

    const ref8 = useRef(null);
    const isInView8 = useInView(ref8, { once: true });
    const eigthControls = useAnimation();

    const ref9 = useRef(null);
    const isInView9 = useInView(ref9, { once: true });
    const nineControls = useAnimation();

    const ref10 = useRef(null);
    const isInView10 = useInView(ref10, { once: true });
    const tenControls = useAnimation();

    const ref11 = useRef(null);
    const isInView11 = useInView(ref11, { once: true });
    const elevenControls = useAnimation();

    const ref12 = useRef(null);
    const isInView12 = useInView(ref12, { once: true });
    const twelveControls = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    useEffect(() => {
        if (isInView2) {
            slideControls.start("visible");
        }
    }, [isInView2]);

    useEffect(() => {
        if (isInView3) {
            threeControls.start("visible");
        }
    }, [isInView3]);


    useEffect(() => {
        if (isInView4) {
            fourthControls.start("visible");
        }
    }, [isInView4]);

    useEffect(() => {
        if (isInView5) {
            fiveControls.start("visible");
        }
    }, [isInView5]);

    useEffect(() => {
        if (isInView6) {
            sixControls.start("visible");
        }
    }, [isInView6]);

    useEffect(() => {
        if (isInView7) {
            sevenControls.start("visible");
        }
    }, [isInView7]);

    useEffect(() => {
        if (isInView8) {
            eigthControls.start("visible");
        }
    }, [isInView8]);

    useEffect(() => {
        if (isInView9) {
            nineControls.start("visible");
        }
    }, [isInView9]);

    useEffect(() => {
        if (isInView10) {
            tenControls.start("visible");
        }
    }, [isInView10]);

    useEffect(() => {
        if (isInView11) {
            elevenControls.start("visible");
        }
    }, [isInView11]);


    useEffect(() => {
        if (isInView12) {
            twelveControls.start("visible");
        }
    }, [isInView12]);






    return (
        <section id="projects">
            <div>

                {/* md:p-4 max-w-screen-md lg:max-w-screen-lg md:mx-auto */}
                <div className="m-4 text-start md:p-4 max-w-screen-md lg:max-w-screen-lg md:mx-auto ">


                    <div className="flex items-center gap-3">
                        <h1 className="font-montserrat text-base font-semibold tracking-wider opacity-30">LATEST PROJECTS</h1>
                        <hr className="w-full  border-gray-400" />
                    </div>

                    <h1 className="font-roboto tracking-wide text-3xl pt-3 font-bold">Proyectos</h1>
                    <p className="font-montserrat md:text-xl text-grey-text pt-3 font-medium max-w-3xl">
                        Me encuentró desarrollando constantemente proyectos para mejorar mi lógica y habilidades. Estos son algunos de los que realice.
                    </p>
                </div>


                <div className="max-w-screen-md mx-auto lg:max-w-screen-lg grid lg:grid lg:gap-4 lg:grid-cols-2">


                <motion.div
                        initial="hidden"
                        animate={twelveControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/14" >
                            <div ref={ref12} className="bg-gradient-to-r from-gray-200 to-gray-100  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-800 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-gray-800 font-roboto text-4xl pt-3 font-bold">Wallet: Billetera virtual, con sistema de transferencias y pagos </h5>
                                    </div>

                                </div>


                                <div className="overflow-hidden mr-5 ">
                                    <img className=" rounded-tr-lg rounded-br-lg mb-2" src={projectFourteenImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>


                    <motion.div
                        initial="hidden"
                        animate={twelveControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/13" >
                            <div ref={ref12} className="bg-gradient-to-r from-gray-800 to-gray-900  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Fútbol 5: Crea tu equipo, invita jugadores y desafía a otros equipos </h5>
                                    </div>

                                </div>


                                <div className="overflow-hidden mr-5 ">
                                    <img className=" rounded-tr-lg rounded-br-lg mb-2" src={projectThirteenImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>






                    <motion.div
                        initial="hidden"
                        animate={elevenControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/12" >
                            <div ref={ref11} className="bg-gradient-to-br from-stone-600 to-cyan-800  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Cinema App: Compra de boletos, elección de asientos, y ratings</h5>
                                    </div>

                                </div>


                                <div className="overflow-hidden mr-5 ">
                                    <img className=" rounded-tr-lg rounded-br-lg mb-2" src={projectTwelveImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={elevenControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/11" >
                            <div ref={ref11} className="bg-gradient-to-b from-sky-500 to-sky-800  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Laundry App: Lavanderia con roles de cliente y administrador</h5>
                                    </div>

                                </div>


                                <div className="overflow-hidden mr-5 ">
                                    <img className=" rounded-tr-lg rounded-br-lg mb-2" src={projectElevenImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={mainControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/1" >
                            <div ref={ref} className="bg-gray-700  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">BACKEND</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">App de Monitoreo con Logs en tiempo real</h5>
                                    </div>

                                </div>

                                <div className=" overflow-hidden mr-5 ">
                                    <img className=" ml-20 rounded-tl-lg" src={projectOneImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={slideControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/2" >
                            <div ref={ref2} className="bg-gradient-to-l from-teal-300 to-teal-600  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Sistema integral de Gestión de Recursos Humanos</h5>
                                    </div>

                                </div>

                                <div className="overflow-hidden">
                                    <img className="ml-2  rounded-tl-lg" src={projectTwoImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>

                    {/* Nuevos controls */}

                    <motion.div
                        initial="hidden"
                        animate={threeControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/3" >
                            <div ref={ref3} className="bg-gradient-to-r from-cyan-500 to-blue-500  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="overflow-hidden ml-5 ">
                                    <img className=" rounded-bl-lg rounded-tl-lg mt-4" src={projectThreeImage} alt="" />
                                </div>

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Manejo de Restaurante: Mesas, Clientes y Pagos</h5>
                                    </div>



                                </div>




                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={fourthControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/4" >
                            <div ref={ref4} className="bg-gradient-to-tr from-indigo-500 to-indigo-400  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Sistema de Profesor: Alumnos, Notas y Asistencia </h5>
                                    </div>

                                </div>

                                <div className="overflow-hidden ml-5 ">
                                    <img className="rounded-bl-lg rounded-tl-lg" src={projectFourdImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={fiveControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/5" >
                            <div ref={ref5} className="bg-fuchsia-950  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="overflow-hidden mr-5 ">
                                    <img className=" rounded-br-lg " src={projectFiveImage} alt="" />
                                </div>

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">BACKEND + VIEW</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">App de tickets con Websockets</h5>
                                    </div>

                                </div>


                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={sixControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/6" >
                            <div ref={ref6} className="bg-gradient-to-r from-amber-500 to-amber-600  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Rest API Full, y Server Actions</h5>
                                    </div>

                                </div>

                                <div className="overflow-hidden mr-5 ">
                                    <img className=" rounded-tr-lg mb-2" src={projectSixImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={sevenControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >
                        <Link to="/proyectos/7" >
                            <div ref={ref7} className="bg-gradient-to-t from-slate-300 to-slate-500  m-4 shadow-lg transition transform duration-300 hover:scale-105">

                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Clon de Red Social con likes, posts y followers</h5>
                                    </div>

                                </div>

                                <div className="overflow-hidden mr-5 ">
                                    <img className="rounded-tr-lg rounded-br-lg mb-2" src={projectSevenImage} alt="" />
                                </div>


                            </div>
                        </Link>
                    </motion.div>


                    <motion.div
                        initial="hidden"
                        animate={eigthControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <Link to="/proyectos/8" >
                            <div ref={ref8} className="bg-gradient-to-r from-red-700 to-red-800 m-4 shadow-lg transition transform duration-300 hover:scale-105">
                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FULL STACK</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Foro, con Roles y Permisos definidos</h5>
                                    </div>
                                </div>
                                <div className="overflow-hidden mr-5">
                                    <img className="rounded-tr-lg" src={projectEightImage} alt="" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={nineControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <Link to="/proyectos/9" >
                            <div ref={ref9} className="bg-gray-700 m-4 shadow-lg transition transform duration-300 hover:scale-105">
                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">FRONTEND</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">Página de Bootcamp IT</h5>
                                    </div>
                                </div>
                                <div className="overflow-hidden ml-5">
                                    <img className="rounded-bl-lg rounded-tl-lg mt-4" src={projectNineImage} alt="" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={tenControls}
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <Link to="/proyectos/10" >
                            <div ref={ref10} className="bg-green-800 m-4 shadow-lg transition transform duration-300 hover:scale-105">
                                <div className="overflow-hidden ml-5">
                                    <img className="rounded-bl-lg rounded-tl-lg mt-4" src={projectTenImage} alt="" />
                                </div>
                                <div className="p-8">
                                    <h4 className="text-gray-50 uppercase text-sm font-medium tracking-wider mb-2 opacity-60 load-hidden">BACKEND + VIEW</h4>
                                    <div className="">
                                        <h5 className="text-white font-roboto text-4xl pt-3 font-bold">CRUD: Bloc de notas</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>




                </div>
            </div>
        </section>
    )
}