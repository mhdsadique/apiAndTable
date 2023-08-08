const express=require("express")
const { connection } = require("./db/db")
const { router } = require("./router/router")
const app=express()

var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use("/test",router)
app.get("/",(req,res)=>{
    res.send("home page")
})
app.listen(8000,async()=>{
    try{
        console.log("Connected to DB");
   connection
    }catch(e){
        console.log(e);
    }
console.log("port running successful");
})