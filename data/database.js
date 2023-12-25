

const mongoose=require("mongoose");

const database=mongoose.connect(process.env.MONGO_URI,{
    dbname:"backendapi",
}).then(()=>{
    console.log("databse connected successfully");
}).catch(()=>{
    console.log("errror in connecting database.");
})
module.exports=database;