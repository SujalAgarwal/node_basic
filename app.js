const express=require("express");
const app=express();
const dotenv=require("dotenv");
const userroute=require("./routes/users.js");
//using middleware to get the json data
dotenv.config({
    path:"./data/config.env",
})
app.use(express.json());
app.use("/users",userroute);


app.get("/",(req,res)=>{
    res.send("Nice Working");
})


module.exports=app;