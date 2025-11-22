import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT
app.use(express.json())

app.post("/student/:person",(req,res)=>{
try {
    let mystudent=req.params.person;
res.status(200).json({msg:`i am ${mystudent}`})
} catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
    
}
})
// app.post("/students/:person", (req, res) => {
//     try {
//         let UserDetails = req.params.person
    
//         res.status(200).json({ UserDetails })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: error })
//     }
// })
app.listen(port,()=>{
    console.log(`server start http://localhost:${port}`);
})



