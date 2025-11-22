import express from "express";
import dotenv from "dotenv";
dotenv.config();  
const app=express()
const port=process.env.PORT 


app.get("/home",(req,res)=>{
    try {
        res.status(200).json({msg:"hello "})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello zoheb"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})
app.listen(port,()=>{
    console.log(`server star http://localhost:${port}`);
})