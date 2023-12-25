const User = require("../models/user");

const getallusers=async(req,res)=>{
   const users=await User.find({});
   res.json(
    {
        success:true,
        users,
    }
   )
}
const newuser=async(req,res)=>{
    const {name,email,password}=req.body;
    const users=await User.create({
        name,
        email,
        password,
    });
    res.cookie("tempi","lol").json({
        success:true,
        message:"Registered Successfully",
    });
};
const userbyid=async(req,res)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    res.json({
        success:true,
        user,

    })
};
module.exports={
 getallusers,
 newuser,
 userbyid,
};