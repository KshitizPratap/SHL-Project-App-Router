import AllProjects from "@/components/home/allProjects";
import projectController from "../../server/controllers/projectController";
import {connect} from 'mongoose'
import config from "../../config/env";


const Home=async()=> {
  // const [search , setSearch] = useState("");
  // const [allProjects , setAllProjects] = useState([]);
  // const fetchProjects = async ()=>{
  //   const res = await fetch('http://localhost:3000/api/getAllProjects')
  //   const data = await res.json()
  //   setAllProjects([...data]);
  // console.log(data); 
  // }
  // useEffect(()=>{
  //   fetchProjects()
  // },[])
  await connect(config.mongo.uri, {useNewUrlParser : true, useUnifiedTopology : true});
  const allProjects = await projectController.getProjects();
  
  
  return (
    <main>
      <div>Projects </div>
      <div>
        
        {allProjects && <AllProjects allProjects={allProjects} />}
      </div>
    </main>
  )
}
export default Home ; 
