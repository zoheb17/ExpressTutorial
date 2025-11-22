import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT
app.use(express.json())

app.post("/user",(req,res)=>{
    try {
        let data=req.query
        res.status(200).json({msg:data})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})
app.listen(port,()=>{
    console.log(`server start https://localhost:${port}`);
})