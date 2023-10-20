import projectController from "../../../../server/controllers/projectController";
import {connect} from 'mongoose'
import config from '../../../../config/env';
import { NextResponse } from "next/server";
import Project from "../../../../server/schema/project";

export async function POST(req){
    
    await connect(config.mongo.uri, {useNewUrlParser : true, useUnifiedTopology : true})
    const body = await req.json();
    
    var response = [];
    for(var obj in body.data){
        var project = null;
        project = await Project.find({
            title : body.data[obj]
        });
        
        if(project !== null && project.length > 0){
            response.push(project);
            continue;
        }
        
        project = await Project.find({
            frontend : body.data[obj]
        });

        if(project !== null && project.length > 0){
            response.push(project);
            continue;
        }
        project = await Project.find({
            backend : body.data[obj]
        });
        if(project !== null && project.length > 0){
            response.push(project);
            continue;
        }
        project = await Project.find({
            database : body.data[obj]
        });
        if(project !== null && project.length > 0){
            response.push(project);
            continue;
        }
        project = await Project.find({
            infrastructure : body.data[obj]
        });
        if(project !== null && project.length > 0){
            response.push(project);
            continue;
        }
    }
    
    return NextResponse.json(response);
}