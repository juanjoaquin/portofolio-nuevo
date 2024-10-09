import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import img10 from '../../../../public/images/laravel-filament/filament-desktop.png'
import img11 from '../../../../public/images/laravel-filament/filament-employees.png'
import img12 from '../../../../public/images/laravel-filament/filament-cities.png'
import img13 from '../../../../public/images/laravel-filament/filament-dash.png'


export const Proyecto2 = () => {
    const [dataApi, setDataApi] = useState(null); // Cambia el estado inicial a `null` en lugar de `[]`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/ProjectsJSON.json');
                setDataApi(response.data.projects[1]); // Guardar el primer proyecto
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    if (!dataApi) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga mientras no hay datos
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
                            <Link to="https://github.com/juanjoaquin/laravel-filament-employees" className=" font-montserrat pt-2 font-medium underline">Mirar repositorio de Github</Link>
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

                <div className="pt-4 space-y-8 ">
                    <img className="w-full  shadow-md" src={img10} alt="" />
                    <img className="w-full  shadow-md" src={img11} alt="" />
                    <img className="w-full  shadow-md" src={img12} alt="" />
                    <img className="w-full  shadow-md" src={img13} alt="" />

                </div>
            </div>



            <div className="flex justify-center items-center pt-4 text-center font-roboto font-semibold text-sm flex-wrap">

                <div className="flex gap-3 items-center ">
                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_left
                        </span>
                        <Link to="/proyectos/1">Anterior proyecto </Link>
                    </div>

                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">

                        <Link to="/proyectos/3"> Siguiente proyecto </Link>
                        <span class="material-symbols-outlined">
                            double_arrow
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
};
