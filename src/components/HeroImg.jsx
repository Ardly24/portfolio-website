import "./HeroImgStyles.css";
import IntroImg from '../assets/intro.jpeg'
import {BsTwitter,BsLinkedin,BsGithub,BsTelegram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function HeroImg(){
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                  src={IntroImg} alt="IntroImg"/>
            </div>

        <div className="content">
             <p>Hi, I'm Ardlight</p>
             <h1>Frontend Developer</h1>
             <div className="buttons">
              <Link to="/portfolio-website/project"
               className="btn">Projects</Link>  
               <Link to="https://drive.google.com/file/d/1V6lScedwU59SKCLFkX9pYwAsZVdu7_k0/view?usp=share_link"
               className="btn btn-light">download resume</Link>  
            </div>
            <div className="socialmedia-icons">
           <a href="https://github.com/Ardly24"><BsGithub className='icon'/></a> 
            <a href="https://twitter.com/ardly_g4"><BsTwitter className='icon'/></a> 
            <a href="https://www.linkedin.com/in/ardlight-gutukunuhwa-848a361b4"><BsLinkedin className='icon'/></a> 
            <a href="https://t.me/Ardly_g"><BsTelegram className='icon'/></a> 
            <a href ="mailto: ardlightg@gmail.com"><AiOutlineMail className='icon'/></a> 
            </div>
          </div>
        </div>
    )
}

