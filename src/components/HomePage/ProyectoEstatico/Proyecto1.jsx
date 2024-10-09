import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


import img1 from '../../../../public/images/noc/failededited.png'
import img2 from '../../../../public/images/noc/notificacion-ok.png'
import img3 from '../../../../public/images/noc/mongodbedit.png'
import diagrama from '../../../../public/images/noc/diagrama.drawio.png'


export const Proyecto1 = () => {



    const [dataApi, setDataApi] = useState(null);





    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/ProjectsJSON.json');
                setDataApi(response.data.projects[0]);

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);



    if (!dataApi) return <p>Cargandoo</p>







    return (

        <div className="pt-20 m-4 text-start ">


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
                        <p className="w-auto font-montserrat pt-2 font-medium">{dataApi.technologies?.backend?.join(', ')}.</p>
                    </div>
                    <div className="pt-4">
                        <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">DATABASE</h1>
                        <p className="w-auto font-montserrat pt-2 font-medium">{dataApi.technologies?.database}.</p>
                    </div>

                    <div className="pt-4">
                        <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">GITHUB REPOSITORIO & LIVE HOST</h1>
                        <div className="inline-block">
                            <Link to="https://github.com/juanjoaquin/node-noc-app" className=" font-montserrat pt-2 font-medium underline">Mirar repositorio de Github</Link>
                            <br />
                            <p  className=" font-montserrat pt-2 font-medium ">{dataApi.live_demo}</p>
                        </div>
                    </div>
                </div>
                <div className="pt-4 lg:w-2/3">
                    <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">DESCRIPCIÓN</h1>
                    <p className="w-auto text-start font-montserrat pt-2 font-medium text-lg text-gray-600">{dataApi.description}</p>
                </div>
            </div>



            <div className="lg:flex lg:justify-center lg:mr-32 mt-10">
                <h1 className="font-mono text-2xl">Diagrama de flujo</h1>
            </div>

            <div className=" flex justify-center pt-10 lg:max-w-screen">


                <div className="pt-4 space-y-8" >
                    <img src={diagrama} alt="" />
                    <img className="w-full  shadow-md" src={img1} alt="" />
                    <img className="w-full  shadow-md" src={img2} alt="" />
                    <img className="w-full  shadow-md" src={img3} alt="" />

                </div>


            </div>
            <div className="flex justify-center items-center  pt-4 text-center font-roboto font-semibold text-xl">


                <div className="flex items-center border text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800 ">

                    <Link to="/proyectos/2">

                        <h2>Siguiente proyecto</h2>
                    </Link>


                    <span class="material-symbols-outlined">
                        double_arrow
                    </span>
                </div>
            </div>

        </div>

    );
};

