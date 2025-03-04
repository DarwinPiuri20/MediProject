const express = require("express");
const {register,login}=require("../controllers/authControllers");
const {check}=require("express-validator");

const router=express.Router();


/// register route

router.post("/register",[
    check("name","Name is required").not().isEmpty(),
    check("email","Email is required").isEmail(),
    check("password","Password must be at least 6 characters").isLength({min:6}),

],register);

/// login route
router.post("/login",login);


module.exports=router;