"use client"
import ProjectDetails from "./projectDetails"
import { useState } from "react"

const Project =({project})=> {
    const [modelOpen , setModelOpen] = useState(false)
return <div>
    <div onClick={()=>{setModelOpen(true)}}>
    
    <div>Title</div>
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

{  modelOpen &&
    <ProjectDetails project={project} setModelOpen={setModelOpen} />
}
</div>
}
export default Project ; 