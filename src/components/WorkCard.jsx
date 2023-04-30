import "./WorkCardStyles.css"

import React from "react"
import { Link } from "react-router-dom"

export default function WorkCard(props){
    return(
        <div className="project-card" onClick={props.view}>
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p className="description">{props.description}</p>
                <div className="pro-btns">
                  <Link to={props.view} className="btn">View</Link>  
                  <Link to={props.source} className="btn">SOURCE CODE</Link> 
                </div>
                <p className="stack">{props.tech}</p>
            </div>
        </div>
    )
}