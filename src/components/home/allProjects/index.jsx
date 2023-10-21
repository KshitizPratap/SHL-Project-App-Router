"use client";
import Project from "./project";
import { useEffect, useState } from "react";
const AllProjects = ({ allProjects }) => {
  const [filteredProjects , setFilteredProjects] = useState([]);
  const [search, setSearch] = useState([]);
  const filterProjects = async()=>{
    const projects = await fetch("http://localhost:3000/api/filterProjects",{method :"GET" ,headers :{"Content-Type": "application/json"},body:JSON.stringify(search) });
    console.log("proj",projects); 
    setFilteredProjects(projects);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setSearch([...e.target.value.split(" ")]);
          }}
          placeholder="Search"
        ></input>
        <button onClick={()=>{filterProjects();}} >Search</button>
      </div>
      {search.length == 0
        ? allProjects.map((project, index) => {
            return <Project key={index} project={project} />;
          })
        : filteredProjects?.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
    </div>
  );
};
export default AllProjects;


//   const [frontendTech ,setfrontendTech] = useState([])
//   const [backendTech ,setBackendTech] = useState([])
  // const [allConvertedProjects, setAllConvertedProjects] = useState([]);
  // const [filteredProjects, setFilteredProjects] = useState([]);
  
  // useEffect(() => {
  //   const temp = allProjects.map((item) => {
        
  //     return {
  //       title: item.title,
  //       technologies: new Set(item.technologies),
  //       frontend: new Set(item.frontend),
  //       backend: new Set(item.backend),
  //       database: new Set(item.database),
  //       infrastructure: new Set(item.infrastructure),
  //     };
  //   });
  //   setAllConvertedProjects(temp);
  // }, []);
  // useEffect(() => {
  //   const tempProjectsList = [];
    
    
  //   for (let index=0; index < allConvertedProjects.length; index ++  ) {
  //       const item = allConvertedProjects[index];
        
  //     if ( item.title&&item.title !== "" && (!item.title.toLowerCase().includes(search.title.trim().toLowerCase()))) {
  //      continue};
  //     let x = false;
  //     for (const tech of search?.technologies) {
  //       if (!item.technologies.has(tech)) {
  //         x = true;
  //         break;
  //       }
  //     }
  //     if (x) continue;
  //     for (const front of search?.frontend) {
  //       if (!item.frontend.has(front)) {
  //         x = true;
  //         break;
  //       }
  //     }
  //     if (x) continue;
  //     for (const back of search?.backend) {
  //       if (!item.backend.has(back)) {
  //         x = true;
  //         break;
  //       }
  //     }
  //     if (x) continue;
  //     for (const data of search?.database) {
  //       if (!item.database.has(data)) {
  //         x = true;
  //         break;
  //       }
  //     }
  //     if (x) continue;
  //     for (const infra of search?.infrastructure) {
  //       if (!item.infrastructure.has(infra)) {
  //         x = true;
  //         break;
  //       }
  //     }
  //     if (x) continue;
  //     console.log(allProjects[index]);
  //     tempProjectsList.push(allProjects[index]);
  //   }
    
  //   setFilteredProjects([...tempProjectsList]);
  // }, [search, allConvertedProjects]);
