import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const Contact = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");

        }
    }, [isInView]);

    return (
        <section id="contact">

        <div ref={ref}>
        <motion.div
      initial="hidden"
      animate={mainControls}
      variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        >
        <div className="pt-4 m-4 text-start md:mx-auto max-w-screen-md lg:max-w-screen-lg md:p-4">
            <div className="flex items-center gap-3">
            <h1 className="font-montserrat text-base font-semibold tracking-wider opacity-40">SEND ME A MESSAGE</h1>
            <hr className="w-full border-gray-400"/>
            </div>
            <div className="flex items-center pt-3 gap-2">
                <h1 className="font-roboto text-3xl font-bold tracking-wide ">Contáctame</h1>

            </div>
            <div className="pt-3 flex flex-wrap ">
                <p className="font-montserrat text-gray-600 font-medium text-lg">Sentite libre de escribirme un email cuando desees, yo constantemente checkeo el buzón de entrada. </p>
                <div className="flex items-center py-3 w-full md:w-auto">

                    <p className="font-semibold font-montserrat text-sm overflow-hidden">juanmanueljoaquin@hotmail.com</p>
                </div>
            </div>
            <div className="pt-3 flex">
            <a className="bg-indigo-600 py-3 px-6 items-center  rounded-xl text-white font-bold font-roboto shadow-lg " href="mailto:juanmanueljoaquin@hotmail.com">Envíame un email</a>
            </div>
        </div>
        </motion.div>
        </div>
          </section>
    );

}