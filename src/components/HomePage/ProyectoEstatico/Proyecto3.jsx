import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../../../public/images/laravel-breeze-permisos/index-1.jpg'
import img2 from '../../../../public/images/laravel-breeze-permisos/create-form-2.jpg'
import img3 from '../../../../public/images/laravel-breeze-permisos/permissions-3.jpg'
import img4 from '../../../../public/images/laravel-breeze-permisos/form-permissions-4.jpg'


const Proyecto3 = () => {
    const [dataApi, setDataApi] = useState(null); // Cambia el estado inicial a `null`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('../../../../public/ProjectsJSON.json');
                setDataApi(response.data.projects[2]); // Guardar el tercer proyecto
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    // Verifica si dataApi es null antes de intentar acceder a sus propiedades
    if (!dataApi) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga o un spinner
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
                            <Link to="https://github.com/juanjoaquin/laravel-role-permissions-breeze" className=" font-montserrat pt-2 font-medium underline">Mirar repositorio de Github</Link>
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
                    <img className="w-full  shadow-md" src={img1} alt="" />
                    <img className="w-full  shadow-md" src={img2} alt="" />
                    <img className="w-full  shadow-md" src={img3} alt="" />
                    <img className="w-full  shadow-md" src={img4} alt="" />

                </div>
            </div>


            <div className="flex justify-center items-center  pt-4 text-center font-roboto font-semibold text-xl">
                <div className="flex gap-3 items-center ">
                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_left
                        </span>
                        <Link to="/proyectos/2">Anterior proyecto </Link>
                    </div>

                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">

                        <Link to="/proyectos/4"> Siguiente proyecto </Link>
                        <span class="material-symbols-outlined">
                            double_arrow
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Proyecto3;