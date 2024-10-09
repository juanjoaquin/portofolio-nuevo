import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import allapp from '../../../../public/images/node-tickets/all-app.jpg'


export const Proyecto5 = () => {
    const [dataApi, setDataApi] = useState(null); // Cambia el estado inicial a `null`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/ProjectsJSON.json');
                setDataApi(response.data.projects[4]); 
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    if (!dataApi) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="pt-20 m-4 text-start">

            <div className="lg:flex lg:justify-center lg:gap-20 lg:max-w-screen-lg lg:mx-auto" >

                <div >

                    <h1 className="font-roboto font-extrabold text-4xl">{dataApi.name}</h1>
                    <div className="pt-4" >
                        <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">PATTERNS</h1>
                        <p className="w-auto font-montserrat pt-2 font-medium">{dataApi.technologies?.patterns}.</p>
                    </div>
                    <div className="pt-4">
                        <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">LANGUAGES & FRAMEWORKS</h1>
                        <p className="w-auto font-montserrat pt-2 font-medium">{dataApi.technologies?.languages}.</p>
                        <p className="w-auto font-montserrat pt-2 font-medium">{dataApi.technologies?.backend?.join('')}</p>
                    </div>
                    <div className="pt-4">
                        <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">DATABASE</h1>
                        <p className="w-auto font-montserrat pt-2 font-medium">{dataApi.technologies?.database}.</p>
                    </div>

                    <div className="pt-4">
                        <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">GITHUB REPOSITORIO & LIVE HOST</h1>
                        <div className="inline-block">
                            <Link to="https://github.com/juanjoaquin/restapi-websockets-express" className=" font-montserrat pt-2 font-medium underline">Mirar repositorio de Github</Link>
                            <br />
                            <p className=" font-montserrat pt-2 font-medium ">{dataApi.live_demo}</p>
                        </div>
                    </div>
                </div>
                <div className="pt-4 lg:w-2/3">
                    <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">DESCRIPCIÓN</h1>
                    <p className="w-auto text-start font-montserrat pt-2 font-medium text-lg text-gray-600">{dataApi.description}</p>
                </div>
            </div>
            <div className="flex justify-center pt-10 lg:max-w-screen-lg lg:mx-auto">



                <div className="pt-4 space-y-8 flex flex-col ">
                    <img className="w-full shadow-lg" src={allapp} alt="" />


                    <iframe className="w-1/2 h-96 lg:mx-auto"
                        src="https://www.youtube.com/embed/ltxzfLdKrkU?si=JuAWItcoWPSjna2y"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
            </div>



            <div className="flex justify-center items-center  pt-4 text-center font-roboto font-semibold text-xl">
                <div className="flex gap-3 items-center ">
                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_left
                        </span>
                        <Link to="/proyectos/4">Anterior proyecto </Link>
                    </div>

                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">

                        <Link to="/proyectos/6"> Siguiente proyecto </Link>
                        <span class="material-symbols-outlined">
                            double_arrow
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};
