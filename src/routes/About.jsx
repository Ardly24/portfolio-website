import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from '../components/Navbar'

export default function About(){
    return(
        <div>
            <Navbar />
            <HeroImg2 heading="About Me"
            text="Hi there, I am Ardlight Gutukunuhwa"
            />
            <AboutContent />
            <Footer/>
        </div>
    )
}