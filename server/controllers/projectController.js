// const projectService = require('../services/projectService');
import projectService from '../services/projectServices'

const projectController = {};

projectController.getProjects = async(req,res) => {
    try{
        const projects = await projectService.getProjects();
        return projects
        // res.send({status : "Success" , data : projects});
    }catch(error){
        // res.send({status : "Failed" , error : error});
        return error;
    }
}

export default projectController;