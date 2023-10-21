import { NextResponse } from "next/server";
export const  GET=(
    req,
    res
  )=> {
    console.log("hello");
    return NextResponse.json({aabc :"karan"})
    // res.status(200).json({ message: 'Hello from Next.js!' }) 
  }