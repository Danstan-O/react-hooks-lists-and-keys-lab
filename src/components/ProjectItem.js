import React from "react";
import { v4 as uuid } from "uuid";

function ProjectItem({ name, about, technologies }) {
  
    const jsxTechnologies = technologies.map(technology => {
      return <span key={uuid()}>{technology}</span>
    })
  
    return (
      <div className="project-item">
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="technologies">
          {jsxTechnologies}
        </div>
      </div>


    // <div className="project-item">
    //   <h3>{name}</h3>
    //   <p>{about}</p>
    //   <div className="technologies">
    //     {/* render a <span> for each technology in the technologies array */}
      
      
    // <span> {technologies.name }  </span>
    //   <span>  {technologies.about} </span>
    
    //   </div>
    // </div>
  );
}

export default ProjectItem;
