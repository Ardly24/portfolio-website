
import './NavbarStyles.css'

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {FaBars,FaTimes } from 'react-icons/fa'

export default function Navbar(){
     
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor]=useState(false)
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true)
        }else{
           setColor(false)
        }
    }

  window.addEventListener("scroll", changeColor);
    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/portfolio-website">
           <div className='diamond'>AG</div>
           </Link>
           

        <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li>
                <Link to="/portfolio-website">Home</Link>
            </li>
            <li>
                <Link to="/portfolio-website/about">About</Link>
            </li>
            <li>
                <Link to="/portfolio-website/project">Projects</Link>
            </li>
            
            <li>
                <Link to="/portfolio-website/contact">Contact</Link>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}>
            {click? (<FaTimes  size={20} style={{color: "#fff"}}/>):
              (<FaBars  size={20} style={{color: "#fff"}}/>)
              }
        </div>

        </div>
    )
}