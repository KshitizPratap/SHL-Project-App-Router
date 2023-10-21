"use client";
import Project from "./project";
import { useEffect, useState } from "react";
import "./allProjects.css"
const AllProjects = ({ allProjects }) => {
  const [search, setSearch] = useState({
    title: "",
    frontend: [],
    backend: [],
    database: [],
    technologies: [],
    infrastructure: [],
  });
  //   const [frontendTech ,setfrontendTech] = useState([])
  //   const [backendTech ,setBackendTech] = useState([])
  const [allConvertedProjects, setAllConvertedProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const temp = allProjects.map((item) => {
      return {
        title: item.title,
        technologies: new Set(item.technologies),
        frontend: new Set(item.frontend),
        backend: new Set(item.backend),
        database: new Set(item.database),
        infrastructure: new Set(item.infrastructure),
      };
    });
    setAllConvertedProjects(temp);
  }, []);
  useEffect(() => {
    const tempProjectsList = [];

    for (let index = 0; index < allConvertedProjects.length; index++) {
      const item = allConvertedProjects[index];

      if (
        item.title &&
        item.title !== "" &&
        !item.title.toLowerCase().includes(search.title.trim().toLowerCase())
      ) {
        continue;
      }
      let x = false;
      for (const tech of search?.technologies) {
        if (!item.technologies.has(tech)) {
          x = true;
          break;
        }
      }
      if (x) continue;
      for (const front of search?.frontend) {
        if (!item.frontend.has(front)) {
          x = true;
          break;
        }
      }
      if (x) continue;
      for (const back of search?.backend) {
        if (!item.backend.has(back)) {
          x = true;
          break;
        }
      }
      if (x) continue;
      for (const data of search?.database) {
        if (!item.database.has(data)) {
          x = true;
          break;
        }
      }
      if (x) continue;
      for (const infra of search?.infrastructure) {
        if (!item.infrastructure.has(infra)) {
          x = true;
          break;
        }
      }
      if (x) continue;
      console.log(allProjects[index]);
      tempProjectsList.push(allProjects[index]);
    }

    setFilteredProjects([...tempProjectsList]);
  }, [search, allConvertedProjects]);

  return (
    <div>
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setSearch({ ...search, title: e.target.value });
          }}
          placeholder="🔎Search"
        ></input>
      </div>
      <div className="projects-grid">
        {search == null
          ? allProjects.map((project, index) => {
              return <Project key={index} project={project} />;
            })
          : filteredProjects.map((project, index) => {
              return <Project key={index} project={project} />;
            })}
      </div>
    </div>
  );
};
export default AllProjects;
