"use client";
import ProjectDetails from "./projectDetails";
import "./project.css"
const Project = ({ project , modelOpen , setModelOpen }) => {
  
  return (
    <div className="z-10" >
      <div
        onClick={(e) => {
          setModelOpen(project._id.toString());
          e.stopPropagation()
        }}
        className="project-container"
      >
        {/* <div>Title</div> */}
        <div className="project-title">{project?.title}</div>
        <div className="project-sub-title">Project Technologies</div>
        <div>
          {" "}
          {project?.technologies?.length
            ? project?.technologies.join(",")
            : "---"}{" "}
        </div>
        <div className="project-sub-title">Technical Skillset Frontend</div>
        <div>
          {" "}
          {project?.frontend?.length ? project?.frontend.join(",") : "---"}{" "}
        </div>
        <div className="project-sub-title">Technical Skillset Backend</div>
        <div>
          {" "}
          {project?.backend?.length ? project?.backend.join(",") : "---"}{" "}
        </div>
        <div className="project-sub-title">Technical Skillset Databases</div>
        <div>
          {" "}
          {project?.database?.length ? project?.database.join(",") : "---"}{" "}
        </div>
        <div className="project-sub-title">Technical Skillset Infrastructure</div>
        <div>
          {" "}
          {project?.infrastructure?.length
            ? project?.infrastructure.join(",")
            : "---"}{" "}
        </div>
      </div>

      <div className="inner-container">
      {modelOpen== project._id.toString() && (
        <ProjectDetails project={project} setModelOpen={setModelOpen} />
      )}
      </div>
      
    </div>
  );
};
export default Project;
