import express from 'express';
const app=express();
import connectDB from "./db/dbConnect.js";

import dotenv from 'dotenv';
dotenv.config({path: './.env'});

connectDB()

.then(()=>{

    app.on("error",()=>{
        console.log("ERROR: ",error);
        throw error;
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })

})

.catch((err)=>{
    console.log("MONGO db connection failed!!",err);
})