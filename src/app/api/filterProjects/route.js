
import projectController from "../../../../server/controllers/projectController";
import {connect} from 'mongoose'
import config from '../../../../config/env';

import { NextResponse } from "next/server";


// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }
 
export const GET=(
  req,
  res
)=> {
  console.log("hello");
  return NextResponse.json({aabc :"karan"})
  // res.status(200).json({ message: 'Hello from Next.js!' })
}

// const GET = async(req , res)=> {
//   console.log(req)
//   await connect(config.mongo.uri, {useNewUrlParser : true, useUnifiedTopology : true})
//   if (req.method === 'GET') {
//     try{
//     const projects = await projectController.getProjects();
//     console.log(projects)
//     // res.status(200).send(projects);
//     return NextResponse.json({message :"GT"},{status:200})  }
//     catch(error){
//       console.log("error",error);
//       res.status(404).send(error);
//     }
//   } else if(req.method === 'POST') {
//     res.send('post');
//   }
// }
// export default handler