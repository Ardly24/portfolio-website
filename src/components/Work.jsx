import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData  from "./WorkCardData"

import React from "react"

export default function Work(){
    return(<div className="work-container">
      <h1 className="project-heading"> Projects</h1>
      <div className="project-container">

     {WorkCardData.map((val, ind) =>{
        return(
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            description={val.description}
            view={val.view}
            source={val.source}
            tech ={val.tech}
            />
        )
     })}
      </div>
    </div>
    )
}