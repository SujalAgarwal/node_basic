const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const {getallusers,newuser, userbyid} = require("../controllers/user.js");

router.get("/all",getallusers);
  router.post("/new",newuser);
router.get("/:id",userbyid);
module.exports=router;