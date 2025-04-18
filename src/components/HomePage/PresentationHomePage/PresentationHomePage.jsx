import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-scroll";


export const PresentationHomePage = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const mainControls = useAnimation();



  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");

    }
  }, [isInView]);

  return (
    <section id="home">
      <div className="pt-14 mb-10 ">
        
        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >

          <div className="m-4 md:p-4 max-w-screen-md lg:max-w-screen-lg md:mx-auto text-start md:text-start" ref={ref}>
            <h1 className="pt-4 font-montserrat text-sm tracking-wider">JUAN M. JOAQUIN</h1>
            <h1 className="font-roboto tracking-wide text-3xl pt-3 font-bold md:text-4xl ">Full stack Developer</h1>
            <p className="font-montserrat md:text-xl text-grey-text pt-3 font-medium max-w-3xl">
            Hola, soy Juan, estudio programación. Me gusta desarrollar aplicaciones útiles y funcionales. Desarrollo del lado del servidor como en la interfaz de usuario.  
            </p>
  
            
            <div className="flex  gap-10 pt-5 md:justify-start ">
              <Link
              to="projects" spy={true} smooth={true} offset={-100} duration={500}
                className="p-2 rounded-lg bg-gray-900 hover:bg-gray-700 font-montserrat font-semibold text-white cursor-pointer"
              >
                Ver proyectos
              </Link>

            </div>
  
         

          </div>
        </motion.div>
      </div>
    </section>
  );
  
};
