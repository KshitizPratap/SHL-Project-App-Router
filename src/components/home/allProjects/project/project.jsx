"use client";
import ProjectDetails from "./projectDetails/projectDetails";
import classes from "./project.module.css";
import { Montserrat, Signika } from "next/font/google";

const signika = Signika({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const Project = ({ project, modelOpen, setModelOpen }) => {
  return (
    <div>
      <div
        onClick={(e) => {
          setModelOpen(project._id.toString());
          e.stopPropagation();
        }}
        className={classes.project_container}
      >
        <h3 className={signika.className}>{project?.title}</h3>
        <div className={classes.infoWrapper}>
          <div className={classes.infoContainer}>
            <p>Project Technologies</p>
            <p  className={montserrat.className}>
              {project?.technologies?.length
                ? project?.technologies.join(",")
                : "---"}
            </p>
          </div>

          <div className={classes.infoContainer}>
            <p>Technical Skillset Frontend</p>
            <p className={montserrat.className}>
              {project?.frontend?.length ? project?.frontend.join(",") : "---"}
            </p>
          </div>

          <div className={classes.infoContainer}>
            <p>Technical Skillset Backend</p>
            <p className={montserrat.className}>
              {project?.backend?.length ? project?.backend.join(",") : "---"}
            </p>
          </div>

          <div className={classes.infoContainer}>
            <p>Technical Skillset Databases</p>
            <p  className={montserrat.className}>
              {project?.database?.length ? project?.database.join(",") : "---"}
            </p>
          </div>

          <div className={classes.infoContainer}>
            <p className={montserrat.className}>
              Technical Skillset Infrastructure
            </p>
            <p>
              {project?.infrastructure?.length
                ? project?.infrastructure.join(",")
                : "---"}
            </p>
          </div>
        </div>
      </div>

      <div className="inner-container">
        {modelOpen == project._id.toString() && (
          <ProjectDetails
            project={project}
            setModelOpen={setModelOpen}
            modelOpen={modelOpen}
          />
        )}
      </div>
    </div>
  );
};
export default Project;
