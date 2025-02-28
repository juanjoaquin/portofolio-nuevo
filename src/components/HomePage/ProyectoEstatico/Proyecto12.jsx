
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../../public/images/cinema/imagen-1-portolio.jpg"
import img2 from "../../../../public/images/cinema/imagen-2-portfolio.jpg"
import img3 from "../../../../public/images/cinema/imagen-3-portfolio.jpg"
import img4 from "../../../../public/images/cinema/imagen-4-portfolio.jpg"
import img5 from "../../../../public/images/cinema/imagen-5-portfolio.jpg"
import img6 from "../../../../public/images/cinema/imagen-6-portfolio.jpg"
import img7 from "../../../../public/images/cinema/imagen-7-portfolio.jpg"
import img8 from "../../../../public/images/cinema/imagen-7-2-portfolio.jpg"
import img9 from "../../../../public/images/cinema/imagen-7-4-portfolio.jpg"
import img10 from "../../../../public/images/cinema/imagen-7-3-parte-2-portfolio.jpg"
import img11 from "../../../../public/images/cinema/imagen-8-historial-unido.jpg"
import img12 from "../../../../public/images/cinema/imagen-8-portfolio.jpg"
import img13 from "../../../../public/images/cinema/imagen-9-portfolio.jpg"
import img14 from "../../../../public/images/cinema/imagen-10-portfolio.jpg"




export const Proyecto12 = () => {
    const [dataApi, setDataApi] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/ProjectsJSON.json');
                setDataApi(response.data.projects[11]); 
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
                            <Link to={dataApi?.github} className=" font-montserrat pt-2 font-medium underline">Mirar repositorio de Github</Link>
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



                <div className="pt-4  flex flex-col ">
                    <img className="w-full  shadow-lg" src={img1} alt="" />
                    <img className="w-full  shadow-lg" src={img2} alt="" />
                    <img className="w-full  shadow-lg" src={img3} alt="" />
                    <img className="w-full  shadow-lg" src={img4} alt="" />
                    <img className="w-full  shadow-lg" src={img5} alt="" />
                    <img className="w-full  shadow-lg" src={img6} alt="" />
                    <img className="w-full  shadow-lg" src={img7} alt="" />
                    <img className="w-full  shadow-lg" src={img8} alt="" />
                    <img className="w-full  shadow-lg" src={img9} alt="" />
                    <img className="w-full  shadow-lg" src={img10} alt="" />
                    <img className="w-full  shadow-lg" src={img11} alt="" />
                    <img className="w-full  shadow-lg" src={img12} alt="" />
                    <img className="w-full  shadow-lg" src={img13} alt="" />
                    <img className="w-full  shadow-lg" src={img14} alt="" />
                </div>
            </div>



            <div className="flex justify-center items-center  pt-4 text-center font-roboto font-semibold text-xl">
                <div className="flex gap-3 items-center ">
                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_left
                        </span>
                        <Link to="/proyectos/10">Anterior proyecto </Link>
                    </div>

                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">

                        <Link to="/proyectos/1"> Volver al primero </Link>
                        <span class="material-symbols-outlined">
                            double_arrow
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};
