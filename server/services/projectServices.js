// const Project = require('../schema/project');
import Project from '../schema/project';
import {connect} from 'mongoose';
import config from '../../config/env';
const projectService = {};
projectService.getProjects = async() => {
    await connect(config.mongo.uri, {useNewUrlParser : true, useUnifiedTopology : true}).then(()=>console.log('here')).catch(err => console.log(err))
    try{
        const projects = await Project.find();
        console.log(projects);
        return projects;
    }catch(error){
        return error;
    }
} 

projectService.addProject = async(newProject) => {
    const existingProject = await Project.findOne({title : newProject.title});
    if(existingProject){
        console.log(existingProject);
        return ({status : 'Failed' , error : "Project Already Exists"});
    }
    try{
        const result = Project.create(newProject);
        return ({status : 'Success'});
    }catch(error){
        console.log(error);
        return ({status : 'Failed', error : 'Failed to Create Project'});
    }
}

export default projectService ;