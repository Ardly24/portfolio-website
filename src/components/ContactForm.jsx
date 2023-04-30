import "./ContactFormStyles.css"

import React, { useRef } from 'react';
import {BsTwitter,BsLinkedin,BsGithub,BsTelegram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

import emailjs from '@emailjs/browser';


export default function ContactForm(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kzdxi1t', 'template_nlvpg2s', form.current, 'sJYfdO-AY49sTRP9S')
        .then((result) => {
            console.log(result.text);
            alert("message sent")
            form.current.reset();

        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="form">
            
            <div className="socialmedia-iconss">
           <a href="https://github.com/Ardly24"><BsGithub className='icon'/><p className="socilamedia">GitHub</p></a> 
            <a href="https://twitter.com/ardly_g4"><BsTwitter className='icon'/><p className="socilamedia">Twitter</p></a> 
            <a href="https://www.linkedin.com/in/ardlight-gutukunuhwa-848a361b4"><BsLinkedin className='icon'/><p className="socilamedia">Linkedin</p></a> 
            <a href="https://t.me/Ardly_g"><BsTelegram className='icon'/><p className="socilamedia">Telegram</p></a> 
            <a href ="mailto: ardlightg@gmail.com"><AiOutlineMail className='icon'/><p className="socilamedia">Email</p></a> 
            </div>
            <div>
            <h1 className="contact-heading">GET IN TOUCH</h1>
            <form ref={form} onSubmit={sendEmail} >
                <label>Your Name</label>
                <input type="text" name="user_name" />

                <label>Email</label>
                <input type="email" name="user_email" />

                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Type your message here"/>
                <button className="btn">Send</button>
            </form> 
            </div>
         </div>
    )
}

