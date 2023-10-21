"use client"
import "./index.css"
const ProjectDetails = ({project , setModelOpen})=>{
    return<div className="container">
    <div className='title'>{project?.title}</div>
    <div className='tech'>Project Technologies</div>
    <div>
      {" "} 
      {project?.technologies?.length
        ? project?.technologies.join(",")
        : "---"}{" "}
    </div>
    <div className='tech'>Technical Skillset Frontend</div>
    <div>
      {" "}
      {project?.frontend?.length ? project?.frontend.join(",") : "---"}{" "}
    </div>
    <div className='tech'>Technical Skillset Backend</div>
    <div >
      {" "}
      {project?.backend?.length
        ? project?.backend.join(",")
        : "---"}{" "}
    </div>
    <div className='tech'>Technical Skillset Databases</div>
    <div>
      {" "}
      {project?.database?.length ? project?.database.join(",") : "---"}{" "}
    </div>
    <div className='tech'>Technical Skillset Infrastructure</div>
    <div >
      {" "}
      {project?.infrastructure?.length
        ? project?.infrastructure.join(",")
        : "---"}{" "}
    </div>
    <div className='tech'>Other Information Availability</div>
    <div >
      {" "}
      {project?.availability?.length
        ? project?.availability.join(",")
        : "---"}{" "}
    </div>
  </div>
}
export default ProjectDetails;
