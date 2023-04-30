import "./AboutContentStyles.css" 

import React from 'react'
import {TbBrandJavascript, TbBrandHtml5} from 'react-icons/tb'
import {IoLogoCss3} from 'react-icons/io'
import {FaReact, FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom"

export default function AboutContent(){
    return(
        <div className="about">
        <div className="left">
            <h1>Who I am?</h1>
            <p>
                I am a frontend developer passionate about creating projects for web development and technologies that make a positive impact on people's lives. I'm an enthusiastic individual with zeal to learn, explore and grow. Always looking for new opportunities and challenges to learn and grow. Proficient in HTML & CSS, JavaScript and React Js
            </p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
            <Link to="https://drive.google.com/file/d/1bUBirUdx3Tye5TtzD4rDyGOGZJXFLvHK/view?usp=share_link">
            <button className="btn btn-light"> download resume</button>
            </Link>
        
        </div>

       <div className="skills-container">
            <h1>Skills</h1>
           <div className="skills">
                <p><TbBrandJavascript size='3rem' color='rgb(248, 217,15)'/> JavaScript</p>
                <p><FaReact  size='3rem' color='rgb(248, 217,15)'/>React Js</p> <br></br>
                <p><TbBrandHtml5 size='3rem' color='rgb(248, 217,15)'/>HTML</p>
                <p><IoLogoCss3 size='3rem' color='rgb(248, 217,15)' />CSS</p> <br></br>
                <p><FaGithub size='3rem' color='rgb(248, 217,15)'/>Github</p>
              </div>
            </div>
            
            <div className='education'>
                <h1>Education</h1>
                <ul>
                <li>BSc Computer Science - University of South Africa 2022 - Nov 2023</li>
                <li>Diploma in IT - University of South Africa 2019 -2021</li>
                </ul>              
            </div>
       
       
    </div>
    )
}