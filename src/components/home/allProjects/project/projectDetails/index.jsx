"use client"
const ProjectDetails = ({project , setModelOpen})=>{
    return<div> <div>Title</div>
    <div>{project?.title}</div>
    <div>Project Technologies</div>
    <div>
      {" "} 
      {project?.technologies?.length
        ? project?.technologies.join(",")
        : "---"}{" "}
    </div>
    <div>Technical Skillset Frontend</div>
    <div>
      {" "}
      {project?.frontend?.length ? project?.frontend.join(",") : "---"}{" "}
    </div>
    <div>Technical Skillset Backend</div>
    <div>
      {" "}
      {project?.backend?.length
        ? project?.backend.join(",")
        : "---"}{" "}
    </div>
    <div>Technical Skillset Databases</div>
    <div>
      {" "}
      {project?.database?.length ? project?.database.join(",") : "---"}{" "}
    </div>
    <div>Technical Skillset Infrastructure</div>
    <div>
      {" "}
      {project?.infrastructure?.length
        ? project?.infrastructure.join(",")
        : "---"}{" "}
    </div>
  </div>
}
export default ProjectDetails;