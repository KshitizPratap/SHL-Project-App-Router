import projectController from "../../../../server/controllers/projectController";
import {connect} from 'mongoose'
import config from '../../../../config/env';
const handler = async(req, res)=> {
 
  await connect(config.mongo.uri, {useNewUrlParser : true, useUnifiedTopology : true})
  if (req.method === 'GET') {
    try{
    const projects = await projectController.getProjects();
    res.status(200).send(projects);}
    catch(error){
      console.log("error",error);+
      res.status(404).send(error);
    }
  } else if(req.method === 'POST') {
    res.send('post');
  }
}
export default handler