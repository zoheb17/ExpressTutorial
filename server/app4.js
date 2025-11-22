import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT
app.use(express.json())

// method :put
// existing update 
// route: /update

app.put("/update",(req,res)=>{
    try {
      let updatedata=req.body
      console.log(updatedata);
      res.status(200).json({msg:"updating"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})


// method :delete
// deleting data 
// route:/delete



app.delete("/",()=>{
    try {
        let userdata=req.body;
        res.status(200).json({msg:"user account delete"})
    } catch (error) {
        res .status(500).json({msg:error})
        
    }
})



app.listen(port,()=>{
console.log(`server server start http://localhost:${port}`);
})