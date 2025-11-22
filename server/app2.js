import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
let port=process.env.PORT
// app.post 
app.use(express.json())

app.post("/",(req, res)=>{
    try {
        let data= req.body;
    res.status(200).json({msg:data})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})
app.listen(port,()=>{
    console.log(`server start htpp://localhost:${port}`);
})