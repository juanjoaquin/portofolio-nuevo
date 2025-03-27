
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../../public/images/wallet/imagen-1-portfolio.jpg"
import img2 from "../../../../public/images/wallet/imagen-2-portfolio.jpg"
import img3 from "../../../../public/images/wallet/imagen-3-portfolio.jpg"
import img4 from "../../../../public/images/wallet/imagen-4-portfolio.jpg"
import img5 from "../../../../public/images/wallet/imagen-5-portfolio.jpg"
import img6 from "../../../../public/images/wallet/imagen-6-portfolio.jpg"
import img7 from "../../../../public/images/wallet/imagen-7-portfolio.jpg"
import img8 from "../../../../public/images/wallet/imagen-8-portfolio.jpg"
import img9 from "../../../../public/images/wallet/imagen-9-portfolio.jpg"
import img10 from "../../../../public/images/wallet/imagen-10-portfolio.jpg"
import img11 from "../../../../public/images/wallet/imagen-11-portfolio.jpg"
import img12 from "../../../../public/images/wallet/imagen-12-portfolio.jpg"
import img13 from "../../../../public/images/wallet/imagen-13-portfolio.jpg"
import img14 from "../../../../public/images/wallet/imagen-14-portfolio.jpg"
import img15 from "../../../../public/images/wallet/imagen-15-portfolio.jpg"
import img152 from "../../../../public/images/wallet/imagen-15-2-portfolio.jpg"
import img16 from "../../../../public/images/wallet/imagen-16-portfolio.jpg"
import img17 from "../../../../public/images/wallet/imagen-17-portfolio.jpg"






export const Proyecto14 = () => {
    const [dataApi, setDataApi] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/ProjectsJSON.json');
                setDataApi(response.data.projects[13]); 
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

                    <div className="pt-4 ">
                        <h1 className="font-montserrat text-base font-normal tracking-widest text-gray-400">GITHUB REPOSITORIO & LIVE HOST</h1>
                        <div className="inline-block ">
                            <Link to={dataApi?.github} className=" font-montserrat pt-2 font-medium underline">Mirar repositorio de Github</Link>
                            <br />
                            <Link to={dataApi?.live_demo} className=" font-montserrat pt-2 font-medium underline">Ver funcionamiento en Imgur</Link>
                            <br />
                            <Link to={dataApi?.behance} className=" font-montserrat pt-2 font-medium underline">Ver diseño en Behance</Link>
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
                    <img className="w-full  shadow-lg" src={img15} alt="" />
                    <img className="w-full  shadow-lg" src={img152} alt="" />
                    <img className="w-full  shadow-lg" src={img16} alt="" />
                    <img className="w-full  shadow-lg" src={img17} alt="" />
                </div>
            </div>



            <div className="flex justify-center items-center  pt-4 text-center font-roboto font-semibold text-xl">
                <div className="flex gap-3 items-center ">
                    <div className=" flex items-center text-white bg-indigo-600 p-2 rounded-lg font-roboto hover:bg-indigo-800">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_left
                        </span>
                        <Link to="/proyectos/13">Anterior proyecto </Link>
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
