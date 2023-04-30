import React from "react";
import Navbar from '../components/Navbar'
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import Footer from "../components/Footer";

export default function Project(){
    return(
        <div>
            <Navbar /> 
            <HeroImg2 
               heading="Projects."
               text="Some of my recent works"
             />
            <Work />
            <Footer/>
        </div>
    )
}