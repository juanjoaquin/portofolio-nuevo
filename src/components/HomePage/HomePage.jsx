import React from "react";
import { PresentationHomePage } from "./PresentationHomePage/PresentationHomePage";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";
import { Contact } from "./Contact/Contact";
import { Socials } from "./Socials/Socials";
import "../../../src/App.css"

export const HomePage = () => {


    return (
        <div>


            <PresentationHomePage />
                
                <Projects  />
                <Skills />
                <Contact />
                <Socials />                




                
        </div>
    );
};